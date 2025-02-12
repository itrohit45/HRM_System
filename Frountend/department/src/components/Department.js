import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DepartmentContext from "../context/DepartmentContext";

function Department(){

    axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    const [successMessage, setSuccessMessage] = useState('');

    const { allDepartments, setAllDepartments } = useContext(DepartmentContext);
    async function getDepartment(){
        const response = await axios.get('/add');
        setAllDepartments(response.data);
        console.log(response);
    }
    useEffect(() => {
        getDepartment()
    },[]);

    const handleSoftDelete = async (id) => {
      const confirmDelete = window.confirm("Are you sure you want to make this department inactive? Any employees linked to this department will also become inactive unless reassigned to another department.");

      if (confirmDelete) {

              const response = await axios.post(`/add/delete_department/${id}/`);
              
              if (response.status === 200) {
                  
                  setAllDepartments(allDepartments.filter(department => department.id !== id));
                  setSuccessMessage('Department has been marked as inactive successfully.');

                  setTimeout(() => {
                    setSuccessMessage('');  
                }, 3000);
              } 
      }
  };

    

    return(
        <div>
          
            <div><br/><br/>
            {localStorage.getItem('superuser') === 'true' && <Link to="/create_department" className="btn btn-success"  style={{ marginLeft: '50px' }}>Create Department</Link>}
            </div>
            <br/>
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            <table className="table table-striped" style={{width:1000}}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Department Name</th>
      <th scope="col">Description</th>
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {allDepartments.map((value, index) => {
        return (
            <tr key={index}>
      
      <td>{index + 1}</td>
      <td>{value.department_name}</td>
      <td>{value.department_description}</td>
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success" to={`/update/${value.id}`}  style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger" onClick={() => handleSoftDelete(value.id)}>Delete</Link></td>}
    </tr>
        )
    })}
    
    
  </tbody>  
</table>

        </div>
    )
};

export default Department;



