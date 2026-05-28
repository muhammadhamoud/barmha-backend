from imagekit import ImageSpec, register
from imagekit.processors import ResizeToFill, ResizeToFit, Transpose


class WebPThumbnail(ImageSpec):
    processors = [Transpose(), ResizeToFill(150, 150)]
    format = "WEBP"
    options = {"quality": 75}


class WebPCard(ImageSpec):
    processors = [Transpose(), ResizeToFill(480, 320)]
    format = "WEBP"
    options = {"quality": 82}


class WebPDetail(ImageSpec):
    processors = [Transpose(), ResizeToFit(1024, 768)]
    format = "WEBP"
    options = {"quality": 85}


class WebPOG(ImageSpec):
    processors = [Transpose(), ResizeToFill(1200, 630)]
    format = "WEBP"
    options = {"quality": 88}


class WebPAvatar(ImageSpec):
    processors = [Transpose(), ResizeToFill(200, 200)]
    format = "WEBP"
    options = {"quality": 80}


class WebPLogo(ImageSpec):
    processors = [Transpose(), ResizeToFit(300, 300)]
    format = "WEBP"
    options = {"quality": 80}


register.generator("core:thumbnail", WebPThumbnail)
register.generator("core:card",      WebPCard)
register.generator("core:detail",    WebPDetail)
register.generator("core:og",        WebPOG)
register.generator("core:avatar",    WebPAvatar)
register.generator("core:logo",      WebPLogo)
