# Employee Management System

## Overview

This project is an **Employee Management System** built using **Django (Backend) and React (Frontend)**. It allows Admins, HR, and Employees to manage departments, roles, employees, tasks, and reviews efficiently.

## Features

- **Admin**: Manages departments, roles, and employees.
- **HR**: Assigns tasks, reviews employee performance.
- **Employees**: View assigned tasks and submit work updates.

## Technologies Used

- **Backend**: Django Rest Framework
- **Frontend**: React.js
- **Database**: MySQL

---

## Installation and Setup

### Backend Setup (Django)

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Managemenr_system.git
   cd Managemenr_system
   ```
2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # Mac/Linux
   venv\Scripts\activate  # Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Apply migrations:
   ```bash
   python manage.py migrate
   ```
5. Start the server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup (React)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

---

## Usage Guide

### 1. Admin Role

- Can **create, update, and delete** departments and roles.
- Can **add employees** and assign roles.

### 2. HR Role

- Can **assign tasks** to employees.
- Can **review employee performance** and update status.

### 3. Employee Role

- Can **view assigned tasks**.
- Can **update task completion status**.

---

## API Endpoints

| Endpoint            | Method | Description                  |
| ------------------- | ------ | ---------------------------- |
| `/api/departments/` | GET    | Get all departments          |
| `/api/roles/`       | GET    | Get all roles                |
| `/api/employees/`   | GET    | Get all employees            |
| `/api/task/`        | GET    | Get all tasks                |
| `/api/task-assign/` | POST   | Assign a task to an employee |

---

## Troubleshooting

- If you face **database connection issues**, check `settings.py` and update database credentials.
- If frontend API calls fail, ensure **Django server** is running.

---

## Contribution

Feel free to fork and improve the project. Submit a pull request with enhancements.

---

## License

This project is open-source under the **MIT License**.


