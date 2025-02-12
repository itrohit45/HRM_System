import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RoleContext from "../context/RoleContext";
import axios from "axios";

function Roles(){

  axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  const [successMessage, setSuccessMessage] = useState('');
  
  const { allRoles, setAllRoles } = useContext(RoleContext);
  async function getRole(){
    const response = await axios.get('/add/roles');
    setAllRoles(response.data);
    console.log(response)
  }
  useEffect(() =>{
    getRole()
  },[]);

  const handleSoftDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to make this Role inactive? Any employees linked to this Role will also become inactive unless reassigned to another Role.");

    if (confirmDelete) {

            const response = await axios.post(`/add/delete_role/${id}/`);
            
            if (response.status === 200) {
                
                setAllRoles(allRoles.filter(role => role.id !== id));
                setSuccessMessage('Role has been marked as inactive successfully.');

                setTimeout(() => {
                  setSuccessMessage('');  
              }, 3000);
            } 
    }
};


    return(
        <>
        <div>
          
          <div><br/><br/>
          {localStorage.getItem('superuser') === 'true' && <Link to="/create_role" className="btn btn-success" style={{ marginLeft: '50px' }}>Create Role</Link>}
          </div>
          <br/>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <table className="table table-striped" style={{width:1000}}>
<thead>
  <tr>
    <th scope="col">Sr.No</th>
    <th scope="col">Role Name</th>
    <th scope="col">Role Description</th>
    {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
    {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
  </tr>
</thead>
<tbody className="table-group-divider">
  {allRoles.map((value, index) => {
      return (
          <tr key={index}>
    
    <td>{index + 1}</td>
    <td>{value.role_name}</td>
    <td>{value.role_description}</td>
    {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success" to={`/update_role/${value.id}`}  style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
    {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger" onClick={() => handleSoftDelete(value.id)}>Delete</Link></td>}
  </tr>
      )
  })}
  
  
</tbody>  
</table>

      </div>
        </>
    )
};


export default Roles;