#urls.py
from django.contrib import admin
from django.urls import path
from pdfs import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('fetch-book/<str:pdf_id>/', views.fetch_book, name='fetch-book'),
]