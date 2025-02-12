import axios from "axios";
import { useState } from "react";

function CreateDepartment(){
    axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


    const [successMessage, setSuccessMessage] = useState('');
    async function add(e){
    e.preventDefault();
    const data = new FormData()
    data.append('department_name',e.target.department_name.value)
    data.append('department_description',e.target.department_description.value)
    
    const response = await axios.post('/add/createdepartment',data);
    if(response.status === 200){
      setSuccessMessage("Deprtment Created successfully!");

      setTimeout(() => {
        setSuccessMessage("");
        window.location = '/department';
      }, 1000);
    } 
    console.log(response)
  }
  
    return(
        <>
        <br/>
          <br/>
          <center><h1>Create Department</h1></center>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 265}} className='container mt-5 shadow-lg border border-success'>
            <form encType="multipart/form-data" onSubmit={add}>
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Department Name</label>
      <input type="text" className="form-control" required name="department_name"/>
      
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Department Discription</label>
      <textarea cols="60" rows="3" type="text" className="form-control" required name="department_description"/>
    </div>
     
    
    <button type="submit" className="btn btn-success">Create</button>
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

export default CreateDepartment;

