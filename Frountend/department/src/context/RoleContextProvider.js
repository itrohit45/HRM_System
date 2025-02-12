import RoleContext from "./RoleContext";
import { useState } from "react";

import React from 'react'

function RoleContextProvider({children}) {
    const [allRoles,setAllRoles] = useState([]);
  return (
    <RoleContext.Provider value={{allRoles,setAllRoles}}>
    {children}
    </RoleContext.Provider>
  )
}

export default RoleContextProvider;