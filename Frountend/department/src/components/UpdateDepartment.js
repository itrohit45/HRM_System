import { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function UpdateDepartment(){

  const [department,setDepartment] = useState({});
  const { id } = useParams();
  const [successMessage, setSuccessMessage] = useState('');
  
  
    const data = useParams();
    async function getDepartment(){
        const response = await axios.get(`/add/update_department/${data.id}`)
        setDepartment(response.data);
    }
    
    useEffect(() => {
      getDepartment();
    }, [id]);
  
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setDepartment((prevDept) => ({
        ...prevDept,
        [name]: value,
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await axios.post(`/add/update_department/${id}/`, department);
      if (response.status === 200){
        setSuccessMessage("Department Updated successfully!");
  
        setTimeout(() => {
          setSuccessMessage("");
          window.location = '/department';
        }, 1000);
      }
      
    };


  return(
    <>
    <br/>
      <br/>
      <center><h1>Update Department</h1></center>
      <br/>
      <center>
      <div style={{width: 400, borderRadius:10, height: 265}} className='container mt-5 shadow-lg border border-success'>
        <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div className="mb-3" style={{width: 300}}>
  <label  className="form-label">Department Name</label>
  <input type="text" className="form-control" required name="department_name" value={department.department_name} onChange={handleChange}/>
  
</div>
<div className="mb-3" style={{width: 300}}>
  <label  className="form-label">Department Discription</label>
  <textarea cols="60" rows="3" type="text" className="form-control" required name="department_description" value={department.department_description} onChange={handleChange}/>
</div>
 

<button type="submit" className="btn btn-success">Update</button>
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
}

export default UpdateDepartment;