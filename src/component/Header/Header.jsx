import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
       <div className="nav-details">

       <div className="nav-container">
           {/*<h1 className="nav-logo">EDUC</h1> */}
           <div className="logo-wrapper">
 <NavLink to='/'> <img
    src={logo}
    alt="Education Logo"
    className="nav-logo-img"
  /></NavLink>
</div>


          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
            <NavLink
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Home
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
              
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
             About
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
               
                to="/courses"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
              
                to="/trainers"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Trainers
              </NavLink>
            </li>
             
              <li className="nav-item">
              <NavLink
               
                to="/pricing"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Pricing
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
          
                to="/events"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Events
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                to="/dropdown"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                DropDown
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                to="/contact1"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Contacts
              </NavLink>
            </li>
          </ul>
          <button className="get">
         <li>
             <NavLink className="nav-get" to="/courses">
               Get Started
             </NavLink>
             </li>
         </button>
          <div className="nav-icon" onClick={handleClick}>

            <span className="nav-btn" onClick={handleClick}>
           {click ? <FaTimes className="icons" /> : <FaBars className="icons"/>}
         </span>
          </div>
        </div>
       </div>
      </nav>
    </>
  );
}

export default NavBar;