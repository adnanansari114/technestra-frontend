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
            <h2 className="footer-logo">TheITTalent</h2>
            <p className="footer-desc">
              The IT Talent is a global IT staffing partner helping businesses scale faster with the right people. 
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
              <li><Link to="/services/artificial-intelligence">Artificial Intelligence</Link></li>
              <li><Link to="/services/data-engineering">Data Engineering</Link></li>
              <li><Link to="/services/cloud-devops">Cloud & DevOps</Link></li>
              <li><Link to="/services/web-app-development">Web & App Development</Link></li>
              <li><Link to="/services/staff-augmentation">Staff Augmentation</Link></li>
              <li><Link to="/services/maintenance-support">Maintenance & Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottoms">
          <p>&copy; 2025 The IT Talent. All rights reserved. | Talent • Technology • Transformation</p>
        </div>
      </div>
    </footer>
  );
}