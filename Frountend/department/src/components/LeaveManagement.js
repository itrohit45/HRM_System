import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import LeaveContext from "../context/LeaveContext";
import axios from "axios";


function LeaveManagement(){

    axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    

    const { allLeaves, setAllLeaves } = useContext(LeaveContext);
    async function getLeave(){
        const response = await axios.get('/add/show_leave');
        setAllLeaves(response.data);
        console.log(response);
    }
    useEffect(() => {
        getLeave()
    },[]);
    return(
        <div>
            <br/><br/><br/>
            <div>
                <label style={{height: 90, width: 350, backgroundColor: 'red', marginRight: '40px', marginLeft: '170px', color: 'whitesmoke'}}><br/><b style={{marginLeft: '20px'}}> PL </b><br/> <b style={{marginLeft: '20px'}}>7</b></label>   <label style={{height: 90, width: 350, backgroundColor: 'green', marginRight: '40px', color: 'whitesmoke'}}><br/><b style={{marginLeft: '20px'}}> CL </b><br/> <b style={{marginLeft: '20px'}}>3</b></label>   <label style={{height: 90, width: 350, backgroundColor: "#FFD700", marginRight: '100px', color: 'whitesmoke'}}><br/><b style={{marginLeft: '20px'}}> SL </b><br/> <b style={{marginLeft: '20px'}}>4</b></label>   
                
            </div>
            <br/><br/><br/>
            {localStorage.getItem('username') && localStorage.getItem('superuser') === 'false' && <Link to="/apply_leave" className="btn btn-primary" style={{ marginRight: '50px', marginLeft: '170px' }}>Aply Leave</Link> }
            <table className="table table-striped" style={{width:1000, marginLeft: '300px' }}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Leave Reason</th>
      <th scope="col">Leave Type</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Status</th>
      <th scope="col">Edit</th>
      
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {allLeaves.map((value, index) => {
        return (
            <tr key={index}>
      
      <td>{index + 1}</td>
      <td>{value.reason}</td>
      <td>{value.leave_type}</td>
      <td>{value.start_date}</td>
      <td>{value.end_date}</td>
      <td>{value.status}</td>
      <td><Link className="btn btn-success" style={{backgroundColor: "#FFD700",color:"white"}} >Edit</Link></td>
    </tr>
        )
    })}
    
    
  </tbody>  
</table>


        </div>
    )
}


export default LeaveManagement;