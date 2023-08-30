import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavbarMenue = () => {
  return (
    <>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#home">Work</a>
          </li>
          <li>
            <a href="#home">Testimonial</a>
          </li>
          <li>
            <a href="#home">Contact</a>
          </li>
          <li>
            <a href="#home">Mode</a>
          </li>
          <li>
            <button class="download">Download cv</button>
          </li>
        </ul>
      </div>
    </>
  );
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  window.addEventListener("scroll", () => {
    let nav = document.querySelector(".nav-container");

    if (scrollY > 0) {
      nav.classList.add("nav-scroll");
    } else {
      nav.classList.remove("nav-scroll");
    }
  });
  return (
    <div className="nav-container">
      <div className="nav-logo">Logo here</div>
      <div className="nav-container-wrapper">
        <NavbarMenue />
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <FaTimes
            color="white"
            size={35}
            posiition="absolute"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FaBars color="white" size={35} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="menu-container">
            <div className="menu-wrapper">
              <NavbarMenue />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
