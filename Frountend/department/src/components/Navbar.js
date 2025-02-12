import { useContext, useState } from "react";
import{ Link} from 'react-router-dom';
import DepartmentContext from "../context/DepartmentContext";
import axios from "axios";
import './Navbar.css';

function Navbar(){

  const {setAllDepartments} = useContext(DepartmentContext);
  const [errorMessage, setErrorMessage] = useState('');
  
  const searchDepartment = async (e) => {
    e.preventDefault();
    
    setErrorMessage('');
    const searchData = e.target.searchData.value;
    if (searchData.length !== 0){
    try {
      const response = await axios.get(`/add/search/${searchData}`);
      console.log(response.data)
      if (response.data === 'Department not found') {
        setErrorMessage(response.data);
      } else {
        setAllDepartments([response.data])

      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Department not found. Please try a different search.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      setAllDepartments([]);
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
    } 
  };

  function Logout(){
    localStorage.removeItem('username');
    window.location = '/login';
  }
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}><i class="bi bi-house"></i>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item" >
          <Link className="nav-link" to="/department" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
          Department</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/roles" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
          Roles</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/employee" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
          Employees</Link>
        </li>
        <li className="nav-item" >
          <Link className="nav-link" to="/task" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
          Task</Link>
        </li>

      {!localStorage.getItem('username') && <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
            New user?
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/signup"><i class="bi bi-person-plus"></i> Sign Up</Link></li>
            <li><Link className="dropdown-item" to="/login"><i class="bi bi-arrow-right-circle"></i> Login</Link></li>
          </ul>
        </li>}
        
        {localStorage.getItem('username') && <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '1.1rem', fontWeight: 'bold'}}>
            {localStorage.getItem('username')}
          </Link>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={Logout}> <i class="bi bi-box-arrow-right"></i>  Logout</button></li>
          </ul>
        </li>}
        
        
      </ul>
      
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} 

      <form className="d-flex" role="search" onSubmit={searchDepartment}>
        <input className="form-control me-2" name="searchData" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </div>
    )
};

export default Navbar;

