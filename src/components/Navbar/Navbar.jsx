import React from 'react';
//import { NavLink} from "react-router-dom";
import {HashLink as Link} from 'react-router-hash-link';
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
       <b> <Link to="#Intro">Home</Link></b>
      </li>
      <li>
       <b> <Link smooth to="#About">About</Link></b>
      </li>
      <li>
        <b><Link smooth to="#Experience">Experience</Link></b>
      </li>
      <li>
        <b><Link smooth to="#ContactUs">Contact</Link></b>
      </li>
    </ul>
</div>

<div className='social-media'>
<ul className='social-media-desktop'>
  <li>
    <a href='https://www.linkedin.com/in/p-srivastava/' className='LinkedIn'>
      <FaLinkedin/>
    </a>
  </li>

</ul>

</div>

</nav>
  );
};

export default Navbar