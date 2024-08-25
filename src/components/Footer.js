import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer>
  <div className="footer-content">
    <div className="footer-column">
      <h4>Company</h4>
      <p>About Us</p>
      <p>Careers</p>
    </div>
    <div className="footer-column">
      <h4>Support</h4>
      <p>Contact Us</p>
      <p>Help Center</p>
    </div>
    <div className="footer-column">
      <h4>Follow Us</h4>
      <Link to="#">Facebook</Link>
      <Link to="#">Twitter</Link>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; 2024 Your Company. All rights reserved.
  </div>
</footer>

  )
}

export default Footer