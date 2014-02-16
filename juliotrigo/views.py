# -*- coding: utf-8 -*-

"""Website's views."""

from django.shortcuts import render
from django.utils.timezone import now, localtime

from juliotrigo import __version__


def home(request):
    """Render the home page."""
    bar_time = localtime(now())  # Converts the UTC time to the current TZ
    version = __version__
    return render(request, 'home.html', {'time': bar_time.strftime("%H:%M"),
                                         'version': version})
