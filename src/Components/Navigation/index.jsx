import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" to="/" exact>About Me</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                
                <li className="nav-item"><NavLink className="nav-link" to="/resume">Resume</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            </ul>
            </div>
        </nav>
    );
};

export default Navigation;