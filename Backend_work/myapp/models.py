from django.db import models

class AIProject(models.Model):
    """Stores your portfolio, specifically focusing on AI/ML integrations."""
    title = models.CharField(max_length=200)
    description = models.TextField()
    ai_tech_stack = models.CharField(max_length=200, help_text= "OpenAI, TensorFlow, LangChain")
    impact_metric = models.CharField(max_length=200, help_text="e.g., Reduced manual work by 40%")
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    live_link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class AIInsight(models.Model):
    """Powers a 'Live AI Insights' section on your site to show you know the trends."""
    topic = models.CharField(max_length=100)
    summary = models.TextField()
    relevance_to_kenya = models.TextField()
    published_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.topic

class ConsultationLead(models.Model):
    """The 'Request a Quote' table, but with fields for AI interest."""
    name = models.CharField(max_length=255)
    email = models.EmailField()
    business_type = models.CharField(max_length=100)
    wants_ai_automation = models.BooleanField(default=False)
    message = models.TextField()
    status = models.CharField(max_length=20, default='new') # new, contacted, closed

    def __str__(self):
        return f"{self.name} - {self.business_type}"