import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReviewContext from "../context/ReviewContext";

function ShowReview(){

    axios.defaults.xsrfCookieName = "csrftoken";
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    
      const [departments, setDepartments] = useState([]);
      const [employees, setEmployees] = useState([]); 
      useEffect(() => {
        async function fetchData() {
          const departmentsResponse = await axios.get('/add/get_departments/');  
          const employeesResponse = await axios.get('/add/get_employees/'); 

          setDepartments(departmentsResponse.data); 
          setEmployees(employeesResponse.data); 
        }
        fetchData();
      }, []);

      const { allReviews, setAllReviews } = useContext(ReviewContext);
    async function getReview(){
        const response = await axios.get('/add/show_review');
        setAllReviews(response.data);
        console.log(response);
    }
    useEffect(() => {
        getReview()
    },[]);

    return(
        <div>
            <br/><br/><br/>
            <div>
                {localStorage.getItem('superuser') === 'true' && <Link to="/add_review" className="btn btn-primary" style={{ marginRight: '200px', marginLeft: '30px' }}>Add Review</Link>}
                
      <select
          name="department"
          required style={{width: 300, borderRadius:5, height:37}}
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.department_name}
                  </option>
                ))}
        </select>
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

   <br/><br/>
             <table className="table table-striped" style={{width:1000}}>
  <thead>
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Employeee Name</th>
      <th scope="col">Review Title</th>
      <th scope="col">Review Date</th>
      <th scope="col">Review Period</th>
      <th scope="col">Rating</th>
      <th scope="col">Comments</th>
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Edit</th>}
      {localStorage.getItem('superuser') === 'true' && <th scope="col">Delete</th>}
    </tr>
  </thead>
  <tbody className="table-group-divider">
    {allReviews.map((value, index) => {
        return (
            <tr key={index}>
      
      <td>{index + 1}</td>
      <td>{value.employee_name}</td>
      <td>{value.review_title}</td>
      <td>{value.review_date}</td>
      <td>{value.period}</td>
      <td>{value.rating}</td>
      <td>{value.comment}</td>
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-success"  style={{backgroundColor: "#FFD700",color:"black"}}>Edit</Link></td>}
      {localStorage.getItem('superuser') === 'true' && <td><Link className="btn btn-danger">Delete</Link></td>}
    </tr>
        )
    })}
    
    
  </tbody>  
</table>      
   </div><br/><br/><br/>
   <div className="mb-3" style={{width: 300}}>
   <label  className="form-label" style={{marginLeft: '30px'}}>Filter By Employee</label>
   <select
          name="department"
          required style={{width: 300, borderRadius:5, height:37, marginLeft: '30px'}}
        >
          <option value="">Select Employee</option>
          {employees.map((emp) => (
                    <option key={emp.id} value={emp.id}>
                      {emp.first_name} {emp.last_name}
                    </option>
                  ))}
    </select>  
 
        </div>
        
        </div>
    )
};


export default ShowReview;