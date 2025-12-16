import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Eye, Bot, Lightbulb, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/service.css';

export default function ArtificialIntelligence() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Machine Learning Excellence",
      icon: Zap,
      points: [
        "Advanced Predictive Modeling & Forecasting",
        "Custom Neural Networks & Deep Learning Architectures",
        "Automated Feature Engineering",
        "High-Accuracy Model Optimization"
      ]
    },
    {
      title: "Advanced Natural Language Processing",
      icon: Bot,
      points: [
        "Intelligent Chatbots & Conversational Agents",
        "Real-Time Sentiment & Intent Analysis",
        "Multilingual Speech-to-Text Systems",
        "Smart Document Summarization & Extraction"
      ]
    },
    {
      title: "Cutting-Edge Computer Vision",
      icon: Eye,
      points: [
        "Precision Object Detection & Tracking",
        "Industrial Quality Inspection Automation",
        "Advanced Facial & Emotion Recognition",
        "Intelligent Visual Search Capabilities"
      ]
    },
    {
      title: "Intelligent Process Automation",
      icon: Brain,
      points: [
        "Next-Gen Robotic Process Automation",
        "Self-Learning Workflow Optimization",
        "Smart Analytics & Business Intelligence",
        "Proactive Anomaly Detection Systems"
      ]
    },
    {
      title: "Strategic AI Transformation",
      icon: Lightbulb,
      points: [
        "Comprehensive AI Roadmap Planning",
        "Organizational AI Readiness Evaluation",
        "Data Governance & Integration Strategy",
        "Executive Training & Change Management"
      ]
    }
  ];

  const whyChooseUs = [
    "Future-Forward AI Innovation",
    "Complete Project Lifecycle Ownership",
    "Built for Enterprise Scale",
    "Decades of Specialized Experience",
    "Precision Data Foundation"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We deeply understand your business challenges and prepare clean, structured data for maximum AI performance." },
    { num: "02", title: "Intelligent Model Architecture", desc: "We design and train bespoke AI models using state-of-the-art techniques tailored to your unique use case." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every model undergoes extensive testing for accuracy, bias mitigation, and real-world robustness." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Seamless integration with ongoing monitoring, automatic retraining, and continuous performance enhancement." }
  ];

  const faqs = [
    { q: "What kinds of AI systems do you specialize in?", a: "We excel in predictive analytics, conversational AI, computer vision, intelligent automation, and full enterprise AI transformation." },
    { q: "How long does a typical AI project take?", a: "From initial prototype in 4-6 weeks to full production deployment in 3-6 months, depending on data complexity and scope." },
    { q: "How do you ensure AI delivers real business value?", a: "Every project begins with clear ROI mapping, measurable KPIs, and continuous performance tracking to guarantee tangible results." }
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
              <Brain size={34} />
              <span>Artificial Intelligence</span>
            </div>
            <h1 className="ai-hero-title">
              Intelligence<br />
              <span className="title-gradient">Engineered for Impact</span>
            </h1>
            <p className="ai-hero-text">
              We craft powerful AI systems that go beyond automation — delivering predictive insights, intelligent decisions, and transformative business outcomes.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Transform with AI <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core AI Capabilities</h2>
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
          <h2>Ready to Lead with Intelligence?</h2>
          <p>Let’s build AI that doesn’t just work — it wins.</p>
          <a href="/contact" className="btn-primary large">
            Begin Your AI Transformation
          </a>
        </div>
      </section>
    </>
  );
}