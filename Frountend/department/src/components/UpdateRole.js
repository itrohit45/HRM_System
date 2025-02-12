import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Update_Role(){
    const [role,setRole] = useState({});
    const { id } = useParams();
    const [successMessage, setSuccessMessage] = useState('');

  
  
    const data = useParams();
    async function getRole(){
        const response = await axios.get(`/add/update_role/${data.id}`)
        setRole(response.data);
    }
    
    useEffect(() => {
      getRole();
    }, [id]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setRole((prevrole) => ({
        ...prevrole,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post(`/add/update_role/${id}/`, role);
      if (response.status === 200){
        setSuccessMessage("Role Updated successfully!");
  
        setTimeout(() => {
          setSuccessMessage("");
          window.location = '/roles';
        }, 1000);
      }
      
    };


    return(
        <>
         <br/>
          <br/>
          <center><div><h1>Update Role</h1></div></center>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 265}} className='container mt-5 shadow-lg border border-success'>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Role Name</label>
      <input type="text" className="form-control" required name="role_name" value={role.role_name} onChange={handleChange}/>
      
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Role Discription</label>
      <textarea type="text" cols="60" rows="3" className="form-control" required name="role_description" value={role.role_description} onChange={handleChange}/>
    </div>
     
    
    <button type="submit" className="btn btn-primary">Update Role</button>
</form>
</div>
{successMessage && (
            <div style={{ marginTop: 10, color: "green", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )}


</center>
        </>
    )
};


export default Update_Role;