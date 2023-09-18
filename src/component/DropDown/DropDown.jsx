import { useState } from "react";
import "./Drop.css";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <button className="dropdown-button">DropDown</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
