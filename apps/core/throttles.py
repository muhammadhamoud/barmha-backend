from rest_framework.throttling import UserRateThrottle, AnonRateThrottle


class ListingCreateThrottle(UserRateThrottle):
    scope = "listing_create"


class OTPThrottle(UserRateThrottle):
    scope = "otp_request"


class LoginThrottle(AnonRateThrottle):
    scope = "login"


class RegisterThrottle(AnonRateThrottle):
    scope = "register"


class ContactThrottle(AnonRateThrottle):
    scope = "contact"


class TokenRefreshThrottle(AnonRateThrottle):
    scope = "token_refresh"
