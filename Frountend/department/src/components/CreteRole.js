import axios from "axios";
import { useState } from "react";

function CreateRole(){

    axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


    const [successMessage, setSuccessMessage] = useState('');
    async function createRole(e){
    e.preventDefault();
    const data = new FormData()
    data.append('role_name',e.target.role_name.value)
    data.append('role_description',e.target.role_description.value)
    
    const response = await axios.post('/add/create_role',data);
    if(response.status === 200){
      setSuccessMessage("Role Created successfully!");

      setTimeout(() => {
        setSuccessMessage("");
        window.location = '/roles';
      }, 1000);
    } 
    console.log(response)
  }
    return(
        <>
         <br/>
          <br/>
          <center><div><h1>Create Role</h1></div></center>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 265}} className='container mt-5 shadow-lg border border-success'>
            <form encType="multipart/form-data" onSubmit={createRole}>
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Role Name</label>
      <input type="text" className="form-control" required name="role_name"/>
      
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Role Discription</label>
      <textarea type="text" cols="60" rows="3" className="form-control" required name="role_description"/>
    </div>
     
    
    <button type="submit" className="btn btn-primary">Create Role</button>
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



export default CreateRole;