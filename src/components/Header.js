import React, { useState } from 'react';
import '../css/Header.css'; 
import logo from '../images/doc.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/">
        <div className="header-logo">
          <img src={logo} alt="Company Logo" className="logo-img" />
          <span className="company-name">SAFE HEALTH</span>
        </div>
        </a>

        {/* Mobile Toggle Button */}
        <div className="navbar-toggle" onClick={handleToggle}>
          <span>&#9776;</span>
        </div>

        {/* Navigation Links */}
        <nav className={`header-nav ${isNavOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/Articles">Article</a></li>
            <li><a href="/Blog">Blogs</a></li>
            <li><a href="/SafetyWellness">Safety and Wellness</a></li>
            <li><a href="/Resources">Resources</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
