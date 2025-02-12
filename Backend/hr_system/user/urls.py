from django.urls import path
from . import views

urlpatterns = [
    path('signup',views.sign_up,name='signup'),
    path('login',views.login_user,name='login'),
    path('request_password_reset',views.request_password_reset,name='request_password_reset'),
    
]
