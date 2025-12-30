import React from "react";
import { motion } from "framer-motion";
import "./Privacy.css"; // CSS file alag se bana di gayi hai

export default function Privacy() {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="privacy-hero-content"
          >
            <motion.h1 className="privacy-title">
              Privacy Policy
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="privacy-content-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="privacy-main-text"
          >
            <p className="privacy-intro">
              Wheatron Technologies (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us through our website and services. 
            </p>
            <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h2>1. Information We Collect</h2>
            <p>We may collect the following information when you visit our website or contact us:</p>

            <h3>Personal Information</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Project or service requirements</li>
            </ul>

            <h3>Technical Information</h3>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on the website</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Respond to inquiries and consultation requests</li>
              <li>Provide IT consulting and related services</li>
              <li>Improve website performance and user experience</li>
              <li>Communicate updates, proposals, or service-related information</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2>3. Information Sharing & Disclosure</h2>
            <p>We do not sell, rent, or trade your personal information.</p>
            <p>We may share information only:</p>
            <ul>
              <li>With trusted internal team members or partners for service delivery</li>
              <li>If required by law or government authorities</li>
              <li>To protect our legal rights or prevent fraud</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement reasonable technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

            <h2>5. Cookies Policy</h2>
            <p>Our website may use cookies to:</p>
            <ul>
              <li>Enhance user experience</li>
              <li>Analyze website traffic</li>
              <li>Improve performance</li>
            </ul>
            <p>You may disable cookies in your browser settings if you prefer.</p>

            <h2>6. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.</p>

            <h2>7. Data Retention</h2>
            <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>

            <h2>8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for communication</li>
            </ul>

            <h2>9. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page.</p>

            <h2>10. Contact Us</h2>
            <p>For any privacy-related concerns, please contact:</p>
            <p><strong>Wheatron Technologies</strong><br />
            Email: hello@wheatron.com</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}