import axios from "axios";
import { useState } from "react";
import{ Link} from 'react-router-dom';

function Login(){
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
const [error,setError] = useState('');

    async function loginUser(e){
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const data = {
            username:username,
            password:password

        }
        const response = await axios.post('/user/login',data);
        if(response.data.username === ''){
            e.target.username.value = ''
            e.target.password.value = ''
            setError("Invalid username or password")
        }
        else{
            localStorage.setItem('username',response.data.username)
            localStorage.setItem('superuser',response.data.is_superuser)
            console.log(response.data)
            window.location = '/'
        }
        console.log(response);
        
    }
    return(
        <div> <br/>
             <center>
                <h1>Login</h1>
                <br/>
                <div className='container mt-5 shadow-lg border border-success' style={{width:380, borderRadius:10, height:260, background: 'linear-gradient( rgb(248, 168, 182), rgb(176, 176, 251))'}}>
                <form onSubmit={loginUser}>
                <div className="mb-3">
    <label className="form-label"><b>Username</b></label>
    <input type="text" className="form-control" id="username" aria-describedby="username" name="username" required/>
    
  </div>
  <div className="mb-3">
    <label className="form-label"><b>Password</b></label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" required/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
  <p className="mt-3"><Link to="/forget" className="text-danger"> Forget Password</Link></p>
</form>
</div>
<div>
    <br/>
    <br/>
    <Link to="/signup" style={{ color: 'blue', textDecoration: 'none', fontWeight: 'bold' }}> Don't Have an Account? Please Sign Up.</Link>
</div>
            </center>
<center>

{error !== '' && <p style={{color:'red'}}>{error}</p>}
</center>
        </div>
    )
}

export default Login;