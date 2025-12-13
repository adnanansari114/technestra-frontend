// components/Testimonials.jsx
import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechCorp", text: "Mind-blowing work! Transformed our brand completely.", avatar: "S" },
    { name: "Michael Chen", role: "Founder, StartupX", text: "Best investment we ever made. Results speak louder than words.", avatar: "M" },
    { name: "Emma Williams", role: "CMO, GrowthLab", text: "Creative genius with pixel-perfect execution. Highly recommended!", avatar: "E" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="top-heading">Client Love Stories</h2>
        <div className="testimonials-slider">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-card ${i === current ? "active" : ""}`}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="client-info">
                <div className="avatar">{t.avatar}</div>
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="dots">
          {testimonials.map((_, i) => (
            <span key={i} className={`dot ${i === current ? "active" : ""}`} onClick={() => setCurrent(i)}></span>
          ))}
        </div>
      </div>
    </section>
  );
}