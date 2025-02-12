

# HR Management System

The **HR Management System** is an application built using Django for the backend and React for the frontend. The backend uses Django Rest Framework (DRF) to expose APIs, while the frontend is built with React and Axios for handling API calls. This system helps manage employees, roles, and departments, providing functionality for the admin to create, update, and delete records.

---

## Features

- **Departments**: Admin can create, read, update, and delete departments. A department can have many employees.
- **Roles**: Admin can create, read, update, and delete employee roles. Employees can be assigned specific roles.
- **Employees**: Admin can add, view, update, and delete employees. Employees have attributes like name, email, mobile, role, department, etc.
- **Authentication**: Users can log in and sign up, but only the admin can manage departments, roles, and employees.

---

## Technologies Used

### Backend:
- Django
- Django Rest Framework (DRF)
- PostgreSQL or any other DBMS

### Frontend:
- React
- React Router DOM
- Axios
- Context API (for state management)

---

## Setup Instructions

### Backend Setup (Django)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Setup the database and migrations:
   ```bash
   python manage.py migrate
   ```

5. Create a superuser (for Django admin access):
   ```bash
   python manage.py createsuperuser
   ```

6. Run the development server:
   ```bash
   python manage.py runserver
   ```

The backend API should now be running on `http://127.0.0.1:8000/`.

---

### Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

The frontend should now be running on `http://localhost:3000/`.

---

## How to Use the Application

### For Frontend (React):

1. **Login and Signup**:
   - Visit the `/login` page to log in.
   - If you don’t have an account, you can sign up using the `/signup` page.
   
   **Important**: Only the admin user will have access to create, update, and delete departments, roles, and employees.

2. **Department Management (Admin Only)**:
   - On the `/department` page, admin can view the list of departments.
   - Admin can create a new department via the `/create_department` page.
   - Admin can update an existing department via the `/update/:id` page.

3. **Role Management (Admin Only)**:
   - On the `/roles` page, admin can view the list of roles.
   - Admin can create a new role via the `/create_role` page.
   - Admin can update an existing role via the `/update_role/:id` page.

4. **Employee Management (Admin Only)**:
   - On the `/employee` page, admin can view the list of employees.
   - Admin can add a new employee via the `/addemployees` page.
   - Admin can update an existing employee via the `/update_employee/:id` page.

**Note**: Regular users cannot access any pages for creating or updating departments, roles, or employees.

---

## API Endpoints

### Departments:
- **GET `/api/departments/`**: Get all departments
- **POST `/api/departments/`**: Create a new department (Admin Only)
- **GET `/api/departments/{id}/`**: Get department details by ID
- **POST `/api/departments/{id}/`**: Update department details by ID (Admin Only)
- **POST `/api/departments/{id}/delete/`**: Mark department as inactive by ID (Admin Only)
- **GET `/api/departments/search/{name}/`**: Search department by name

### Roles:
- **GET `/api/roles/`**: Get all roles
- **POST `/api/roles/`**: Create a new role (Admin Only)
- **GET `/api/roles/{id}/`**: Get role details by ID
- **POST `/api/roles/{id}/`**: Update role details by ID (Admin Only)
- **POST `/api/roles/{id}/delete/`**: Mark role as inactive by ID (Admin Only)

### Employees:
- **GET `/api/employees/`**: Get all employees
- **POST `/api/employees/`**: Add a new employee (Admin Only)
- **GET `/api/employees/{id}/`**: Get employee details by ID
- **POST `/api/employees/{id}/`**: Update employee details by ID (Admin Only)

---

## Frontend Components

1. **CreateDepartment**: Form to create a new department (Admin Only).
2. **UpdateDepartment**: Form to update an existing department (Admin Only).
3. **Department**: Displays a list of all departments (Admin Only).
4. **CreateRole**: Form to create a new role (Admin Only).
5. **UpdateRole**: Form to update an existing role (Admin Only).
6. **Role**: Displays a list of all roles (Admin Only).
7. **Employee**: Displays a list of all employees (Admin Only).
8. **AddEmployee**: Form to add a new employee (Admin Only).
9. **UpdateEmployee**: Form to update an existing employee (Admin Only).
10. **Navbar**: Navigation bar for app routing.
11. **Login**: Form for user login.
12. **Signup**: Form for user signup.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new pull request.

