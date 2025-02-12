import axios from "axios";
import { useState } from "react";
import{ Link} from 'react-router-dom';

function Signup(){
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

    async function signupUser(e){
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const data = {
            username:username,
            email:email,
            password:password
        }
        const response = await axios.post('/user/signup',data);
       
        if (response.status === 200) {
            if (response.data.message === 'true') {
              setSuccessMessage("Signup successful, log in now!");
    
              setTimeout(() => {
                window.location = '/login';
              }, 3000);
            } else {
              setErrorMessage("Username already exists");
    
              setTimeout(() => {
                window.location = '/signup';
              }, 3000);
            }
          }
        console.log(response);
        
    }
    return(
        <div>
        <center>
        <br/>
            <h1>SignUp</h1>
            <br/>
            

    <div  className='container mt-5 shadow-lg border border-success' style={{width:380, height:320, borderRadius:10, background: 'linear-gradient( rgb(255, 192, 203), rgb(168, 168, 250))'}}>
            <form onSubmit={signupUser} >
            <div className="mb-3">
<label  className="form-label"><b>Username</b></label>
<input type="text" className="form-control" id="username" aria-describedby="username" name="username" required/>

</div>
<div className="mb-3">
<label className="form-label"><b>Email address</b></label>
<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required/>

</div>
<div className="mb-3">
<label className="form-label"><b>Password</b></label>
<input type="password" className="form-control" id="exampleInputPassword1" name="password" minLength={8} required/>
</div>
<button type="submit" className="btn btn-primary">Signup</button>
</form>
</div>
<div>
  <br/>
  <Link to="/login" style={{ color: 'blue', textDecoration: 'none', fontWeight: 'bold' }}> Do you already have an account? Log in here.</Link>
</div>
        </center>
        <center>

        {successMessage && (
            <div style={{ marginTop: 10, color: "green", fontWeight: "bold" }}>
              {successMessage}
            </div>
          )}

        {errorMessage && (
            <div style={{ marginTop: 10, color: "red", fontWeight: "bold" }}>
              {errorMessage}
              
            </div>
          )} </center> 
    </div>
    )
}

export default Signup;