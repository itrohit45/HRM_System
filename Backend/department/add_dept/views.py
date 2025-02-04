from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Department, Employee
from . serializers import DepartmentSerializers



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


   