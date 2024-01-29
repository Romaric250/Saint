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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
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
      <div className="nav-logo">S.M</div>
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
