import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeContext from "../context/EmployeeContext";
import axios from "axios";

function Employee(){

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        
    
        const { allEmployees, setAllEmployees } = useContext(EmployeeContext);
        async function getEmployee(){
            const response = await axios.get('/add/employee');
            setAllEmployees(response.data);
            console.log(response);
        }
        useEffect(() => {
            getEmployee()
        },[]);


    return(
        <div>
            <div><br/><br/>
            {localStorage.getItem('superuser') === 'true' && <Link to="/addemployees" className="btn btn-success" style={{ marginLeft: '50px' }}>Add Employee</Link>}
            </div>
            <br/>

            <table className="table table-striped" style={{width:1000}}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Department</th>
      <th scope="col">Role</th>
      <th scope="col">Reporting Manager</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {allEmployees.map((value, index) => {
        return (
            <tr key={index}>
      
      <td>{index + 1}</td>
      <td>{value.first_name}</td>
      <td>{value.last_name}</td>
      <td>{value.email}</td>
      <td>{value.mobile}</td>
      <td>{value.dept_id.department_name}</td>
      <td>{value.role_id.role_name}</td>
      <td>{value.reporting_manager_id ? `${value.reporting_manager_id.first_name} ${value.reporting_manager_id.last_name}` : 'No manager'}</td>
      <td>{value.username}</td>
      <td>{value.password}</td>

      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success" to={`/update_employee/${value.id}`}  style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger">Delete</Link></td>}
    </tr>
        )
    })}
    
    
  </tbody>  
</table>

        </div>
    )
};

export default Employee;