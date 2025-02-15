
import { useState } from "react";
import React from 'react'
import LeaveContext from "./LeaveContext";

function LeaveContextProvider({children}) {
    const [allLeaves,setAllLeaves] = useState([]);
  return (
    <LeaveContext.Provider value={{allLeaves,setAllLeaves}}>
    {children}
    </LeaveContext.Provider>
  )
}

export default LeaveContextProvider;