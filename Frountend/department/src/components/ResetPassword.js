function ResetPassword(){
    return(
        <div>
             <br/>
          <br/>
          <br/><br/>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 230}} className='container mt-5 shadow-lg border border-success'>
            <form encType="multipart/form-data">
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label"><b>New Password</b></label>
      <input type="text" className="form-control" required />
      
    </div>
    <div className="mb-3" style={{width: 300}}>
      <label  className="form-label"><b>Confirm New Password</b></label>
      <input type="text" className="form-control" required />
      
    </div>
    
    <button type="submit" className="btn btn-primary">Reset Password</button>
</form>
</div>

</center>

        </div>
    )
};


export default ResetPassword;