import io
from django.http import FileResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token

# ReportLab imports for PDF generation
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter

from .models import AIProject, AIInsight, ConsultationLead, IntelligenceDiagnostic
from .serializers import (
    AIProjectSerializer, 
    AIInsightSerializer, 
    ConsultationLeadSerializer, 
    IntelligenceDiagnosticSerializer
)

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
        return Response({"message": "Consultation request submitted successfully!"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """Simple registration logic."""
    data = request.data
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    if User.objects.filter(username=username).exists():
        return Response({"error": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create_user(username=username, password=password, email=email)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({"token": token.key, "message": "User registered successfully"}, status=status.HTTP_201_CREATED)

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
    return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
@permission_classes([AllowAny])
def save_diagnostic(request):
    """Saves the diagnostic results and returns the ID for PDF generation."""
    serializer = IntelligenceDiagnosticSerializer(data=request.data)
    if serializer.is_valid():
        instance = serializer.save()
        return Response({"id": instance.id, "message": "Diagnostic saved."}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def download_diagnostic_pdf(request, diagnostic_id):
    """Generates a professional PDF report for the given diagnostic ID."""
    try:
        diag = IntelligenceDiagnostic.objects.get(id=diagnostic_id)
    except (IntelligenceDiagnostic.DoesNotExist, ValueError):
        return Response({"error": "Not found"}, status=status.HTTP_404_NOT_FOUND)

    # Create a file-like buffer to receive PDF data.
    buffer = io.BytesIO()
    p = canvas.Canvas(buffer, pagesize=letter)

    # Professional Branding
    p.setFont("Helvetica-Bold", 16)
    p.drawString(100, 750, "DEVIXA SYSTEM INTELLIGENCE REPORT")
    
    p.setFont("Helvetica", 10)
    p.drawString(100, 735, f"Report ID: {diag.id}")
    p.line(100, 725, 500, 725)

    # Results Section
    p.setFont("Helvetica-Bold", 12)
    p.drawString(100, 700, "SYSTEM PERFORMANCE METRICS")
    
    p.setFont("Helvetica", 11)
    p.drawString(100, 680, f"Architecture Maturity: {diag.arch_score}%")
    p.drawString(100, 660, f"Data Readiness: {diag.data_score}%")
    p.drawString(100, 640, f"Automation Potential: {diag.auto_score}%")
    p.drawString(100, 620, f"AI Readiness Index: {diag.ai_ready_score}%")

    # Strategic Insight
    p.setFont("Helvetica-Bold", 12)
    p.drawString(100, 580, "EXECUTIVE SUMMARY")
    p.setFont("Helvetica-Oblique", 11)
    
    summary = "Your system shows foundational stability but requires data restructuring before AI implementation."
    if diag.ai_ready_score < 40:
        summary = "Focus on Architecture & Data integrity. AI is currently high-risk for this profile."
    
    p.drawString(100, 560, summary)

    # Closing
    p.setFont("Helvetica", 9)
    p.drawString(100, 100, "Generated by Devixa Intelligence Suite | Engineering & AI Advisory")

    p.showPage()
    p.save()

    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename=f"Devixa_Intelligence_{diagnostic_id}.pdf")