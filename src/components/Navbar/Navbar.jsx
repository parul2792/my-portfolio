import React from 'react';
import {FaLinkedin} from "react-icons/fa";
import "./Navbar.css"
 

const Navbar = () => {
  return (
<nav className='main-nav'>
  <div className='logo'>
    <h2>
      <span>P</span>ortfolio

    </h2>
  </div>

<div className='menu-link'>
    <ul>
      <li>
       <b> <a href='#'>Home</a></b>
      </li>
      <li>
       <b> <a href='#'>About</a></b>
      </li>
      <li>
        <b><a href='#'>Experience</a></b>
      </li>
      <li>
        <b><a href='#'>Contact</a></b>
      </li>
    </ul>
</div>

<div className='social-media'>
<ul className='social-media-desktop'>
  <li>
    <a href='https://www.linkedin.com/home' className='LinkedIn'>
      <FaLinkedin/>
    </a>
  </li>

</ul>

</div>

</nav>
  );
};

export default Navbar