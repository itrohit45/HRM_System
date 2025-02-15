from rest_framework import serializers 
from . models import Department, Role, Employee, Task, TaskAssignment, Review, Leave


class DepartmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class RoleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = '__all__' 

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ['first_name', 'last_name']        


class EmployeeSerializers(serializers.ModelSerializer):
    dept_id = DepartmentSerializers() 
    role_id = RoleSerializers()
    reporting_manager_id = ManagerSerializer(read_only=True)
    class Meta:
        model = Employee
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'


class TaskAssignmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = TaskAssignment
        fields = '__all__'  


             

class ReviewSerializer(serializers.ModelSerializer):
    employee_name = serializers.SerializerMethodField()

    class Meta:
        model = Review
        fields = '__all__' 

    def get_employee_name(self, obj):
        return f"{obj.employee.first_name} {obj.employee.last_name}"
        

class LeaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leave
        fields = '__all__'

