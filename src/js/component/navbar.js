import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{width: '100%'}}> 
			<img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }} />
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary" style={{ marginRight: '8em' }}>Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
