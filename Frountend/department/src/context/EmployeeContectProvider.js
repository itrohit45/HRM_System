
import EmployeeContext from "./EmployeeContext";
import { useState } from "react";

import React from 'react'

function EmployeeContextProvider({children}) {
    const [allEmployees,setAllEmployees] = useState([]);
  return (
    <EmployeeContext.Provider value={{allEmployees,setAllEmployees}}>
    {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider;