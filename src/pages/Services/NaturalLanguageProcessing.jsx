import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, MessageSquare, Bot, Languages, Mic, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/Service.css';

export default function NaturalLanguageProcessing() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Conversational AI & Chatbots",
      icon: Bot,
      points: [
        "Intelligent Customer Support Agents",
        "Multilingual Conversational Bots",
        "Context-Aware Dialogue Systems",
        "Voice-Enabled Virtual Assistants"
      ]
    },
    {
      title: "Sentiment & Intent Analysis",
      icon: Zap,
      points: [
        "Real-Time Sentiment Detection",
        "Customer Feedback Analysis",
        "Brand Monitoring & Reputation Management",
        "Emotion & Intent Classification"
      ]
    },
    {
      title: "Machine Translation & Localization",
      icon: Languages,
      points: [
        "Neural Machine Translation Systems",
        "Domain-Specific Translation Models",
        "Real-Time Multilingual Communication",
        "Cultural Adaptation & Localization"
      ]
    },
    {
      title: "Speech Recognition & Synthesis",
      icon: Mic,
      points: [
        "Accurate Speech-to-Text Transcription",
        "Natural Text-to-Speech Voices",
        "Voice Command Systems",
        "Meeting & Call Transcription"
      ]
    },
    {
      title: "Document Intelligence & Extraction",
      icon: Brain,
      points: [
        "Automated Information Extraction",
        "Smart Document Summarization",
        "Contract & Legal Document Analysis",
        "Knowledge Base & Search Enhancement"
      ]
    }
  ];

  const whyChooseUs = [
    "State-of-the-Art Language Models",
    "Multilingual Expertise",
    "Contextual Understanding Mastery",
    "Seamless Integration Ready",
    "Privacy & Compliance Focused"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We understand your language use cases and prepare high-quality text/speech datasets for superior model performance." },
    { num: "02", title: "Intelligent Model Architecture", desc: "We design and fine-tune advanced NLP models (BERT, GPT, Whisper, etc.) specifically for your business needs." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every model is tested for accuracy, fluency, cultural sensitivity, and real-world robustness." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Seamless integration with ongoing monitoring, user feedback loops, and continuous improvement." }
  ];

  const faqs = [
    { q: "What languages do you support for NLP solutions?", a: "We work with over 100 languages including English, Hindi, Arabic, Spanish, Chinese, and regional dialects with custom fine-tuning." },
    { q: "Can you build custom chatbots that understand our industry jargon?", a: "Yes! We specialize in domain-specific fine-tuning so your chatbot speaks your industry’s language perfectly." },
    { q: "How do you handle data privacy in NLP projects?", a: "We follow strict privacy protocols — on-premise deployment options, data anonymization, and full compliance with GDPR, HIPAA, etc." }
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
              <MessageSquare size={34} />
              <span>Natural Language Processing</span>
            </div>
            <h1 className="ai-hero-title">
              Language<br />
              <span className="title-gradient">Understood Like Never Before</span>
            </h1>
            <p className="ai-hero-text">
              We create NLP systems that truly understand human language — enabling meaningful conversations, deep insights, and automated text processing at scale.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Master Language with AI <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core NLP Capabilities</h2>
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
          <h2>Ready to Speak the Language of Intelligence?</h2>
          <p>Let’s build NLP solutions that understand your customers — and your business.</p>
          <a href="/contact" className="btn-primary large">
            Start Your NLP Journey
          </a>
        </div>
      </section>
    </>
  );
}