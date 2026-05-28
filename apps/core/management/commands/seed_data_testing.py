"""
Management command: seed_data_testing
--------------------------------------
Creates realistic test data using Faker and Google-auth social accounts.

Usage
-----
    python manage.py seed_data_testing                    # defaults
    python manage.py seed_data_testing --users 5 --per-section 3
    python manage.py seed_data_testing --images-dir /abs/path/to/imgs
    python manage.py seed_data_testing --clear            # wipe then re-seed

Image folder
------------
Drop any JPEG / PNG / WEBP files inside:
    backend/apps/core/management/commands/seed_images/

They are cycled through for every listing image.  If the folder is empty
or missing the command auto-generates solid-colour placeholder images via
Pillow so no images are required.
"""

import io
import random
import uuid
from datetime import timedelta
from pathlib import Path

from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from django.core.files import File
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.utils.text import slugify

from faker import Faker

from apps.core.models import Location
from apps.classifieds.models import ClassifiedCategory, ClassifiedImage, ClassifiedListing, Store
from apps.properties.models import PropertyImage, PropertyListing
from apps.vehicles.models import VehicleImage, VehicleListing, VehicleMake, VehicleModel
from apps.jobs.models import CompanyProfile, JobCategory, JobListing
from apps.services.models import ServiceCategory, ServiceListing, ServiceProvider
from apps.deals.models import Deal, DealCategory, Merchant
from apps.news.models import NewsArticle, NewsCategory, NewsTag
from apps.events.models import Event, EventCategory, EventImage

try:
    from allauth.socialaccount.models import SocialAccount
    HAS_ALLAUTH = True
except ImportError:
    HAS_ALLAUTH = False

User = get_user_model()

fake_en = Faker("en_US")
fake_ar = Faker("ar_SA")

SEED_IMAGES_DIR = Path(__file__).parent / "seed_images"


# ── Hardcoded seed content ────────────────────────────────────────────────────

PROPERTY_TITLES_EN = [
    "Spacious 3-bedroom apartment in the heart of the city",
    "Modern villa with garden and private pool",
    "Studio apartment near the university",
    "Commercial office space for rent",
    "Luxury penthouse with panoramic views",
    "Cozy 2-bedroom flat in a quiet neighbourhood",
    "Land plot in prime location",
    "Renovated townhouse in historic district",
    "Shop on busy high street",
    "Furnished apartment – move-in ready",
]
PROPERTY_TITLES_AR = [
    "شقة واسعة 3 غرف في قلب المدينة",
    "فيلا حديثة بحديقة وحمام سباحة خاص",
    "استديو قرب الجامعة",
    "مكتب تجاري للإيجار",
    "بنتهاوس فاخر بإطلالات بانورامية",
    "شقة مريحة غرفتان في حي هادئ",
    "أرض في موقع مميز",
    "بيت مجدد في الحي التاريخي",
    "محل تجاري على شارع رئيسي مزدحم",
    "شقة مفروشة - جاهزة للسكن",
]

VEHICLE_DATA = [
    {"make": "Toyota",    "models": ["Corolla", "Camry", "Land Cruiser", "Yaris"]},
    {"make": "BMW",       "models": ["3 Series", "5 Series", "X5", "M3"]},
    {"make": "Mercedes",  "models": ["C-Class", "E-Class", "GLE", "A-Class"]},
    {"make": "Honda",     "models": ["Civic", "Accord", "CR-V", "HR-V"]},
    {"make": "Kia",       "models": ["Sportage", "Cerato", "Sorento", "Picanto"]},
    {"make": "Hyundai",   "models": ["Tucson", "Elantra", "Santa Fe", "i20"]},
    {"make": "Nissan",    "models": ["Altima", "Patrol", "Sunny", "Qashqai"]},
    {"make": "Mitsubishi","models": ["Lancer", "Pajero", "ASX", "Outlander"]},
]

CLASSIFIED_DATA = {
    "electronics": {
        "en": ["Samsung Galaxy S24 – excellent condition", "MacBook Pro 2022 – barely used",
                "Sony PlayStation 5 with 2 controllers", "Dell laptop i7 16GB RAM"],
        "ar": ["سامسونغ غالاكسي S24 – حالة ممتازة", "ماك بوك برو 2022 – نادراً ما استُخدم",
                "سوني بلايستيشن 5 مع جهازَي تحكم", "لابتوب ديل i7 ذاكرة 16GB"],
    },
    "furniture": {
        "en": ["Living room sofa set – 3-piece", "King size bed with mattress",
                "Dining table with 6 chairs", "Wooden wardrobe – 3 doors"],
        "ar": ["طقم صالة 3 قطع", "سرير كينغ مع مرتبة", "طاولة طعام مع 6 كراسي", "خزانة خشبية 3 أبواب"],
    },
    "mobiles": {
        "en": ["iPhone 15 Pro – 256GB – black", "Samsung S23 Ultra – mint condition",
                "Xiaomi 13 Pro – sealed box", "OPPO Find X6 – like new"],
        "ar": ["آيفون 15 برو 256 جيجا - أسود", "سامسونغ S23 الترا - حالة ممتازة",
                "شاومي 13 برو - صندوق مغلق", "أوبو Find X6 - كالجديد"],
    },
}

JOB_TITLES_EN = [
    "Senior Software Engineer", "Marketing Manager", "Accountant", "Sales Representative",
    "Graphic Designer", "Nurse – ICU", "Arabic–English Translator", "Mechanical Engineer",
    "HR Specialist", "Data Analyst",
]
JOB_TITLES_AR = [
    "مهندس برمجيات أول", "مدير تسويق", "محاسب", "مندوب مبيعات",
    "مصمم جرافيك", "ممرضة – وحدة العناية المركزة", "مترجم عربي-إنجليزي", "مهندس ميكانيكي",
    "أخصائي موارد بشرية", "محلل بيانات",
]

SERVICE_TITLES_EN = [
    "Professional House Cleaning", "AC Installation & Repair", "Furniture Moving Service",
    "Private Math Tutor", "Wedding Photography", "Graphic Design & Branding",
    "Plumbing & Waterproofing", "Legal Consultation", "Home Catering",
]
SERVICE_TITLES_AR = [
    "تنظيف منازل احترافي", "تركيب وتصليح مكيفات", "خدمة نقل أثاث",
    "مدرس رياضيات خصوصي", "تصوير حفلات الأعراس", "تصميم جرافيك وهوية بصرية",
    "سباكة ومقاومة الرطوبة", "استشارات قانونية", "تموين منزلي",
]

DEAL_TITLES_EN = [
    "50% off on all clothing items", "Buy 2 pizzas get 1 free",
    "Free first consultation", "Cashback 20% on electronics",
    "Bundle deal: laptop + bag + mouse", "30% off gym membership",
]
DEAL_TITLES_AR = [
    "خصم 50% على جميع الملابس", "اشترِ بيتزا وأحصل على أخرى مجاناً",
    "استشارة أولى مجانية", "استرداد نقدي 20% على الإلكترونيات",
    "عرض حزمة: لابتوب + حقيبة + ماوس", "خصم 30% على اشتراك الجيم",
]

NEWS_TITLES_EN = [
    "Syria's economy shows signs of recovery amid reconstruction efforts",
    "New technology hub opens in Damascus attracting regional startups",
    "Historical old city of Aleppo undergoes major restoration project",
    "Syrian athletes break national records at Arab Games",
    "Ministry announces expansion of renewable energy projects across the country",
]
NEWS_TITLES_AR = [
    "الاقتصاد السوري يُظهر علامات تعافٍ وسط جهود إعادة الإعمار",
    "افتتاح مركز تقني جديد في دمشق يستقطب شركات ناشئة إقليمية",
    "مشروع ترميم كبير للمدينة القديمة في حلب",
    "رياضيون سوريون يكسرون أرقاماً قياسية وطنية في دورة الألعاب العربية",
    "الوزارة تُعلن توسعة مشاريع الطاقة المتجددة في مختلف أنحاء البلاد",
]

EVENT_TITLES_EN = [
    "Damascus International Book Fair 2025",
    "Tech Startup Summit – Syria Edition",
    "Aleppo Cultural Heritage Photography Exhibition",
    "Syrian Cuisine Festival & Cooking Workshop",
    "Annual Business Networking Gala",
    "Children's Arts & Crafts Day",
]
EVENT_TITLES_AR = [
    "معرض دمشق الدولي للكتاب 2025",
    "قمة الشركات الناشئة التقنية – النسخة السورية",
    "معرض صور التراث الثقافي في حلب",
    "مهرجان المطبخ السوري وورشة الطهي",
    "حفل التواصل التجاري السنوي",
    "يوم الفنون والحرف اليدوية للأطفال",
]

GOOGLE_USERS = [
    {"first_name": "Omar",    "last_name": "Al-Rashid", "email": "omar.alrashid@gmail.com",    "user_type": "agent"},
    {"first_name": "Lina",    "last_name": "Hassan",    "email": "lina.hassan@gmail.com",      "user_type": "individual"},
    {"first_name": "Khaled",  "last_name": "Matar",     "email": "khaled.matar@gmail.com",     "user_type": "company"},
    {"first_name": "Nour",    "last_name": "Abboud",    "email": "nour.abboud@gmail.com",      "user_type": "merchant"},
    {"first_name": "Samer",   "last_name": "Khalil",    "email": "samer.khalil@gmail.com",     "user_type": "freelancer"},
    {"first_name": "Rania",   "last_name": "Karimi",    "email": "rania.karimi@gmail.com",     "user_type": "individual"},
    {"first_name": "Tarek",   "last_name": "Nassar",    "email": "tarek.nassar@gmail.com",     "user_type": "agent"},
    {"first_name": "Maya",    "last_name": "Diab",      "email": "maya.diab@gmail.com",        "user_type": "merchant"},
    {"first_name": "Wissam",  "last_name": "Saad",      "email": "wissam.saad@gmail.com",      "user_type": "company"},
    {"first_name": "Hana",    "last_name": "Tawil",     "email": "hana.tawil@gmail.com",       "user_type": "freelancer"},
]


# ── Image helpers ─────────────────────────────────────────────────────────────

def _load_disk_images(folder: Path) -> list[Path]:
    exts = {".jpg", ".jpeg", ".png", ".webp"}
    if not folder.exists():
        return []
    return [f for f in folder.iterdir() if f.is_file() and f.suffix.lower() in exts]


def _placeholder_bytes(label: str = "") -> bytes:
    """Return JPEG bytes for a solid-colour image (800×600). No disk read needed."""
    try:
        from PIL import Image as PilImage, ImageDraw, ImageFont
        colour = (random.randint(60, 180), random.randint(60, 180), random.randint(60, 180))
        img = PilImage.new("RGB", (800, 600), color=colour)
        draw = ImageDraw.Draw(img)
        text = label or "barmha.com"
        draw.text((400, 300), text, fill=(255, 255, 255), anchor="mm")
        buf = io.BytesIO()
        img.save(buf, format="JPEG", quality=85)
        return buf.getvalue()
    except ImportError:
        # Minimal valid 1×1 white JPEG if Pillow is not available
        return (
            b"\xff\xd8\xff\xe0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00"
            b"\xff\xdb\x00C\x00\x08\x06\x06\x07\x06\x05\x08\x07\x07\x07\t\t"
            b"\x08\n\x0c\x14\r\x0c\x0b\x0b\x0c\x19\x12\x13\x0f\x14\x1d\x1a"
            b"\x1f\x1e\x1d\x1a\x1c\x1c $.' \",#\x1c\x1c(7),01444\x1f'9=82<.342\x1e"
            b"\xff\xc0\x00\x0b\x08\x00\x01\x00\x01\x01\x01\x11\x00\xff\xc4\x00\x1f"
            b"\x00\x00\x01\x05\x01\x01\x01\x01\x01\x01\x00\x00\x00\x00\x00\x00\x00"
            b"\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\xff\xda\x00\x08\x01\x01"
            b"\x00\x00?\x00\xfb\x26\x8a(\x03\xff\xd9"
        )


class _ImagePool:
    """Cycles through disk images or generates placeholders on the fly."""

    def __init__(self, disk_images: list[Path]):
        self._disk = disk_images
        self._idx = 0

    def next_file(self, label: str = "") -> tuple[str, bytes]:
        """Return (filename, bytes) for the next image."""
        if self._disk:
            path = self._disk[self._idx % len(self._disk)]
            self._idx += 1
            with open(path, "rb") as fh:
                return path.name, fh.read()
        # fallback – placeholder
        fname = f"seed_{uuid.uuid4().hex[:8]}.jpg"
        return fname, _placeholder_bytes(label)

    def save_to(self, field, label: str = "") -> None:
        """Save the next image directly to a Django ImageField."""
        fname, data = self.next_file(label)
        field.save(fname, ContentFile(data), save=False)


# ── Translation helper ────────────────────────────────────────────────────────

def _trans(obj, **lang_kwargs):
    """
    Set translations on a TranslatableModel then call obj.save().
    Usage: _trans(obj, en={"title": "Hello"}, ar={"title": "مرحباً"})
    """
    for lang, kwargs in lang_kwargs.items():
        obj.set_current_language(lang)
        for attr, val in kwargs.items():
            setattr(obj, attr, val)
    obj.save()


# ── Management command ────────────────────────────────────────────────────────

class Command(BaseCommand):
    help = "Seed test data: Google-auth users + Faker listings across all sections."

    def add_arguments(self, parser):
        parser.add_argument("--users",       type=int, default=10,   help="Number of Google-auth users (max 10 built-in)")
        parser.add_argument("--per-section", type=int, default=5,    help="Listings per section per user")
        parser.add_argument("--images-dir",  type=str, default=None, help="Absolute path to image folder")
        parser.add_argument("--clear",       action="store_true",    help="Delete ALL seed data before re-seeding")

    # ─────────────────────────────────────────────────────────────────────────

    def handle(self, *args, **options):
        n_users  = min(options["users"], len(GOOGLE_USERS))
        per_sec  = options["per_section"]
        img_dir  = Path(options["images_dir"]) if options["images_dir"] else SEED_IMAGES_DIR

        img_dir.mkdir(parents=True, exist_ok=True)
        disk_imgs = _load_disk_images(img_dir)
        pool = _ImagePool(disk_imgs)

        if disk_imgs:
            self.stdout.write(self.style.SUCCESS(f"  Found {len(disk_imgs)} image(s) in {img_dir}"))
        else:
            self.stdout.write(self.style.WARNING(f"  No images in {img_dir} — using generated placeholders"))

        # Disconnect imagekit's post_save / post_init signal receivers for the
        # duration of the seed so it never tries to generate or name cache files.
        # Thumbnails are generated on-demand (JustInTime strategy) so this is safe.
        from django.db.models.signals import post_init, post_save
        post_init.disconnect(dispatch_uid='ik_spec_field_receivers')
        post_save.disconnect(dispatch_uid='ik_spec_field_receivers')

        if options["clear"]:
            self._clear()

        # ── 1. Geo ──────────────────────────────────────────────────────────
        self.stdout.write("  [1/8] Loading governorates & locations …")
        locations = self._seed_geo()

        # ── 2. Categories ───────────────────────────────────────────────────
        self.stdout.write("  [2/8] Creating categories …")
        cats = self._seed_categories()

        # ── 3. Users ────────────────────────────────────────────────────────
        self.stdout.write(f"  [3/8] Creating {n_users} Google-auth users …")
        users = self._seed_users(n_users)

        # ── 4. Role profiles ────────────────────────────────────────────────
        self.stdout.write("  [4/8] Building role profiles (company / merchant / provider) …")
        profiles = self._seed_profiles(users, locations, cats, pool)

        # ── 5-8. Listings ───────────────────────────────────────────────────
        self.stdout.write(f"  [5/8] Seeding property listings …")
        self._seed_properties(users, locations, pool, per_sec)

        self.stdout.write(f"  [6/8] Seeding vehicle listings …")
        self._seed_vehicles(users, locations, pool, per_sec, cats)

        self.stdout.write(f"  [7/8] Seeding classifieds …")
        self._seed_classifieds(users, locations, pool, per_sec, cats)

        self.stdout.write(f"  [8/8] Seeding jobs / services / deals / news / events …")
        self._seed_jobs(users, locations, per_sec, cats, profiles)
        self._seed_services(users, locations, pool, per_sec, cats, profiles)
        self._seed_deals(users, locations, pool, per_sec, cats, profiles)
        self._seed_news(users, pool, per_sec, cats)
        self._seed_events(users, locations, pool, per_sec, cats)

        # Reconnect imagekit signals now that all saves are done.
        from imagekit.specs.sourcegroups import signal_router
        post_init.connect(signal_router.post_init_receiver, dispatch_uid='ik_spec_field_receivers')
        post_save.connect(signal_router.post_save_receiver, dispatch_uid='ik_spec_field_receivers')

        self.stdout.write(self.style.SUCCESS("\n  ✓ Seed complete!"))

    # ── Clear ─────────────────────────────────────────────────────────────────

    def _clear(self):
        self.stdout.write(self.style.WARNING("  Clearing previous seed data …"))
        emails = {u["email"] for u in GOOGLE_USERS}
        users = User.objects.filter(email__in=emails)
        # Cascade deletes handle related listings
        users.delete()
        self.stdout.write("    Users and related listings deleted.")

    # ── Geo ───────────────────────────────────────────────────────────────────

    def _seed_geo(self) -> list:
        locations = list(Location.objects.select_related("governorate").filter(governorate__is_active=True))

        return locations

    # ── Categories ────────────────────────────────────────────────────────────

    def _seed_categories(self) -> dict:
        cats: dict = {}

        # Classified categories
        classified_cats = {}
        classified_meta = [
            ("furniture",    "Furniture",    "الأثاث"),
            ("electronics",  "Electronics",  "الإلكترونيات"),
            ("fashion",      "Fashion",      "الأزياء"),
            ("kids",         "Kids",         "الأطفال"),
            ("pets",         "Pets",         "الحيوانات الأليفة"),
            ("sports",       "Sports",       "الرياضة"),
            ("books",        "Books",        "الكتب"),
            ("mobiles",      "Mobiles",      "الجوالات"),
            ("others",       "Others",       "أخرى"),
        ]
        for slug, en_name, ar_name in classified_meta:
            obj, _ = ClassifiedCategory.objects.get_or_create(slug=slug, defaults={"order": classified_meta.index((slug, en_name, ar_name))})
            _trans(obj, en={"name": en_name}, ar={"name": ar_name})
            classified_cats[slug] = obj
        cats["classified"] = list(classified_cats.values())

        # Job categories
        job_meta = [
            ("tech",        "Technology",          "التكنولوجيا"),
            ("marketing",   "Marketing",           "التسويق"),
            ("finance",     "Finance",             "المالية"),
            ("healthcare",  "Healthcare",          "الرعاية الصحية"),
            ("education",   "Education",           "التعليم"),
            ("engineering", "Engineering",         "الهندسة"),
            ("sales",       "Sales",               "المبيعات"),
            ("hr",          "Human Resources",     "الموارد البشرية"),
            ("design",      "Design & Creative",   "التصميم والإبداع"),
            ("logistics",   "Logistics",           "اللوجستيات"),
        ]
        job_cats = []
        for i, (slug, en, ar) in enumerate(job_meta):
            obj, _ = JobCategory.objects.get_or_create(slug=slug, defaults={"order": i})
            _trans(obj, en={"name": en}, ar={"name": ar})
            job_cats.append(obj)
        cats["job"] = job_cats

        # Service categories
        service_meta = [
            ("cleaning",          "Cleaning",           "التنظيف"),
            ("maintenance",       "Maintenance",        "الصيانة"),
            ("moving",            "Moving",             "النقل"),
            ("beauty",            "Beauty",             "الجمال"),
            ("tutoring",          "Tutoring",           "الدروس الخاصة"),
            ("catering",          "Catering",           "التموين"),
            ("photography",       "Photography",        "التصوير"),
            ("design",            "Design",             "التصميم"),
            ("it_support",        "IT Support",         "الدعم التقني"),
            ("legal",             "Legal",              "القانوني"),
            ("events_management", "Events Management",  "إدارة الفعاليات"),
            ("other",             "Other",              "أخرى"),
        ]
        svc_cats = []
        for i, (slug, en, ar) in enumerate(service_meta):
            obj, _ = ServiceCategory.objects.get_or_create(slug=slug, defaults={"order": i})
            _trans(obj, en={"name": en}, ar={"name": ar})
            svc_cats.append(obj)
        cats["service"] = svc_cats

        # Deal categories
        deal_meta = [
            ("restaurants",  "Restaurants",  "المطاعم",      1),
            ("retail",       "Retail",       "التجزئة",      2),
            ("beauty-deals", "Beauty",       "الجمال",       3),
            ("tech-deals",   "Technology",   "التكنولوجيا",  4),
            ("health",       "Health",       "الصحة",        5),
            ("travel",       "Travel",       "السفر",        6),
        ]
        deal_cats = []
        for slug, en, ar, order in deal_meta:
            obj, _ = DealCategory.objects.get_or_create(slug=slug, defaults={"order": order})
            _trans(obj, en={"name": en}, ar={"name": ar})
            deal_cats.append(obj)
        cats["deal"] = deal_cats

        # Event categories
        event_meta = [
            ("business", "Business & Networking", "الأعمال والتواصل"),
            ("culture",  "Culture & Arts",        "الثقافة والفنون"),
            ("sports",   "Sports",                "الرياضة"),
            ("tech",     "Technology",            "التكنولوجيا"),
            ("community","Community",             "المجتمع"),
            ("education","Education",             "التعليم"),
        ]
        evt_cats = []
        for slug, en, ar in event_meta:
            obj, _ = EventCategory.objects.get_or_create(slug=slug)
            _trans(obj, en={"name": en}, ar={"name": ar})
            evt_cats.append(obj)
        cats["event"] = evt_cats

        # News categories
        news_meta = [
            ("syria",            "Syria",             "سوريا",           1),
            ("world",            "World",             "العالم",           2),
            ("middle_east",      "Middle East",       "الشرق الأوسط",    3),
            ("business",         "Business",          "الأعمال",          4),
            ("health_education", "Health & Education","الصحة والتعليم",  5),
            ("sports",           "Sports",            "الرياضة",          6),
            ("lifestyle",        "Lifestyle",         "نمط الحياة",       7),
        ]
        news_cats = []
        for slug, en, ar, order in news_meta:
            obj, _ = NewsCategory.objects.get_or_create(slug=slug, defaults={"order": order})
            _trans(obj, en={"name": en}, ar={"name": ar})
            news_cats.append(obj)
        cats["news"] = news_cats

        return cats

    # ── Users ─────────────────────────────────────────────────────────────────

    def _seed_users(self, n: int) -> list:
        users = []
        for ud in GOOGLE_USERS[:n]:
            user, created = User.objects.get_or_create(
                email=ud["email"],
                defaults={
                    "username":   ud["email"].split("@")[0].replace(".", "_"),
                    "first_name": ud["first_name"],
                    "last_name":  ud["last_name"],
                    "user_type":  ud["user_type"],
                    "is_verified": True,
                    "bio":        fake_en.paragraph(nb_sentences=2),
                    "phone":      f"+9639{random.randint(10000000, 99999999)}",
                },
            )
            if created:
                user.set_password("testpass123")
                user.save()
                if HAS_ALLAUTH:
                    SocialAccount.objects.get_or_create(
                        user=user,
                        provider="google",
                        defaults={
                            "uid": f"google_{uuid.uuid4().hex}",
                            "extra_data": {
                                "email":          ud["email"],
                                "name":           f"{ud['first_name']} {ud['last_name']}",
                                "given_name":     ud["first_name"],
                                "family_name":    ud["last_name"],
                                "picture":        f"https://lh3.googleusercontent.com/a/{uuid.uuid4().hex}",
                                "locale":         "ar",
                                "verified_email": True,
                            },
                        },
                    )
            users.append(user)
            verb = "Created" if created else "Found"
            self.stdout.write(f"    {verb}: {user.email} ({user.user_type})")
        return users

    # ── Role profiles ─────────────────────────────────────────────────────────

    def _seed_profiles(self, users, locations, cats, pool) -> dict:
        """
        Create CompanyProfile, Merchant, ServiceProvider, Store for
        users whose user_type matches.  Returns {user_id: {profile_type: obj}}.
        """
        profiles: dict = {}
        for user in users:
            p: dict = {}
            loc = random.choice(locations)

            if user.user_type == "company":
                comp, _ = CompanyProfile.objects.get_or_create(user=user, defaults={"location": loc, "is_verified": True, "size": random.choice(["1-10", "11-50", "51-200"]), "industry": fake_en.bs()})
                _trans(comp, en={"name": f"{user.first_name} Corp", "description": fake_en.paragraph(2)}, ar={"name": f"شركة {user.first_name}", "description": fake_ar.paragraph(2)})
                p["company"] = comp

            if user.user_type == "merchant":
                merch, created = Merchant.objects.get_or_create(user=user, defaults={"location": loc, "category": random.choice(cats["deal"]), "phone": user.phone or f"+9639{random.randint(10000000,99999999)}", "is_verified": True})
                _trans(merch, en={"name": f"{user.first_name}'s Store", "description": fake_en.paragraph(2)}, ar={"name": f"متجر {user.first_name}", "description": fake_ar.paragraph(2)})
                p["merchant"] = merch

            if user.user_type == "freelancer":
                prov, _ = ServiceProvider.objects.get_or_create(user=user, defaults={"location": loc, "phone": user.phone or f"+9639{random.randint(10000000,99999999)}", "is_verified": True})
                _trans(prov, en={"bio": fake_en.paragraph(3)}, ar={"bio": fake_ar.paragraph(2)})
                prov.categories.set(random.sample(cats["service"], k=min(3, len(cats["service"]))))
                p["provider"] = prov

            profiles[user.id] = p
        return profiles

    # ── Properties ───────────────────────────────────────────────────────────

    def _seed_properties(self, users, locations, pool, per_sec):
        PROPERTY_TYPES = ["apartment", "villa", "house", "studio", "office", "shop", "warehouse", "land"]
        PURPOSES  = ["for_rent", "for_sale"]
        CATS      = ["residential", "commercial", "international"]
        FURNISH   = ["fully_furnished", "semi_furnished", "unfurnished"]

        for user in users:
            for _ in range(per_sec):
                idx    = random.randrange(len(PROPERTY_TITLES_EN))
                loc    = random.choice(locations)
                purp   = random.choice(PURPOSES)
                price  = random.choice([500_000, 1_000_000, 2_500_000, 5_000_000, 10_000_000, 25_000_000])

                listing = PropertyListing(
                    title          = PROPERTY_TITLES_EN[idx],
                    description    = fake_en.paragraph(nb_sentences=5),
                    purpose        = purp,
                    category       = random.choice(CATS),
                    property_type  = random.choice(PROPERTY_TYPES),
                    location       = loc,
                    latitude       = float(loc.latitude or 33.5) + random.uniform(-0.02, 0.02),
                    longitude      = float(loc.longitude or 36.3) + random.uniform(-0.02, 0.02),
                    price          = price,
                    currency       = "SYP",
                    negotiable     = random.choice([True, False]),
                    bedrooms       = random.choice(["Studio", "1", "2", "3", "4", "5+"]),
                    bathrooms      = random.randint(1, 4),
                    area_sqm       = random.choice([60, 80, 100, 120, 150, 200, 250, 300]),
                    floor_number   = random.randint(0, 12),
                    total_floors   = random.randint(3, 15),
                    furnishing     = random.choice(FURNISH),
                    amenities      = random.sample(["parking", "elevator", "gym", "pool", "security", "garden"], k=random.randint(1, 4)),
                    posted_by      = user,
                    is_active      = True,
                    is_featured    = random.random() < 0.15,
                )
                listing.save()

                # Images
                for order in range(random.randint(2, 4)):
                    img = PropertyImage(listing=listing, order=order, is_primary=(order == 0))
                    pool.save_to(img.image, "property")
                    img.save()

    # ── Vehicles ──────────────────────────────────────────────────────────────

    def _seed_vehicles(self, users, locations, pool, per_sec, cats):
        FUEL  = ["petrol", "diesel", "electric", "hybrid"]
        GEAR  = ["automatic", "manual"]
        BODY  = ["sedan", "suv", "hatchback", "pickup", "coupe", "van"]
        COLORS = ["White", "Black", "Silver", "Red", "Blue", "Grey", "Beige"]

        # Ensure vehicle makes/models exist
        make_objs: dict = {}
        for vd in VEHICLE_DATA:
            make, _ = VehicleMake.objects.get_or_create(name=vd["make"], defaults={"popular": True})
            make_objs[vd["make"]] = make
            for model_name in vd["models"]:
                VehicleModel.objects.get_or_create(make=make, name=model_name)

        for user in users:
            for _ in range(per_sec):
                vd   = random.choice(VEHICLE_DATA)
                make = make_objs[vd["make"]]
                model_name = random.choice(vd["models"])
                model = VehicleModel.objects.get(make=make, name=model_name)
                loc   = random.choice(locations)
                year  = random.randint(2008, 2024)
                price = random.choice([500_000, 1_500_000, 3_000_000, 6_000_000, 12_000_000, 25_000_000])

                listing = VehicleListing(
                    listing_type   = random.choice(["sale", "rent"]),
                    category       = "car",
                    make           = make,
                    model          = model,
                    trim           = random.choice(["Base", "Sport", "LE", "XLE", "SE", "Luxury", ""]),
                    year           = year,
                    title          = f"{year} {make.name} {model.name}",
                    description    = fake_en.paragraph(nb_sentences=4),
                    price          = price,
                    currency       = "SYP",
                    negotiable     = random.choice([True, False]),
                    mileage        = random.randint(0, 250_000),
                    fuel_type      = random.choice(FUEL),
                    gear_type      = random.choice(GEAR),
                    engine_size    = random.choice(["1.4L", "1.6L", "1.8L", "2.0L", "2.4L", "3.5L", "V6"]),
                    cylinders      = random.choice([4, 6, 8]),
                    wheel_drive    = random.choice(["2WD", "4WD", "AWD"]),
                    body_style     = random.choice(BODY),
                    color_exterior = random.choice(COLORS),
                    color_interior = random.choice(["Black", "Beige", "Grey", "Brown"]),
                    doors          = random.choice([2, 4]),
                    seats          = random.choice([5, 7]),
                    condition      = random.choice(["brand_new", "used"]),
                    under_warranty = random.choice([True, False]),
                    computer_check = random.choice([True, False]),
                    features       = random.sample(["sunroof", "leather_seats", "360_camera", "heated_seats", "navigation", "bluetooth", "cruise_control"], k=random.randint(1, 5)),
                    location       = loc,
                    posted_by      = user,
                    is_active      = True,
                    is_featured    = random.random() < 0.15,
                )
                listing.save()

                for order in range(random.randint(2, 4)):
                    img = VehicleImage(listing=listing, order=order, is_primary=(order == 0))
                    pool.save_to(img.image, "vehicle")
                    img.save()

    # ── Classifieds ───────────────────────────────────────────────────────────

    def _seed_classifieds(self, users, locations, pool, per_sec, cats):
        CONDITIONS = ["new", "used_like_new", "used_good", "used_fair"]
        cat_slugs  = list(CLASSIFIED_DATA.keys()) + ["fashion", "kids", "pets", "sports", "books"]

        for user in users:
            for _ in range(per_sec):
                slug = random.choice(cat_slugs)
                cat  = ClassifiedCategory.objects.filter(slug=slug).first()
                loc  = random.choice(locations)

                en_titles = CLASSIFIED_DATA.get(slug, {}).get("en") or [fake_en.catch_phrase() + " for sale"]
                ar_titles = CLASSIFIED_DATA.get(slug, {}).get("ar") or [fake_ar.catch_phrase() + " للبيع"]
                idx = random.randrange(len(en_titles))

                listing = ClassifiedListing(
                    listing_type = random.choice(["sell", "buy"]),
                    condition    = random.choice(CONDITIONS),
                    price        = random.choice([10_000, 25_000, 50_000, 100_000, 250_000, 500_000]),
                    currency     = "SYP",
                    negotiable   = random.choice([True, False]),
                    seller       = user,
                    category     = cat,
                    location     = loc,
                    is_active    = True,
                    is_featured  = random.random() < 0.1,
                )
                listing.set_current_language("en")
                listing.title       = en_titles[idx % len(en_titles)]
                listing.description = fake_en.paragraph(nb_sentences=3)
                listing.set_current_language("ar")
                listing.title       = ar_titles[idx % len(ar_titles)]
                listing.description = fake_ar.paragraph(nb_sentences=3)
                listing.save()

                for order in range(random.randint(1, 3)):
                    img = ClassifiedImage(listing=listing, order=order, is_primary=(order == 0))
                    pool.save_to(img.image, "classified")
                    img.save()

    # ── Jobs ──────────────────────────────────────────────────────────────────

    def _seed_jobs(self, users, locations, per_sec, cats, profiles):
        JOB_TYPES = ["full_time", "part_time", "contract", "internship", "freelance"]
        EXP_LEVELS = ["entry", "mid", "senior", "manager"]

        for user in users:
            company = profiles.get(user.id, {}).get("company")
            for i in range(per_sec):
                idx = random.randrange(len(JOB_TITLES_EN))
                loc = random.choice(locations)
                min_sal = random.choice([300_000, 500_000, 800_000, 1_200_000])

                listing = JobListing(
                    job_type   = random.choice(JOB_TYPES),
                    experience = random.choice(EXP_LEVELS),
                    gender     = random.choice(["any", "male", "female"]),
                    min_salary = min_sal,
                    max_salary = int(min_sal * random.uniform(1.3, 2.0)),
                    currency   = "SYP",
                    company    = company,
                    posted_by  = user,
                    category   = random.choice(cats["job"]),
                    location   = loc,
                    is_remote  = random.choice([True, False]),
                    is_active  = True,
                    is_featured = random.random() < 0.1,
                    quick_apply = random.choice([True, False]),
                )
                listing.set_current_language("en")
                listing.title        = JOB_TITLES_EN[idx % len(JOB_TITLES_EN)]
                listing.description  = fake_en.paragraph(nb_sentences=5)
                listing.requirements = "\n".join(f"- {fake_en.bs()}" for _ in range(4))
                listing.set_current_language("ar")
                listing.title        = JOB_TITLES_AR[idx % len(JOB_TITLES_AR)]
                listing.description  = fake_ar.paragraph(nb_sentences=4)
                listing.requirements = "\n".join(f"- {fake_ar.sentence()}" for _ in range(3))
                listing.save()

    # ── Services ──────────────────────────────────────────────────────────────

    def _seed_services(self, users, locations, pool, per_sec, cats, profiles):
        PRICE_TYPES = ["fixed", "hourly", "daily", "negotiable"]

        for user in users:
            provider = profiles.get(user.id, {}).get("provider")
            if not provider:
                # Create a minimal provider so the FK is satisfied
                loc = random.choice(locations)
                provider, _ = ServiceProvider.objects.get_or_create(user=user, defaults={"location": loc})
                _trans(provider, en={"bio": fake_en.paragraph(2)}, ar={"bio": fake_ar.paragraph(2)})
                provider.categories.set(random.sample(cats["service"], k=min(2, len(cats["service"]))))
                profiles.setdefault(user.id, {})["provider"] = provider

            for i in range(per_sec):
                idx   = random.randrange(len(SERVICE_TITLES_EN))
                loc   = random.choice(locations)
                cat   = random.choice(cats["service"])
                p_type = random.choice(PRICE_TYPES)
                price  = random.choice([50_000, 100_000, 200_000, 300_000, 500_000]) if p_type != "negotiable" else None

                listing = ServiceListing(
                    provider   = provider,
                    category   = cat,
                    price      = price,
                    currency   = "SYP",
                    price_type = p_type,
                    is_remote  = random.choice([True, False]),
                    location   = loc,
                    is_active  = True,
                    is_featured = random.random() < 0.1,
                )
                listing.set_current_language("en")
                listing.title       = SERVICE_TITLES_EN[idx % len(SERVICE_TITLES_EN)]
                listing.description = fake_en.paragraph(nb_sentences=4)
                listing.set_current_language("ar")
                listing.title       = SERVICE_TITLES_AR[idx % len(SERVICE_TITLES_AR)]
                listing.description = fake_ar.paragraph(nb_sentences=3)
                listing.save()

    # ── Deals ─────────────────────────────────────────────────────────────────

    def _seed_deals(self, users, locations, pool, per_sec, cats, profiles):
        DEAL_TYPES = ["buy1get1", "discount", "bundle", "free_trial", "cashback"]

        for user in users:
            merchant = profiles.get(user.id, {}).get("merchant")
            if not merchant:
                continue  # only merchant-type users post deals

            for i in range(per_sec):
                idx          = random.randrange(len(DEAL_TITLES_EN))
                original     = random.choice([100_000, 200_000, 500_000, 1_000_000])
                discount_pct = random.choice([10, 15, 20, 25, 30, 40, 50])
                deal_price   = int(original * (1 - discount_pct / 100))
                now          = timezone.now()

                deal = Deal(
                    merchant       = merchant,
                    category       = random.choice(cats["deal"]),
                    deal_type      = random.choice(DEAL_TYPES),
                    discount_value = discount_pct,
                    original_price = original,
                    deal_price     = deal_price,
                    currency       = "SYP",
                    start_date     = now - timedelta(days=random.randint(0, 5)),
                    end_date       = now + timedelta(days=random.randint(7, 60)),
                    is_active      = True,
                    is_featured    = random.random() < 0.2,
                    is_deal_of_day = random.random() < 0.05,
                )
                deal.set_current_language("en")
                deal.title       = DEAL_TITLES_EN[idx % len(DEAL_TITLES_EN)]
                deal.description = fake_en.paragraph(nb_sentences=3)
                deal.terms       = fake_en.paragraph(nb_sentences=2)
                deal.set_current_language("ar")
                deal.title       = DEAL_TITLES_AR[idx % len(DEAL_TITLES_AR)]
                deal.description = fake_ar.paragraph(nb_sentences=2)
                deal.terms       = fake_ar.paragraph(nb_sentences=2)
                deal.save()

                pool.save_to(deal.image, "deal")
                deal.save()

    # ── News ─────────────────────────────────────────────────────────────────

    def _seed_news(self, users, pool, per_sec, cats):
        for user in users[:len(users) // 2]:   # only half of users author news
            for i in range(max(1, per_sec // 2)):
                idx   = random.randrange(len(NEWS_TITLES_EN))
                cat   = random.choice(cats["news"])
                now   = timezone.now()

                slug_en = f"{slugify(NEWS_TITLES_EN[idx])}-{uuid.uuid4().hex[:6]}"
                slug_ar = f"{slugify(NEWS_TITLES_AR[idx], allow_unicode=True)}-{uuid.uuid4().hex[:6]}" or f"article-{uuid.uuid4().hex[:8]}"

                article = NewsArticle(
                    category     = cat,
                    author       = user,
                    is_published = True,
                    is_featured  = random.random() < 0.2,
                    is_breaking  = random.random() < 0.1,
                    published_at = now - timedelta(hours=random.randint(1, 72)),
                )
                article.set_current_language("en")
                article.title            = NEWS_TITLES_EN[idx % len(NEWS_TITLES_EN)]
                article.slug             = slug_en[:499]
                article.summary          = fake_en.paragraph(nb_sentences=2)
                article.content          = "\n\n".join(fake_en.paragraph(nb_sentences=5) for _ in range(4))
                article.meta_title       = article.title[:200]
                article.meta_description = article.summary[:300]
                article.set_current_language("ar")
                article.title            = NEWS_TITLES_AR[idx % len(NEWS_TITLES_AR)]
                article.slug             = (slug_ar or f"ar-article-{uuid.uuid4().hex[:8]}")[:499]
                article.summary          = fake_ar.paragraph(nb_sentences=2)
                article.content          = "\n\n".join(fake_ar.paragraph(nb_sentences=4) for _ in range(3))
                article.meta_title       = article.title[:200]
                article.meta_description = article.summary[:300]
                article.save()

                pool.save_to(article.cover_image, "news")
                article.save()

    # ── Events ───────────────────────────────────────────────────────────────

    def _seed_events(self, users, locations, pool, per_sec, cats):
        PRICE_TYPES = ["free", "paid", "donation"]

        for user in users:
            for i in range(max(1, per_sec // 2)):
                idx       = random.randrange(len(EVENT_TITLES_EN))
                loc       = random.choice(locations)
                p_type    = random.choice(PRICE_TYPES)
                now       = timezone.now()
                start     = now + timedelta(days=random.randint(3, 60))
                end       = start + timedelta(hours=random.randint(2, 8))

                event = Event(
                    organizer   = user,
                    category    = random.choice(cats["event"]),
                    location    = loc,
                    venue_name  = fake_en.company() + " Hall",
                    latitude    = float(loc.latitude or 33.5)  + random.uniform(-0.01, 0.01),
                    longitude   = float(loc.longitude or 36.3) + random.uniform(-0.01, 0.01),
                    start_date  = start,
                    end_date    = end,
                    price_type  = p_type,
                    price       = random.choice([50_000, 100_000, 200_000]) if p_type == "paid" else None,
                    currency    = "SYP",
                    capacity    = random.choice([50, 100, 200, 500, None]),
                    is_online   = random.choice([True, False]),
                    is_active   = True,
                    is_featured = random.random() < 0.15,
                )
                event.set_current_language("en")
                event.title       = EVENT_TITLES_EN[idx % len(EVENT_TITLES_EN)]
                event.description = fake_en.paragraph(nb_sentences=4)
                event.set_current_language("ar")
                event.title       = EVENT_TITLES_AR[idx % len(EVENT_TITLES_AR)]
                event.description = fake_ar.paragraph(nb_sentences=3)
                event.save()

                pool.save_to(event.cover_image, "event")
                event.save()

                # 1-2 extra event gallery images
                for order in range(random.randint(1, 2)):
                    eimg = EventImage(event=event, order=order)
                    pool.save_to(eimg.image, "event-gallery")
                    eimg.save()
