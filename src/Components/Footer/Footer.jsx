import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h1 className="footer-title">My Shop</h1>
        <h3>Office Address:</h3>
        <p>
          #12, 3rd Cross, 5th Main Road,<br />
          BTM Layout 2nd Stage,<br />
          Bangalore, Karnataka - 560076, India
        </p>
      </div>

      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Warranty Policy</a></li>
          <li><a href="#">Return & Refund Policy</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Company</h3>
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email:<br />
          <a href="mailto:support@myshop.in">support@myshop.in</a>
        </p>
        <div className="social-icons">
          <p>Follow us:</p>
          <div className="icon-group">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
