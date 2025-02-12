import axios from "axios";
import { useEffect, useState } from "react";


function AddEmployee(){
  axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

  const [departments, setDepartments] = useState([]);
  const [roles, setRoles] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

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

  async function add(e){
    e.preventDefault();
    const data = new FormData()
    data.append('first_name',e.target.first_name.value)
    data.append('last_name',e.target.last_name.value)
    data.append('email',e.target.email.value)
    data.append('mobile',e.target.mobile.value)
    data.append('role',e.target.role.value)
    data.append('department',e.target.department.value)
    data.append('manager',e.target.manager.value)
    data.append('doj',e.target.doj.value)
    data.append('username',e.target.username.value)
    data.append('password',e.target.password.value)
    

    const response = await axios.post('/add/add_employee',data);
    if(response.status === 200){
      setSuccessMessage("Employee Added successfully!");

      setTimeout(() => {
        setSuccessMessage("");
        window.location = '/employee';
      }, 1000);
    } 
    console.log(response)
  }

    return(
        <div>
            <br/>
            
            
          <center>
          <div style={{width: 400, borderRadius:10, height: 965}} className='container mt-5 shadow-lg border border-success'>
            <h4>ADD EMPLOYEE</h4>
            <br/>
            <form encType="multipart/form-data" onSubmit={add}>
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Frist Name</label>
      <input type="text" className="form-control" required name="first_name"/>
      
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Last Name</label>
      <input type="text" className="form-control" required name="last_name"/> 
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Email</label>
      <input type="email" className="form-control" required name="email"/> 
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Mobile</label>
      <input type="tel" className="form-control" required name="mobile"/> 
    </div>
    <div className="mb-3" style={{width: 300}}>
        <br/>
      <select
          name="role"
          required style={{width: 300, borderRadius:5, height:37}}
        >
          <option value="">Select Role</option>
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
          required style={{width: 300, borderRadius:5, height:37}}
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
          required style={{width: 300, borderRadius:5, height:37}}
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
      <input type="date" className="form-control" required name="doj"/> 
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Username</label>
      <input type="text" className="form-control" required name="username"/> 
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Set Password</label>
      <input type="password" className="form-control" required name="password"/> 
    </div>
     
    
    <button type="submit" className="btn btn-primary">Add Employee</button>
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


export default AddEmployee;