from rest_framework import serializers 
from . models import Department, Role, Employee, Task, TaskAssignment


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

        



