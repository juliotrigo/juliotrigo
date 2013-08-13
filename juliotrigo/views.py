from django.shortcuts import render

from django.utils.timezone import now, localtime

def home(request):
    """Home page."""
    bar_time = localtime(now())  # Converts the time in UTC to the current time zone
    return render(request, 'home.html', {'time': bar_time.strftime("%H:%M")})