import React from 'react';
import "./intro.css"
//import Me from "../../img/Me.jpeg";

const intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
      <div className="i-left-wrapper">
        <h2 className='i-intro'>Hello, My name is</h2>
        <h1 className='i-name'>Parul Srivastava</h1>
        <div className='i-title'>
            <div className="i-title-wrapper">
                <div className='i-title-item'>Web Designer</div>
                <div className='i-title-item'>UI/UX Designer</div>
                <div className='i-title-item'>Java</div>
                <div className='i-title-item'>Business Analysis</div>
                <div className='i-title-item'>Database Management</div>
                <div className='i-title-item'>Project Management</div>

        </div>

        </div>
        <div className='i-desc'>
            <b>PURSUING MS IN INFORMATION SYSTEMS FROM 
            NORTHEASTERN UNIVERSITY</b>
        
      </div> 
      </div>
      
      </div>
        <div className='i-right'>
         <img src="../img/Me.jpeg" alt=""className='i-img'></img> 
        </div>
      </div>
  );
}

export default intro