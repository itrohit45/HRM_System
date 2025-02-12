import{ Link} from 'react-router-dom';

function Otp(){
    return(
        <div>
             <br/>
          <br/>
          <br/><br/>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 190}} className='container mt-5 shadow-lg border border-success'>
            <h2>Enter OTP</h2>
            <p style={{color: 'green'}}>Check your email for the OTP</p>
            <form encType="multipart/form-data">
            <div className="mb-3" style={{width: 300}}>
      <input type="text" className="form-control" placeholder="One Time Password"required />
    </div>
    
    <Link className="btn btn-primary" to='/newpassword' >Submit</Link>
</form>
</div>

</center>
         
        </div>
    )
}

export default Otp;