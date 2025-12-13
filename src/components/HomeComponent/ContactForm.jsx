// components/Contact.jsx
import React from "react";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="top-heading">Let's Build Together</h2>
        <div className="contact-grid">
          <div className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Tell us about your project..."></textarea>
            <button className="btn-primary">Send Message</button>
          </div>
          <div className="contact-map">
            <div className="map-placeholder">Interactive Map Here</div>
          </div>
        </div>
      </div>
    </section>
  );
}