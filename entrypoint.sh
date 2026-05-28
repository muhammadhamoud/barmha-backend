#!/bin/sh
set -e

echo "==> Waiting for database..."
until python -c "
import django, os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings.development')
django.setup()
from django.db import connection
connection.ensure_connection()
" 2>/dev/null; do
  sleep 1
done

echo "==> Running migrations..."
python manage.py migrate --noinput

if [ "$COLLECT_STATIC" = "true" ]; then
  echo "==> Collecting static files..."
  python manage.py collectstatic --noinput --clear
fi

exec "$@"
