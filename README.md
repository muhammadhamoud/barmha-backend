# Backend — Django 5 + DRF

## Running locally (without Docker)

```bash
# From repo root
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac / Linux

cd backend
python manage.py runserver
```

Requires postgres + redis + elasticsearch running — use `docker compose -f ../docker-compose.dev.yml up -d`.

---

## Management commands

```bash
# Database
python manage.py migrate
python manage.py makemigrations <app>
python manage.py createsuperuser

# Seed data
# python manage.py loaddata apps/core/fixtures/core_locations_fixture.json
# python manage.py loaddata apps/vehicles/fixtures/makes.json

python manage.py load_vehicles
python manage.py load_categories
python manage.py load_categories --no-flush


# Elasticsearch
python manage.py search_index --rebuild    # rebuild all indices
python manage.py search_index --populate   # populate without rebuild

# Celery (run from backend/ in separate terminals)
celery -A config worker -l info
celery -A config beat   -l info

# Checks
python manage.py check
python manage.py check --deploy            # production security checks
```

---

## Settings

| Module | Used when |
|---|---|
| `config.settings.base` | base — never used directly |
| `config.settings.development` | local dev (default in `.env`) |
| `config.settings.production` | production (set `DJANGO_SETTINGS_MODULE`) |

Override via env: `DJANGO_SETTINGS_MODULE=config.settings.production`

---

## Apps

| App | Key models |
|---|---|
| `accounts` | User, RealEstateAgency, RealEstateAgent, Subscription, Favourite, PhoneVerification |
| `core` | Governorate, Location, PrayerTime, SiteSettings, Notification, FCMDevice |
| `properties` | PropertyListing, PropertyImage, NearbyAmenity, EducationInstitution |
| `vehicles` | VehicleListing, VehicleMake, VehicleModel, Showroom, RentalCompany, Garage, CarPart |
| `classifieds` | ClassifiedListing, ClassifiedCategory, Store |
| `services` | ServiceListing, ServiceProvider, ServiceCategory |
| `jobs` | JobListing, CompanyProfile, FreelancerProfile, JobseekerProfile, JobApplication |
| `deals` | Deal, Merchant, DealCategory, DealRedemption |
| `news` | NewsArticle, NewsCategory, NewsTag, NewsletterSubscriber |
| `events` | Event, EventCategory, EventImage |
| `advertisements` | AdPlacement, AdBanner, AdImpression, AdClick |
| `messaging` | Conversation, Message (+ WebSocket ChatConsumer) |
| `reviews` | Review (generic — covers agents, agencies, providers, merchants, freelancers) |
| `moderation` | Report, SpamPattern, BlockedIP, BlockedUser, UserBlock |

---

## Auth flow

1. Register: `POST /api/v1/accounts/register/`
2. Request OTP: `POST /api/v1/accounts/otp/request/`
3. Verify OTP: `POST /api/v1/accounts/otp/verify/`
4. Login (JWT): `POST /api/v1/accounts/login/`  → returns `access` + `refresh`
5. Refresh: `POST /api/v1/accounts/token/refresh/`
6. Social login: `POST /api/v1/accounts/social/google/` (or facebook / apple)

All protected endpoints require `Authorization: Bearer <access_token>`.

---

## WebSocket

Connect: `ws://localhost/ws/chat/<conversation_id>/`  
Auth: pass JWT as query param `?token=<access_token>`  

Send message:
```json
{ "message": "Hello!" }
```

Receive broadcast:
```json
{ "type": "chat_message", "message": "Hello!", "sender_id": 42, "timestamp": "..." }
```


<!-- git init -->
git add . & git add -f frontend/dist/ & git commit -m "first commit" & git push -u origin main

git branch -M main
git remote add origin https://github.com/muhammadhamoud/barmha-backend.git
git push -u origin main






$env:PYTHONIOENCODING="utf-8"
python -X utf8 manage.py dumpdata core.Governorate core.GovernorateTranslation core.Location core.LocationTranslation --indent 2 --settings=config.settings.production --output core_locations_fixture.json



ng build --configuration production


source /home/hamoudsc/virtualenv/barmha.com/3.12/bin/activate && cd /home/hamoudsc/barmha.com

git clone https://github.com/muhammadhamoud/barmha-backend.git

