
import './App.css';
import CreateDepartment from './components/CreateDepartment';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route,Routes, } from 'react-router-dom';
import DepartmentContextProvider from './context/DepartmentContextProvider';
import UpdateDepartment from './components/UpdateDepartmen';
import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <div className="App">
      <DepartmentContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/department' element={<CreateDepartment/>}></Route>
        <Route path='/update/:id' element={<UpdateDepartment/>}></Route>
        
      
      </Routes>
      </DepartmentContextProvider>
      
    </div>
  );
}

export default App;
