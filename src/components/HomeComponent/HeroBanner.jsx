import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css';

export default function HeroBanner() {
  return (
    <section className="home-hero-banner">
      {/* Video Background */}
      <div className="video-wrapper">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src="./images/banner.mp4" type="video/mp4" />
          {/* fallback image agar video nahi chala */}
          {/* <img src="/images/hero-fallback.jpg" alt="Hero Background" /> */}
        </video>

        {/* Dark Overlay + Dual Gradient */}
        <div className="home-hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="container home-hero-content">
        <div className="home-hero-text">
          {/* Animated Heading */}
          <h1 className="home-hero-heading">
            <span className="gradient-text">Technestra -</span> Transforming
            <br />
            Ideas into <span className="gradient-text">Digital Success</span>
          </h1>

          {/* Paragraph */}
          <p className="home-hero-para">
            We enable businesses to innovate, scale, and win in the digital era with reliable IT services, deep technology expertise, and flexible talent solutions.
          </p>

          {/* Buttons */}
          <div className="home-hero-buttons">
            <Link to="/contact" className="home-hero-btn">
              Contact Us
            </Link>
            <Link to="/services" className="btn-secondary home-hero-btn-outline">
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}