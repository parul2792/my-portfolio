
//import React from 'react';
//import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Form from 'react-bootstrap/Form';

import Phone from "../../Img/phone.png";
import Email from "../../Img/email.png";
import Address from "../../Img/address.png";
import linkedin from "../../Img/linkedin.png";

import { useContext, useRef, useState} from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";
import "./Contact.css";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  //const darkMode = theme.state.darkMode;
   const [send_Name, set_sender_name]=useState('');
   const [send_subject, set_sender_subject ]=useState('');
   const [send_email, set_sender_email]=useState('');
   const [send_mobile, set_sender_mobile]=useState('');
   const [message, set_sender_message]=useState('');


   const handleName =(e) =>{

      set_sender_name(e.target.value)
   }


   const handleSubject =(e) =>{

    set_sender_subject(e.target.value)
  }


  const handleEmail =(e) =>{

    set_sender_email(e.target.value)
    
  }


  const handleMobile =(e) =>{

    set_sender_mobile(e.target.value)
  }


  const handlemessage =(e) =>{

    set_sender_message(e.target.value)
  }


  // const [userData, setUserData] = useState({
  //   user_Fname: "",
  //   user_Lname: "",
  //   user_subject: "",
  //   user_email: "",
  //   user_mobile: "",
  //   message: "",
  // });

  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o8j0l39",
        "template_7mcr41f",
        formRef.current,
        "PK4lRYJabtfmgrwJx"
      )
      .then(
        (response) => {
          console.log('Message sent successfully', response.status, response.text);
          //setDone(true)
        })
        .catch((err) =>{
          console.log('Failed',err)
        }
      );
      set_sender_name('');
      set_sender_subject('');
      set_sender_email('');
      set_sender_mobile('');
      set_sender_message('');
  };
  
  return (
    <div className="c" id='ContactUs'>
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">You can reach out at</h1>
        <div className="c-info">
          {/* <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" />
            +91 9552259468
          </div> */}
          <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />
            srivastava.par@northeastern.edu
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={linkedin} alt="" />
            https://www.linkedin.com/in/p-srivastava/          
            </div>
          <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />
            India
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <br/>
          <b/><h1>GET IN TOUCH | CONTACT ME </h1>
        </p>
        
        <form ref={formRef} onSubmit={handleSubmit}>

          <input  type="text" required placeholder="Name" value={send_Name} onChange={handleName} name="send_Name" />
          <br/>
         
          <input type="text" required placeholder="Subject" value={send_subject} onChange={handleSubject} name="send_subject" />
          <br/>
          <input type="text" required placeholder="Email" value={send_email} onChange={handleEmail} name="send_email" />
          <br/>
          <input type="text" required placeholder="Mobile" value={send_mobile} onChange={handleMobile} name="send_mobile" />

          <textarea rows="5" required placeholder="Message" value={message} onChange={handlemessage} name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  </div>
  );
};
  

export default Contact;


// export default GoogleApiWrapper({
//   apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)
// })(Contact)