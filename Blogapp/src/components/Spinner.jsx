import React from 'react'
import "./Spinner.css"

function Spinner() {


  return (
    <div className="active">
       <div className='spinner'></div>
       <div className='mt-5 font-bold text-2xl'>LOADING</div>
    </div>
  );
}

export default Spinner