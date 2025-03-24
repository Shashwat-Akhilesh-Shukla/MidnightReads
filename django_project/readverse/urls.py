from django.urls import path
from pdfs import views
from pdfs.Signupview import signup
from pdfs.LoginView import login
from django.contrib import admin
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('signup/', signup, name='signup'),  # Correct import for signup
    path('login/', login, name='login'),  # Correct import for login
    path('fetch-book/<str:pdf_id>/', views.fetch_book, name='fetch-book'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
