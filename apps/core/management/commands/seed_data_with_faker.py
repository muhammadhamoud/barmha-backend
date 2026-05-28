"""
Django management command: seed_data_with_faker

Usage examples:
  python manage.py seed_data_with_faker
  python manage.py seed_data_with_faker --flush
  python manage.py seed_data_with_faker --count 50
  python manage.py seed_data_with_faker --count 100 --users 25 --images-per-listing 4
  python manage.py seed_data_with_faker --properties 200 --vehicles 80 --jobs 40
  python manage.py seed_data_with_faker --images-path ../loading_images
  python manage.py seed_data_with_faker --seed 12345

Requires:
  pip install Faker

What it creates:
  - Demo users
  - Governorates and locations
  - Properties with images and nearby amenities
  - Vehicles with images, showroom, garage, rental company, car part
  - Classifieds with images and store
  - Jobs with company, applications, freelancer and jobseeker profiles
  - Services with providers
  - Deals, events, news, ads, reviews, messaging, favourites, saved searches,
    subscriptions, moderation, notifications, and core utility records

The command is defensive: it filters kwargs against model fields so it can tolerate
small schema differences across your apps.
"""

import mimetypes
import random
import uuid
from datetime import date, time, timedelta
from pathlib import Path

from django.conf import settings
from django.core.files.uploadedfile import SimpleUploadedFile
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction
from django.utils import timezone

try:
    from faker import Faker
except ImportError as exc:
    raise CommandError("Faker is required. Install it with: pip install Faker") from exc


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".jfif"}

DEFAULT_GOVERNORATES = [
    ("damascus", "Damascus", 1, 33.5138, 36.2765),
    ("aleppo", "Aleppo", 2, 36.2021, 37.1343),
    ("homs", "Homs", 3, 34.7324, 36.7137),
    ("latakia", "Latakia", 4, 35.5317, 35.7901),
    ("tartus", "Tartus", 5, 34.8959, 35.8867),
    ("hama", "Hama", 6, 35.1318, 36.7578),
]

DEFAULT_LOCATIONS = [
    ("damascus", "Damascus", "Mezzeh", 33.5031, 36.2584),
    ("damascus", "Damascus", "Malki", 33.5208, 36.2764),
    ("damascus", "Damascus", "Abu Rummaneh", 33.5170, 36.2862),
    ("aleppo", "Aleppo", "Al-Aziziyah", 36.2087, 37.1505),
    ("aleppo", "Aleppo", "New Aleppo", 36.2302, 37.0943),
    ("homs", "Homs", "Al-Waer", 34.7508, 36.6818),
    ("homs", "Homs", "Inshaat", 34.7245, 36.7051),
    ("latakia", "Latakia", "Corniche", 35.5286, 35.7751),
    ("tartus", "Tartus", "City Center", 34.8951, 35.8842),
    ("hama", "Hama", "Al-Hader", 35.1304, 36.7556),
]

PROPERTY_TYPES = ["apartment", "villa", "office", "shop"]
PROPERTY_CATEGORIES = ["residential", "commercial"]
PROPERTY_PURPOSES = ["for_rent", "for_sale"]
FURNISHING = ["fully_furnished", "semi_furnished", "unfurnished"]
PROPERTY_AMENITIES = ["parking", "elevator", "security", "balcony", "garden", "internet"]
NEARBY_TYPES = ["school", "hospital", "mall", "pharmacy", "park", "restaurant", "cafe", "gym"]

VEHICLE_MAKES = [
    ("Toyota", ["Corolla", "Camry", "RAV4"]),
    ("Hyundai", ["Elantra", "Tucson", "Accent"]),
    ("Kia", ["Sportage", "Cerato", "Rio"]),
    ("Nissan", ["Sunny", "Altima", "Patrol"]),
    ("Mercedes", ["C200", "E300", "GLC"]),
    ("Suzuki", ["Swift", "Vitara", "Ciaz"]),
]
VEHICLE_FEATURES = ["bluetooth", "camera", "parking_sensors", "sunroof", "navigation", "airbags", "cruise_control"]

CLASSIFIED_CONDITIONS = ["new", "used_good", "used_fair"]
CLASSIFIED_TYPES = ["sell", "rent", "wanted"]
JOB_TYPES = ["full_time", "part_time", "contract"]
JOB_EXPERIENCE = ["entry", "mid", "senior"]
SERVICE_PRICE_TYPES = ["fixed", "hourly", "starting_from"]


class Command(BaseCommand):
    help = "Seed demo data using Faker and optional local images."

    def add_arguments(self, parser):
        parser.add_argument("--flush", action="store_true", help="Delete existing non-superuser demo data first.")
        parser.add_argument("--seed", type=int, default=None, help="Random seed for repeatable fake data.")
        parser.add_argument("--users", type=int, default=12, help="Number of demo users to create.")
        parser.add_argument("--count", type=int, default=20, help="Default number of records per main section.")
        parser.add_argument("--properties", type=int, default=None, help="Number of property listings.")
        parser.add_argument("--vehicles", type=int, default=None, help="Number of vehicle listings.")
        parser.add_argument("--classifieds", type=int, default=None, help="Number of classified listings.")
        parser.add_argument("--jobs", type=int, default=None, help="Number of job listings.")
        parser.add_argument("--services", type=int, default=None, help="Number of service listings.")
        parser.add_argument("--deals", type=int, default=None, help="Number of deals.")
        parser.add_argument("--events", type=int, default=None, help="Number of events.")
        parser.add_argument("--news", type=int, default=None, help="Number of news articles.")
        parser.add_argument("--images-path", type=str, default="../loading_images", help="Folder containing local images.")
        parser.add_argument("--images-per-listing", type=int, default=3, help="Images attached to image-gallery listings.")

    @transaction.atomic
    def handle(self, *args, **options):
        seed = options.get("seed")
        if seed is not None:
            random.seed(seed)
            Faker.seed(seed)

        self.fake = Faker("en_US")
        self.fake_ar = Faker("ar_SA")
        self.images = self._load_images(options["images_path"])
        self.images_per_listing = max(1, int(options["images_per_listing"]))
        default_count = max(1, int(options["count"]))
        self.counts = {
            "properties": max(0, options["properties"] if options["properties"] is not None else default_count),
            "vehicles": max(0, options["vehicles"] if options["vehicles"] is not None else default_count),
            "classifieds": max(0, options["classifieds"] if options["classifieds"] is not None else default_count),
            "jobs": max(0, options["jobs"] if options["jobs"] is not None else default_count),
            "services": max(0, options["services"] if options["services"] is not None else default_count),
            "deals": max(0, options["deals"] if options["deals"] is not None else default_count),
            "events": max(0, options["events"] if options["events"] is not None else default_count),
            "news": max(0, options["news"] if options["news"] is not None else default_count),
        }

        if options["flush"]:
            self.stdout.write("Flushing existing demo data...")
            self._flush()

        if self.images:
            self.stdout.write(self.style.SUCCESS(f"Found {len(self.images)} local image(s)."))
        else:
            self.stdout.write(self.style.WARNING("No local images found. Seed data will be created without images."))

        self.stdout.write("Creating core reference data...")
        govs, locs = self._seed_core()

        self.stdout.write(f"Creating {max(3, int(options['users']))} demo users...")
        users = self._seed_users(max(3, int(options["users"])), locs)

        self.stdout.write("Creating Faker-powered demo records...")
        property_listings = self._seed_properties(users, locs, self.counts["properties"])
        vehicle_listings = self._seed_vehicles(users, locs, self.counts["vehicles"])
        classified_listings = self._seed_classifieds(users, locs, self.counts["classifieds"])
        job_listings = self._seed_jobs(users, locs, self.counts["jobs"])
        service_listings = self._seed_services(users, locs, self.counts["services"])
        deals = self._seed_deals(users, locs, self.counts["deals"])
        events = self._seed_events(users, locs, self.counts["events"])
        articles = self._seed_news(users, self.counts["news"])

        primary_property = property_listings[0] if property_listings else None
        primary_vehicle = vehicle_listings[0] if vehicle_listings else None
        primary_classified = classified_listings[0] if classified_listings else None
        primary_job = job_listings[0] if job_listings else None
        primary_service = service_listings[0] if service_listings else None
        primary_deal = deals[0] if deals else None
        primary_event = events[0] if events else None

        if primary_property:
            self._seed_messaging(users, primary_property)
            self._seed_notifications(users, primary_property)
            self._seed_moderation(users, primary_property)

        self._seed_reviews(users)
        self._seed_ads(users)
        self._seed_favourites(
            users,
            primary_property,
            primary_vehicle,
            primary_classified,
            primary_job,
            primary_service,
            primary_deal,
            primary_event,
        )
        self._seed_saved_searches(users)
        self._seed_subscriptions(users)
        self._seed_misc_core(users, govs)

        self.stdout.write(self.style.SUCCESS("Faker seed complete."))
        self.stdout.write("Summary:")
        for key, value in self.counts.items():
            self.stdout.write(f"  {key}: {value}")
        self.stdout.write("Demo users:")
        for user in users[:5]:
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
        return model.objects.get_or_create(
            **self._clean_kwargs(model, lookup),
            defaults=self._clean_kwargs(model, defaults),
        )

    def _load_images(self, images_path):
        base_path = Path(images_path)
        if not base_path.is_absolute():
            base_path = Path(settings.BASE_DIR) / base_path
        base_path = base_path.resolve()
        if not base_path.exists():
            return []
        return [
            path for path in base_path.rglob("*")
            if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
        ]

    def _save_image(self, obj, field_name):
        if not self.images or not hasattr(obj, field_name):
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
        if hasattr(obj, "set_current_language"):
            obj.set_current_language("ar")
            for key, value in ar_values.items():
                setattr(obj, key, value)
            obj.set_current_language("en")
            for key, value in en_values.items():
                setattr(obj, key, value)
            obj.save()
            return obj

        for key, value in en_values.items():
            setattr(obj, key, value)
        obj.save()
        return obj

    def _fake_title(self, section):
        words = {
            "property": ["Modern", "Spacious", "Luxury", "Renovated", "Family", "Bright"],
            "vehicle": ["Clean", "Reliable", "Low mileage", "Excellent", "Family", "Sport"],
            "classified": ["Used", "New", "Premium", "Affordable", "Clean", "Compact"],
            "job": ["Senior", "Junior", "Remote", "Full-time", "Part-time", "Experienced"],
            "service": ["Professional", "Fast", "Reliable", "Affordable", "Expert", "Same-day"],
            "deal": ["Special", "Limited", "Weekend", "Family", "Exclusive", "Flash"],
            "event": ["Business", "Technology", "Career", "Food", "Community", "Real Estate"],
            "news": ["Market", "Business", "Technology", "Property", "Local", "Community"],
        }
        return f"{random.choice(words[section])} {self.fake.bs().title()}"

    def _future(self, days_min=10, days_max=120):
        return timezone.now() + timedelta(days=random.randint(days_min, days_max))

    def _past(self, days_min=1, days_max=20):
        return timezone.now() - timedelta(days=random.randint(days_min, days_max))

    def _phone(self):
        return "09" + "".join(str(random.randint(0, 9)) for _ in range(8))

    def _choice_user(self, users):
        return random.choice(users)

    def _category(self, model, slug, ar_name=None, en_name=None, **defaults):
        obj, _ = model.objects.get_or_create(slug=slug, defaults=self._clean_kwargs(model, defaults))
        for key, value in self._clean_kwargs(model, defaults).items():
            setattr(obj, key, value)
        self._set_trans(
            obj,
            {"name": ar_name or self.fake_ar.word()},
            {"name": en_name or slug.replace("-", " ").title()},
        )
        return obj

    def _create_related_images(self, image_model, relation_name, parent):
        created = []
        for index in range(self.images_per_listing):
            image_obj = image_model(**{relation_name: parent, "order": index})
            if hasattr(image_obj, "is_primary"):
                image_obj.is_primary = index == 0
            saved = self._save_image(image_obj, "image")
            if not saved:
                image_obj.save()
            created.append(image_obj)
        return created

    def _seed_core(self):
        from apps.core.models import Governorate, Location

        govs = {}
        for slug, en_name, order, lat, lng in DEFAULT_GOVERNORATES:
            gov, _ = Governorate.objects.get_or_create(slug=slug, defaults={"order": order, "is_active": True})
            gov.order = order
            gov.is_active = True
            self._set_trans(gov, {"name": self.fake_ar.city()}, {"name": en_name})
            govs[slug] = gov

        locs = []
        for gov_slug, city_en, name_en, lat, lng in DEFAULT_LOCATIONS:
            loc, _ = Location.objects.get_or_create(
                governorate=govs[gov_slug],
                latitude=lat,
                longitude=lng,
                defaults={"is_popular": True},
            )
            loc.is_popular = True
            self._set_trans(loc, {"city": self.fake_ar.city(), "name": self.fake_ar.street_name()}, {"city": city_en, "name": name_en})
            locs.append(loc)
        return govs, locs

    def _seed_users(self, count, locs):
        from apps.accounts.models import RealEstateAgency, RealEstateAgent, User
        try:
            users = []
            fixed_profiles = [
                ("seller@example.com", "merchant", "Samer", "Haddad"),
                ("buyer@example.com", "individual", "Lina", "Nasser"),
                ("company@example.com", "company", "Nour", "Karim"),
            ]

            for index in range(count):
                if index < len(fixed_profiles):
                    email, user_type, first_name, last_name = fixed_profiles[index]
                else:
                    first_name = self.fake.first_name()
                    last_name = self.fake.last_name()
                    email = f"demo{index + 1}.{uuid.uuid4().hex[:6]}@example.com"
                    user_type = random.choice(["individual", "merchant", "company"])

                user, _ = User.objects.get_or_create(
                    email=email,
                    defaults={
                        "user_type": user_type,
                        "first_name": first_name,
                        "last_name": last_name,
                        "phone": self._phone(),
                        "whatsapp": self._phone(),
                        "bio": self.fake.paragraph(nb_sentences=2),
                        "is_verified": True,
                        "language": "en",
                    },
                )
                user.user_type = user_type
                user.first_name = first_name
                user.last_name = last_name
                user.phone = user.phone or self._phone()
                user.whatsapp = user.whatsapp or self._phone()
                user.bio = self.fake.paragraph(nb_sentences=2)
                user.is_verified = True
                user.set_password("password123")
                user.save()
                self._save_image(user, "avatar")
                users.append(user)

            agency, _ = RealEstateAgency.objects.get_or_create(
                email="agency@example.com",
                defaults={
                    "name": "Faker Demo Realty",
                    "description": self.fake.paragraph(nb_sentences=2),
                    "license_number": f"AG-{uuid.uuid4().hex[:8].upper()}",
                    "phone": self._phone(),
                    "address": self.fake.address(),
                    "verified": True,
                },
            )
            agency.name = "Faker Demo Realty"
            agency.description = self.fake.paragraph(nb_sentences=2)
            agency.verified = True
            agency.save()
            self._save_image(agency, "logo")

            RealEstateAgent.objects.get_or_create(
                user=users[0],
                defaults={
                    "agency": agency,
                    "license_number": f"REA-{uuid.uuid4().hex[:8].upper()}",
                    "languages": ["ar", "en"],
                    "specializations": ["residential", "commercial"],
                    "verified": True,
                },
            )
            return users
        except:
            pass

    def _seed_properties(self, users, locs, count):
        from apps.accounts.models import RealEstateAgency
        from apps.properties.models import EducationInstitution, NearbyAmenity, PropertyImage, PropertyListing

        agency = RealEstateAgency.objects.first()
        listings = []
        for index in range(count):
            loc = locs[index % len(locs)]
            listing = self._safe_create(
                PropertyListing,
                title=f"{self._fake_title('property')} #{index + 1}",
                description=self.fake.paragraph(nb_sentences=4),
                purpose=random.choice(PROPERTY_PURPOSES),
                category=random.choice(PROPERTY_CATEGORIES),
                property_type=random.choice(PROPERTY_TYPES),
                location=loc,
                address_detail=self.fake.street_address(),
                latitude=float(loc.latitude) + random.uniform(-0.015, 0.015),
                longitude=float(loc.longitude) + random.uniform(-0.015, 0.015),
                price=random.randint(500000, 9000000),
                currency=random.choice(["SYP", "SYP", "SYP", "USD"]),
                price_period=random.choice(["month", "year", None]),
                negotiable=random.choice([True, False]),
                hide_price=random.choice([False, False, False, True]),
                bedrooms=random.choice(["1", "2", "3", "4"]),
                bathrooms=random.randint(1, 4),
                area_sqm=random.randint(45, 350),
                floor_number=random.randint(0, 12),
                total_floors=random.randint(3, 16),
                furnishing=random.choice(FURNISHING),
                contract_type=random.choice(["annual", "monthly", "six_months", "daily"]),
                deposit=random.choice(["1_month", "2_months", None]),
                no_commission=index % 6 == 0,
                amenities=random.sample(PROPERTY_AMENITIES, k=random.randint(2, min(5, len(PROPERTY_AMENITIES)))),
                posted_by=users[index % len(users)],
                agency=agency if index % 2 == 0 else None,
                is_active=True,
                is_featured=index % 5 == 0,
                is_promoted=index % 7 == 0,
                expires_at=self._future(30, 120),
            )
            self._create_related_images(PropertyImage, "listing", listing)

            for _ in range(random.randint(1, 3)):
                NearbyAmenity.objects.create(
                    listing=listing,
                    amenity_type=random.choice(NEARBY_TYPES),
                    name=f"{self.fake.company()} {random.choice(['Center', 'School', 'Mall', 'Clinic', 'Park'])}",
                    distance_m=random.randint(100, 3000),
                )
            listings.append(listing)

        if count:
            school = EducationInstitution.objects.create(
                name=f"{self.fake.company()} School",
                inst_type="school",
                description=self.fake.paragraph(nb_sentences=2),
                location=locs[0],
                phone=self._phone(),
                email=self.fake.email(),
                is_featured=True,
            )
            self._save_image(school, "logo")
        return listings

    def _seed_vehicles(self, users, locs, count):
        from apps.vehicles.models import CarPart, Garage, RentalCompany, Showroom, VehicleImage, VehicleListing, VehicleMake, VehicleModel

        make_model_pairs = []
        for make_name, models in VEHICLE_MAKES:
            make, _ = VehicleMake.objects.get_or_create(name=make_name, defaults={"popular": True})
            make.popular = True
            make.save()
            self._save_image(make, "logo")
            for model_name in models:
                model, _ = VehicleModel.objects.get_or_create(make=make, name=model_name)
                make_model_pairs.append((make, model))

        showroom = Showroom.objects.create(
            name=f"{self.fake.company()} Motors",
            location=locs[0],
            phone=self._phone(),
            whatsapp=self._phone(),
            description=self.fake.paragraph(nb_sentences=2),
            is_verified=True,
            is_featured=True,
        )
        self._save_image(showroom, "logo")
        self._save_image(showroom, "cover")

        listings = []
        for index in range(count):
            loc = locs[index % len(locs)]
            make, model = random.choice(make_model_pairs)
            year = random.randint(2014, 2026)
            listing = self._safe_create(
                VehicleListing,
                listing_type=random.choice(["sale", "rent"]),
                category="car",
                make=make,
                model=model,
                year=year,
                title=f"{make.name} {model.name} {year} #{index + 1}",
                description=self.fake.paragraph(nb_sentences=4),
                price=random.randint(25000000, 350000000),
                currency=random.choice(["SYP", "SYP", "USD"]),
                negotiable=random.choice([True, False]),
                hide_price=random.choice([False, False, True]),
                mileage=random.randint(1000, 220000),
                fuel_type=random.choice(["petrol", "diesel", "hybrid", "electric"]),
                gear_type=random.choice(["automatic", "manual"]),
                engine_size=random.choice(["1.4", "1.6", "1.8", "2.0", "2.5"]),
                cylinders=random.choice([4, 6, 8]),
                wheel_drive=random.choice(["front", "rear", "awd"]),
                body_style=random.choice(["sedan", "suv", "hatchback", "pickup"]),
                color_exterior=random.choice(["white", "black", "silver", "blue", "red", "gray"]),
                color_interior=random.choice(["black", "beige", "brown", "gray"]),
                doors=random.choice([2, 4, 5]),
                seats=random.choice([4, 5, 7]),
                condition=random.choice(["new", "used"]),
                features=random.sample(VEHICLE_FEATURES, k=random.randint(2, min(5, len(VEHICLE_FEATURES)))),
                location=loc,
                posted_by=users[index % len(users)],
                showroom=showroom if index % 2 == 0 else None,
                is_active=True,
                is_featured=index % 5 == 0,
                is_promoted=index % 7 == 0,
                expires_at=self._future(30, 90),
            )
            self._create_related_images(VehicleImage, "listing", listing)
            listings.append(listing)

        if count:
            rental = RentalCompany.objects.create(
                name=f"{self.fake.company()} Rental Cars",
                location=locs[1 % len(locs)],
                phone=self._phone(),
                website="https://example.com",
                is_featured=True,
            )
            self._save_image(rental, "logo")
            Garage.objects.create(
                name=f"{self.fake.company()} Garage",
                location=locs[1 % len(locs)],
                phone=self._phone(),
                specializations=["toyota", "body_work", "electric"],
                is_featured=True,
            )
            part = CarPart.objects.create(
                title=f"{random.choice(make_model_pairs)[0].name} spare part",
                description=self.fake.paragraph(nb_sentences=2),
                price=random.randint(100000, 2000000),
                currency="SYP",
                condition=random.choice(["new", "used"]),
                compatible_make=make_model_pairs[0][0],
                posted_by=users[0],
                is_active=True,
            )
            self._save_image(part, "image")
        return listings

    def _seed_classifieds(self, users, locs, count):
        from apps.classifieds.models import ClassifiedCategory, ClassifiedImage, ClassifiedListing, Store

        categories = [
            self._category(ClassifiedCategory, "electronics", en_name="Electronics", icon="devices"),
            self._category(ClassifiedCategory, "home-garden", en_name="Home and Garden", icon="chair"),
            self._category(ClassifiedCategory, "fashion", en_name="Fashion", icon="checkroom"),
        ]

        store, _ = Store.objects.get_or_create(
            user=users[0],
            defaults={"location": locs[0], "phone": self._phone(), "whatsapp": self._phone(), "is_verified": True, "is_active": True},
        )
        store.location = locs[0]
        store.phone = store.phone or self._phone()
        store.whatsapp = store.whatsapp or self._phone()
        store.is_verified = True
        store.is_active = True
        self._set_trans(store, {"name": self.fake_ar.company(), "description": self.fake_ar.paragraph(nb_sentences=2)}, {"name": f"{self.fake.company()} Store", "description": self.fake.paragraph(nb_sentences=2)})
        self._save_image(store, "logo")
        self._save_image(store, "cover")

        listings = []
        for index in range(count):
            listing = ClassifiedListing(
                listing_type=random.choice(CLASSIFIED_TYPES),
                condition=random.choice(CLASSIFIED_CONDITIONS),
                price=random.randint(25000, 7000000),
                currency=random.choice(["SYP", "SYP", "USD"]),
                negotiable=random.choice([True, False]),
                seller=users[index % len(users)],
                store=store if index % 2 == 0 else None,
                category=random.choice(categories),
                location=locs[index % len(locs)],
                is_active=True,
                is_featured=index % 5 == 0,
                is_promoted=index % 7 == 0,
                expires_at=self._future(20, 70),
            )
            self._set_trans(
                listing,
                {"title": self.fake_ar.sentence(nb_words=4), "description": self.fake_ar.paragraph(nb_sentences=3)},
                {"title": f"{self._fake_title('classified')} #{index + 1}", "description": self.fake.paragraph(nb_sentences=3)},
            )
            self._create_related_images(ClassifiedImage, "listing", listing)
            listings.append(listing)
        return listings

    def _seed_jobs(self, users, locs, count):
        from apps.jobs.models import CompanyProfile, FreelancerProfile, JobApplication, JobCategory, JobListing, JobseekerProfile

        categories = [
            self._category(JobCategory, "technology", en_name="Technology"),
            self._category(JobCategory, "sales", en_name="Sales"),
            self._category(JobCategory, "accounting", en_name="Accounting"),
        ]
        company, _ = CompanyProfile.objects.get_or_create(
            user=users[2],
            defaults={"industry": "Technology", "size": "11-50", "website": "https://example.com", "location": locs[0], "is_verified": True},
        )
        company.industry = random.choice(["Technology", "Retail", "Hospitality", "Real Estate"])
        company.size = random.choice(["1-10", "11-50", "51-200", "201-500"])
        company.website = "https://example.com"
        company.location = locs[0]
        company.is_verified = True
        self._set_trans(company, {"name": self.fake_ar.company(), "description": self.fake_ar.paragraph(nb_sentences=2)}, {"name": self.fake.company(), "description": self.fake.paragraph(nb_sentences=2)})
        self._save_image(company, "logo")

        listings = []
        for index in range(count):
            min_salary = random.randint(800000, 3500000)
            max_salary = min_salary + random.randint(500000, 4000000)
            listing = JobListing(
                job_type=random.choice(JOB_TYPES),
                experience=random.choice(JOB_EXPERIENCE),
                gender="any",
                min_salary=min_salary,
                max_salary=max_salary,
                currency="SYP",
                company=company,
                posted_by=users[2],
                category=random.choice(categories),
                location=locs[index % len(locs)],
                is_remote=index % 3 == 0,
                is_active=True,
                is_featured=index % 5 == 0,
                quick_apply=index % 2 == 0,
                expires_at=self._future(20, 60),
            )
            self._set_trans(
                listing,
                {"title": self.fake_ar.job(), "description": self.fake_ar.paragraph(nb_sentences=3), "requirements": self.fake_ar.paragraph(nb_sentences=2)},
                {"title": f"{self.fake.job()} #{index + 1}", "description": self.fake.paragraph(nb_sentences=3), "requirements": self.fake.paragraph(nb_sentences=2)},
            )
            if index < min(5, count):
                JobApplication.objects.create(job=listing, applicant=users[1], cover_letter=self.fake.paragraph(nb_sentences=2), status="pending")
            listings.append(listing)

        freelancer, _ = FreelancerProfile.objects.get_or_create(user=users[1], defaults={"skills": ["Angular", "Django", "Design"], "hourly_rate": 75000, "is_available": True})
        freelancer.skills = random.sample(["Angular", "Django", "React", "Sales", "Design", "Support"], k=3)
        freelancer.hourly_rate = random.randint(25000, 150000)
        freelancer.is_available = True
        self._set_trans(freelancer, {"title": self.fake_ar.job(), "bio": self.fake_ar.paragraph(nb_sentences=2)}, {"title": self.fake.job(), "bio": self.fake.paragraph(nb_sentences=2)})

        seeker, _ = JobseekerProfile.objects.get_or_create(user=users[0], defaults={"skills": ["Sales", "Support"], "experience_years": 4, "education": "Bachelor's", "desired_salary": 2000000, "is_open": True})
        seeker.skills = random.sample(["Sales", "Support", "Marketing", "Accounting", "Operations"], k=3)
        seeker.experience_years = random.randint(1, 12)
        seeker.education = random.choice(["Bachelor's", "Diploma", "Master's"])
        seeker.desired_salary = random.randint(1000000, 5000000)
        seeker.is_open = True
        self._set_trans(seeker, {"headline": self.fake_ar.sentence(nb_words=4)}, {"headline": self.fake.sentence(nb_words=4)})
        return listings

    def _seed_services(self, users, locs, count):
        from apps.services.models import ServiceCategory, ServiceListing, ServiceProvider

        categories = [
            self._category(ServiceCategory, "maintenance", en_name="Maintenance", icon="handyman"),
            self._category(ServiceCategory, "cleaning", en_name="Cleaning", icon="cleaning_services"),
            self._category(ServiceCategory, "design", en_name="Design", icon="design_services"),
        ]
        provider, _ = ServiceProvider.objects.get_or_create(user=users[1], defaults={"location": locs[0], "phone": self._phone(), "whatsapp": self._phone(), "is_verified": True, "is_featured": True})
        provider.location = locs[0]
        provider.phone = provider.phone or self._phone()
        provider.whatsapp = provider.whatsapp or self._phone()
        provider.is_verified = True
        provider.is_featured = True
        provider.save()
        self._set_trans(provider, {"bio": self.fake_ar.paragraph(nb_sentences=2)}, {"bio": self.fake.paragraph(nb_sentences=2)})
        provider.categories.set(categories)

        listings = []
        for index in range(count):
            listing = ServiceListing(
                provider=provider,
                category=random.choice(categories),
                price=random.randint(25000, 750000),
                currency="SYP",
                price_type=random.choice(SERVICE_PRICE_TYPES),
                location=locs[index % len(locs)],
                is_active=True,
                is_featured=index % 5 == 0,
            )
            self._set_trans(
                listing,
                {"title": self.fake_ar.sentence(nb_words=4), "description": self.fake_ar.paragraph(nb_sentences=3)},
                {"title": f"{self._fake_title('service')} Service #{index + 1}", "description": self.fake.paragraph(nb_sentences=3)},
            )
            listings.append(listing)
        return listings

    def _seed_deals(self, users, locs, count):
        from apps.deals.models import Deal, DealCategory, DealRedemption, Merchant

        categories = [
            self._category(DealCategory, "restaurants", en_name="Restaurants", icon="restaurant"),
            self._category(DealCategory, "fitness", en_name="Fitness", icon="fitness_center"),
            self._category(DealCategory, "hotels", en_name="Hotels", icon="hotel"),
        ]
        merchant, _ = Merchant.objects.get_or_create(user=users[0], defaults={"category": categories[0], "location": locs[0], "phone": self._phone(), "whatsapp": self._phone(), "website": "https://example.com", "is_verified": True, "is_featured": True})
        merchant.category = categories[0]
        merchant.location = locs[0]
        merchant.phone = merchant.phone or self._phone()
        merchant.whatsapp = merchant.whatsapp or self._phone()
        merchant.website = "https://example.com"
        merchant.is_verified = True
        merchant.is_featured = True
        self._set_trans(merchant, {"name": self.fake_ar.company(), "description": self.fake_ar.paragraph(nb_sentences=2)}, {"name": self.fake.company(), "description": self.fake.paragraph(nb_sentences=2)})
        self._save_image(merchant, "logo")

        deals = []
        for index in range(count):
            original_price = random.randint(50000, 500000)
            discount = random.choice([10, 15, 20, 25, 30, 40, 50])
            deal_price = int(original_price * (100 - discount) / 100)
            deal = Deal(
                merchant=merchant,
                category=random.choice(categories),
                deal_type="discount",
                discount_value=discount,
                original_price=original_price,
                deal_price=deal_price,
                currency="SYP",
                start_date=self._past(1, 10),
                end_date=self._future(10, 60),
                is_active=True,
                is_deal_of_day=index == 0,
                is_featured=index % 5 == 0,
            )
            self._set_trans(
                deal,
                {"title": self.fake_ar.sentence(nb_words=4), "description": self.fake_ar.paragraph(nb_sentences=2), "terms": self.fake_ar.sentence(nb_words=8)},
                {"title": f"{discount}% off {self.fake.word()} #{index + 1}", "description": self.fake.paragraph(nb_sentences=2), "terms": "Valid for a limited time."},
            )
            self._save_image(deal, "image")
            if index < min(5, count):
                DealRedemption.objects.create(deal=deal, user=users[1], code=uuid.uuid4().hex[:10].upper())
            deals.append(deal)
        return deals

    def _seed_events(self, users, locs, count):
        from apps.events.models import Event, EventCategory, EventImage

        categories = [
            self._category(EventCategory, "business", en_name="Business"),
            self._category(EventCategory, "technology", en_name="Technology"),
            self._category(EventCategory, "community", en_name="Community"),
        ]
        events = []
        for index in range(count):
            loc = locs[index % len(locs)]
            start = self._future(5, 80)
            event = Event(
                organizer=users[2],
                category=random.choice(categories),
                location=loc,
                venue_name=f"{self.fake.company()} Hall",
                latitude=loc.latitude,
                longitude=loc.longitude,
                start_date=start,
                end_date=start + timedelta(hours=random.randint(2, 6)),
                price_type=random.choice(["free", "paid"]),
                price=random.choice([0, 25000, 50000, 100000, 150000]),
                currency="SYP",
                capacity=random.randint(40, 400),
                is_active=True,
                is_featured=index % 5 == 0,
            )
            self._set_trans(
                event,
                {"title": self.fake_ar.sentence(nb_words=4), "description": self.fake_ar.paragraph(nb_sentences=3)},
                {"title": f"{self._fake_title('event')} Event #{index + 1}", "description": self.fake.paragraph(nb_sentences=3)},
            )
            self._save_image(event, "cover_image")
            self._create_related_images(EventImage, "event", event)
            events.append(event)
        return events

    def _seed_news(self, users, count):
        from apps.news.models import NewsArticle, NewsCategory, NewsTag, NewsletterSubscriber

        category = self._category(NewsCategory, "business", en_name="Business")
        tag = self._category(NewsTag, "market-update", en_name="Market Update")
        articles = []
        for index in range(count):
            suffix = uuid.uuid4().hex[:8]
            article = NewsArticle(
                category=category,
                author=users[2],
                source="Barmha Faker News",
                is_published=True,
                is_featured=index % 5 == 0,
                is_breaking=index == 0,
                published_at=timezone.now() - timedelta(days=index),
            )
            en_title = f"{self._fake_title('news')} Update #{index + 1}"
            self._set_trans(
                article,
                {
                    "title": self.fake_ar.sentence(nb_words=5),
                    "slug": f"faker-news-ar-{suffix}",
                    "summary": self.fake_ar.sentence(nb_words=10),
                    "content": self.fake_ar.paragraph(nb_sentences=8),
                    "meta_title": self.fake_ar.sentence(nb_words=5),
                    "meta_description": self.fake_ar.sentence(nb_words=12),
                },
                {
                    "title": en_title,
                    "slug": f"faker-news-{suffix}",
                    "summary": self.fake.sentence(nb_words=12),
                    "content": self.fake.paragraph(nb_sentences=8),
                    "meta_title": en_title,
                    "meta_description": self.fake.sentence(nb_words=14),
                },
            )
            article.tags.set([tag])
            self._save_image(article, "cover_image")
            articles.append(article)
        NewsletterSubscriber.objects.get_or_create(email="reader@example.com", defaults={"is_active": True})
        return articles

    def _seed_messaging(self, users, listing):
        from apps.messaging.models import Conversation, Message

        conv = Conversation.objects.create(
            listing_type="property",
            listing_id=listing.pk,
            last_message="Is this listing still available?",
            last_message_at=timezone.now(),
        )
        conv.participants.set([users[0], users[1]])
        Message.objects.create(conversation=conv, sender=users[1], body="Is this listing still available?", is_read=True)
        reply = Message.objects.create(conversation=conv, sender=users[0], body="Yes, it is available. You can visit tomorrow.", is_read=False)
        self._save_image(reply, "image")
        return conv

    def _seed_reviews(self, users):
        from apps.reviews.models import Review

        subjects = ["merchant", "agent", "agency", "provider", "company", "store", "showroom"]
        for index in range(min(10, len(users) * 2)):
            reviewer = users[index % len(users)]
            Review.objects.update_or_create(
                reviewer=reviewer,
                subject_type=random.choice(subjects),
                subject_id=users[(index + 1) % len(users)].pk,
                defaults={
                    "rating": random.randint(3, 5),
                    "title": self.fake.sentence(nb_words=4),
                    "body": self.fake.paragraph(nb_sentences=2),
                    "is_verified": True,
                    "is_approved": True,
                },
            )

    def _seed_notifications(self, users, listing):
        from apps.core.models import Notification

        notif = Notification(recipient=users[1], notif_type="new_message", action_url=f"/properties/{listing.pk}", is_read=False)
        self._set_trans(
            notif,
            {"title": self.fake_ar.sentence(nb_words=3), "body": self.fake_ar.sentence(nb_words=8)},
            {"title": "New message", "body": "You have a new message about a listing."},
        )

    def _seed_ads(self, users):
        from apps.advertisements.models import AdBanner, AdPlacement

        placement, _ = AdPlacement.objects.get_or_create(
            key="home_top",
            defaults={"description": "Home top demo banner", "width": 728, "height": 90, "max_ads": 3},
        )
        for index in range(3):
            banner = AdBanner.objects.create(
                advertiser=users[index % len(users)],
                placement=placement,
                title=f"{self.fake.company()} Banner {index + 1}",
                url="https://example.com",
                status="active",
                start_date=date.today(),
                end_date=date.today() + timedelta(days=30 + index),
                budget=random.randint(100000, 1000000),
                currency="SYP",
            )
            self._save_image(banner, "image")

    def _seed_moderation(self, users, listing):
        from apps.moderation.models import BlockedIP, BlockedUser, Report, SpamPattern, UserBlock

        self._safe_create(
            Report,
            reporter=users[1],
            content_type="property",
            object_id=listing.pk,
            reason="fake",
            description=self.fake.paragraph(nb_sentences=2),
            status="pending",
        )
        self._safe_get_or_create(SpamPattern, lookup={"pattern": "casino"}, defaults={"pattern_type": "keyword", "action": "flag", "is_active": True})
        self._safe_get_or_create(BlockedIP, lookup={"ip_address": "203.0.113.10"}, defaults={"reason": "Seeded blocked IP", "is_active": True})
        self._safe_get_or_create(BlockedUser, lookup={"user": users[2]}, defaults={"reason": "Seeded blocked user example", "is_active": False})
        self._safe_get_or_create(UserBlock, lookup={"blocker": users[1], "blocked": users[2]})

    def _seed_favourites(self, users, property_listing, vehicle_listing, classified_listing, job_listing, service_listing, deal, event):
        from apps.accounts.models import Favourite

        pairs = [
            ("property", property_listing),
            ("vehicle", vehicle_listing),
            ("classified", classified_listing),
            ("job", job_listing),
            ("service", service_listing),
            ("deal", deal),
            ("event", event),
        ]
        for content_type, obj in pairs:
            if obj is not None:
                Favourite.objects.get_or_create(user=users[1], content_type=content_type, object_id=obj.pk)

    def _seed_saved_searches(self, users):
        from apps.accounts.models import SavedSearch

        SavedSearch.objects.create(
            user=users[1],
            section="properties",
            filters={"governorate": "damascus", "min_price": 1000000, "max_price": 5000000},
            name="Faker Damascus rentals",
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

        SiteSettings.objects.update_or_create(key="site_name", defaults={"value": "Barmha Faker Demo", "description": "Seeded site name"})
        ContactMessage.objects.create(name=self.fake.name(), email=self.fake.email(), phone=self._phone(), subject=self.fake.sentence(nb_words=4), message=self.fake.paragraph(nb_sentences=3))
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
