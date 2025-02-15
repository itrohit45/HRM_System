// import axios from "axios";
// import { useEffect, useState } from "react";

function ApplyLeave(){
  // axios.defaults.xsrfCookieName = "csrftoken";
  // axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

  // const [successMessage, setSuccessMessage] = useState(''); 
  // const [employeeId, setEmployeeId] = useState(null);

  // useEffect(() => {
  //   async function fetchUser() {
  //     try {
  //       const response = await axios.get('/add/get_logged_in_employee/');  
  //       setEmployeeId(response.data.id);
  //     } catch (error) {
  //       console.error("Error fetching user:", error);
  //     }
  //   }
  //   fetchUser();
  // }, []);
   
  // async function add(e){
  //   e.preventDefault();
  //   const data = new FormData()
  //   data.append('leave_type',e.target.leave_type.value)
  //   data.append('reason_of_leave',e.target.reason_of_leave.value)
  //   data.append('from',e.target.from.value)
  //   data.append('to',e.target.to.value)

  //   const response = await axios.post('/add/apply_leave/', data);
  //   if(response.status === 200){
  //     setSuccessMessage("Leave Applyed successfully!");

  //     setTimeout(() => {
  //       setSuccessMessage("");
  //       window.location = '/leave';
  //     }, 1000);
  //   } 
  //   console.log(response)
  // }

    return(
        <div>

<br/>
            
            
            <center>
            <div style={{width: 400, borderRadius:10, height: 450}} className='container mt-5 shadow-lg border border-success'>
              <h4>Apply Leave</h4>
              <br/>
              <form encType="multipart/form-data">
      <div className="mb-3" style={{width: 300}}>
      
        <select
            name="leave_type"
            required style={{width: 300, borderRadius:5, height:37}}>
            <option value="">select Leave Type</option>
            <option value="SL">Sick Leave (SL)</option>
                <option value="CL">Casual Leave (CL)</option>
                <option value="PL">Paid Leave (PL)</option>
                <option value="LWP">Leave Without Pay (LWP)</option>
            
                 
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Reason of Leave :</label>
        <textarea name="reason_of_leave"  className="form-control"></textarea>

      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">From :</label>
        <input type="date" className="form-control" required name="from"/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">To :</label>
        <input type="date" className="form-control" required name="to"/> 
      </div>
      <button type="submit" className="btn btn-primary">Apply</button>
  </form>
  </div>
  {/* {successMessage && (
            <div style={{ marginTop: 10, color: "green", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )} */}
  </center>
  
  <br/><br/><br/>


        </div>
    )
};


export default ApplyLeave;