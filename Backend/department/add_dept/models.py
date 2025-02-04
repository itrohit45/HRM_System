from django.db import models

# Create your models here.

class Department(models.Model):
    department_name = models.CharField(max_length=100)
    department_description = models.CharField(max_length=300, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField(max_length=50, default='True')

    def __str__(self):
        return self.department_name
    

class Employee(models.Model):
    employeee_name = models.CharField(max_length=255)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.employeee_name    
