from django.urls import path
from . import views



urlpatterns = [
    path('',views.showDepartment,name='showDepartment'),
    path('createdepartment',views.createDeparment,name='createdepartment'),
    path('update_department/<str:id>/',views.update_department,name='update_department'),
    path('delete_department/<str:id>/',views.delete_department, name='delete_department'),
    path('search/<str:name>',views.searchDepartmentByName,name='search')
    
]