import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className="navbar">
      <div className="container">
        <Link className="logo-a" to="/">WebVladimirDev</Link>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="main-menu-list">
            <li><Link to="/"><span className="hashtag">#</span>home</Link></li>
            <li><Link to="/projects"><span className="hashtag">#</span>projects</Link></li>
            <li><Link to="/contact"><span className="hashtag">#</span>contact</Link></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

