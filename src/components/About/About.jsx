import React from 'react' 
import "./About.css"

const About = () => {
  return (
    <div className="a"  id='About'>
      <div className="a-left">
        <div className="a-card bg"></div>
        <br/>
        <div className="a-card">
          <img
            src="img/Img3.jpeg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
       <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        <b>The best way to learn is by doing. The only way to build a strong work ethic is getting your hands dirty - Alex Spannos</b>
        </p>
        <p className="a-desc">
          I am a motivated professional with strong analytical and people management skills. I am skilled in identifying
          and documenting quality user business requirements for a new product implementations and major enhancements. I like to play with the data to understand the business insights and causes of discrepancies in data.
          I also have a passion towards front end development who enjoys creating websites and designs. 
          <br/>Apart from all this, I am an acrylic painter. I love painting and sketching in my free time.

        </p>
        <br/>
        {/* <p className="a-desc">
        </p> */}
      
      </div>
    </div>
  );
};

export default About;