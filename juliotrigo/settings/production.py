from juliotrigo.settings.defaults import *

DEBUG = False
TEMPLATE_DEBUG = DEBUG

ALLOWED_HOSTS = [
    '.juliotrigo.com', # Allow domain and subdomains
    '.juliotrigo.com.', # Also allow FQDN and subdomains
]