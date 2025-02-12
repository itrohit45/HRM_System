
import { useState } from "react";
import axios from "axios";


function ForgetPassword(){
    const [email, setEmail] = useState("");  // State to store email input
  const [error, setError] = useState("");   // State to store error message
  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/user/request_password_reset', { email });
      
      if (response.status === 200) {
        setSuccessMessage("OTP sent to your email. Please check your inbox.");
        setError(""); // Clear any previous error
        // Optionally, redirect user to OTP verification page
        setTimeout(() => {
          // Redirect to OTP page (e.g., for entering the OTP)
          window.location = "/otp";
        }, 3000);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Email not found or invalid.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setSuccessMessage(""); // Clear any previous success message
    }
  };

//     const [email, setEmail] = useState("");  // State to store email input
//   const [error, setError] = useState("");   // State to store error message
//   const [successMessage, setSuccessMessage] = useState(""); // State for success message

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('/user/request_password_reset', { email });
      
//       if (response.status === 200) {
//         setSuccessMessage("OTP sent to your email. Please check your inbox.");
//         setError(""); // Clear any previous error
//         // Optionally, redirect user to OTP verification page
//         setTimeout(() => {
//           // Redirect to OTP page (e.g., for entering the OTP)
//           window.location = "/otp";
//         }, 3000);
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError("Email not found or invalid.");
//       } else {
//         setError("An error occurred. Please try again later.");
//       }
//       setSuccessMessage(""); // Clear any previous success message
//     }
//   };


    return(
        <div>
             <br/>
          <br/>
          <br/><br/>
          <br/>
          <center>
          <div style={{width: 400, borderRadius:10, height: 135}} className='container mt-5 shadow-lg border border-success'>
            <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="mb-3" style={{width: 300}}>
      <label  className="form-label"><b>Username or Email Address</b></label>
      <input type="email" className="form-control" required name='email' value={email}
                onChange={(e) => setEmail(e.target.value)} />
      
    </div>
    
    <button type="submit" className="btn btn-primary">
              Request OTP
            </button>
</form>
</div>

</center>

<center>
        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            {error}
          </p>
        )}
        {successMessage && (
          <p style={{ color: "green", marginTop: "10px" }}>
            {successMessage}
          </p>
        )}
      </center>

        </div>
    )
};

export default ForgetPassword;