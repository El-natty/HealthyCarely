import React, { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modal, setModal] = useState(null); // "signin" or "signup"

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);

  return (
    <>
      <div className="navbar">
        {/* Logo */}
        <div className="heading">
          <h1>
            Healthy<span>Carely</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className={`nav1 ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="" id="home">Home</a></li>
            <li><a href="" id="doctor">Doctor</a></li>
            <li><a href="" id="doctor">Service</a></li>
            <li><a href="" id="review">Review</a></li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <nav className={`nav2 ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <button className="link-btn" onClick={() => openModal("signin")}>
                Sign In
              </button>
            </li>
            <li>
              <button id="btn" onClick={() => openModal("signup")}>
                Sign Up
              </button>
            </li>
          </ul>
        </nav>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>

      {/* Modal Overlay */}
      {modal && (
        <div className="overlay">
          <div className="modal">
            <h2>{modal === "signin" ? "Sign In" : "Sign Up"}</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              {modal === "signup" && (
                <input type="password" placeholder="Confirm Password" required />
              )}
              <button type="submit" className="submit-btn">
                {modal === "signin" ? "Login" : "Register"}
              </button>
            </form>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
