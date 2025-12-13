// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>YourBrand</h3>
          <p>Building the future, one pixel at a time.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>Ig</span>
            <span>Tw</span>
            <span>In</span>
            <span>Be</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 YourBrand. All rights reserved. Made with passion</p>
      </div>
    </footer>
  );
}