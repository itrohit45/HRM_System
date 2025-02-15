from django.contrib import admin
from . models import Department, Role, Employee, Task, TaskAssignment, Review, Leave

# Register your models here.

admin.site.register(Department)
admin.site.register(Role)
admin.site.register(Employee)
admin.site.register(Task)
admin.site.register(TaskAssignment)
admin.site.register(Review)
admin.site.register(Leave)
