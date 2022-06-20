import React from 'react';
import "./Experience.css";
import Accordion from 'react-bootstrap/Accordion';



const Experience = () => {
  return (
    <div className='exp' id='Experience'>
       <h1 className='journey' >
    PROFESSIONAL JOURNEY
    </h1>

    <div class = "vertical">
        
    </div> 
   <Accordion id='AccRadius'>
  <Accordion.Item eventKey="0" id='Acc1'>
    <Accordion.Header><h1 id='F1'>Nablasol services, (Remote), India</h1> <h3 id='F11'> &nbsp; - Dec 2021 - June 2022 </h3> </Accordion.Header>
    <Accordion.Body>
     <h4> &nbsp;Worked as a Business Analyst in Tax and Finance domain
      <br/>
      <br/>
      - Was involved in handling SugarCRM backoffice modules, FPAL and CTax App projects.
      <br/>
      - Designed wireframes and prototypes of various screens for CTax App using mockflow.
      <br/>
      - Collected requirements from clients, created user stories, project features, documented the requirements and use cases.
      <br/>
      - Served as a liason between client and technical team, explained the requirements to the developer, created software flowcharts of modules,UML diagrams in lucidcharts.
      <br/>
      - Participated in sprint planning, story pointing, effort estimate, sprint review and retrospective as part of the agile process.
      <br/>
      - Tested the features and API's using Postman API on UAT, created test cases, test scenarios and did versioning testing.
      <br/>
      - Wrote MYSQL queries, prepared visualization reports in Redash and presented the data to the stakeholder.
      <br/>
      - Interacted with the clients on daily basis, prepared release notes, was involved in UAT release testing, bug fixes, pre and post production release and testing.
      <br/>
      - Tracked progress of development tasks using project management tool (Trello).
      <br/>
      - Handled 5 juniors, assigned them tasks, set task priority deadline and gave knowledge transfer sessions to them.
      </h4>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" id='Acc2'>
    <Accordion.Header><h1 id='F2'>Tresvista, Pune, India</h1> <h3 id='F22'> &nbsp; - Aug 2018 - June 2021</h3></Accordion.Header>
    <Accordion.Body>
    <h4> &nbsp;Worked as a Software engineer,Analyst on PLM and Finance domain projects
      <br/>
      <br/>
      - Congregated, scoped and created functional specifications with the client, generated design documents and presented solutions interacted with New York and UK based clients.
      <br/>
      - Developed and debugged software to support functionality in C#.Net, developed 2FA login screens using C#.net for ERP and CRM applications, executed code inspection and worked on SQL &nbsp;&nbsp;queries for fetching the data, prepared client utilization query builder report in C#.net, which reduced manual work and increased efficiency.
      <br/>
      - Delivered software for unit testing and sub-system testing, conducted root cause analysis (RCA) and impact analysis of the client issues and gathered information for improvement/fixing issue.
      <br/>
      - Organized and released patch/builds on production server as well as on UAT for client testing purpose, managed production support as well.
      <br/> 
      - Developing/maintaining shopfloor applications/projects related to PLM domain.
      <br/>
      - Managed vendors related to new ERP system onboarding, prepared documentation for undocumented projects/modules.
      <br/>
      - Prioritized backlog and collaborated with cross functional teams, maintained and presented status updates, prioritized the backlog according to the priorities set by stakeholders.
      <br/>
      - Handled new joinees, trained them and tracked progress of the tasks assigned to them. 
      </h4> 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" id='Acc3'>
    <Accordion.Header><h1 id='F3'>3DPLM Software, Pune, India</h1><h3 id='F33'> &nbsp; - Sep 2017 - July 2018 </h3></Accordion.Header>
    <Accordion.Body>
    <h4> &nbsp;Worked as a junior software engineer in CAD/CAM and mechanical domain
      <br/>
      <br/>
      - Worked on SigmaTube and SolidX projects, worked on the UI and visualization for web and desktop based projects.
      <br/>
      - Developing for new versions of load manager, color offload, simtrans.
      <br/>
      - Debugging Sigmatube architecture to understand the software flow in MVC and WPF, undergone training of 3 months to understand the architecure of sheet and tube cutting software.
      <br/>
      - Web development, testing of SolidX plugin installed in Soliworks software, testing released builds/features of the 2D and 3D nesting models for bevels, holes, partial depth, import/export and part  &nbsp;&nbsp;modelling.
      <br/>
      - Interacting in daily standups with Cincinnati team, preparing test scenarios, test cases and reporting bugs and tracking them in JIRA.
      </h4> 
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" id='Acc4'>
    <Accordion.Header><h1 id='F4'>LTI, Pune,India</h1> <h3 id='F44'> &nbsp; -  Aug 2016 - July 2017 </h3></Accordion.Header>
    <Accordion.Body>
    <h4> &nbsp;Worked as a Sofware Engineer Trainee
      <br/>
      <br/>
     - Prepared and reviewed test plans, test cases and tested applications for various functionality.
     <br/>
     - Performed defect management -  logging, tracking, closing defects using TFS.
     <br/>
     - Performed functional test, regression test, system test, smoke test, graphical user interface test (GUI), cross browser test and database test. 
     <br/>
     - Involved in web service testing using Postman API.
     <br/>
     - Interacted with developers and support teams to deliver a quality product.
    </h4>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  <h1 className='education' >
    EDUCATION    
  </h1>

    <div class = "vertical1">
        
    </div> 

    <Accordion>

    <Accordion.Item eventKey="5" id='Acc5'>
    <Accordion.Header><h1 id='F5'>M.S. in Information Systems, Seattle, USA</h1> <h3 id='F55'> &nbsp; -  Expected May 2024 </h3></Accordion.Header>
    <Accordion.Body>
    <h4> Course Curriculum:
      <br/>
      <br/>
      INFO 5100 - Application Engineering and Development
      <br/>
      <br/>
      DAMG 6210 - Data Management and Database Design
      <br/>
      </h4>
    </Accordion.Body>
  </Accordion.Item>

    <Accordion.Item eventKey="6" id='Acc6'>
    <Accordion.Header><h1 id='F6'>Masters in Computer Applications (University of Pune)</h1> <h3 id='F66'> &nbsp; -  July 2013 - April 2016 </h3></Accordion.Header>
    <Accordion.Body>
    <h4> Course Curriculum:
      <br/>
      <br/>
      - Database Management Systems and Advance Database Management Systems
      <br/>
      <br/>
      - Java and OOPS programming
      <br/>
      <br/> 
      - Web Technologies and Advance Development Technology (ASP.Net)
      <br/>
      <br/> 
      - Mobile Computing and Data Networking
      <br/>
      <br/> 
      - Software Engineering, Software Project Management, Sofware Quality Assurance and Software Testing
      <br/>
      <br/> 
      - Data Structures and Operating Systems
      <br/>
      <br/> 
      - Design and Analysis of Algorthims
      <br/>
      
      </h4>
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="7" id='Acc7'>
    <Accordion.Header><h1 id='F7'>Bachelors in Computer Applications (University of Pune)</h1> <h3 id='F77'> &nbsp; -  July 2010 - April 2013 </h3></Accordion.Header>
    <Accordion.Body>
    <h4> Course Curriculum:
      <br/>
      <br/>
      - C++ and Data structures using C
      <br/>
      <br/>
      - Visual Basic and VB.Net
      <br/>
      <br/> 
      - Core Java 
      <br/>
      <br/> 
      - Database Management Systems and Relational Database Management Systems
      <br/>
      <br/> 
      - Multimedia and Operating Systems
      <br/>
      </h4>
    </Accordion.Body>
  </Accordion.Item>
    </Accordion>
   
  </div > 

  );
};

export default Experience