import React from 'react';
import "./intro.css"
//import Me from "../../img/Me.jpeg";

const intro = () => {
  return (

    <div className='i' id='Intro'>
      
   
      <div className='i-left'>
      <div className="i-left-wrapper">
      <br/>
      <br/>
      <br/>
      <br/>

        <h2 className='i-intro'>Hello, My name is</h2>
          
        <h1 className='i-name'>Parul Srivastava</h1>
        <div className='i-title'>
            <div className="i-title-wrapper">
                <div className='i-title-item'>Web Designer</div>
                <div className='i-title-item'>Java</div>
                <div className='i-title-item'>Business Analytics</div>
                <div className='i-title-item'>Database Management</div>
                <div className='i-title-item'>Product Management</div>

        </div>

        </div>
        <p className='i-desc'>
            <b>PURSUING MS IN INFORMATION SYSTEMS AT 
            NORTHEASTERN UNIVERSITY</b>
            <br/>
            <br/>

               <p className='i-desc'>
         <b>I aspire to work as a Business Analyst, Business Consultant, Product Manager, Project Manager and Business Intelligence Analyst roles.
         </b>
        </p>
      </p>
      {/* <svg width="175"
      height="175" 
      viewBox="0 0 175 175"
      fill="none" 
      stroke="black" 
      className="i-scroll"
      xmlns="http://www/w3.org/2000/svg">

      </svg> */}

      </div>
      
      </div>
        <div className='i-right'>
          <div className='i-bg'>
           
          </div>
          <br/>
          <br/>
          <br/>


        {/* <img src="../img/Me_new.jpeg" alt=""className='i-img'></img> */}
         <img src="https://static.wixstatic.com/media/c9e7ee_cebeb930a2e74f079a4dba265f5c8096~mv2.gif" 
         alt="N7R18YFE07SP9WP9.gif" 
         className='i-img'>
           </img> 


{/* <img src="https://static.wixstatic.com/media/11062b_00a8c83765b041e99f229f795e93bc7ef000.jpg/v1/fill/w_465,h_805,al_br,q_85,usm_0.33_1.00_0.00,enc_auto/11062b_00a8c83765b041e99f229f795e93bc7ef000.jpg"
         alt="N7R18YFE07SP9WP9.gif" 
         className='i-img'>
           </img>  */}

        </div>
        {/* <div className='arrow'>

        <hr className='hello'></hr>
        </div> */}

      </div>
  );
}


export default intro