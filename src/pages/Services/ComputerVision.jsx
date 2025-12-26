import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Eye, Scan, Camera, Activity, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/Service.css';

export default function ComputerVision() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Object Detection & Recognition",
      icon: Scan,
      points: [
        "Real-Time Multi-Object Detection",
        "Custom Object Classification",
        "YOLO & Faster R-CNN Implementations",
        "High-Precision Bounding Box Annotation"
      ]
    },
    {
      title: "Image Segmentation & Analysis",
      icon: Eye,
      points: [
        "Semantic & Instance Segmentation",
        "Medical Image Analysis",
        "Satellite & Aerial Imagery Processing",
        "Defect Detection in Manufacturing"
      ]
    },
    {
      title: "Facial Recognition & Biometrics",
      icon: Activity,
      points: [
        "Advanced Face Detection & Matching",
        "Emotion & Age/Gender Recognition",
        "Liveness Detection & Anti-Spoofing",
        "Secure Access Control Systems"
      ]
    },
    {
      title: "Video Analytics & Tracking",
      icon: Camera,
      points: [
        "Multi-Object Tracking Across Frames",
        "Action & Behavior Recognition",
        "Crowd Monitoring & Anomaly Detection",
        "Sports Analytics & Performance Tracking"
      ]
    },
    {
      title: "Autonomous Systems Vision",
      icon: Brain,
      points: [
        "3D Scene Understanding & Depth Estimation",
        "Lane & Obstacle Detection for Vehicles",
        "SLAM & Visual Odometry",
        "Drone & Robotics Navigation"
      ]
    }
  ];

  const whyChooseUs = [
    "Industry-Leading Accuracy",
    "Real-Time Performance Optimized",
    "Custom Model Training",
    "Edge & Cloud Deployment Ready",
    "Proven Across Sectors"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We analyze your visual data needs and prepare high-quality annotated datasets for optimal model performance." },
    { num: "02", title: "Intelligent Model Architecture", desc: "We design and train cutting-edge vision models (CNNs, Transformers, etc.) tailored to your exact requirements." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every model is thoroughly tested for accuracy, speed, robustness, and real-world edge cases." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Seamless integration with continuous monitoring, retraining, and performance optimization." }
  ];

  const faqs = [
    { q: "What types of computer vision projects do you handle?", a: "We specialize in object detection, segmentation, facial analysis, video tracking, autonomous vision, and industrial quality control." },
    { q: "Can you work with custom datasets and edge devices?", a: "Yes! We train models on your proprietary data and optimize for deployment on edge devices, mobile, or cloud." },
    { q: "How accurate are your computer vision solutions?", a: "Our models consistently achieve state-of-the-art results (95%+ mAP on standard benchmarks) and are fine-tuned for your specific use case." }
  ];

  return (
    <>
      {/* HERO - DARK PREMIUM */}
      <section className="ai-service-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="ai-hero-main"
          >
            <div className="ai-service-badge">
              <Eye size={34} />
              <span>Computer Vision</span>
            </div>
            <h1 className="ai-hero-title">
              Vision<br />
              <span className="title-gradient">That Sees Beyond Limits</span>
            </h1>
            <p className="ai-hero-text">
              We build powerful computer vision systems that detect, analyze, and understand visual data with superhuman precision and speed.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Unlock Visual Intelligence <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core Computer Vision Capabilities</h2>
          <div className="ai-services-grid">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="ai-service-card"
                >
                  <div className="service-icon-wrapper">
                    <Icon size={48} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <ul className="service-features-list">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="ai-why-section">
        <div className="container">
          <h2 className="top-heading white">Why Partner With Us</h2>
          <div className="why-reasons-grid">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="why-reason-card"
              >
                <span className="reason-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ai-process-section">
        <div className="container">
          <h2 className="top-heading white">Our Proven Process</h2>
          <div className="process-steps-grid">
            {ourProcess.map((step, index) => (
              <div key={index} className="process-step-card">
                <div className="step-number">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ai-faq-section">
        <div className="container">
          <h2 className="top-heading white">Questions We Often Hear</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-toggle"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`toggle-icon ${openFAQ === index ? "rotated" : ""}`} />
                </button>
                {openFAQ === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="faq-content"
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ai-final-cta">
        <div className="container">
          <h2>Ready to See the Future?</h2>
          <p>Let’s build computer vision that transforms how your business sees the world.</p>
          <a href="/contact" className="btn-primary large">
            Start Your Vision Project
          </a>
        </div>
      </section>
    </>
  );
}