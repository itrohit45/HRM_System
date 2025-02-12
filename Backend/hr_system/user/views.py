from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from . serializers import UserSerializer
import random
from django.core.mail import send_mail
from django.conf import settings
from .models import OTP




# Create your views here.



@api_view(['POST'])
def sign_up(request):
    data = request.data
    print(data)
    
    try:
        user = User.objects.get(username=data['username'])
        message = 'false'
    except User.DoesNotExist:
        user = User.objects.create_user(data['username'], data['email'], data['password'])
        user.save()
        message = 'true'

    return Response({'message': message})



@api_view(['POST'])
def login_user(request):
    data = request.data
    print(data)
    myuser = authenticate(username = data['username'],password = data['password'])
    print(myuser)
    if myuser is not None:
        login(request,myuser)
    user = UserSerializer(myuser,many = False)    
    return Response(user.data) 

# @api_view(['POST'])
# def request_password_reset(request):
#     email = request.data.get('email')
#     try:
#         user = User.objects.get(email=email)
#         otp = random.randint(100000, 999999)  # Generate a 6-digit OTP
#         OTP.objects.update_or_create(user=user, defaults={'otp': otp})

#         # Send OTP to the email
#         send_mail(
#             'Password Reset OTP',
#             f'Your OTP for password reset is {otp}',
#             settings.EMAIL_HOST_USER,
#             [email],
#             fail_silently=False,
#         )

#         return Response({'message': 'OTP sent to your email'}, status=200)
#     except User.DoesNotExist:
#         return Response({'message': 'Email not found'}, status=400)
#     except Exception as e:
#         return Response({'message': 'An error occurred', 'error': str(e)}, status=500)   


OTP

@api_view(['POST'])
def request_password_reset(request):
    email = request.data.get('email')
    try:
        user = User.objects.get(email=email)
        otp = random.randint(100000, 999999)  # Generate a 6-digit OTP
        OTP.objects.update_or_create(user=user, defaults={'otp': otp})

        print(f"Generated OTP: {otp}")  # Debug print to see if OTP is generated
        # Send OTP to the email
        send_mail(
            'Password Reset OTP',
            f'Your OTP for password reset is {otp}',
            settings.EMAIL_HOST_USER,
            [email],
            fail_silently=False,
        )
        print(f"Email sent to: {email}")  # Debug print to see if email function is called

        return Response({'message': 'OTP sent to your email'}, status=200)
    except User.DoesNotExist:
        return Response({'message': 'Email not found'}, status=400)
    except Exception as e:
        print(f"Error: {str(e)}")  # Debug print to catch any other exceptions
        return Response({'message': 'An error occurred', 'error': str(e)}, status=500)
