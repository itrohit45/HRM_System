from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Department, Employee, Role, Task, TaskAssignment, Review, Leave
from . serializers import DepartmentSerializers, RoleSerializers, EmployeeSerializers, TaskSerializer, TaskAssignmentSerializers, ReviewSerializer, LeaveSerializer
from rest_framework import status
from datetime import datetime
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated


#department

@api_view(['GET'])
def showDepartment(request):
    departments = Department.objects.all()
    departments = DepartmentSerializers(departments,many = True)
    return Response(departments.data)


@api_view(['POST'])
def createDeparment(request):
    print(request.data)
    Department.objects.create(department_name = request.data['department_name'],department_description = request.data['department_description'])
    return Response('Department Created')


@api_view(['GET', 'POST'])
def update_department(request, id):
    if request.method == 'GET':
        department = Department.objects.get(id = id)
        department = DepartmentSerializers(department,many = False)
        return Response(department.data)
    

    elif request.method == 'POST':
        print(request.data)
        department = Department.objects.get(id = id)
        department.department_name = request.data['department_name']
        department.department_description = request.data['department_description']
        department.save()
        return Response('Department Updated')

@api_view(['POST'])
def delete_department(request, id):
    
    department = Department.objects.get(id=id)
    employees = Employee.objects.filter(department=department)

    if employees.exists():
        return Response('Warning: There are employees linked to this department. Please reassign them before making the department inactive.')

    department.status = False 
    department.save()
    return Response('Department has been marked as inactive.')




@api_view(['GET'])
def searchDepartmentByName(request, name):
    try:
        department = Department.objects.get(department_name=name)
        department = DepartmentSerializers(department, many=False)
        return Response(department.data)

    except Department.DoesNotExist:
        return Response("Department not found")

    except Exception as e:
        return Response({"message": "An error occurred while processing your request"})



#roles

@api_view(['GET'])
def showRoles(request):
    roles = Role.objects.all()
    roles = RoleSerializers(roles,many = True)
    return Response(roles.data)   


@api_view(['POST'])
def createRole(request):
    print(request.data)
    Role.objects.create(role_name = request.data['role_name'],role_description = request.data['role_description'])
    return Response('Role Created')




@api_view(['GET', 'POST'])
def update_role(request, id):
    if request.method == 'GET':
        role = Role.objects.get(id = id)
        role = RoleSerializers(role,many = False)
        return Response(role.data)
    

    elif request.method == 'POST':
        print(request.data)
        role = Role.objects.get(id = id)
        role.role_name = request.data['role_name']
        role.role_description = request.data['role_description']
        role.save()
        return Response('Role Updated')
    

@api_view(['POST'])
def delete_role(request, id):
    
    role = Role.objects.get(id=id)
    employees = Employee.objects.filter(role=role)

    if employees.exists():
        return Response('Warning: There are employees linked to this Role. Please reassign them before making the Role inactive.')

    role.status = False 
    role.save()
    return Response('Role has been marked as inactive.')    


#employee

@api_view(['GET'])
def showEmployee(request):
    employees = Employee.objects.all()
    employees = EmployeeSerializers(employees,many = True)
    return Response(employees.data) 


@api_view(['GET'])
def get_departments(request):
    departments = Department.objects.all()
    serializer = DepartmentSerializers(departments, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_roles(request):
    roles = Role.objects.all()
    serializer = RoleSerializers(roles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_employees(request):
    employees = Employee.objects.all()
    serializer = EmployeeSerializers(employees, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def addEmployee(request):
    print(request.data)
    dept_id = Department.objects.get(id=request.data['department']) 
    role_id = Role.objects.get(id=request.data['role'])
    reporting_manager_id = Employee.objects.get(id=request.data['manager']) if request.data.get('manager') else None
    Employee.objects.create(first_name = request.data['first_name'],last_name = request.data['last_name'],email = request.data['email'],mobile = request.data['mobile'],role_id = role_id,dept_id = dept_id,reporting_manager_id = reporting_manager_id,date_of_joining = request.data['doj'],username = request.data['username'],password = request.data['password'])
    return Response('Employee Added Successfully')



@api_view(['GET', 'POST'])
def update_employee(request, id):
    if request.method == 'GET':
        employee = Employee.objects.get(id = id)
        employee = EmployeeSerializers(employee,many = False)
        return Response(employee.data)
    

    elif request.method == 'POST':
        print(request.data)
        
        employee = Employee.objects.get(id = id)
        dept_id = Department.objects.get(id=request.data['department']) 
        role_id = Role.objects.get(id=request.data['role'])
        reporting_manager_id = Employee.objects.get(id=request.data['manager']) if request.data.get('manager') else None
        employee.first_name = request.data['first_name']
        employee.last_name = request.data['last_name']
        employee.email = request.data['email']
        employee.mobile = request.data['mobile']
        employee.role_id = role_id
        employee.dept_id = dept_id
        employee.reporting_manager_id = reporting_manager_id
        employee.date_of_joining = request.data['doj']
        employee.username = request.data['username']
        employee.password = request.data['password']
        employee.save()
        return Response('Employee Updated')
    


#task 

@api_view(['GET'])
def showTask(request):
    tasks = Task.objects.all()
    tasks = TaskSerializer(tasks,many = True)
    return Response(tasks.data) 
  


@api_view(['POST'])
def create_Task(request):
    try:
        print(request.data)
 
        Task.objects.create(
            task_title=request.data['task_title'],
            task_description=request.data['task_description'],
            task_priority=request.data['task_priority'],
            start_date=request.data['start_date'],
            end_date=request.data['end_date'],
            task_type=request.data['task_type']
        )
        
        return Response('Task Created Successfully')

    except KeyError as e:
        return Response({'error': f'Missing required field: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  
    


@api_view(['GET'])
def get_Task(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)    

@api_view(['POST'])
def task_assigned_create(request):
    print(request.data)
    task = Task.objects.get(id=request.data['task'])
    employee = Employee.objects.get(id=request.data['employee']) if request.data.get('employee') else None
    assigned_by = Employee.objects.get(id=request.data['assigned']) if request.data.get('assigned') else None
    TaskAssignment.objects.create(task = task,employee = employee,assigned_by = assigned_by,status = request.data['status'],completed_at = request.data['date'])
    return Response('Task Assigned Successfully')



@api_view(['GET'])
def showTaskAssignments(request):
    task_assignments = TaskAssignment.objects.select_related('task', 'employee', 'assigned_by').all()
    
    data = []
    for assignment in task_assignments:
        data.append({
            "employee_name": f"{assignment.employee.first_name} {assignment.employee.last_name}",  
            "task_title": assignment.task.task_title,
            "task_description": assignment.task.task_description,
            "task_priority": assignment.task.task_priority,
            "start_date": assignment.task.start_date,
            "end_date": assignment.task.end_date,
            "task_type": assignment.task.task_type,
            "status": assignment.status,
            "assigned_by": f"{assignment.assigned_by.first_name} {assignment.assigned_by.last_name}",  
            "assigned_date": assignment.assigned_date,
            "completed_at": assignment.completed_at,
        })
    
    return Response(data)


@api_view(['GET', 'POST'])
def update_Task(request, id):
    try:
        task = Task.objects.get(id=id)
    except Task.DoesNotExist:
        return Response('Task not found', status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        task_serializer = TaskSerializer(task)
        return Response(task_serializer.data)

    elif request.method == 'POST':
        task.task_title = request.data.get('task_title', task.task_title)
        task.task_description = request.data.get('task_description', task.task_description)
        task.task_priority = request.data.get('task_priority', task.task_priority)
        task.start_date = request.data.get('start_date', task.start_date)
        task.end_date = request.data.get('end_date', task.end_date)
        task.task_type = request.data.get('task_type', task.task_type)
        task.save()
        return Response('Task updated successfully', status=status.HTTP_200_OK) 


@api_view(['DELETE'])
def delete_task(request, id):
    try:
        task = Task.objects.get(id=id)
        task.delete()
        return Response("Task deleted successfully", status=status.HTTP_200_OK)
    except Task.DoesNotExist:
        return Response( "Task not found", status=status.HTTP_404_NOT_FOUND) 
    

# review 



@api_view(['GET'])
def show_Review(request):
    reviews = Review.objects.all()
    reviews = ReviewSerializer(reviews,many = True)
    return Response(reviews.data) 


@api_view(['POST'])
def create_Review(request):
    try:
        print(request.data)
        employee = Employee.objects.get(id=request.data['employee'])
        Review.objects.create(
            
            review_title = request.data['review_title'],
            employee = employee,
            review_date = request.data['review_date'],
            period = request.data['period'],
            rating = request.data['rating'],
            comment = request.data['comment']
        )
        
        return Response('Review Added Successfully')

    except KeyError as e:
        return Response({'error': f'Missing required field: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  
    
    
    




# leave


@api_view(['GET'])
def show_Leave(request):
    leaves = Leave.objects.all()
    leaves = LeaveSerializer(leaves,many = True)
    return Response(leaves.data)

# @api_view(['POST'])
# def apply_Leave(request):
#     employee = Employee.objects.get(user=request.user)

#     Leave.objects.create(
#         employeeid=employee,
#         leave_type=request.data['leave_type'],
#         reason=request.data['reason_of_leave'],
#         start_date=request.data['from'],
#         end_date=request.data['to'],
#         total_days=(datetime.strptime(request.data['to'], "%Y-%m-%d").date() - datetime.strptime(request.data['from'], "%Y-%m-%d").date()).days + 1
#     )
#     return Response('Leave Applied Successfully')


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])  # Ensures user is logged in
# def get_logged_in_employee(request):
#     try:
#         employee = Employee.objects.get(user=request.user)  # Fetch employee from logged-in user
#         return Response({"id": employee.id, "name": employee.first_name})
#     except Employee.DoesNotExist:
#         return Response({"error": "Employee not found"}, status=404)

