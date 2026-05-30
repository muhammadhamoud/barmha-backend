"""
Passenger WSGI entry-point for cPanel / Phusion Passenger shared hosting.

Upload this file to your domain root (or the folder Passenger points to),
then set the following in cPanel's Python App configuration:
    Application startup file : passenger_wsgi.py
    Application Entry point  : application

The virtual environment must contain all packages from requirements.txt.
"""

# import os
# import sys

# # Add the Django project root to Python's module search path.
# # Adjust this to wherever you upload the backend/ folder on the server,
# # e.g. /home/<cpanel_user>/barmha/backend/
# THIS_DIR = os.path.dirname(os.path.abspath(__file__))
# sys.path.insert(0, THIS_DIR)

# os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings.production")

# from django.core.wsgi import get_wsgi_application  # noqa: E402
# application = get_wsgi_application()


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