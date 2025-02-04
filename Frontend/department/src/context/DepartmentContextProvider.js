import DepartmentContext from "./DepartmentContext";
import { useState } from "react";

import React from 'react'

function DepartmentContextProvider({children}) {
    const [allDepartments,setAllDepartments] = useState([]);
  return (
    <DepartmentContext.Provider value={{allDepartments,setAllDepartments}}>
    {children}
    </DepartmentContext.Provider>
  )
}

export default DepartmentContextProvider;