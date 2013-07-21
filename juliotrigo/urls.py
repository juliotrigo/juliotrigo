from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'juliotrigo.views.home', name='home'),
    # url(r'^juliotrigo/', include('juliotrigo.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
)

# Copied and changed from django.conf.urls.i18n
urlpatterns += patterns('',
    url(r'^i18n/setlang/$', 'accounts.views.custom_i18n', name='set_language'),
)
