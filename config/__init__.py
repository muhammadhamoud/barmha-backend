# TODO: Uncomment for full production (requires a running Celery worker + Redis broker).
#       On shared hosting Celery is unavailable — tasks that would run async
#       (OTP SMS, expiry jobs, saved-search alerts) simply don't run.
# from .celery import app as celery_app
# __all__ = ("celery_app",)


import pymysql

pymysql.version_info = (2, 2, 1, "final", 0)
pymysql.__version__ = "2.2.1"
pymysql.install_as_MySQLdb()