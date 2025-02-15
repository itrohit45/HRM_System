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
    

class Role(models.Model):
      
    role_name = models.CharField(max_length=100)  
    role_description = models.CharField(max_length=200)  
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)
    status = models.BooleanField(max_length=50, default='True')  

    def __str__(self):
        return self.role_name  


class Employee(models.Model):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    mobile = models.CharField(max_length=100)
    dept_id = models.ForeignKey(Department, on_delete=models.CASCADE)
    role_id = models.ForeignKey(Role, on_delete=models.CASCADE)
    reporting_manager_id = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    date_of_joining = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f'{self.first_name} {self.last_name}'   



class Task(models.Model):
    HIGH = 'High'
    MEDIUM = 'Medium'
    LOW = 'Low'
    
    PRIORITY_CHOICES = [
        (HIGH, 'High'),
        (MEDIUM, 'Medium'),
        (LOW, 'Low'),
    ]
    
    INDIVIDUAL = 'Individual'
    TEAM = 'Team'
    
    TASK_TYPE_CHOICES = [
        (INDIVIDUAL, 'Individual'),
        (TEAM, 'Team'),
    ]
   
    task_title = models.CharField(max_length=100)  
    task_description = models.CharField(max_length=300)
    task_priority = models.CharField(
        max_length=200, 
        choices=PRIORITY_CHOICES
    )  
    start_date = models.DateField() 
    end_date = models.DateField() 
    task_type = models.CharField(
        max_length=50,
        choices=TASK_TYPE_CHOICES
    )  
    created_at = models.DateTimeField(auto_now_add=True)  
    updated_at = models.DateTimeField(auto_now=True)  
    
    def __str__(self):
        return self.task_title  



class TaskAssignment(models.Model):
    
    PENDING = 'Pending'
    IN_PROGRESS = 'In progress'
    COMPLETED = 'Completed'
    
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (IN_PROGRESS, 'In progress'),
        (COMPLETED, 'Completed'),
    ]
      
    task = models.ForeignKey('Task', on_delete=models.CASCADE) 
    employee = models.ForeignKey('Employee', on_delete=models.CASCADE, related_name='assignments')  
    assigned_by = models.ForeignKey('Employee', on_delete=models.CASCADE, related_name='assigned_tasks') 
    assigned_date = models.DateTimeField(auto_now_add=True)  
    status = models.CharField(
        max_length=200,
        choices=STATUS_CHOICES,
        default=PENDING
    )  
    completed_at = models.DateTimeField(null=True, blank=True)  
    
    def __str__(self):
        return f"Assignment {self.task.task_title}"   



class Review(models.Model):
    PERIOD_CHOICES = [
        ('Monthly', 'Monthly'),
        ('Quarterly', 'Quarterly'),
        ('Annual', 'Annual'),
    ]
    
    review_title = models.CharField(max_length=255)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    review_date = models.DateField()
    period = models.CharField(max_length=20, choices=PERIOD_CHOICES)
    rating = models.IntegerField(default=1)
    comment = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.review_title
    




class Leave(models.Model):
    LEAVE_TYPES = [
        ('SL', 'Sick Leave'),
        ('CL', 'Casual Leave'),
        ('PL', 'Paid Leave'),
        ('LWP', 'Leave Without Pay'),
    ]

    STATUS_CHOICES = [
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
        ('pending', 'Pending'),
    ]

   
    employeeid = models.ForeignKey('Employee', on_delete=models.CASCADE)  
    leave_type = models.CharField(max_length=10, choices=LEAVE_TYPES)
    reason = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField()
    total_days = models.IntegerField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    approved_by = models.ForeignKey('Employee', on_delete=models.CASCADE, related_name='approved_leaves', null=True, blank=True)

    def __str__(self):
        return f"{self.employeeid.first_name} - {self.leave_type} ({self.start_date} to {self.end_date})"





