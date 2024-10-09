import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS for Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/Aboutme" className="nav-item">About Me</Link></li>
        <li><Link to="/projects" className="nav-item">Projects</Link></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
