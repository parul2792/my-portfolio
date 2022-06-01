import React from 'react' 
import "./About.css"

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'></div>
      <div className='a-card bg'>
      
        {/* <img src="https://static.wixstatic.com/media/c9e7ee_cebeb930a2e74f079a4dba265f5c8096~mv2.gif" 
        alt="N7R18YFE07SP9WP9.gif" 
        className='a-img'>
        </img> */}

       
       <img src="../img/Me_new.jpeg"
        alt=" " 
        className='a-img'>
        </img>
       

      </div>
      <div className='a-right'>
       <div className='title-space'>
         <h1 className='a-title'>About Me</h1>
         </div>
       <div className='para-1'>
        <p className='a-sub'>

        <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy </h3>
        <h3><br/>text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. 
        <br/><br/>It was popularised in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
        Aldus PageMaker including versions of Lorem Ipsum.</h3>
        </p>
        </div>
        
      </div>
      
    </div>
  )
}

export default About
