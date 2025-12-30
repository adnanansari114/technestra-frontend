import React, { useState, useEffect } from "react";

export default function AboutIntro() {
  const [current, setCurrent] = useState(0);

  // About content ko multiple "slides" mein divide kiya taaki slider ka structure same rahe
  const slides = [
    {
      title: "About Technestra",
      text: "Technestra is a forward-thinking technology services company committed to delivering high-impact digital solutions. We partner with businesses of all sizes — from startups to enterprises — to solve real challenges with innovative technology and engineering excellence.",
    },
    {
      title: "Our Vision",
      text: "To enable organizations to achieve more through purposeful technology.",
    },
    {
      title: "Our Mission",
      text: "To deliver scalable, secure, and user-centered solutions that drive business success.",
    },
    {
      title: "Our Commitment",
      text: "At Technestra, our mission is to empower businesses with cutting-edge technology solutions and expert IT talent that drive measurable success. With a customer-first approach and a passion for innovation, we help you stay competitive in a fast-moving digital landscape.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // Thoda slow kiya for reading
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="top-heading">About Technestra</h2>
        <div className="testimonials-slider">
          {slides.map((slide, i) => (
            <div key={i} className={`testimonial-card ${i === current ? "active" : ""}`}>
              <div className="quote-icon">✦</div>
              <p className="testimonial-text">{slide.text}</p>
              <div className="client-info">
                <div className="avatar">T</div>
                <div>
                  <h4>{slide.title}</h4>
                  <p>Technestra</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {slides.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></span>
          ))}
        </div>
      </div>
    </section>
  );
}