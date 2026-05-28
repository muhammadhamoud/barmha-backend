from allauth.socialaccount.adapter import DefaultSocialAccountAdapter


class BarmhaSocialAccountAdapter(DefaultSocialAccountAdapter):
    def populate_user(self, request, sociallogin, data):
        user = super().populate_user(request, sociallogin, data)
        if not user.pk:
            user.user_type = "individual"
        return user

    def save_user(self, request, sociallogin, form=None):
        user = super().save_user(request, sociallogin, form)
        extra = sociallogin.account.extra_data
        if not user.social_avatar_url:
            picture_url = (
                extra.get("picture")
                or extra.get("profile_picture_url")
            )
            if picture_url:
                user.social_avatar_url = picture_url
                user.save(update_fields=["social_avatar_url"])
        return user
