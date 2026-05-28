"""
Usage:
  python manage.py seed_data_with_image
  python manage.py seed_data_with_image --flush
  python manage.py seed_data_with_image --images-path ../loading_images --images-per-listing 3

Creates a compact demo database with exactly three users by default, one example
from each main app area, and random images copied from a local image folder.
"""

import mimetypes
import random
import uuid
from datetime import date, time, timedelta
from pathlib import Path

from django.conf import settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.management.base import BaseCommand
from django.utils import timezone


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".jfif"}


GOVERNORATES = [
    ("damascus", "دمشق", "Damascus", 1, 33.5138, 36.2765),
    ("aleppo", "حلب", "Aleppo", 2, 36.2021, 37.1343),
    ("homs", "حمص", "Homs", 3, 34.7324, 36.7137),
]


LOCATIONS = [
    ("damascus", "دمشق", "المزة", "Damascus", "Mezzeh", 33.5031, 36.2584),
    ("aleppo", "حلب", "العزيزية", "Aleppo", "Al-Aziziyah", 36.2087, 37.1505),
    ("homs", "حمص", "الوعر", "Homs", "Al-Waer", 34.7508, 36.6818),
]


def rand_phone():
    return "09" + "".join(str(random.randint(0, 9)) for _ in range(8))


def future(days):
    return timezone.now() + timedelta(days=days)


def past(days):
    return timezone.now() - timedelta(days=days)


class Command(BaseCommand):
    help = "Seed a three-user demo dataset with examples and local images."

    def add_arguments(self, parser):
        parser.add_argument("--flush", action="store_true", help="Delete existing demo data first.")
        parser.add_argument("--users", type=int, default=3, help="Number of demo users to create.")
        parser.add_argument("--images-path", type=str, default="../loading_images")
        parser.add_argument("--images-per-listing", type=int, default=3)

    def handle(self, *args, **options):
        if options["flush"]:
            self.stdout.write("Flushing existing data...")
            self._flush()

        self.images = self._load_images(options["images_path"])
        self.images_per_listing = max(1, options["images_per_listing"])

        if self.images:
            self.stdout.write(self.style.SUCCESS(f"Found {len(self.images)} local image(s)."))
        else:
            self.stdout.write(self.style.WARNING("No local images found. Seed data will be created without images."))

        self.stdout.write("Creating core reference data...")
        govs, locs = self._seed_core()

        self.stdout.write(f"Creating {options['users']} demo users...")
        users = self._seed_users(max(3, options["users"]), locs)

        self.stdout.write("Creating example records across every app...")
        property_listing = self._seed_properties(users, locs)
        vehicle_listing = self._seed_vehicles(users, locs)
        classified_listing = self._seed_classifieds(users, locs)
        job_listing = self._seed_jobs(users, locs)
        service_listing = self._seed_services(users, locs)
        deal = self._seed_deals(users, locs)
        event = self._seed_events(users, locs)
        article = self._seed_news(users)
        self._seed_messaging(users, property_listing)
        self._seed_reviews(users)
        self._seed_notifications(users, property_listing)
        self._seed_ads(users)
        self._seed_moderation(users, property_listing)
        self._seed_favourites(users, property_listing, vehicle_listing, classified_listing, job_listing, service_listing, deal, event)
        self._seed_saved_searches(users)
        self._seed_subscriptions(users)
        self._seed_misc_core(users, govs)

        self.stdout.write(self.style.SUCCESS("Seed with images complete."))
        self.stdout.write("Demo users:")
        for user in users[:3]:
            self.stdout.write(f"  {user.email} / password123")

    def _flush(self):
        from apps.accounts.models import Favourite, PaymentIntent, RealEstateAgency, SavedSearch, Subscription, User
        from apps.advertisements.models import AdBanner, AdClick, AdImpression, AdPlacement
        from apps.classifieds.models import ClassifiedCategory, ClassifiedImage, ClassifiedListing, Store
        from apps.core.models import ContactMessage, FCMDevice, Governorate, Location, Notification, PrayerTime, SiteSettings
        from apps.deals.models import Deal, DealCategory, DealRedemption, Merchant
        from apps.events.models import Event, EventCategory, EventImage
        from apps.jobs.models import CompanyProfile, FreelancerProfile, JobApplication, JobCategory, JobListing, JobseekerProfile
        from apps.messaging.models import Conversation, Message
        from apps.moderation.models import BlockedIP, BlockedUser, Report, SpamPattern, UserBlock
        from apps.news.models import NewsArticle, NewsCategory, NewsTag, NewsletterSubscriber
        from apps.properties.models import EducationInstitution, NearbyAmenity, PropertyImage, PropertyListing
        from apps.reviews.models import Review
        from apps.services.models import ServiceCategory, ServiceListing, ServiceProvider
        from apps.vehicles.models import CarPart, Garage, RentalCompany, Showroom, VehicleImage, VehicleListing, VehicleMake, VehicleModel

        models_to_clear = [
            AdClick, AdImpression, AdBanner, AdPlacement,
            Review, Message, Conversation,
            EventImage, Event, EventCategory,
            NewsArticle, NewsTag, NewsCategory, NewsletterSubscriber,
            DealRedemption, Deal, Merchant, DealCategory,
            ServiceListing, ServiceProvider, ServiceCategory,
            JobApplication, JobListing, CompanyProfile, FreelancerProfile, JobseekerProfile, JobCategory,
            ClassifiedImage, ClassifiedListing, Store, ClassifiedCategory,
            VehicleImage, CarPart, Garage, RentalCompany, VehicleListing, VehicleModel, VehicleMake, Showroom,
            PropertyImage, NearbyAmenity, EducationInstitution, PropertyListing,
            Report, SpamPattern, BlockedIP, BlockedUser, UserBlock,
            Notification, FCMDevice, ContactMessage, PrayerTime, SiteSettings,
            Favourite, SavedSearch, Subscription, PaymentIntent, RealEstateAgency,
        ]
        for model in models_to_clear:
            model.objects.all().delete()

        User.objects.filter(is_superuser=False).delete()
        Location.objects.all().delete()
        Governorate.objects.all().delete()


    def _model_field_names(self, model):
        return {field.name for field in model._meta.get_fields() if hasattr(field, "attname")}


    def _clean_kwargs(self, model, kwargs):
        field_names = self._model_field_names(model)
        return {key: value for key, value in kwargs.items() if key in field_names}


    def _safe_create(self, model, **kwargs):
        return model.objects.create(**self._clean_kwargs(model, kwargs))


    def _safe_get_or_create(self, model, lookup=None, defaults=None):
        lookup = lookup or {}
        defaults = defaults or {}

        clean_lookup = self._clean_kwargs(model, lookup)
        clean_defaults = self._clean_kwargs(model, defaults)

        return model.objects.get_or_create(**clean_lookup, defaults=clean_defaults)


    def _load_images(self, images_path):
        base_path = Path(images_path)
        if not base_path.is_absolute():
            base_path = Path(settings.BASE_DIR) / base_path
        base_path = base_path.resolve()

        if not base_path.exists():
            return []

        return [
            path
            for path in base_path.rglob("*")
            if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        ]

    def _random_image(self):
        if not self.images:
            return None
        return random.choice(self.images)

    def _save_image(self, obj, field_name):
        if not self.images:
            return False

        candidates = random.sample(self.images, k=len(self.images))
        for image_path in candidates:
            try:
                content_type, _ = mimetypes.guess_type(str(image_path))
                content_type = content_type or "image/jpeg"
                unique_name = f"{uuid.uuid4().hex}{image_path.suffix.lower()}"

                with image_path.open("rb") as handle:
                    uploaded = SimpleUploadedFile(unique_name, handle.read(), content_type=content_type)

                getattr(obj, field_name).save(unique_name, uploaded, save=True)
                return True
            except Exception as exc:
                self.stdout.write(self.style.WARNING(f"Skipped image {image_path.name}: {exc}"))

        return False

    def _set_trans(self, obj, ar_values, en_values):
        obj.set_current_language("ar")
        for key, value in ar_values.items():
            setattr(obj, key, value)
        obj.set_current_language("en")
        for key, value in en_values.items():
            setattr(obj, key, value)
        obj.save()
        return obj

    def _seed_core(self):
        from apps.core.models import Governorate, Location

        govs = {}
        for slug, ar_name, en_name, order, lat, lng in GOVERNORATES:
            gov, _ = Governorate.objects.get_or_create(
                slug=slug,
                defaults={"order": order, "is_active": True},
            )
            gov.order = order
            gov.is_active = True
            self._set_trans(gov, {"name": ar_name}, {"name": en_name})
            govs[slug] = gov

        locs = []
        for gov_slug, city_ar, name_ar, city_en, name_en, lat, lng in LOCATIONS:
            loc, _ = Location.objects.get_or_create(
                governorate=govs[gov_slug],
                latitude=lat,
                longitude=lng,
                defaults={"is_popular": True},
            )
            loc.is_popular = True
            self._set_trans(loc, {"city": city_ar, "name": name_ar}, {"city": city_en, "name": name_en})
            locs.append(loc)

        return govs, locs

    def _seed_users(self, count, locs):
        from apps.accounts.models import RealEstateAgency, RealEstateAgent, User

        profiles = [
            ("seller@example.com", "merchant", "Samer", "Haddad", "سامر", "حداد"),
            ("buyer@example.com", "individual", "Lina", "Nasser", "لينا", "ناصر"),
            ("company@example.com", "company", "Nour", "Karim", "نور", "كريم"),
        ]

        while len(profiles) < count:
            index = len(profiles) + 1
            profiles.append((f"user{index}@example.com", "individual", f"User{index}", "Demo", f"مستخدم {index}", "تجريبي"))

        users = []
        for email, user_type, first_name, last_name, ar_first, ar_last in profiles[:count]:
            user, _ = User.objects.get_or_create(
                email=email,
                defaults={
                    "user_type": user_type,
                    "first_name": first_name,
                    "last_name": last_name,
                    "phone": rand_phone(),
                    "whatsapp": rand_phone(),
                    "bio": f"Demo {user_type} account for seed data.",
                    "is_verified": True,
                    "language": "en",
                },
            )
            user.user_type = user_type
            user.first_name = first_name
            user.last_name = last_name
            user.phone = user.phone or rand_phone()
            user.whatsapp = user.whatsapp or rand_phone()
            user.bio = f"Demo {user_type} account for seed data."
            user.is_verified = True
            user.set_password("password123")
            user.save()
            self._save_image(user, "avatar")
            users.append(user)

        agency, _ = RealEstateAgency.objects.get_or_create(
            email="agency@example.com",
            defaults={
                "name": "Barmha Demo Realty",
                "description": "A seeded real estate agency with local images.",
                "license_number": "AG-DEMO-001",
                "phone": rand_phone(),
                "address": "Mezzeh, Damascus",
                "verified": True,
            },
        )
        agency.name = "Barmha Demo Realty"
        agency.description = "A seeded real estate agency with local images."
        agency.verified = True
        agency.save()
        self._save_image(agency, "logo")

        RealEstateAgent.objects.get_or_create(
            user=users[0],
            defaults={
                "agency": agency,
                "license_number": "REA-DEMO-001",
                "languages": ["ar", "en"],
                "specializations": ["residential", "commercial"],
                "verified": True,
            },
        )

        return users

    def _seed_properties(self, users, locs):
        from apps.accounts.models import RealEstateAgency
        from apps.properties.models import EducationInstitution, NearbyAmenity, PropertyImage, PropertyListing

        agency = RealEstateAgency.objects.first()
        listing = PropertyListing.objects.create(
            title="Furnished apartment for rent in Mezzeh",
            description="A bright two-bedroom apartment near services, schools, and transport.",
            purpose="for_rent",
            category="residential",
            property_type="apartment",
            location=locs[0],
            address_detail="Mezzeh main street",
            latitude=locs[0].latitude,
            longitude=locs[0].longitude,
            price=2500000,
            currency="SYP",
            price_period="month",
            negotiable=True,
            bedrooms="2",
            bathrooms=2,
            area_sqm=120,
            floor_number=3,
            total_floors=8,
            furnishing="fully_furnished",
            contract_type="annual",
            deposit="1_month",
            amenities=["parking", "elevator", "security"],
            posted_by=users[0],
            agency=agency,
            is_active=True,
            is_featured=True,
            expires_at=future(90),
        )
        self._create_related_images(PropertyImage, "listing", listing)

        NearbyAmenity.objects.create(listing=listing, amenity_type="school", name="Demo International School", distance_m=450)

        school = EducationInstitution.objects.create(
            name="Barmha Demo School",
            inst_type="school",
            description="Seeded education institution example.",
            location=locs[0],
            phone=rand_phone(),
            email="school@example.com",
            is_featured=True,
        )
        self._save_image(school, "logo")

        return listing

    def _seed_vehicles(self, users, locs):
        from apps.vehicles.models import CarPart, Garage, RentalCompany, Showroom, VehicleImage, VehicleListing, VehicleMake, VehicleModel

        make, _ = VehicleMake.objects.get_or_create(name="Toyota", defaults={"popular": True})
        make.popular = True
        make.save()
        self._save_image(make, "logo")

        model, _ = VehicleModel.objects.get_or_create(make=make, name="Corolla")

        showroom = Showroom.objects.create(
            name="Damascus Demo Motors",
            location=locs[0],
            phone=rand_phone(),
            whatsapp=rand_phone(),
            description="Seeded showroom example.",
            is_verified=True,
            is_featured=True,
        )
        self._save_image(showroom, "logo")
        self._save_image(showroom, "cover")

        listing = VehicleListing.objects.create(
            listing_type="sale",
            category="car",
            make=make,
            model=model,
            year=2022,
            title="Toyota Corolla 2022 for sale",
            description="Clean seeded vehicle listing with local demo images.",
            price=120000000,
            currency="SYP",
            negotiable=True,
            mileage=35000,
            fuel_type="petrol",
            gear_type="automatic",
            engine_size="1.8",
            cylinders=4,
            wheel_drive="front",
            body_style="sedan",
            color_exterior="white",
            doors=4,
            seats=5,
            condition="used",
            features=["bluetooth", "camera", "parking_sensors"],
            location=locs[0],
            posted_by=users[0],
            showroom=showroom,
            is_active=True,
            is_featured=True,
            expires_at=future(60),
        )
        self._create_related_images(VehicleImage, "listing", listing)

        rental = RentalCompany.objects.create(name="Demo Rental Cars", location=locs[1], phone=rand_phone(), website="https://example.com", is_featured=True)
        self._save_image(rental, "logo")
        Garage.objects.create(name="Demo Auto Garage", location=locs[1], phone=rand_phone(), specializations=["toyota", "body_work"], is_featured=True)

        part = CarPart.objects.create(
            title="Toyota Corolla headlight",
            description="Seeded car part example.",
            price=450000,
            currency="SYP",
            condition="used",
            compatible_make=make,
            posted_by=users[0],
            is_active=True,
        )
        self._save_image(part, "image")

        return listing

    def _seed_classifieds(self, users, locs):
        from apps.classifieds.models import ClassifiedCategory, ClassifiedImage, ClassifiedListing, Store

        category = self._category(ClassifiedCategory, "electronics", "إلكترونيات", "Electronics", icon="devices")
        store, _ = Store.objects.get_or_create(
            user=users[0],
            defaults={"location": locs[0], "phone": rand_phone(), "whatsapp": rand_phone(), "is_verified": True, "is_active": True},
        )
        store.location = locs[0]
        store.phone = store.phone or rand_phone()
        store.whatsapp = store.whatsapp or rand_phone()
        store.is_verified = True
        store.is_active = True
        self._set_trans(store, {"name": "متجر دمشق التجريبي", "description": "متجر تجريبي للبيانات."}, {"name": "Damascus Demo Store", "description": "Seeded store example."})
        self._save_image(store, "logo")
        self._save_image(store, "cover")

        listing = ClassifiedListing(
            listing_type="sell",
            condition="used_good",
            price=850000,
            currency="SYP",
            negotiable=True,
            seller=users[0],
            store=store,
            category=category,
            location=locs[0],
            is_active=True,
            is_featured=True,
            expires_at=future(45),
        )
        self._set_trans(
            listing,
            {"title": "هاتف ذكي بحالة جيدة", "description": "إعلان مبوب تجريبي مع صورة محلية."},
            {"title": "Smartphone in good condition", "description": "Seeded classified listing with a local image."},
        )
        self._create_related_images(ClassifiedImage, "listing", listing)
        return listing

    def _seed_jobs(self, users, locs):
        from apps.jobs.models import CompanyProfile, FreelancerProfile, JobApplication, JobCategory, JobListing, JobseekerProfile

        category = self._category(JobCategory, "technology", "تقنية المعلومات", "Technology")

        company, _ = CompanyProfile.objects.get_or_create(
            user=users[2],
            defaults={"industry": "Technology", "size": "11-50", "website": "https://example.com", "location": locs[0], "is_verified": True},
        )
        company.industry = "Technology"
        company.size = "11-50"
        company.website = "https://example.com"
        company.location = locs[0]
        company.is_verified = True
        self._set_trans(company, {"name": "شركة تقنية تجريبية", "description": "شركة تجريبية للتوظيف."}, {"name": "Demo Tech Company", "description": "Seeded company profile."})
        self._save_image(company, "logo")

        listing = JobListing(
            job_type="full_time",
            experience="mid",
            gender="any",
            min_salary=2500000,
            max_salary=4500000,
            currency="SYP",
            company=company,
            posted_by=users[2],
            category=category,
            location=locs[0],
            is_remote=True,
            is_active=True,
            is_featured=True,
            quick_apply=True,
            expires_at=future(45),
        )
        self._set_trans(
            listing,
            {"title": "مطور واجهات أمامية", "description": "فرصة عمل تجريبية.", "requirements": "خبرة في Angular وواجهات الويب."},
            {"title": "Frontend Developer", "description": "Seeded job listing example.", "requirements": "Experience with Angular and web UI."},
        )

        JobApplication.objects.create(job=listing, applicant=users[1], cover_letter="I am interested in this seeded role.", status="pending")

        freelancer, _ = FreelancerProfile.objects.get_or_create(
            user=users[1],
            defaults={"skills": ["Angular", "Django", "Design"], "hourly_rate": 75000, "is_available": True},
        )
        freelancer.skills = ["Angular", "Django", "Design"]
        freelancer.hourly_rate = 75000
        freelancer.is_available = True
        self._set_trans(freelancer, {"title": "مستقل واجهات", "bio": "ملف مستقل تجريبي."}, {"title": "Frontend Freelancer", "bio": "Seeded freelancer profile."})

        seeker, _ = JobseekerProfile.objects.get_or_create(
            user=users[0],
            defaults={"skills": ["Sales", "Support"], "experience_years": 4, "education": "Bachelor's", "desired_salary": 2000000, "is_open": True},
        )
        seeker.skills = ["Sales", "Support"]
        seeker.experience_years = 4
        seeker.education = "Bachelor's"
        seeker.desired_salary = 2000000
        seeker.is_open = True
        self._set_trans(seeker, {"headline": "باحث عن فرصة"}, {"headline": "Open to opportunities"})

        return listing

    def _seed_services(self, users, locs):
        from apps.services.models import ServiceCategory, ServiceListing, ServiceProvider

        category = self._category(ServiceCategory, "maintenance", "صيانة", "Maintenance", icon="handyman")
        provider, _ = ServiceProvider.objects.get_or_create(
            user=users[1],
            defaults={"location": locs[0], "phone": rand_phone(), "whatsapp": rand_phone(), "is_verified": True, "is_featured": True},
        )
        provider.location = locs[0]
        provider.phone = provider.phone or rand_phone()
        provider.whatsapp = provider.whatsapp or rand_phone()
        provider.is_verified = True
        provider.is_featured = True
        provider.save()
        self._set_trans(provider, {"bio": "مزود خدمة تجريبي."}, {"bio": "Seeded service provider."})
        provider.categories.set([category])

        listing = ServiceListing(provider=provider, category=category, price=150000, currency="SYP", price_type="fixed", location=locs[0], is_active=True, is_featured=True)
        self._set_trans(
            listing,
            {"title": "صيانة منزلية", "description": "خدمة صيانة تجريبية."},
            {"title": "Home maintenance", "description": "Seeded service listing example."},
        )
        return listing

    def _seed_deals(self, users, locs):
        from apps.deals.models import Deal, DealCategory, DealRedemption, Merchant

        category = self._category(DealCategory, "restaurants", "مطاعم", "Restaurants", icon="restaurant")
        merchant, _ = Merchant.objects.get_or_create(
            user=users[0],
            defaults={"category": category, "location": locs[0], "phone": rand_phone(), "whatsapp": rand_phone(), "website": "https://example.com", "is_verified": True, "is_featured": True},
        )
        merchant.category = category
        merchant.location = locs[0]
        merchant.phone = merchant.phone or rand_phone()
        merchant.whatsapp = merchant.whatsapp or rand_phone()
        merchant.website = "https://example.com"
        merchant.is_verified = True
        merchant.is_featured = True
        self._set_trans(merchant, {"name": "مطعم تجريبي", "description": "تاجر عروض تجريبي."}, {"name": "Demo Restaurant", "description": "Seeded merchant example."})
        self._save_image(merchant, "logo")

        deal = Deal(
            merchant=merchant,
            category=category,
            deal_type="discount",
            discount_value=25,
            original_price=100000,
            deal_price=75000,
            currency="SYP",
            start_date=past(2),
            end_date=future(30),
            is_active=True,
            is_deal_of_day=True,
            is_featured=True,
        )
        self._set_trans(
            deal,
            {"title": "خصم 25% على الغداء", "description": "عرض تجريبي.", "terms": "يسري لفترة محدودة."},
            {"title": "25% off lunch", "description": "Seeded deal example.", "terms": "Valid for a limited time."},
        )
        self._save_image(deal, "image")
        DealRedemption.objects.create(deal=deal, user=users[1], code=uuid.uuid4().hex[:10].upper())
        return deal

    def _seed_events(self, users, locs):
        from apps.events.models import Event, EventCategory, EventImage

        category = self._category(EventCategory, "business", "أعمال", "Business")
        event = Event(
            organizer=users[2],
            category=category,
            location=locs[0],
            venue_name="Damascus Cultural Center",
            latitude=locs[0].latitude,
            longitude=locs[0].longitude,
            start_date=future(10),
            end_date=future(10) + timedelta(hours=3),
            price_type="paid",
            price=50000,
            currency="SYP",
            capacity=120,
            is_active=True,
            is_featured=True,
        )
        self._set_trans(
            event,
            {"title": "فعالية أعمال تجريبية", "description": "فعالية تجريبية مع صور."},
            {"title": "Demo business event", "description": "Seeded event with images."},
        )
        self._save_image(event, "cover_image")
        self._create_related_images(EventImage, "event", event)
        return event

    def _seed_news(self, users):
        from apps.news.models import NewsArticle, NewsCategory, NewsTag, NewsletterSubscriber

        category = self._category(NewsCategory, "business", "الأعمال", "Business")
        tag = self._category(NewsTag, "market-update", "تحديث السوق", "Market Update")

        article = NewsArticle(category=category, author=users[2], source="Barmha News", is_published=True, is_featured=True, is_breaking=False, published_at=timezone.now())
        self._set_trans(
            article,
            {
                "title": "تحديثات السوق المحلية",
                "slug": "local-market-update-ar",
                "summary": "خبر تجريبي قصير.",
                "content": "محتوى تجريبي للخبر مع صورة محلية.",
                "meta_title": "تحديثات السوق المحلية",
                "meta_description": "خبر تجريبي.",
            },
            {
                "title": "Local market update",
                "slug": "local-market-update",
                "summary": "Short seeded news summary.",
                "content": "Seeded news content with a local cover image.",
                "meta_title": "Local market update",
                "meta_description": "Seeded news article.",
            },
        )
        article.tags.set([tag])
        self._save_image(article, "cover_image")

        NewsletterSubscriber.objects.get_or_create(email="reader@example.com", defaults={"is_active": True})
        return article

    def _seed_messaging(self, users, listing):
        from apps.messaging.models import Conversation, Message

        conv = Conversation.objects.create(listing_type="property", listing_id=listing.pk, last_message="Is this apartment still available?", last_message_at=timezone.now())
        conv.participants.set([users[0], users[1]])
        Message.objects.create(conversation=conv, sender=users[1], body="Is this apartment still available?", is_read=True)
        reply = Message.objects.create(conversation=conv, sender=users[0], body="Yes, it is available. You can visit tomorrow.", is_read=False)
        self._save_image(reply, "image")
        return conv

    def _seed_reviews(self, users):
        from apps.reviews.models import Review

        Review.objects.update_or_create(
            reviewer=users[1],
            subject_type="merchant",
            subject_id=users[0].pk,
            rating=5,
            title="Great seller",
            body="Seeded review example for the demo dataset.",
            is_verified=True,
            is_approved=True,
        )

    def _seed_notifications(self, users, listing):
        from apps.core.models import Notification

        notif = Notification(recipient=users[1], notif_type="new_message", action_url=f"/properties/{listing.pk}", is_read=False)
        self._set_trans(
            notif,
            {"title": "رسالة جديدة", "body": "لديك رسالة جديدة بخصوص إعلان."},
            {"title": "New message", "body": "You have a new message about a listing."},
        )

    def _seed_ads(self, users):
        from apps.advertisements.models import AdBanner, AdPlacement

        placement, _ = AdPlacement.objects.get_or_create(
            key="home_top",
            defaults={"description": "Home top demo banner", "width": 728, "height": 90, "max_ads": 3},
        )
        banner = AdBanner.objects.create(
            advertiser=users[2],
            placement=placement,
            title="Demo Home Banner",
            url="https://example.com",
            status="active",
            start_date=date.today(),
            end_date=date.today() + timedelta(days=30),
            budget=500000,
            currency="SYP",
        )
        self._save_image(banner, "image")

    # def _seed_moderation(self, users, listing):
    #     from apps.moderation.models import BlockedIP, BlockedUser, Report, SpamPattern, UserBlock

    #     Report.objects.create(reporter=users[1], content_type="property", object_id=listing.pk, reason="fake", description="Seeded report example.", status="pending")
    #     SpamPattern.objects.get_or_create(pattern="casino", defaults={"pattern_type": "keyword", "action": "flag", "is_active": True})
    #     self._safe_get_or_create(
    #         BlockedIP,
    #         lookup={"ip_address": "203.0.113.10"},
    #         defaults={"reason": "Seeded blocked IP", "is_active": True},
    #     )
    #     BlockedUser.objects.get_or_create(user=users[2], defaults={"reason": "Seeded blocked user example", "is_active": False})
    #     UserBlock.objects.get_or_create(blocker=users[1], blocked=users[2])

    def _seed_moderation(self, users, listing):
        from apps.moderation.models import BlockedIP, BlockedUser, Report, SpamPattern, UserBlock

        self._safe_create(
            Report,
            reporter=users[1],
            content_type="property",
            object_id=listing.pk,
            reason="fake",
            description="Seeded report example.",
            status="pending",
        )

        self._safe_get_or_create(
            SpamPattern,
            lookup={"pattern": "casino"},
            defaults={
                "pattern_type": "keyword",
                "action": "flag",
                "is_active": True,
            },
        )

        self._safe_get_or_create(
            BlockedIP,
            lookup={"ip_address": "203.0.113.10"},
            defaults={
                "reason": "Seeded blocked IP",
                "is_active": True,
            },
        )

        self._safe_get_or_create(
            BlockedUser,
            lookup={"user": users[2]},
            defaults={
                "reason": "Seeded blocked user example",
                "is_active": False,
            },
        )

        self._safe_get_or_create(
            UserBlock,
            lookup={
                "blocker": users[1],
                "blocked": users[2],
            },
        )


    def _seed_favourites(self, users, property_listing, vehicle_listing, classified_listing, job_listing, service_listing, deal, event):
        from apps.accounts.models import Favourite

        favourites = [
            ("property", property_listing.pk),
            ("vehicle", vehicle_listing.pk),
            ("classified", classified_listing.pk),
            ("job", job_listing.pk),
            ("service", service_listing.pk),
            ("deal", deal.pk),
            ("event", event.pk),
        ]
        for content_type, object_id in favourites:
            Favourite.objects.get_or_create(user=users[1], content_type=content_type, object_id=object_id)

    def _seed_saved_searches(self, users):
        from apps.accounts.models import SavedSearch

        SavedSearch.objects.create(
            user=users[1],
            section="properties",
            filters={"governorate": "damascus", "price_min": 1000000, "price_max": 5000000},
            name="Damascus rentals",
            notify=True,
        )

    def _seed_subscriptions(self, users):
        from apps.accounts.models import PaymentIntent, Subscription

        Subscription.objects.create(
            user=users[0],
            plan="premium",
            section="properties",
            start_date=date.today(),
            end_date=date.today() + timedelta(days=30),
            is_active=True,
            auto_renew=True,
            price_paid=250000,
        )
        PaymentIntent.objects.create(
            user=users[0],
            amount=250000,
            currency="SYP",
            stripe_pi_id=f"pi_seed_{uuid.uuid4().hex[:12]}",
            status="succeeded",
        )

    def _seed_misc_core(self, users, govs):
        from apps.core.models import ContactMessage, FCMDevice, PrayerTime, SiteSettings

        SiteSettings.objects.update_or_create(key="site_name", defaults={"value": "Barmha Demo", "description": "Seeded site name"})
        ContactMessage.objects.create(name="Demo Visitor", email="visitor@example.com", phone=rand_phone(), subject="Seeded contact", message="This is a seeded contact message.")
        FCMDevice.objects.get_or_create(user=users[1], token=f"seed-token-{uuid.uuid4().hex}", defaults={"platform": "web", "is_active": True})
        PrayerTime.objects.get_or_create(
            governorate=govs["damascus"],
            date=date.today(),
            defaults={
                "fajr": time(4, 10),
                "sunrise": time(5, 40),
                "dhuhr": time(12, 30),
                "asr": time(16, 5),
                "maghrib": time(19, 35),
                "isha": time(21, 5),
            },
        )

    def _category(self, model, slug, ar_name, en_name, **defaults):
        obj, _ = model.objects.get_or_create(slug=slug, defaults=defaults)
        for key, value in defaults.items():
            setattr(obj, key, value)
        self._set_trans(obj, {"name": ar_name}, {"name": en_name})
        return obj

    def _create_related_images(self, image_model, relation_name, parent):
        for index in range(self.images_per_listing):
            image_obj = image_model(**{relation_name: parent, "order": index})
            if hasattr(image_obj, "is_primary"):
                image_obj.is_primary = index == 0
            self._save_image(image_obj, "image")
