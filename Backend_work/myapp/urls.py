from django.urls import path
from .views import (
    get_ai_projects, 
    get_ai_insights, 
    request_consultation, 
    register_user, 
    login_user,
    save_diagnostic,          
    download_diagnostic_pdf   
)

urlpatterns = [
    path('projects/', get_ai_projects, name='projects'),
    path('insights/', get_ai_insights, name='insights'),
    path('consultation/', request_consultation, name='consultation'),
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    
    path('diagnostic/save/', save_diagnostic, name='save_diagnostic'),
    path('diagnostic/download/<uuid:diagnostic_id>/', download_diagnostic_pdf, name='download_pdf'),
]