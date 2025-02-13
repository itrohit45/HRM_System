from django.urls import path
from . import views



urlpatterns = [
    path('',views.showDepartment,name='showDepartment'),
    path('createdepartment',views.createDeparment,name='createdepartment'),
    path('update_department/<str:id>/',views.update_department,name='update_department'),
    path('delete_department/<str:id>/',views.delete_department, name='delete_department'),


    path('search/<str:name>',views.searchDepartmentByName,name='search'),
    path('roles',views.showRoles,name='roles'),
    path('create_role',views.createRole,name='create_role'),
    path('update_role/<str:id>/',views.update_role,name='update_role'),
    path('delete_role/<str:id>/',views.delete_role, name='delete_role'),


    path('employee',views.showEmployee,name='employee'),

    path('get_departments/',views.get_departments,name='get_departments'),
    path('get_roles/',views.get_roles,name='get_roles'),
    path('get_employees/',views.get_employees,name='get_employees'),

    path('add_employee',views.addEmployee,name='add_employee'),
    path('update_employee/<str:id>/',views.update_employee,name='update_employee'),

    path('create_task',views.create_Task,name='create_task'),
    path('get_task/',views.get_Task,name='get_task'),
    path('task_assigned_create',views.task_assigned_create,name='task_assigned_create'),

    path('show_task',views.showTaskAssignments,name='show_task'),
    path('update_task/<str:id>/',views.update_Task,name='update_task'),

    path('show',views.showTask,name='show'),
    path('delete_task/<int:id>/', views.delete_task, name='delete_task'),

    path('show_review',views.show_Review,name='show_review'),
]