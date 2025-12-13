import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const services = [
    {
      icon: "computer",
      title: "Web Design",
      desc: "UI/UX design that feels intuitive, intelligent, and on-brand.",
      color: "var(--second-primary)",
    },
    {
      icon: "code",
      title: "Webflow Development",
      desc: "Lightning-fast, scalable websites built with clean semantic code.",
      color: "#00f2ea",
    },
    {
      icon: "speed",
      title: "Performance & SEO",
      desc: "Optimized for speed, search, and seamless experience across all devices.",
      color: "var(--primary)",
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Top Text */}
        <div className="services-header">
          <p className="services-small">S E R V I C E S</p>
          <h2 className="services-title ">What I Build</h2>
          <p className="services-desc">
            From concept to clean Webflow code — I design and develop<br />
            future-proof digital experiences.
          </p>
        </div>

        {/* Services Cards */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ "--card-delay": `${index * 0.2}s` }}
            >
              <div className="card-glow" style={{ background: service.color }}></div>
              <div className="card-icon">
                <span className={`icon-${service.icon}`}></span>
              </div>
              <h3 className="card-title sub-heading">{service.title}</h3>
              <p className="card-desc para-two">{service.desc}</p>
              <Link to="/services" className="card-link">
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Big SERVICES Text Background */}
        <div className="bg-text">SERVICES</div>
      </div>
    </section>
  );
}