
import './App.css';
import CreateDepartment from './components/CreateDepartment';

import Navbar from './components/Navbar';
import { Route,Routes, } from 'react-router-dom';
import DepartmentContextProvider from './context/DepartmentContextProvider';
import UpdateDepartment from './components/UpdateDepartment';
import Login from './components/Login';
import Signup from './components/Signup';
import Roles from './components/Role';
import RoleContextProvider from './context/RoleContextProvider';
import Department from './components/Department';
import Home from './components/Home';
import CreateRole from './components/CreteRole';
import Update_Role from './components/UpdateRole';
import Employee from './components/Employee';
import EmployeeContextProvider from './context/EmployeeContectProvider';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import Otp from './components/Otp';
import Task from './components/Task';
import TaskCreate from './components/TaskCreate';
import Task_Assignment from './components/Task_Assignment';
import TaskContextProvider from './context/TaskContextProvider';
import UpdateTask from './components/UpdateTask';
import ShowTask from './components/ShowTask';
import ShowReview from './components/ShowReview';
import AddReview from './components/AddReview';
import ReviewContextProvider from './context/ReviewContextProvider';
import LeaveManagement from './components/LeaveManagement';
import LeaveContextProvider from './context/LeaveConextProvider';
import ApplyLeave from './components/ApplyLeave';







function App() {
  return (
    <div className="App">
      <DepartmentContextProvider>
      <RoleContextProvider> 
      <EmployeeContextProvider> 
      <TaskContextProvider>
      <ReviewContextProvider>
      <LeaveContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/department' element={<Department/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/create_department' element={<CreateDepartment/>}></Route>
        <Route path='/update/:id' element={<UpdateDepartment/>}></Route>
        <Route path='roles' element={<Roles/>}></Route>
        <Route path='create_role' element={<CreateRole/>}></Route>
        <Route path='/update_role/:id' element={<Update_Role/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/addemployees' element={<AddEmployee/>}></Route>
        <Route path='/update_employee/:id' element={<UpdateEmployee/>}></Route>
        <Route path='/forget' element={<ForgetPassword/>}></Route>
        <Route path='/newpassword' element={<ResetPassword/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='create_task' element={<TaskCreate/>}></Route>
        <Route path='/task-assigned' element={<Task_Assignment/>}></Route>
        <Route path='/task_update/:id' element={<UpdateTask/>}></Route>
        <Route path='/show_task' element={<ShowTask/>}></Route>
        <Route path='show_review' element={<ShowReview/>}></Route>
        <Route path='add_review' element={<AddReview/>}></Route>
        <Route path='/leave' element={<LeaveManagement/>}></Route>
        <Route path='/apply_leave' element={<ApplyLeave/>}></Route>
        
       
        
        
        
      
      </Routes>
      </LeaveContextProvider>
      </ReviewContextProvider>
      </TaskContextProvider> 
      </EmployeeContextProvider> 
      </RoleContextProvider>
      </DepartmentContextProvider>
      
    </div>
  );
}

export default App;
