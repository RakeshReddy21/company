import React from "react";
import "./Navbar.css";
import chrome from "../Assests/Google_Chrome_icon_(February_2022).svg.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={chrome}
          alt="Chrome Logo"
        />
        <span>Chrome</span>
      </div>
      &nbsp;&nbsp;&nbsp;
      <ul className="navbar-menu">
        <li>Home</li>
        <li>The Browser by Google</li>
        <li>Safety</li>
        <li>Support</li>
      </ul>
    </nav>
  );
};

export default Navbar;

