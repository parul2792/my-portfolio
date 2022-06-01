import React from 'react';
import Intro from './components/intro/Intro';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import {useMediaQuery} from 'react-responsive';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  )
}

export default App
