import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateEmployee(){

    const [employee,setEmployee] = useState({});
    const { id } = useParams();
    const data = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    const [departments, setDepartments] = useState([]);
    const [roles, setRoles] = useState([]);
    const [employees, setEmployees] = useState([]);
    async function getEmployee(){
        const response = await axios.get(`/add/update_employee/${data.id}`)
        setEmployee(response.data);
    }
    
    useEffect(() => {
      getEmployee();
    }, [id]);

    useEffect(() => {
    
        async function fetchData() {
          
          const departmentsResponse = await axios.get('/add/get_departments/');
          const rolesResponse = await axios.get('/add/get_roles/');
          const employeesResponse = await axios.get('/add/get_employees/');
            
          setDepartments(departmentsResponse.data);
          setRoles(rolesResponse.data);
          setEmployees(employeesResponse.data);
           
        }
        fetchData();
      }, []);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prevDept) => ({
          ...prevDept,
          [name]: name === "role" || name === "department" || name === "manager" ? value : value,
          
        }));
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/add/update_employee/${id}/`, employee);
        if (response.status === 200){
          setSuccessMessage("Employee Updated successfully!");
    
          setTimeout(() => {
            setSuccessMessage("");
            window.location = '/employee';
          }, 1000);
        }
        
      };



    return(
        <div>
            <br/>
            
            
            <center>
            <div style={{width: 400, borderRadius:10, height: 965}} className='container mt-5 shadow-lg border border-success'>
              <h4>UPDATE EMPLOYEE</h4>
              <br/>
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Frist Name</label>
        <input type="text" className="form-control" required name="first_name" value={employee.first_name} onChange={handleChange}/>
        
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Last Name</label>
        <input type="text" className="form-control" required name="last_name" value={employee.last_name} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Email</label>
        <input type="email" className="form-control" required name="email" value={employee.email} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Mobile</label>
        <input type="tel" className="form-control" required name="mobile" value={employee.mobile} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="role"
            required style={{width: 300, borderRadius:5, height:37}} value={employee.role_id ? employee.role_id.id : ""}
            onChange={handleChange}>
            <option value="" >Select Role</option> 
            {roles.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.role_name} 
                                    </option>
                                ))}  
          </select>
      </div><br/>
      <div className="mb-3" style={{width: 300}}>
        <select
            name="department"
            required style={{width: 300, borderRadius:5, height:37}} value={employee.dept_id ? employee.dept_id.id : ""} onChange={handleChange}
          >
            <option value="">Select Department</option>
            {departments.map((dept) => (
                                    <option key={dept.id} value={dept.id}>
                                        {dept.department_name}
                                    </option>
                                ))}
          </select>
      </div><br/>
      <div className="mb-3" style={{width: 300}}>
        <select 
            name="manager"
            required style={{width: 300, borderRadius:5, height:37}} value={employee.reporting_manager_id ? employee.reporting_manager_id.id : ""} onChange={handleChange}
          >
            <option value="" >Reporting Manager</option>
            {employees.map((emp) => (
                                    <option key={emp.id} value={emp.id}>
                                        {emp.first_name} {emp.last_name}
                                    </option>
                                ))}
          </select>
      </div><br/>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Date Of Joining</label>
        <input type="date" className="form-control" required name="doj" value={employee.date_of_joining} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Username</label>
        <input type="text" className="form-control" required name="username" value={employee.username} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Set Password</label>
        <input type="password" className="form-control" required name="password" value={employee.password} onChange={handleChange}/> 
      </div>
       
      
      <button type="submit" className="btn btn-primary">Update Employee</button>
  </form>
  </div>
  {successMessage && (
            <div style={{ marginTop: 10, color: "green", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )}
  
  </center>
  

        </div>
    )
};


export default UpdateEmployee;