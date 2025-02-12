
import { useState } from "react";
import React from 'react'
import TaskContext from "./TaskContext";

function TaskContextProvider({children}) {
    const [allTasks,setAllTasks] = useState([]);
  return (
    <TaskContext.Provider value={{allTasks,setAllTasks}}>
    {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider;