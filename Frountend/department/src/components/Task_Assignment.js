import axios from "axios";
import { useEffect, useState } from "react";

function Task_Assignment(){
    axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";


  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  

  useEffect(() => {
    
    async function fetchData() {

      const tasksResponse = await axios.get('/add/get_task/');
      const employeesResponse = await axios.get('/add/get_employees/');
    
      setTasks(tasksResponse.data);
      setEmployees(employeesResponse.data);
       
    }
    fetchData();
  }, []);

  async function add(e){
    e.preventDefault();
    const data = new FormData()
    data.append('task',e.target.task.value)
    data.append('employee',e.target.employee.value)
    data.append('assigned',e.target.assigned.value)
    data.append('status',e.target.status.value)
    data.append('date',e.target.date.value)
    
    

    const response = await axios.post('/add/task_assigned_create',data);
    if(response.status === 200){
      setSuccessMessage("Task Assigned successfully!");

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
            <div style={{width: 400, borderRadius:10, height: 480}} className='container mt-5 shadow-lg border border-success'>
              <h4>Task Assignment</h4>
              <form encType="multipart/form-data" onSubmit={add}>
      
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="task"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value=""> Task </option>
            {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.task_title}
                  </option>
                ))}
            
            
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="employee"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value=""> Employee </option>
            {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.first_name} {emp.last_name}
                  </option>
                ))}
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="assigned"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value=""> Assigned By </option>
            {employees.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.first_name} {emp.last_name}
                  </option>
                ))}
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
          <br/>
        <select
            name="status"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value=""> Status </option>
            <option value="In_Progress ">In Progress</option>
            <option value="Completed">Completed</option>
            
            
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Completed At</label>
        <input type="date" className="form-control" required name="date"/> 
      </div>
    
      <button type="submit" className="btn btn-primary">Task Assignment</button>
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

export default Task_Assignment;