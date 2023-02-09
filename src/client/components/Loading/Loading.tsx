import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Loading = ({ size = 30 }) => { 
 return (
    <div
      className={`flex justify-center align-center pt-5 lg:pt-10`}
    >
      <div className="flex justify-center align-center">
        <CircularProgress size={size} /> 
      </div>
    </div>
 )
}

export default Loading;