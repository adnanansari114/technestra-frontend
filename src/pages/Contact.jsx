import React from "react";
import { motion } from "framer-motion";
import SocialSection from "../components/ContactComponent/SocialSection";
import LocationSection from "../components/ContactComponent/LocationSection";
import ContactSection from "../components/ContactComponent/ContactSection";
import ReadySection from "../components/ReadySection.jsx";
import '../styles/contact.css';

export default function Contact() {
  return (
    <>

      {/* HERO WITH VIDEO BACKGROUND */}
      <section className="contact-hero">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/images/contact.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="hero-content"
          >
            <h1>Get in Touch</h1>
            <p>Have a project in mind or need expert talent? We're ready to discuss how we can help.</p>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL + LOCATION + CONTACT + CTA */}
      <SocialSection />
      <LocationSection />
      <ContactSection />
      <ReadySection />
    </>
  );
}