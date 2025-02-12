import axios from "axios";
import { useState } from "react";

function TaskCreate(){
    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    
    
        const [successMessage, setSuccessMessage] = useState('');
        async function create(e){
        e.preventDefault();
        const data = new FormData()
        data.append('task_title',e.target.task_title.value)
        data.append('task_description',e.target.task_description.value)
        data.append('task_priority',e.target.task_priority.value)
        data.append('start_date',e.target.start_date.value)
        data.append('end_date',e.target.end_date.value)
        data.append('task_type',e.target.task_type.value)
        
        const response = await axios.post('/add/create_task',data);
        if(response.status === 200){
          setSuccessMessage("Task Created successfully!");
    
          setTimeout(() => {
            setSuccessMessage("");
            window.location = '/task';
          }, 1000);
        } 
        console.log(response)
      }

    return(
        <div>

<br/>
            
            
            <center>
            <div style={{width: 400, borderRadius:10, height: 680}} className='container mt-5 shadow-lg border border-success'>
              <h4>Task Creation</h4>
              <br/>
              <form encType="multipart/form-data" onSubmit={create}>
              <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Task Title :</label>
        <input type="text" className="form-control" required name="task_title" placeholder="Enter Task Title"/>
        
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Enter Task Description :</label>
        <textarea cols="60" rows="3" type="text" className="form-control" required name="task_description"/>
      </div>
      
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="task_priority"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value="">Select Task Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            
          </select>
      </div>
      
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Start Date :</label>
        <input type="date" className="form-control" required name="start_date"/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">End Date :</label>
        <input type="date" className="form-control" required name="end_date"/> 
      </div>
      <br/>
      <div className="mb-3" style={{width: 300}}>
        <select 
            name="task_type"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value="" >Select Task Type</option>
            <option value="Individual">Individual</option>
            <option value="Team">Team</option>
           
          </select>
      </div>
      <br/>
      
       
      
      <button type="submit" className="btn btn-primary">Create Task</button>
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


export default TaskCreate;