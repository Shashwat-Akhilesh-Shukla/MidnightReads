from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.contrib.auth.models import User
import pymongo
from .serializers import UserSerializer

# MongoDB Connection
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["Readverse-app"]
users_collection = db["users"]

@api_view(['POST'])
def signup(request):
    # Check if the username already exists
    if users_collection.find_one({"username": request.data['username']}):
        return Response({'detail': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)

    # Insert new user into MongoDB
    user_data = {
        'username': request.data['username'],
        'email': request.data['email'],
        'password': request.data['password'],  # In production, hash passwords for security
    }

    users_collection.insert_one(user_data)
    return Response({'detail': 'User registered successfully'}, status=status.HTTP_201_CREATED)
