import React from 'react' 
import "./About.css"

const About = () => {
  return (
    <div className="a"  id='About'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="../img/Img3.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
       <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        The best way to learn is by doing. The only way to build a strong work ethic is getting your hands dirty - Alex Spannos
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      
      </div>
    </div>
  );
};

export default About;