import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => (
  <nav className="navbar">
    <img src="/assets/logo.png" alt="Logo" className="logo" />
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/feedback">Give Feedback</Link></li>
      <li><Link to="/visuals">See Feedback</Link></li>
    </ul>
  </nav>
);

export default Navbar;
