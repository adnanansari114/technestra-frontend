// AIEthicsGovernance.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, ShieldCheck, Scale, Users, AlertTriangle, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/Service.css';

export default function AIEthicsGovernance() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Bias Detection & Mitigation",
      icon: AlertTriangle,
      points: [
        "Comprehensive Fairness Audits",
        "Demographic Parity Analysis",
        "Bias Removal Techniques",
        "Ongoing Bias Monitoring"
      ]
    },
    {
      title: "Explainable AI (XAI)",
      icon: Brain,
      points: [
        "Model Interpretability Tools",
        "Feature Importance & SHAP Analysis",
        "Prediction Explanations for Users",
        "Regulatory-Ready Documentation"
      ]
    },
    {
      title: "AI Governance Frameworks",
      icon: Scale,
      points: [
        "Custom AI Ethics Policies",
        "Risk Assessment & Management",
        "Approval Workflows for Models",
        "AI Impact Assessments"
      ]
    },
    {
      title: "Privacy & Data Protection",
      icon: ShieldCheck,
      points: [
        "Differential Privacy Implementation",
        "Data Anonymization Pipelines",
        "GDPR, CCPA, HIPAA Compliance",
        "Secure Federated Learning"
      ]
    },
    {
      title: "Responsible AI Training",
      icon: Users,
      points: [
        "Executive & Team Workshops",
        "Developer Ethics Certification",
        "Stakeholder Alignment Sessions",
        "Change Management Support"
      ]
    }
  ];

  const whyChooseUs = [
    "Ethical by Design Approach",
    "Regulatory Expertise",
    "Transparent & Auditable",
    "Trusted by Enterprises",
    "Long-Term Responsibility"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We evaluate your current AI practices, risks, and organizational goals to create a tailored ethics roadmap." },
    { num: "02", title: "Intelligent Model Architecture", desc: "We integrate fairness, explainability, and privacy tools directly into your model development lifecycle." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every model undergoes strict ethical testing, bias checks, and third-party audit preparation." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Ongoing governance with regular audits, policy updates, and team training for sustained responsibility." }
  ];

  const faqs = [
    { q: "Why is AI ethics and governance important?", a: "It prevents harm, builds user trust, ensures legal compliance, reduces reputational risk, and creates fairer outcomes for everyone." },
    { q: "Do you help with regulatory compliance?", a: "Yes — we have deep expertise in EU AI Act, NIST AI RMF, GDPR, and upcoming global regulations." },
    { q: "Can you audit our existing AI systems?", a: "Absolutely. We perform full ethical audits, identify risks, and provide actionable remediation plans." }
  ];

  return (
    <>
      <section className="ai-service-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="ai-hero-main">
            <div className="ai-service-badge">
              <ShieldCheck size={34} />
              <span>AI Ethics & Governance</span>
            </div>
            <h1 className="ai-hero-title">
              Responsible AI<br />
              <span className="title-gradient">You Can Trust</span>
            </h1>
            <p className="ai-hero-text">
              We help organizations build and deploy AI that is fair, transparent, accountable, and aligned with human values and regulations.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Build Ethical AI <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core Ethics & Governance Capabilities</h2>
          <div className="ai-services-grid">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }} className="ai-service-card">
                  <div className="service-icon-wrapper"><Icon size={48} /></div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <ul className="service-features-list">
                    {service.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ai-why-section">
        <div className="container">
          <h2 className="top-heading white">Why Partner With Us</h2>
          <div className="why-reasons-grid">
            {whyChooseUs.map((reason, index) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} className="why-reason-card">
                <span className="reason-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <section className="ai-faq-section">
        <div className="container">
          <h2 className="top-heading white">Questions We Often Hear</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-toggle" onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                  <span>{faq.q}</span>
                  <ChevronDown className={`toggle-icon ${openFAQ === index ? "rotated" : ""}`} />
                </button>
                {openFAQ === index && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="faq-content">
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-final-cta">
        <div className="container">
          <h2>Ready to Build AI with Integrity?</h2>
          <p>Let’s ensure your AI is powerful — and responsible.</p>
          <a href="/contact" className="btn-primary large">Start Ethical AI Journey</a>
        </div>
      </section>
    </>
  );
}