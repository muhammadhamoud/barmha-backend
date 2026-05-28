# TODO: Uncomment for full production (requires a running Celery worker + Redis broker).
#       On shared hosting Celery is unavailable — tasks that would run async
#       (OTP SMS, expiry jobs, saved-search alerts) simply don't run.
# from .celery import app as celery_app
# __all__ = ("celery_app",)
