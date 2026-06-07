from imagekit import ImageSpec, register
from imagekit.processors import ResizeToFill, ResizeToFit, Transpose


class WebPThumbnail(ImageSpec):
    processors = [Transpose(), ResizeToFill(120, 120)]
    format = "WEBP"
    options = {"quality": 68}


class WebPCard(ImageSpec):
    processors = [Transpose(), ResizeToFill(360, 240)]
    format = "WEBP"
    options = {"quality": 72}


class WebPDetail(ImageSpec):
    processors = [Transpose(), ResizeToFit(900, 675)]
    format = "WEBP"
    options = {"quality": 78}


class WebPOG(ImageSpec):
    processors = [Transpose(), ResizeToFill(1200, 630)]
    format = "WEBP"
    options = {"quality": 85}


class WebPAvatar(ImageSpec):
    processors = [Transpose(), ResizeToFill(160, 160)]
    format = "WEBP"
    options = {"quality": 72}


class WebPLogo(ImageSpec):
    processors = [Transpose(), ResizeToFit(240, 240)]
    format = "WEBP"
    options = {"quality": 72}


register.generator("core:thumbnail", WebPThumbnail)
register.generator("core:card",      WebPCard)
register.generator("core:detail",    WebPDetail)
register.generator("core:og",        WebPOG)
register.generator("core:avatar",    WebPAvatar)
register.generator("core:logo",      WebPLogo)
