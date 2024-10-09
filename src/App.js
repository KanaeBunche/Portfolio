import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'; // Make sure the path is correct
import Projects from './Components/Projects';
import Navbar from './Components/Navbar'; // Import the Navbar component
import AboutMe from './Components/AboutMe';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar /> {/* Navbar on the right */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutMe" element={<AboutMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
