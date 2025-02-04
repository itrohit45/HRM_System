from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from . serializers import UserSerializer




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


