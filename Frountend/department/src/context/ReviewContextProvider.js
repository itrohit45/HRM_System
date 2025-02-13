
import { useState } from "react";
import React from 'react'
import ReviewContext from "./ReviewContext";

function ReviewContextProvider({children}) {
    const [allReviews,setAllReviews] = useState([]);
  return (
    <ReviewContext.Provider value={{allReviews,setAllReviews}}>
    {children}
    </ReviewContext.Provider>
  )
}

export default ReviewContextProvider;