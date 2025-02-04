# HRM (Human Resource Management) System

This project is a Human Resource Management (HRM) System built with Django (for the backend) and React (for the frontend). It allows managing departments and employees, performing CRUD operations, and searching for departments.

## Features

### Backend (Django):
- **Department Management**: 
  - Create, Read, Update, and Delete departments.
  - Handle soft delete (mark department as inactive).
  - Department search by name.
- **Employee Management**: 
  - Assign employees to departments (this part is not fully integrated in the views).
- **API**: 
  - Built using Django Rest Framework (DRF).

### Frontend (React):
- **Department CRUD Interface**:
  - Form for creating and updating departments.
  - Table view of departments with options to edit and delete.
- **Search Feature**:
  - Search departments by name.
- **Authentication**:
  - Login and Signup for the users.

## Tech Stack

- **Backend**: Django, Django Rest Framework, MySQL
- **Frontend**: React
- **Database**: MySQL
- **Other Libraries**:
  - Axios (for API calls)
  - React Router (for navigation)
  - Bootstrap (for styling)

## Prerequisites

### Backend Setup (Django)
1. Install Python dependencies:
   
   pip install -r requirements.txt
  

2. Set up MySQL database:
   - Database: `hrm_data`
   - Username: `root`
   - Password: `Rohya@254361`
   - Host: `127.0.0.1`
   - Port: `3306`

3. Run database migrations:
  
   python manage.py migrate
  

4. Create a superuser :
 
   python manage.py createsuperuser
  

5. Start the Django development server:

   python manage.py runserver
  

   The backend will be running at `http://127.0.0.1:8000/`.

### Frontend Setup (React)
1. Navigate to the `frontend/` directory:
  
   cd frontend
 

2. Install Node.js dependencies:
  
   npm install
  

3. Run the React development server:
  
   npm start
  

   The frontend will be running at `http://localhost:3000/`.

## API Endpoints

### Department API Endpoints
- **GET** `/add`: List all departments
- **POST** `/add/createdepartment`: Create a new department
- **GET** `/add/update_department/{id}`: Get department details by ID
- **POST** `/add/update_department/{id}`: Update department details
- **POST** `/add/delete_department/{id}`: Soft delete (mark department inactive)
- **GET** `/add/search/{name}`: Search department by name

### Authentication Endpoints
- **POST** `/user/signup`: Sign up a new user
- **POST** `/user/login`: Log in an existing user

## How to Use

1. Open the app in your browser. The homepage will display a list of departments.
2. You can search for departments by name or create new departments (if logged in as a superuser).
3. Update or delete departments by clicking the respective buttons.
4. Create a new user and log in to access the app.

## Contribution

1. Fork the repository.
2. Clone your forked repository.
3. Make changes to the code.
4. Test the changes.
5. Create a pull request with a description of your changes.
