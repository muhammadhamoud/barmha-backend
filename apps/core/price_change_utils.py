"""
Utility to fire price-change notifications.
Call notify_price_change(content_type, listing_id, old_price, new_price, currency, listing_title)
from a pre_save signal after detecting that price changed.
"""
from __future__ import annotations


def notify_price_change(
    content_type: str,
    listing_id: int,
    old_price,
    new_price,
    currency: str,
    title_text: str,
    action_url: str = "",
):
    """
    Create a Notification for every user who has favourited this listing.
    content_type must match Favourite.CONTENT_TYPES (e.g. 'property', 'vehicle', 'classified').
    """
    try:
        if old_price is None or new_price is None or old_price == new_price:
            return

        from apps.accounts.models import Favourite
        from apps.core.models import Notification

        fans = Favourite.objects.filter(
            content_type=content_type,
            object_id=listing_id,
        ).select_related("user")

        direction_ar = "انخفض" if new_price < old_price else "ارتفع"
        direction_en = "dropped" if new_price < old_price else "increased"

        for fav in fans:
            title_ar = f"تغيير سعر: {title_text}"
            title_en = f"Price change: {title_text}"
            body_ar  = f"السعر {direction_ar} من {old_price:,} إلى {new_price:,} {currency}"
            body_en  = f"Price {direction_en} from {old_price:,} to {new_price:,} {currency}"

            n = Notification(
                recipient  = fav.user,
                notif_type = "price_change",
                action_url = action_url,
            )
            n.save()
            n.set_current_language("ar"); n.title = title_ar; n.body = body_ar; n.save()
            n.set_current_language("en"); n.title = title_en; n.body = body_en; n.save()
    except Exception:
        pass  # never crash the listing save
