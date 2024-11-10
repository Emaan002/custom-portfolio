import React from 'react';
import "../src/app/styles/footer.css"
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <p>© 2024 All rights reserved.</p>
          </div>

          <div className="footer-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaLinkedin size={19} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub size={19} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaInstagram size={19} />
            </a>
          </div>

          <div className="footer-right">
            <p>hafsaahmed697@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
