from rest_framework import serializers
from .models import AIProject, AIInsight, ConsultationLead

class AIProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIProject
        fields = '__all__'

class AIInsightSerializer(serializers.ModelSerializer):
    class Meta:
        model = AIInsight
        fields = '__all__'

class ConsultationLeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsultationLead
        fields = '__all__'