from django.urls import path
from .views import get_ai_projects, get_ai_insights, request_consultation, register_user, login_user

urlpatterns = [
    path('projects/', get_ai_projects, name='projects'),
    path('insights/', get_ai_insights, name='insights'),
    path('consultation/', request_consultation, name='consultation'),
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
]