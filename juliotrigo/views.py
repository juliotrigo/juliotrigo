from django.shortcuts import render

from django.utils.timezone import now

def home(request):
    """Home page."""
    return render(request, 'home.html', {'time': str(now().hour) + ':' + str(now().minute)})