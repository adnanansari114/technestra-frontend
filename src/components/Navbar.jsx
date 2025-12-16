import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    // ABOUT ITEMS
  const aboutItems = [
    {name: "About Us", path: '/about'},
    { name: "Our Story", path: "/about/story" },
    // { name: "Mission & Vision", path: "/about/mission" },
    // { name: "Core Values", path: "/about/values" },
    { name: "Leadership Team", path: "/leadership" },
    // { name: "Company History", path: "/about/history" },
    // { name: "Awards & Recognition", path: "/about/awards" },
    // { name: "Certifications", path: "/about/certifications" },
    // { name: "Press & Media", path: "/about/press" },
    // { name: "Careers", path: "/careers" },
    // { name: "Partnerships", path: "/about/partnerships" },
    // { name: "Investors", path: "/about/investors" },
    { name: "Contact Us", path: "/contact" },
  ];

  // SERVICES ITEMS
  const services = [
    { name: "Services", path: "/service" },
    { name: "Web & App Development", path: "/webappdevelopment" },
    { name: "Staff Augmentation", path: "/staff-augmentation" },
    { name: "Data Engineering", path: "/dataengineering" },
    { name: "Cloud Engineering & DevOps", path: "/clouddevops" },
    { name: "Artificial Intelligence", path: "/artifiacialintelligence" },
    { name: "Maintenance & Support", path: "/maintenanceSupport" },
    // { name: "Video Production", path: "/services/video" },
    // { name: "E-commerce Solutions", path: "/services/ecommerce" },
    // { name: "Cloud & Hosting", path: "/services/cloud" },
    // { name: "Cyber Security", path: "/services/security" },
    // { name: "IT Consulting", path: "/services/consulting" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">

          {/* Logo */}
          <div className="nav-logo">
            <Link to="/">
              <img src="/images/logo.jpg" alt="Logo" className="logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links-desktop">
            <Link to="/" className="nav-link">Home</Link>

            {/* ABOUT - Hover with Bridge */}
            <div className="dropdown-hover">
              <Link to="/about" className="nav-link dropdown-trigger">
                About <span className="arrow">▲</span>
              </Link>
              {/* Invisible Bridge + Mega Menu */}
              <div className="dropdown-content">
                <div className="bridge"></div> {/* Yeh magic hai! */}
                <div className="mega-menu">
                  <div className="mega-grid">
                    {aboutItems.map((item, i) => (
                      <Link key={i} to={item.path} className="mega-item">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICES - Same Fix */}
            <div className="dropdown-hover">
              <Link to="/services" className="nav-link dropdown-trigger">
                Services <span className="arrow">▲</span>
              </Link>
              <div className="dropdown-content">
                <div className="bridge"></div>
                <div className="mega-menu">
                  <div className="mega-grid">
                    {services.map((item, i) => (
                      <Link key={i} to={item.path} className="mega-item">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/careers" className="nav-link">Opportunity</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/get-started" className="btn-secondary nav-btn">
              Get Started
            </Link>
          </div>

          {/* Mobile */}
          <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
        <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
        <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        <Link to="/get-started" className="btn-primary mobile-btn" onClick={() => setMobileMenuOpen(false)}>
          Get Started
        </Link>
      </div>
    </>
  );
}