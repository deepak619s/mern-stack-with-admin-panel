import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64 C320,0,720,128,1440,64 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="footer-content">
        <div className="footer-section about">
          <h3 className="footer-logo">Deepak Sinha</h3>
          <p>
            Building innovative solutions with MongoDB, Express.js, React, and
            Node.js.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section subscribe">
          <h4>Stay Updated</h4>
          <form className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Deepak Sinha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
