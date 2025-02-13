import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskContext from "../context/TaskContext";
import axios from "axios";

function Task(){

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

    
    
    const { allTasks, setAllTasks } = useContext(TaskContext);
    async function getTask(){
        const response = await axios.get('/add/show_task');
        setAllTasks(response.data);
        console.log(response);
    }
    useEffect(() => {
        getTask()
    },[]);
    return(
        <div>
            <div><br/><br/>
            {localStorage.getItem('superuser') === 'true' && <Link to="/create_task" className="btn btn-primary" style={{ marginRight: '50px', marginLeft: '10px' }}>Create Task</Link>}
            {localStorage.getItem('superuser') === 'true' && <Link to="/task-assigned" className="btn btn-primary" style={{ marginRight: '50px' }}>Task Assignment</Link>}
            {localStorage.getItem('superuser') === 'true' && <Link to="/task" className="btn btn-primary" style={{ marginRight: '50px' }}>Leave Management</Link>}
            {localStorage.getItem('superuser') === 'true' && <Link to="/show_review" className="btn btn-primary">Prformance Review</Link>}
            </div>
            <table style={{ 
    border: '1px solid #ccc', 
    borderCollapse: 'collapse', 
    marginTop: '20px', 
    textAlign: 'center', 
    width: 'auto' 
}}>
    <tr>
        <td style={{ border: '1px solid #ccc', padding: '8px 15px' }}>
            <Link className="btn btn-link" to='/' style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: '16px' }}>Previous</Link>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '8px 15px' }}>
            <Link className="btn btn-link" style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: '16px' }}>1</Link>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '8px 15px' }}>
            <Link className="btn btn-link" style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: '16px' }}>2</Link>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '8px 15px' }}>
            <Link className="btn btn-link" style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: '16px' }}>3</Link>
        </td>
        <td style={{ border: '1px solid #ccc', padding: '8px 15px' }}>
            <Link className="btn btn-link" style={{ textDecoration: 'none', border: 'none', background: 'none', fontSize: '16px' }}>Next</Link>
        </td>
    </tr>
</table>
   <br/>
   <table className="table table-striped" style={{width:1200}}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Task Title</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">See Details</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
    </tr>
  </thead>
  <tbody className="table-group-divider">
    
{allTasks.map((value, index) => {
        return (
            <tr key={index}>
       <td>{index + 1}</td>
      <td>{value.employee_name}</td>
      <td>{value.task_title}</td>
      <td>{value.start_date}</td>
      <td>{value.end_date}</td>
      <td> <Link className="btn btn-info" to='/'>
            See Details
          </Link></td>
      <td>{value.status}</td>
      <td><Link className="btn btn-success" to='/'>
            Mark Completed
          </Link></td>
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success" to='/show_task' style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger" to='/show_task'>Delete</Link></td>}
    </tr>
        )
    })}
    
    
  </tbody>  
</table>


        </div>
    )
};


export default Task;