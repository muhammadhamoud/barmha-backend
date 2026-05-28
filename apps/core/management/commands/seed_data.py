"""
Management command: python manage.py seed_data

Populates the database with realistic Syrian-locale sample data for all models.
Images are skipped (ImageKit ProcessedImageField fields left null/blank).

Usage:
  python manage.py seed_data              # default counts
  python manage.py seed_data --flush      # clear existing data first
  python manage.py seed_data --users 20 --listings 50
"""
import random
import uuid
from datetime import timedelta

from django.core.management.base import BaseCommand
from django.utils import timezone
from faker import Faker

fake = Faker("ar_AA")
fake_en = Faker("en_US")


# ── helpers ─────────────────────────────────────────────────────────────────

def rand_phone():
    prefix = random.choice(["091", "093", "094", "099", "098", "096"])
    return prefix + "".join(str(random.randint(0, 9)) for _ in range(7))


def rand_price(lo=50_000, hi=5_000_000):
    return round(random.uniform(lo, hi), 2)


def rand_future(days=90):
    return timezone.now() + timedelta(days=random.randint(1, days))


def rand_past(days=180):
    return timezone.now() - timedelta(days=random.randint(1, days))


def set_trans(obj, ar_kwargs, en_kwargs):
    obj.set_current_language("ar")
    for k, v in ar_kwargs.items():
        setattr(obj, k, v)
    obj.set_current_language("en")
    for k, v in en_kwargs.items():
        setattr(obj, k, v)
    obj.save()


# ── Governorate / Location data ──────────────────────────────────────────────

GOVERNORATES = [
    ("damascus",    "دمشق",         "Damascus",      0,  33.5138, 36.2765),
    ("rif_dimashq", "ريف دمشق",    "Rural Damascus", 1,  33.5000, 36.4000),
    ("aleppo",      "حلب",          "Aleppo",         2,  36.2021, 37.1343),
    ("homs",        "حمص",          "Homs",           3,  34.7324, 36.7137),
    ("hama",        "حماة",         "Hama",           4,  35.1318, 36.7580),
    ("latakia",     "اللاذقية",     "Latakia",        5,  35.5317, 35.7914),
    ("tartus",      "طرطوس",        "Tartus",         6,  34.8857, 35.8868),
    ("idlib",       "إدلب",         "Idlib",          7,  35.9300, 36.6340),
    ("deir_ezzor",  "دير الزور",    "Deir ez-Zor",   8,  35.3360, 40.1410),
    ("hasakah",     "الحسكة",       "Al-Hasakah",     9,  36.5000, 40.7333),
    ("raqqa",       "الرقة",        "Raqqa",         10,  35.9500, 39.0100),
    ("daraa",       "درعا",         "Daraa",         11,  32.6244, 36.1013),
    ("suwayda",     "السويداء",     "As-Suwayda",    12,  32.7090, 36.5630),
    ("quneitra",    "القنيطرة",     "Quneitra",      13,  33.1262, 35.8242),
]

LOCATIONS_BY_GOV = {
    "damascus":    [("دمشق",   "المزة"),    ("دمشق",   "المالكي"),  ("دمشق",   "كفرسوسة"), ("دمشق",   "باب توما")],
    "rif_dimashq": [("داريا",  ""),         ("جرمانا", ""),          ("دوما",   ""),          ("قدسيا",  "")],
    "aleppo":      [("حلب",    "العزيزية"), ("حلب",    "الشيخ سعيد"),("حلب",    "حمدانية"),  ("حلب",    "السليمانية")],
    "homs":        [("حمص",    "الوعر"),    ("حمص",    "عكرمة"),     ("حمص",    "الحميدية"), ("حمص",    "الإنشاءات")],
    "hama":        [("حماة",   ""),         ("مصياف",  ""),          ("سلمية",  ""),          ("محردة",  "")],
    "latakia":     [("اللاذقية","الزراعة"), ("اللاذقية","الرمل الشمالي"),("القرداحة",""),     ("جبلة",   "")],
    "tartus":      [("طرطوس",  ""),         ("بانياس",  ""),          ("صافيتا",""),           ("الشيخ بدر","")],
    "idlib":       [("إدلب",   ""),         ("معرة النعمان",""),      ("جسر الشغور",""),       ("أريحا",  "")],
    "deir_ezzor":  [("دير الزور",""),       ("الميادين",""),          ("البوكمال",""),          ("الأشارة","")],
    "hasakah":     [("الحسكة", ""),         ("القامشلي",""),          ("رأس العين",""),         ("المالكية","")],
    "raqqa":       [("الرقة",  ""),         ("تل أبيض",""),           ("السبخة", ""),           ("الطبقة","")],
    "daraa":       [("درعا",   ""),         ("إزرع",   ""),           ("نوى",    ""),           ("الشيخ مسكين","")],
    "suwayda":     [("السويداء",""),        ("شهبا",   ""),           ("صلخد",   ""),           ("القريا", "")],
    "quneitra":    [("القنيطرة",""),        ("فيق",    ""),           ("خان أرنبة",""),          ("البعث",  "")],
}


# ── Command ──────────────────────────────────────────────────────────────────

class Command(BaseCommand):
    help = "Seed database with sample data using Faker"

    def add_arguments(self, parser):
        parser.add_argument("--flush",    action="store_true", help="Delete all existing data first")
        parser.add_argument("--users",    type=int, default=15)
        parser.add_argument("--listings", type=int, default=30)

    def handle(self, *args, **options):
        if options["flush"]:
            self.stdout.write("Flushing existing data…")
            self._flush()

        n_users    = options["users"]
        n_listings = options["listings"]

        self.stdout.write("Seeding core data…")
        govs, locs = self._seed_core()

        self.stdout.write(f"Seeding {n_users} users…")
        users = self._seed_users(n_users, locs)

        self.stdout.write("Seeding vehicles…")
        self._seed_vehicles(users, locs, n_listings)

        self.stdout.write("Seeding classifieds…")
        self._seed_classifieds(users, locs, n_listings)

        self.stdout.write("Seeding properties…")
        self._seed_properties(users, locs, n_listings)

        self.stdout.write("Seeding jobs…")
        self._seed_jobs(users, locs, n_listings // 2)

        self.stdout.write("Seeding services…")
        self._seed_services(users, locs, n_listings // 2)

        self.stdout.write("Seeding deals…")
        self._seed_deals(users, locs, n_listings // 2)

        self.stdout.write("Seeding news…")
        self._seed_news(users, n_listings // 2)

        self.stdout.write("Seeding events…")
        self._seed_events(users, locs, n_listings // 3)

        self.stdout.write("Seeding messaging…")
        self._seed_messaging(users)

        self.stdout.write("Seeding reviews…")
        self._seed_reviews(users)

        self.stdout.write("Seeding notifications…")
        self._seed_notifications(users)

        self.stdout.write("Seeding advertisements…")
        self._seed_ads(users)

        self.stdout.write("Seeding moderation…")
        self._seed_moderation(users)

        self.stdout.write("Seeding favourites & saved searches…")
        self._seed_favourites(users)
        self._seed_saved_searches(users)

        self.stdout.write("Seeding subscriptions…")
        self._seed_subscriptions(users)

        self.stdout.write(self.style.SUCCESS("✓ Seed complete."))

    # ── flush ─────────────────────────────────────────────────────────────────

    def _flush(self):
        from apps.moderation.models import Report, SpamPattern, BlockedIP, BlockedUser, UserBlock
        from apps.reviews.models import Review
        from apps.messaging.models import Conversation, Message
        from apps.advertisements.models import AdPlacement, AdBanner
        from apps.events.models import EventCategory, Event
        from apps.news.models import NewsCategory, NewsTag, NewsArticle
        from apps.deals.models import DealCategory, Merchant, Deal, DealRedemption
        from apps.services.models import ServiceCategory, ServiceProvider, ServiceListing
        from apps.jobs.models import JobCategory, CompanyProfile, JobListing, JobApplication, FreelancerProfile, JobseekerProfile
        from apps.classifieds.models import ClassifiedCategory, Store, ClassifiedListing
        from apps.vehicles.models import VehicleMake, VehicleModel, VehicleListing, Showroom
        from apps.properties.models import PropertyListing, NearbyAmenity
        from apps.accounts.models import User, RealEstateAgency, Subscription, SavedSearch, Favourite
        from apps.core.models import Governorate, Location, Notification

        models_to_clear = [
            Report, SpamPattern, BlockedIP, BlockedUser, UserBlock,
            Review, Message, Conversation,
            AdBanner, AdPlacement,
            Event, EventCategory,
            NewsArticle, NewsTag, NewsCategory,
            DealRedemption, Deal, Merchant, DealCategory,
            ServiceListing, ServiceProvider, ServiceCategory,
            JobApplication, JobListing, CompanyProfile, FreelancerProfile, JobseekerProfile, JobCategory,
            ClassifiedListing, Store, ClassifiedCategory,
            VehicleListing, VehicleModel, VehicleMake, Showroom,
            PropertyListing,
            Notification, Favourite, SavedSearch, Subscription,
        ]
        for m in models_to_clear:
            m.objects.all().delete()
        User.objects.filter(is_superuser=False).delete()
        Location.objects.all().delete()
        Governorate.objects.all().delete()

    # ── core ──────────────────────────────────────────────────────────────────

    def _seed_core(self):
        from apps.core.models import Governorate, Location

        # Build a lookup: gov_slug -> (center_lat, center_lng)
        gov_center = {slug: (lat, lng) for slug, _, __, ___, lat, lng in GOVERNORATES}

        govs = {}
        for slug, ar_name, en_name, order, lat, lng in GOVERNORATES:
            gov, _ = Governorate.objects.get_or_create(slug=slug, defaults={"order": order, "is_active": True})
            gov.set_current_language("ar")
            gov.name = ar_name
            gov.set_current_language("en")
            gov.name = en_name
            gov.save()
            govs[slug] = gov

        locs = []
        for gov_slug, areas in LOCATIONS_BY_GOV.items():
            gov = govs[gov_slug]
            center_lat, center_lng = gov_center[gov_slug]
            for city_ar, area_ar in areas:
                loc = Location(
                    governorate=gov,
                    is_popular=random.choice([True, False]),
                    latitude=round(center_lat + random.uniform(-0.12, 0.12), 7),
                    longitude=round(center_lng + random.uniform(-0.12, 0.12), 7),
                )
                loc.set_current_language("ar")
                loc.city = city_ar
                loc.area = area_ar
                loc.set_current_language("en")
                loc.city = fake_en.city()
                loc.area = fake_en.street_name()
                loc.save()
                locs.append(loc)

        return govs, locs

    # ── users ─────────────────────────────────────────────────────────────────

    def _seed_users(self, n, locs):
        from apps.accounts.models import User, RealEstateAgency, RealEstateAgent

        user_types = ["individual", "agent", "agency", "company", "freelancer", "merchant"]
        users = []

        agency = RealEstateAgency.objects.create(
            name="شركة بارمها للعقارات",
            description="وكالة عقارية رائدة في سوريا",
            phone=rand_phone(),
            email="agency@barmha.com",
            verified=True,
        )

        for i in range(n):
            utype = random.choice(user_types)
            username = f"user_{fake_en.unique.user_name()}"[:30]
            user = User.objects.create_user(
                username=username,
                email=fake_en.email(),
                password="password123",
                first_name=fake.first_name(),
                last_name=fake.last_name(),
                user_type=utype,
                phone=rand_phone(),
                bio=fake.text(max_nb_chars=200),
                is_verified=random.choice([True, False]),
                language=random.choice(["ar", "en"]),
            )
            users.append(user)

            if utype == "agent":
                RealEstateAgent.objects.create(
                    user=user,
                    agency=agency,
                    license_number=f"LIC-{random.randint(1000,9999)}",
                    languages=["ar", "en"],
                    specializations=random.sample(["residential", "commercial", "investment"], 2),
                    verified=random.choice([True, False]),
                )

        return users

    # ── vehicles ──────────────────────────────────────────────────────────────

    def _seed_vehicles(self, users, locs, n):
        from apps.vehicles.models import VehicleMake, VehicleModel, VehicleListing, Showroom

        makes_data = [
            ("Toyota",   ["Camry","Corolla","Land Cruiser","Yaris","Hilux"]),
            ("Kia",      ["Sportage","Cerato","Sorento","Picanto","Rio"]),
            ("Hyundai",  ["Tucson","Elantra","i30","Santa Fe","Accent"]),
            ("Mercedes", ["C200","E200","GLE","S500","CLA"]),
            ("BMW",      ["320i","520i","X5","X3","M3"]),
            ("Chevrolet",["Malibu","Impala","Tahoe","Spark","Cruze"]),
            ("Nissan",   ["Sunny","Sentra","Patrol","Pathfinder","X-Trail"]),
        ]

        makes = []
        for make_name, model_names in makes_data:
            make, _ = VehicleMake.objects.get_or_create(name=make_name, defaults={"popular": random.choice([True, False])})
            makes.append((make, model_names))

        showroom = Showroom.objects.create(
            name="معرض دمشق للسيارات",
            location=random.choice(locs),
            phone=rand_phone(),
            is_verified=True,
        )

        fuel_types  = ["بنزين", "ديزل", "هجين", "كهربائي", "غاز"]
        gear_types  = ["أوتوماتيك", "يدوي"]
        body_styles = ["سيدان", "SUV", "هاتشباك", "بيك اب", "فان"]
        colors      = ["أبيض", "أسود", "فضي", "رمادي", "أحمر", "أزرق"]

        for _ in range(n):
            make, model_names = random.choice(makes)
            model_name = random.choice(model_names)
            vm, _ = VehicleModel.objects.get_or_create(make=make, name=model_name)
            year = random.randint(2005, 2024)
            VehicleListing.objects.create(
                listing_type=random.choice(["sale", "rent"]),
                category=random.choice(["car", "commercial", "motorbike"]),
                make=make,
                model=vm,
                year=year,
                title=f"{make.name} {model_name} {year}",
                description=fake.text(max_nb_chars=300),
                price=rand_price(500_000, 50_000_000),
                currency="SYP",
                negotiable=random.choice([True, False]),
                mileage=random.randint(0, 300_000),
                fuel_type=random.choice(fuel_types),
                gear_type=random.choice(gear_types),
                body_style=random.choice(body_styles),
                color_exterior=random.choice(colors),
                doors=random.choice([2, 4, 5]),
                seats=random.choice([5, 7]),
                condition=random.choice(["brand_new", "used"]),
                location=random.choice(locs),
                posted_by=random.choice(users),
                showroom=showroom if random.random() < 0.2 else None,
                is_active=True,
                is_featured=random.random() < 0.15,
                is_promoted=random.random() < 0.2,
                expires_at=rand_future(60),
            )

    # ── classifieds ───────────────────────────────────────────────────────────

    def _seed_classifieds(self, users, locs, n):
        from apps.classifieds.models import ClassifiedCategory, Store, ClassifiedListing

        cats_data = [
            ("furniture",   "أثاث",         "Furniture",   "chair"),
            ("electronics", "إلكترونيات",   "Electronics", "devices"),
            ("fashion",     "أزياء",         "Fashion",     "shirt"),
            ("kids",        "أطفال",         "Kids",        "child_care"),
            ("pets",        "حيوانات أليفة","Pets",         "pets"),
            ("sports",      "رياضة",         "Sports",      "sports"),
            ("books",       "كتب",           "Books",       "book"),
            ("mobiles",     "جوالات",        "Mobiles",     "smartphone"),
            ("others",      "أخرى",          "Others",      "category"),
        ]
        cats = []
        for slug, ar_name, en_name, icon in cats_data:
            cat, _ = ClassifiedCategory.objects.get_or_create(slug=slug, defaults={"icon": icon, "is_active": True})
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        merchant_users = random.sample(users, min(3, len(users)))
        stores = []
        for u in merchant_users:
            if not hasattr(u, "store") or not Store.objects.filter(user=u).exists():
                store = Store(user=u, location=random.choice(locs), is_active=True)
                store.set_current_language("ar"); store.name = f"متجر {fake.first_name()}"; store.description = fake.text(max_nb_chars=150)
                store.set_current_language("en"); store.name = fake_en.company(); store.description = fake_en.text(max_nb_chars=150)
                store.save()
                stores.append(store)

        conditions = ["new", "used_like_new", "used_good", "used_fair"]
        ar_titles  = ["للبيع", "للتنازل", "بحالة ممتازة", "جديد بالكرتون", "مستعمل نظيف"]

        for _ in range(n):
            cat = random.choice(cats)
            listing = ClassifiedListing(
                listing_type="sell",
                condition=random.choice(conditions),
                price=rand_price(5_000, 2_000_000),
                currency="SYP",
                negotiable=random.choice([True, False]),
                seller=random.choice(users),
                store=random.choice(stores) if stores and random.random() < 0.3 else None,
                category=cat,
                location=random.choice(locs),
                is_active=True,
                is_featured=random.random() < 0.15,
            )
            ar_title = f"{random.choice(ar_titles)} {fake.word()}"
            listing.set_current_language("ar"); listing.title = ar_title; listing.description = fake.text(max_nb_chars=250)
            listing.set_current_language("en"); listing.title = fake_en.catch_phrase(); listing.description = fake_en.text(max_nb_chars=250)
            listing.save()

    # ── properties ────────────────────────────────────────────────────────────

    def _seed_properties(self, users, locs, n):
        from apps.properties.models import PropertyListing, NearbyAmenity

        purposes     = ["for_rent", "for_sale"]
        categories   = ["residential", "commercial"]
        prop_types   = ["شقة", "فيلا", "محل تجاري", "مكتب", "أرض", "مستودع"]
        furnishings  = ["fully_furnished", "semi_furnished", "unfurnished"]
        amenity_types = ["metro", "bus", "school", "hospital", "mall", "mosque"]

        for _ in range(n):
            purpose = random.choice(purposes)
            loc = random.choice(locs)
            # Jitter coordinates slightly from the location's center
            prop_lat = round(float(loc.latitude or 33.5) + random.uniform(-0.03, 0.03), 7) if loc.latitude else None
            prop_lng = round(float(loc.longitude or 36.3) + random.uniform(-0.03, 0.03), 7) if loc.longitude else None
            prop = PropertyListing.objects.create(
                title=f"{random.choice(prop_types)} للـ{'إيجار' if purpose == 'for_rent' else 'بيع'} - {fake.city()}",
                description=fake.text(max_nb_chars=500),
                purpose=purpose,
                category=random.choice(categories),
                property_type=random.choice(prop_types),
                location=loc,
                latitude=prop_lat,
                longitude=prop_lng,
                price=rand_price(100_000, 10_000_000),
                currency="SYP",
                negotiable=random.choice([True, False]),
                bedrooms=str(random.randint(1, 6)),
                bathrooms=random.randint(1, 4),
                area_sqm=round(random.uniform(50, 500), 2),
                floor_number=random.randint(0, 15),
                total_floors=random.randint(1, 20),
                furnishing=random.choice(furnishings),
                amenities=random.sample(["parking", "elevator", "gym", "pool", "security", "garden"], 3),
                posted_by=random.choice(users),
                is_active=True,
                is_featured=random.random() < 0.15,
                expires_at=rand_future(90),
            )
            # Add a couple nearby amenities
            for _ in range(random.randint(1, 3)):
                NearbyAmenity.objects.create(
                    listing=prop,
                    amenity_type=random.choice(amenity_types),
                    name=fake.company(),
                    distance_m=random.randint(50, 2000),
                )

    # ── jobs ──────────────────────────────────────────────────────────────────

    def _seed_jobs(self, users, locs, n):
        from apps.jobs.models import (
            JobCategory, CompanyProfile, JobListing, JobApplication,
            FreelancerProfile, JobseekerProfile,
        )

        job_cats_data = [
            ("technology",   "تقنية المعلومات",    "Technology"),
            ("engineering",  "هندسة",               "Engineering"),
            ("medical",      "طب وصحة",             "Medical"),
            ("education",    "تعليم",               "Education"),
            ("finance",      "مال وأعمال",          "Finance"),
            ("sales",        "مبيعات وتسويق",       "Sales & Marketing"),
            ("hospitality",  "ضيافة وسياحة",        "Hospitality"),
            ("construction", "بناء ومقاولات",        "Construction"),
        ]
        cats = []
        for i, (slug, ar_name, en_name) in enumerate(job_cats_data):
            cat, _ = JobCategory.objects.get_or_create(slug=slug, defaults={"order": i})
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        company_users = random.sample(users, min(4, len(users)))
        companies = []
        industries = ["تقنية", "بناء", "تجارة", "صحة", "تعليم", "سياحة"]
        for u in company_users:
            if not CompanyProfile.objects.filter(user=u).exists():
                cp = CompanyProfile(
                    user=u,
                    industry=random.choice(industries),
                    size=random.choice(["1-10", "11-50", "51-200", "200+"]),
                    location=random.choice(locs),
                    is_verified=random.choice([True, False]),
                )
                cp.set_current_language("ar"); cp.name = fake.company(); cp.description = fake.text(max_nb_chars=300)
                cp.set_current_language("en"); cp.name = fake_en.company(); cp.description = fake_en.text(max_nb_chars=300)
                cp.save()
                companies.append(cp)

        job_types   = ["full_time", "part_time", "contract", "internship", "freelance"]
        experiences = ["entry", "mid", "senior", "manager"]
        ar_job_titles = [
            "مطور ويب", "مهندس برمجيات", "محاسب", "مدير مبيعات",
            "مصمم جرافيك", "معلم رياضيات", "طبيب عام", "محامي",
            "مهندس مدني", "محلل بيانات",
        ]

        jobs = []
        for _ in range(n):
            job = JobListing(
                job_type=random.choice(job_types),
                experience=random.choice(experiences),
                gender=random.choice(["any", "male", "female"]),
                min_salary=rand_price(200_000, 1_000_000),
                max_salary=rand_price(1_000_000, 5_000_000),
                currency="SYP",
                company=random.choice(companies) if companies else None,
                posted_by=random.choice(users),
                category=random.choice(cats),
                location=random.choice(locs),
                is_active=True,
                is_featured=random.random() < 0.15,
                quick_apply=random.choice([True, False]),
                expires_at=rand_future(60),
            )
            ar_title = random.choice(ar_job_titles)
            job.set_current_language("ar"); job.title = ar_title; job.description = fake.text(max_nb_chars=400); job.requirements = fake.text(max_nb_chars=200)
            job.set_current_language("en"); job.title = fake_en.job(); job.description = fake_en.text(max_nb_chars=400); job.requirements = fake_en.text(max_nb_chars=200)
            job.save()
            jobs.append(job)

        # Applications — unique per (job, applicant)
        used_pairs = set()
        for job in random.sample(jobs, min(len(jobs), n // 2)):
            applicants = random.sample(users, min(3, len(users)))
            for applicant in applicants:
                if applicant.pk == job.posted_by_id:
                    continue
                pair = (job.pk, applicant.pk)
                if pair in used_pairs:
                    continue
                used_pairs.add(pair)
                JobApplication.objects.create(
                    job=job,
                    applicant=applicant,
                    cover_letter=fake.text(max_nb_chars=300),
                    status=random.choice(["pending", "viewed", "shortlisted", "rejected"]),
                )

        # Freelancer & Jobseeker profiles
        for u in random.sample(users, min(5, len(users))):
            if not FreelancerProfile.objects.filter(user=u).exists():
                fp = FreelancerProfile(
                    user=u,
                    skills=random.sample(["Python", "Django", "React", "PHP", "Photoshop", "AutoCAD"], 3),
                    hourly_rate=rand_price(5_000, 50_000),
                    is_available=random.choice([True, False]),
                )
                fp.set_current_language("ar"); fp.title = fake.job(); fp.bio = fake.text(max_nb_chars=200)
                fp.set_current_language("en"); fp.title = fake_en.job(); fp.bio = fake_en.text(max_nb_chars=200)
                fp.save()

        for u in random.sample(users, min(5, len(users))):
            if not JobseekerProfile.objects.filter(user=u).exists():
                js = JobseekerProfile(
                    user=u,
                    skills=random.sample(["Excel", "Word", "Python", "Accounting", "Sales"], 3),
                    experience_years=random.randint(0, 15),
                    education=random.choice(["بكالوريوس", "ماجستير", "دبلوم", "ثانوية"]),
                    desired_salary=rand_price(300_000, 2_000_000),
                    is_open=random.choice([True, False]),
                )
                js.set_current_language("ar"); js.headline = fake.job()
                js.set_current_language("en"); js.headline = fake_en.job()
                js.save()

    # ── services ──────────────────────────────────────────────────────────────

    def _seed_services(self, users, locs, n):
        from apps.services.models import ServiceCategory, ServiceProvider, ServiceListing

        svc_cats_data = [
            ("cleaning",          "تنظيف",         "Cleaning",          "cleaning_services"),
            ("maintenance",       "صيانة",          "Maintenance",       "handyman"),
            ("moving",            "نقل عفش",        "Moving",            "local_shipping"),
            ("beauty",            "تجميل",          "Beauty",            "spa"),
            ("tutoring",          "تدريس",          "Tutoring",          "school"),
            ("catering",          "تموين",          "Catering",          "restaurant"),
            ("photography",       "تصوير",          "Photography",       "photo_camera"),
            ("design",            "تصميم",          "Design",            "design_services"),
            ("it_support",        "دعم تقني",       "IT Support",        "computer"),
            ("legal",             "خدمات قانونية",  "Legal",             "gavel"),
            ("medical",           "طبية",           "Medical",           "local_hospital"),
            ("events_management", "تنظيم فعاليات",  "Events Management", "event"),
            ("other",             "أخرى",           "Other",             "category"),
        ]
        cats = []
        for i, (slug, ar_name, en_name, icon) in enumerate(svc_cats_data):
            cat, _ = ServiceCategory.objects.get_or_create(slug=slug, defaults={"icon": icon, "order": i})
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        providers = []
        for u in random.sample(users, min(5, len(users))):
            if not hasattr(u, "service_provider") or not ServiceProvider.objects.filter(user=u).exists():
                sp = ServiceProvider(
                    user=u,
                    location=random.choice(locs),
                    phone=rand_phone(),
                    is_verified=random.choice([True, False]),
                    is_featured=random.random() < 0.2,
                )
                sp.set_current_language("ar"); sp.bio = fake.text(max_nb_chars=200)
                sp.set_current_language("en"); sp.bio = fake_en.text(max_nb_chars=200)
                sp.save()
                sp.categories.set(random.sample(cats, min(3, len(cats))))
                providers.append(sp)

        price_types = ["fixed", "hourly", "daily", "negotiable"]
        for _ in range(n):
            if not providers:
                break
            provider = random.choice(providers)
            svc = ServiceListing(
                provider=provider,
                category=random.choice(cats),
                price=rand_price(10_000, 500_000),
                currency="SYP",
                price_type=random.choice(price_types),
                location=random.choice(locs),
                is_active=True,
                is_featured=random.random() < 0.15,
            )
            svc.set_current_language("ar"); svc.title = fake.bs(); svc.description = fake.text(max_nb_chars=300)
            svc.set_current_language("en"); svc.title = fake_en.bs(); svc.description = fake_en.text(max_nb_chars=300)
            svc.save()

    # ── deals ─────────────────────────────────────────────────────────────────

    def _seed_deals(self, users, locs, n):
        from apps.deals.models import DealCategory, Merchant, Deal, DealRedemption

        deal_cats_data = [
            ("restaurants",  "مطاعم",        "Restaurants"),
            ("shopping",     "تسوق",         "Shopping"),
            ("beauty_spa",   "تجميل وسبا",   "Beauty & Spa"),
            ("travel",       "سفر وسياحة",   "Travel"),
            ("entertainment","ترفيه",         "Entertainment"),
            ("health",       "صحة ولياقة",   "Health & Fitness"),
        ]
        cats = []
        for i, (slug, ar_name, en_name) in enumerate(deal_cats_data):
            cat, _ = DealCategory.objects.get_or_create(slug=slug, defaults={"order": i})
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        merchants = []
        for u in random.sample(users, min(4, len(users))):
            if not hasattr(u, "merchant_profile") or not Merchant.objects.filter(user=u).exists():
                m = Merchant(
                    user=u,
                    category=random.choice(cats),
                    location=random.choice(locs),
                    phone=rand_phone(),
                    is_verified=random.choice([True, False]),
                )
                m.set_current_language("ar"); m.name = fake.company(); m.description = fake.text(max_nb_chars=200)
                m.set_current_language("en"); m.name = fake_en.company(); m.description = fake_en.text(max_nb_chars=200)
                m.save()
                merchants.append(m)

        deal_types = ["buy1get1", "discount", "bundle", "free_trial", "cashback"]
        deals = []
        for _ in range(n):
            if not merchants:
                break
            merchant = random.choice(merchants)
            orig_price = rand_price(10_000, 500_000)
            deal_price = orig_price * random.uniform(0.5, 0.9)
            start = rand_past(30)
            end   = start + timedelta(days=random.randint(7, 60))
            deal = Deal(
                merchant=merchant,
                category=random.choice(cats),
                deal_type=random.choice(deal_types),
                discount_value=round(random.uniform(5, 70), 2),
                original_price=round(orig_price, 2),
                deal_price=round(deal_price, 2),
                currency="SYP",
                start_date=start,
                end_date=end,
                is_active=True,
                is_deal_of_day=random.random() < 0.1,
                is_featured=random.random() < 0.2,
            )
            deal.set_current_language("ar"); deal.title = fake.catch_phrase(); deal.description = fake.text(max_nb_chars=200); deal.terms = fake.text(max_nb_chars=100)
            deal.set_current_language("en"); deal.title = fake_en.catch_phrase(); deal.description = fake_en.text(max_nb_chars=200); deal.terms = fake_en.text(max_nb_chars=100)
            deal.save()
            deals.append(deal)

        # Redemptions — unique per (deal, user)
        used_pairs = set()
        for deal in random.sample(deals, min(len(deals), n // 3)):
            redeemers = random.sample(users, min(2, len(users)))
            for u in redeemers:
                pair = (deal.pk, u.pk)
                if pair in used_pairs:
                    continue
                used_pairs.add(pair)
                DealRedemption.objects.create(
                    deal=deal,
                    user=u,
                    code=uuid.uuid4().hex[:10].upper(),
                )

    # ── news ──────────────────────────────────────────────────────────────────

    def _seed_news(self, users, n):
        from apps.news.models import NewsCategory, NewsTag, NewsArticle

        news_cats_data = [
            ("syria",            "سوريا",               "Syria"),
            ("world",            "العالم",               "World"),
            ("middle_east",      "الشرق الأوسط",        "Middle East"),
            ("health_education", "الصحة والتعليم",      "Health & Education"),
            ("law",              "القانون",              "Law"),
            ("community",        "المجتمع",              "Community"),
            ("sports",           "الرياضة",              "Sports"),
            ("business",         "الأعمال",              "Business"),
            ("lifestyle",        "أسلوب الحياة",        "Lifestyle"),
        ]
        cats = []
        for i, (slug, ar_name, en_name) in enumerate(news_cats_data):
            cat, _ = NewsCategory.objects.get_or_create(slug=slug, defaults={"order": i})
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        ar_tag_names = ["سوريا", "دمشق", "اقتصاد", "رياضة", "صحة", "تقنية", "ثقافة", "بيئة"]
        tags = []
        for ar_tag in ar_tag_names:
            slug = fake_en.unique.slug()
            tag, _ = NewsTag.objects.get_or_create(slug=slug)
            tag.set_current_language("ar"); tag.name = ar_tag
            tag.set_current_language("en"); tag.name = fake_en.word()
            tag.save()
            tags.append(tag)

        for _ in range(n):
            pub_at = rand_past(120)
            ar_title = fake.sentence(nb_words=8)
            en_title = fake_en.sentence(nb_words=8)
            article = NewsArticle(
                category=random.choice(cats),
                author=random.choice(users),
                source="بارمها نيوز",
                is_published=True,
                is_featured=random.random() < 0.15,
                is_breaking=random.random() < 0.05,
                published_at=pub_at,
            )
            article.set_current_language("ar")
            article.title            = ar_title
            article.slug             = fake_en.unique.slug()
            article.summary          = fake.text(max_nb_chars=200)
            article.content          = fake.text(max_nb_chars=1000)
            article.meta_title       = ar_title[:200]
            article.meta_description = fake.text(max_nb_chars=280)
            article.set_current_language("en")
            article.title            = en_title
            article.slug             = fake_en.unique.slug()
            article.summary          = fake_en.text(max_nb_chars=200)
            article.content          = fake_en.text(max_nb_chars=1000)
            article.meta_title       = en_title[:200]
            article.meta_description = fake_en.text(max_nb_chars=280)
            article.save()
            article.tags.set(random.sample(tags, min(3, len(tags))))

    # ── events ────────────────────────────────────────────────────────────────

    def _seed_events(self, users, locs, n):
        from apps.events.models import EventCategory, Event

        event_cats_data = [
            ("cultural",    "ثقافي",    "Cultural"),
            ("sports",      "رياضي",    "Sports"),
            ("business",    "أعمال",    "Business"),
            ("educational", "تعليمي",   "Educational"),
            ("social",      "اجتماعي",  "Social"),
        ]
        cats = []
        for slug, ar_name, en_name in event_cats_data:
            cat, _ = EventCategory.objects.get_or_create(slug=slug)
            cat.set_current_language("ar"); cat.name = ar_name
            cat.set_current_language("en"); cat.name = en_name
            cat.save()
            cats.append(cat)

        price_types = ["free", "paid", "donation"]
        venues = ["قاعة الأمويين", "مركز دمشق الثقافي", "نادي الضباط", "فندق الشيراتون", "قاعة الأندلس"]

        for _ in range(n):
            start = rand_future(60)
            end   = start + timedelta(hours=random.randint(2, 8))
            loc = random.choice(locs)
            ev_lat = round(float(loc.latitude or 33.5) + random.uniform(-0.03, 0.03), 6) if loc.latitude else None
            ev_lng = round(float(loc.longitude or 36.3) + random.uniform(-0.03, 0.03), 6) if loc.longitude else None
            event = Event(
                organizer=random.choice(users),
                category=random.choice(cats),
                location=loc,
                venue_name=random.choice(venues),
                latitude=ev_lat,
                longitude=ev_lng,
                start_date=start,
                end_date=end,
                price_type=random.choice(price_types),
                price=rand_price(5_000, 100_000) if random.random() > 0.4 else None,
                currency="SYP",
                capacity=random.choice([50, 100, 200, 500, None]),
                is_online=random.random() < 0.2,
                is_active=True,
                is_featured=random.random() < 0.15,
            )
            event.set_current_language("ar"); event.title = fake.sentence(nb_words=5); event.description = fake.text(max_nb_chars=300)
            event.set_current_language("en"); event.title = fake_en.sentence(nb_words=5); event.description = fake_en.text(max_nb_chars=300)
            event.save()

    # ── messaging ─────────────────────────────────────────────────────────────

    def _seed_messaging(self, users):
        from apps.messaging.models import Conversation, Message

        if len(users) < 2:
            return

        for _ in range(min(10, len(users))):
            u1, u2 = random.sample(users, 2)
            conv = Conversation.objects.create(
                listing_type=random.choice(["property", "vehicle", "classified"]),
                listing_id=random.randint(1, 50),
                last_message_at=rand_past(30),
            )
            conv.participants.set([u1, u2])

            for _ in range(random.randint(2, 8)):
                sender = random.choice([u1, u2])
                body = fake.text(max_nb_chars=200)
                msg = Message.objects.create(
                    conversation=conv,
                    sender=sender,
                    body=body,
                    is_read=random.choice([True, False]),
                )

            conv.last_message = body
            conv.save(update_fields=["last_message"])

    # ── reviews ───────────────────────────────────────────────────────────────

    def _seed_reviews(self, users):
        from apps.reviews.models import Review

        subjects = ["agent", "agency", "provider", "merchant", "freelancer"]
        used_keys = set()

        for _ in range(min(20, len(users) * 3)):
            reviewer = random.choice(users)
            subject_type = random.choice(subjects)
            subject_id = random.randint(1, 10)
            key = (reviewer.pk, subject_type, subject_id)
            if key in used_keys:
                continue
            used_keys.add(key)
            Review.objects.create(
                reviewer=reviewer,
                subject_type=subject_type,
                subject_id=subject_id,
                rating=random.randint(1, 5),
                title=fake.sentence(nb_words=5),
                body=fake.text(max_nb_chars=300),
                is_verified=random.choice([True, False]),
                is_approved=True,
            )

    # ── notifications ─────────────────────────────────────────────────────────

    def _seed_notifications(self, users):
        from apps.core.models import Notification

        notif_types = [
            "new_message", "listing_approved", "listing_expired",
            "deal_nearby", "application_update", "review_received", "system",
        ]
        for user in users:
            for _ in range(random.randint(1, 5)):
                notif_type = random.choice(notif_types)
                notif = Notification(
                    recipient=user,
                    notif_type=notif_type,
                    action_url=f"/notifications/{random.randint(1,100)}",
                    is_read=random.choice([True, False]),
                )
                notif.set_current_language("ar"); notif.title = fake.sentence(nb_words=4); notif.body = fake.text(max_nb_chars=150)
                notif.set_current_language("en"); notif.title = fake_en.sentence(nb_words=4); notif.body = fake_en.text(max_nb_chars=150)
                notif.save()

    # ── advertisements ────────────────────────────────────────────────────────

    def _seed_ads(self, users):
        from apps.advertisements.models import AdPlacement, AdBanner

        slots = [
            ("home_top",           "Home Top Banner",           728, 90),
            ("home_middle",        "Home Middle Banner",         728, 90),
            ("properties_list",    "Properties List Sidebar",   300, 250),
            ("vehicles_list",      "Vehicles List Sidebar",     300, 250),
            ("classifieds_list",   "Classifieds List Sidebar",  300, 250),
            ("jobs_list",          "Jobs List Sidebar",         300, 250),
            ("news_sidebar",       "News Sidebar",              300, 250),
            ("deals_page",         "Deals Page Top",            728, 90),
        ]
        placements = []
        for key, desc, w, h in slots:
            p, _ = AdPlacement.objects.get_or_create(
                key=key, defaults={"description": desc, "width": w, "height": h, "max_ads": 3}
            )
            placements.append(p)

        # AdBanner requires an image (ProcessedImageField not null) — skip creating banners
        # without actual image files to avoid validation errors.

    # ── moderation ────────────────────────────────────────────────────────────

    def _seed_moderation(self, users):
        from apps.moderation.models import Report, SpamPattern

        reasons      = ["spam", "fake", "inappropriate", "scam", "wrong_category", "other"]
        content_types = ["property", "vehicle", "classified", "job", "deal", "event"]

        for _ in range(min(10, len(users))):
            Report.objects.create(
                reporter=random.choice(users),
                content_type=random.choice(content_types),
                object_id=random.randint(1, 50),
                reason=random.choice(reasons),
                description=fake.text(max_nb_chars=200),
                status="pending",
            )

        spam_words = ["spam", "كازينو", "ربح سريع", "مضمون", "احتيال"]
        for word in spam_words:
            SpamPattern.objects.get_or_create(
                pattern=word,
                defaults={"pattern_type": "keyword", "action": "flag", "is_active": True},
            )

    # ── favourites ────────────────────────────────────────────────────────────

    def _seed_favourites(self, users):
        from apps.accounts.models import Favourite

        content_types = ["property", "vehicle", "classified", "service", "job", "deal", "event"]
        used_keys = set()

        for user in users:
            for _ in range(random.randint(2, 8)):
                ct = random.choice(content_types)
                oid = random.randint(1, 30)
                key = (user.pk, ct, oid)
                if key in used_keys:
                    continue
                used_keys.add(key)
                Favourite.objects.create(user=user, content_type=ct, object_id=oid)

    # ── saved searches ────────────────────────────────────────────────────────

    def _seed_saved_searches(self, users):
        from apps.accounts.models import SavedSearch

        sections = ["properties", "vehicles", "classifieds", "jobs", "services", "deals"]
        for user in random.sample(users, min(8, len(users))):
            SavedSearch.objects.create(
                user=user,
                section=random.choice(sections),
                filters={"price_min": random.randint(100_000, 500_000), "price_max": random.randint(500_000, 5_000_000)},
                name=f"بحث {fake.word()}",
                notify=random.choice([True, False]),
            )

    # ── subscriptions ─────────────────────────────────────────────────────────

    def _seed_subscriptions(self, users):
        from apps.accounts.models import Subscription

        plans    = ["free", "basic", "premium", "enterprise"]
        sections = ["properties", "vehicles", "classifieds", "services", "jobs", "deals"]

        for user in random.sample(users, min(6, len(users))):
            start = rand_past(30).date()
            end   = start + timedelta(days=30)
            Subscription.objects.create(
                user=user,
                plan=random.choice(plans),
                section=random.choice(sections),
                start_date=start,
                end_date=end,
                is_active=end >= timezone.now().date(),
                auto_renew=random.choice([True, False]),
                price_paid=rand_price(0, 50_000),
            )
