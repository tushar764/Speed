import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleDarkMode }) => {
  // Use state to track dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    toggleDarkMode(); // Call parent function to toggle dark mode in the app
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button onClick={handleDarkModeToggle} className="dark-mode-btn">
        {isDarkMode ? "Light Mode" : "Dark Mode"} {/* Toggle button text */}
      </button>
    </nav>
  );
};

export default Navbar;
