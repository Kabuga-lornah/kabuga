from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from .models import AIProject, AIInsight, ConsultationLead
from .serializers import AIProjectSerializer, AIInsightSerializer, ConsultationLeadSerializer

@api_view(['GET'])
@permission_classes([AllowAny])
def get_ai_projects(request):
    projects = AIProject.objects.all().order_by('-created_at')
    serializer = AIProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_ai_insights(request):
    insights = AIInsight.objects.all().order_by('-published_date')
    serializer = AIInsightSerializer(insights, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([AllowAny])
def request_consultation(request):
    """Endpoint to save data from the Contact/Consultation form."""
    serializer = ConsultationLeadSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Consultation request submitted successfully!"}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """Simple registration logic."""
    data = request.data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=400)
    
    user = User.objects.create_user(username=username, password=password, email=email)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "message": "User registered successfully"}, status=201)

@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """Simple login logic returning a token."""
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)
    
    if user:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key})
    return Response({"error": "Invalid Credentials"}, status=401)