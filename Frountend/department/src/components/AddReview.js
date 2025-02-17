import axios from "axios";
import { useEffect, useState } from "react";

function AddReview(){

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
   
      const [employees, setEmployees] = useState([]); 
      const [successMessage, setSuccessMessage] = useState('');   
      useEffect(() => {
        async function fetchData() {

          const employeesResponse = await axios.get('/add/get_employees/');

          setEmployees(employeesResponse.data);
           
        }
        fetchData();
      }, []);

      
  async function add(e){
    e.preventDefault();
    const data = new FormData()
    data.append('review_title',e.target.review_title.value)
    data.append('employee',e.target.employee.value)
    data.append('review_date',e.target.review_date.value)
    data.append('period',e.target.period.value)
    data.append('rating',e.target.rating.value)
    data.append('comment',e.target.comment.value)
  
    

    const response = await axios.post('/add/add_review',data);
    if(response.status === 200){
      setSuccessMessage("Review Added successfully!");

      setTimeout(() => {
        setSuccessMessage("");
        window.location = 'show_review';
      }, 1000);
    } 
    console.log(response)
  }


    return(
        <div>
             <br/>
            
            
            <center>
            <div style={{width: 400, borderRadius:10, height: 660}} className='container mt-5 shadow-lg border border-success'>
              <h4>Add Review</h4>
              <br/>
              <form encType="multipart/form-data" onSubmit={add}>
              <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Review Title :</label>
        <input type="text" className="form-control" required name="review_title"/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Select Employee :</label>
        <select
            name="employee"
            required style={{width: 300, borderRadius:5, height:37}}
          >
            <option value="">Open this select menu :</option>
            {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.first_name} {emp.last_name}
                    </option>
                  ))}
          </select>
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Review Date</label>
        <input type="date" className="form-control" required name="review_date"/> 
      </div>

      <div className="mb-3" style={{width: 300}}>
      <label  className="form-label">Review Period :</label>
        <select
            name="period"
            required style={{width: 300, borderRadius:5, height:37}}>
            <option value="">Select Period</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
            <option value="Annual">Annual</option>            
          </select>
      </div>
      
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Enter Rating :</label>
        <input type="number" name="rating" min="1" max="10" className="form-control"/> 
      </div>
      <div className="mb-3" style={{width: 300}}>
        <label  className="form-label">Review Comment :</label>
        <textarea name="comment"  placeholder="Review Comment" className="form-control"></textarea>

      </div>
       
      
      <button type="submit" className="btn btn-primary">Add Review</button>
  </form>
  </div>
  {successMessage && (
            <div style={{ marginTop: 10, color: "green", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )}
  </center>
  
  <br/><br/><br/>

        </div>
    )
};


export default AddReview;