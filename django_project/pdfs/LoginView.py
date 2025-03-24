from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
import pymongo

# MongoDB Connection
client = pymongo.MongoClient("mongodb://localhost:27017")
db = client["Readverse-app"]
users_collection = db["users"]

@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # Fetch user from MongoDB
    user = users_collection.find_one({"username": username})

    if user and user['password'] == password:  # In production, use password hashing
        # Dummy token, in production you should generate JWT or similar
        return Response({
            'token': 'dummy-jwt-token',
        }, status=status.HTTP_200_OK)

    return Response({'detail': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
