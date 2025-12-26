from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AIProject, AIInsight
from .serializers import AIProjectSerializer, AIInsightSerializer

@api_view(['GET'])
def get_ai_projects(request):
    projects = AIProject.objects.all().order_by('-created_at')
    serializer = AIProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_ai_insights(request):
    insights = AIInsight.objects.all().order_by('-published_date')
    serializer = AIInsightSerializer(insights, many=True)
    return Response(serializer.data)