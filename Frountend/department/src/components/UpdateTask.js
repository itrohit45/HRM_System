import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateTask(){

    const [task,setTask] = useState({});
    const { id } = useParams();
    const data = useParams();
    const [successMessage, setSuccessMessage] = useState('');
    async function getTask(){
        const response = await axios.get(`/add/update_task/${data.id}`)
        setTask(response.data);
    }
    
    useEffect(() => {
      getTask();
    }, [id]);

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevDept) => ({
          ...prevDept,
          [name]: value,
        }));
      };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(`/add/update_task/${id}/`, task);
        if (response.status === 200){
          setSuccessMessage("Task Updated successfully!");
    
          setTimeout(() => {
            setSuccessMessage("");
            window.location = '/task';
          }, 1000);
        }
        
      };

    return(
        <div>
            <br/>
            
            
            <center>
            <div style={{width: 400, borderRadius:10, height: 680}} className='container mt-5 shadow-lg border border-success'>
              <h4>Task Update</h4>
              <br/>
              <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Task Title :</label>
        <input type="text" className="form-control" required name="task_title" value={task.task_title} onChange={handleChange}/>
        
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Enter Task Description :</label>
        <textarea cols="60" rows="3" type="text" className="form-control" required name="task_description" value={task.task_description} onChange={handleChange}/>
      </div>
      
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="task_priority"
            required style={{width: 300, borderRadius:5, height:37}} value={task.task_priority} onChange={handleChange}
          >
            <option value="">Select Task Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            
          </select>
      </div>
      
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Start Date :</label>
        <input type="date" className="form-control" required name="start_date" value={task.start_date} onChange={handleChange}/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">End Date :</label>
        <input type="date" className="form-control" required name="end_date" value={task.end_date} onChange={handleChange}/> 
      </div>
      <br/>
      <div className="mb-3" style={{width: 300}}>
        <select 
            name="task_type"
            required style={{width: 300, borderRadius:5, height:37}} value={task.task_type} onChange={handleChange}
          >
            <option value="" >Select Task Type</option>
            <option value="Individual">Individual</option>
            <option value="Team">Team</option>
           
          </select>
      </div>
      <br/>
      
       
      
      <button type="submit" className="btn btn-primary">Update Task</button>
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


export default UpdateTask;