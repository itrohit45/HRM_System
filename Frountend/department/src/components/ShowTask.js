import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import axios from "axios";

function ShowTask(){
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    

    const { allTasks, setAllTasks } = useContext(TaskContext);
    async function getTask(){
        const response = await axios.get('/add/show');
        setAllTasks(response.data);
        console.log(response);
    }
    useEffect(() => {
        getTask()
    },[]);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            try {
                await axios.delete(`/add/delete_task/${id}/`);
                alert("Task deleted successfully!");
                window.location.reload();  
            } catch (error) {
                console.error("Error deleting task:", error);
                alert("Failed to delete task.");
            }
        }
    };

    return(
        <div>
            <br/><br/>
             <table className="table table-striped" style={{width:1000}}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Task Title</th>
      <th scope="col">Task Description</th>
      <th scope="col">Task Priority</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Task Type</th>
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {allTasks.map((value, index) => {
        return (
            <tr key={index}>
      
      <td>{index + 1}</td>
      <td>{value.task_title}</td>
      <td>{value.task_description}</td>
      <td>{value.task_priority}</td>
      <td>{value.start_date}</td>
      <td>{value.end_date}</td>
      <td>{value.task_type}</td>
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success" to={`/task_update/${value.id}`}  style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger" onClick={() => handleDelete(value.id)}>Delete</Link></td>}
    </tr>
        )
    })}
    
    
  </tbody>  
</table>


        </div>
    )
};

export default ShowTask;