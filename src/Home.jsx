import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
	<h1>Home Page</h1>
	<br />
	<ul>
		<li>
		{/* Endpoint to route to Home component */}
		<Link to="/">Home</Link>
		</li>
		<li>
		{/* Endpoint to route to About component */}
		<Link to="/About">About</Link>
		</li>
        <li>
		{/* Endpoint to route to About component */}
		<Link to="/Experience">Experience</Link>
		</li>
		<li>
		{/* Endpoint to route to Contact Us component */}
		<Link to="/Contact">Contact Me</Link>
		</li>
	</ul>
	</div>
);
};

export default Home;
