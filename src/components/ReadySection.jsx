import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/ReadySection.css"

export default function ReadySection() {
  return (
    <section className="ready-section">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="ready-video">
        <source src="./images/readysection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay + Glow */}
      <div className="ready-overlay"></div>

      {/* Content */}
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="ready-content"
        >
          <h2>Ready to Transform?</h2>
          <p>
            Our experts are standing by to understand your goals and build solutions that deliver real results.
          </p>
          <a href="/contact" className="ready-cta-btn">
            Let's Get Started <ArrowRight className="cta-arrow" size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}