import React from "react";
import { motion } from "framer-motion";
import "./Privacy.css"; // Privacy wali CSS ko copy kar ke Terms.css bana lena

export default function Terms() {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="terms-hero-content"
          >
            <motion.h1 className="terms-title">
              Terms of Service
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-content-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="terms-main-text"
          >
            <p className="terms-intro">
              By accessing or using the website and services of Wheatron Technologies, you agree to comply with the following Terms of Service.
            </p>

            <h2>1. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.</p>
            <p>You must not:</p>
            <ul>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Use the website for fraudulent or harmful activities</li>
              <li>Copy or misuse website content without permission</li>
            </ul>

            <h2>2. Services Disclaimer</h2>
            <p>All services provided by Wheatron Technologies are subject to:</p>
            <ul>
              <li>Written agreements</li>
              <li>Approved proposals</li>
              <li>Defined scope of work</li>
            </ul>
            <p>Website content is for informational purposes only and does not constitute a binding offer.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content on this website, including:</p>
            <ul>
              <li>Text</li>
              <li>Logos</li>
              <li>Graphics</li>
              <li>Code</li>
            </ul>
            <p>is the property of Wheatron Technologies and is protected by applicable intellectual property laws. Unauthorized use is strictly prohibited.</p>

            <h2>4. Confidentiality</h2>
            <p>Any information shared during discussions, emails, or consultations will be treated as confidential unless otherwise agreed in writing.</p>

            <h2>5. Payments & Commercial Terms</h2>
            <p>Payment terms, pricing, deliverables, timelines, and penalties (if any) will be defined in individual contracts or proposals agreed upon with clients.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Wheatron Technologies shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages</li>
              <li>Loss of data, profits, or business opportunities</li>
              <li>Issues arising from third-party tools, platforms, or services</li>
            </ul>
            <p>Use of our services is at your own risk unless governed by a formal agreement.</p>

            <h2>7. Third-Party Services</h2>
            <p>Our services may integrate or depend on third-party platforms (cloud providers, APIs, tools). We are not responsible for failures or issues caused by third-party services.</p>

            <h2>8. Termination</h2>
            <p>We reserve the right to suspend or terminate access to the website or services if:</p>
            <ul>
              <li>These terms are violated</li>
              <li>Unlawful activity is detected</li>
              <li>Required by law</li>
            </ul>

            <h2>9. Governing Law</h2>
            <p>These Terms of Service shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Indore, Madhya Pradesh.</p>

            <h2>10. Changes to Terms</h2>
            <p>We may revise these Terms of Service at any time. Continued use of the website implies acceptance of updated terms.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}