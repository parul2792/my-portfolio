import React from 'react';
import {
  BrowserRouter as Router,
  Routes, Route,
  Navigate,
} from "react-router-dom";
import Intro from './components/intro/Intro';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import {useMediaQuery} from 'react-responsive';
import Experience from './components/Experience/Experience';
import {Footer} from './components/Footer/Footer';

import Contact from './components/Contact/Contact';


const App = () => {
  return (
    //  <div>
    //    <Navbar/>
    //    <Intro/>
    //    <About/>
    //    <Experience/>
    //    <Contact/>

    //  </div>

     <>
      {/* 
      
     
      */}
      <Router>
       <Navbar/>
       <Intro/>
       <About/>
       <Experience/>
       <Contact/>
       <Footer/>


         <Routes>
           {/* <Route path="/" element={<Navbar/>} /> */}
           <Route path="/Intro" element={<Intro/>} />
           <Route path="/About" element={<About/>} />
           <Route path="/Experience" element={<Experience/>} />
           <Route path="/Contact" element={<Contact/>} />

         </Routes>
       </Router>
     </>
  );
    
}

export default App
