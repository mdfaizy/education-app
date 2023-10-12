// import {NavLink} from "react-router-dom";
// import "./Header.css";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { AiOutlineDown } from "react-icons/ai";
// const Header = () => {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);



//   return (
//     <div className="navbar">
//       <div className="nav">
//         <h1 className="logo">MENTOR</h1>
//         <ul
//           className={click ? "nav-item active" : "item"}
         
//           // onClick={() => setClick(false)}
//         >
//          {/* </ul> <ul className= "nav-item"> */}
//           <li>
//             <NavLink className="nav-link" to="/" >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about" className="nav-link">
//               About
//             </NavLink>
//           </li>

//           <li>
//             <NavLink className="nav-link" to="/courses">
//               Courses
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/trainers">
//               Trainers
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/pricing">
//               Pricing
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/events">
//               Events
//             </NavLink>
//           </li>

//           <li className="drop12">
//             <NavLink className="nav-link" to="/dropdown">
//              DropDown < AiOutlineDown  className="dropdownarrow" /> 
//            </NavLink>
//            {/* <div className="dropdown-content">
//           <ul>
//             <li><a href="#">Link 1</a></li>
//        <li>  <a href="#">Link 2</a></li>
//        <li> <a href="#">Link 3</a>
//        <ul className="secnddrop">
//        <li>  <a href="#">Link 2</a></li>
//        <li> <a href="#">Link 3</a></li>
//        </ul>
//        </li>
//        <li>  <a href="#">Link 2</a></li>
//        <li> <a href="#">Link 3</a></li>
//         </ul>
//         </div> */}
//           </li>

//           <li>
//             <NavLink className="nav-link" to='/contact1' >
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//         <button className="get">
//           <li>
//             <NavLink className="nav-get" to="/courses">
//               Get Started
//             </NavLink>
//           </li>
//         </button>

//         <button className="nav-btn" onClick={handleClick}>
//           {click ? <FaTimes className="nav-close-btn" /> : <FaBars />}
//         </button>

//         {/* <div>
//     {<FaBars />?(<a href="" onClick="()=>setMobileMonu(!mobileMonu)">

//     </a>

//     ):
// (
//   <FaTimes />
// )
//     }
// </div> */}
//       </div>
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { NavLink } from "react-router-dom";
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
           <h1 className="nav-logo">MENTOR</h1>

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