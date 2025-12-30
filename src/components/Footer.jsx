import React from "react";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <div className="footer-logo">
              <img src="/images/logo.jpg" alt="Logo" className="logo" />
            </div>
            <p className="footer-desc">
              Technestra is a global IT staffing partner helping businesses scale faster with the right people. 
              With over 14 years of expertise, we specialize in C2C, full-time, and contract hiring.
            </p>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/theittalents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/theittalent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/theittalents/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-column">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/artificialintelligence">Artificial Intelligence & Machine Learning</Link></li>
              <li><Link to="/dataengineering">Data Engineering & Analytics</Link></li>
              <li><Link to="/cloud-devops">Cloud Engineering & DevOps</Link></li>
              <li><Link to="/webandappdevelopment">Web & App Development</Link></li>
              <li><Link to="/staffaugmentation">Staff Augmentation</Link></li>
              <li><Link to="/maintenance">Maintenance & Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottoms">
          <p>&copy; 2025 Technestra. All rights reserved. | Talent • Technology • Transformation</p>
          <div className="footer-legal">
            <button><Link to="/privacy">Privacy Policy</Link></button>
            <span className="separator">•</span>
            <button><Link to="/terms">Terms of Service</Link></button>
          </div>
        </div>
      </div>
    </footer>
  );
}