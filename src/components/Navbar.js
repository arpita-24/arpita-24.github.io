import React from "react";
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { Link } from "react-router-dom";
import "../App.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
    return (
    
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                    
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
                <FontAwesomeIcon icon={ faBars } style={{ color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/aboutMe">About Me</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/projects">Projects</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/acheivements">Acheivements</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/resume">Resume</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active"  to="/contactMe">Contact Me</NavLink>
                    </li>
                </ul>
                
                </div>
            </div>
            <Outlet />
            </nav>

            
          
            
    )
}

export default Navbar
