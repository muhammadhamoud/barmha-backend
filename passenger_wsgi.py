"""
Passenger WSGI entry-point for cPanel / Phusion Passenger shared hosting.

Upload this file to your domain root (or the folder Passenger points to),
then set the following in cPanel's Python App configuration:
    Application startup file : passenger_wsgi.py
    Application Entry point  : application

The virtual environment must contain all packages from requirements.txt.
"""

"""
Passenger WSGI entry-point for cPanel / Phusion Passenger.
"""

# import os
# import sys
# from pathlib import Path

# BASE_DIR = Path(__file__).resolve().parent

# # Add project root to Python path.
# sys.path.insert(0, str(BASE_DIR))

# # Optional: if your manage.py is inside backend/
# # sys.path.insert(0, str(BASE_DIR / "backend"))

# # Load .env if python-dotenv is installed.
# try:
#     from dotenv import load_dotenv
#     load_dotenv(BASE_DIR / ".env")
# except Exception:
#     pass

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.production")

# from django.core.wsgi import get_wsgi_application

# application = get_wsgi_application()