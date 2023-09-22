import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);



  return (
    <div className="navbar">
      <div className="nav">
        <h1 className="logo">MENTOR</h1>
        <ul
          className={click ? "nav-btn" : "nav-item"}
          onClick={() => setClick(false)}
        >
          {/* <ul className= "nav-item"> */}
          <li>
            <Link className="nav-link" to="/" activeClassName="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>

          <li>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/trainers">
              Trainers
            </Link>
          </li>
          <li>
            {/* {" "} */}
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>

          <li className="drop12">
            <Link className="nav-link" to="/dropdown">
             DropDown < AiOutlineDown  className="dropdownarrow" /> 
           </Link>
           {/* <div className="dropdown-content">
          <ul>
            <li><a href="#">Link 1</a></li>
       <li>  <a href="#">Link 2</a></li>
       <li> <a href="#">Link 3</a>
       <ul className="secnddrop">
       <li>  <a href="#">Link 2</a></li>
       <li> <a href="#">Link 3</a></li>
       </ul>
       </li>
       <li>  <a href="#">Link 2</a></li>
       <li> <a href="#">Link 3</a></li>
        </ul>
        </div> */}
          </li>

          <li>
            <Link className="nav-link" to="/contact1">
              Contact
            </Link>
          </li>
        </ul>
        <button className="get">
          <li>
            <Link className="nav-get" to="/courses">
              Get Started
            </Link>
          </li>
        </button>

        <button className="nav-btn" onClick={handleClick}>
          {click ? <FaTimes className="nav-close-btn" /> : <FaBars />}
        </button>

        {/* <div>
    {<FaBars />?(<a href="" onClick="()=>setMobileMonu(!mobileMonu)">

    </a>

    ):
(
  <FaTimes />
)
    }
</div> */}
      </div>
    </div>
  );
};

export default Header;
