// MLOpsAIInfrastructure.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Server, GitBranch, ShieldAlert, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/Service.css';

export default function MLOpsAIInfrastructure() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Model Deployment & Serving",
      icon: Server,
      points: [
        "Scalable Model APIs & Endpoints",
        "Containerized Deployment (Docker/K8s)",
        "Serverless & Edge Deployment",
        "Multi-Cloud & Hybrid Solutions"
      ]
    },
    {
      title: "CI/CD Pipelines for AI",
      icon: GitBranch,
      points: [
        "Automated Model Training Pipelines",
        "Version Control for Models & Data",
        "Continuous Integration & Testing",
        "One-Click Rollback & Canary Releases"
      ]
    },
    {
      title: "Monitoring & Observability",
      icon: Zap,
      points: [
        "Real-Time Performance Tracking",
        "Model Drift & Data Drift Detection",
        "Explainability & Prediction Logging",
        "Custom Dashboards & Alerts"
      ]
    },
    {
      title: "Automated Retraining & Governance",
      icon: ShieldAlert,
      points: [
        "Trigger-Based Model Retraining",
        "Data Pipeline Orchestration",
        "Model Registry & Lineage Tracking",
        "Compliance & Audit Trails"
      ]
    },
    {
      title: "Cost & Resource Optimization",
      icon: Brain,
      points: [
        "GPU/TPU Resource Management",
        "Auto-Scaling Infrastructure",
        "Cost Forecasting & Reduction",
        "Sustainable AI Operations"
      ]
    }
  ];

  const whyChooseUs = [
    "Production-Grade Reliability",
    "End-to-End Automation",
    "Seamless Team Collaboration",
    "Enterprise Security Standards",
    "Proven at Massive Scale"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We assess your current AI workflow, infrastructure, and pain points to design a robust MLOps strategy." },
    { num: "02", title: "Intelligent Model Architecture", desc: "We build scalable pipelines using tools like Kubeflow, MLflow, Airflow, and cloud-native services." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every component is tested for reliability, security, scalability, and performance under real load." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Full rollout with ongoing support, monitoring, optimization, and continuous evolution." }
  ];

  const faqs = [
    { q: "What tools and platforms do you use for MLOps?", a: "We work with MLflow, Kubeflow, Airflow, Terraform, GitHub Actions, AWS SageMaker, Azure ML, GCP Vertex AI, and custom solutions." },
    { q: "Can you help migrate existing models to production?", a: "Yes! We specialize in taking research/prototype models and making them production-ready with monitoring and automation." },
    { q: "How do you ensure models stay accurate over time?", a: "Through continuous monitoring, automated drift detection, and scheduled retraining pipelines with human-in-the-loop approval." }
  ];

  return (
    <>
      <section className="ai-service-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="ai-hero-main">
            <div className="ai-service-badge">
              <Server size={34} />
              <span>MLOps & AI Infrastructure</span>
            </div>
            <h1 className="ai-hero-title">
              AI That Runs<br />
              <span className="title-gradient">Flawlessly at Scale</span>
            </h1>
            <p className="ai-hero-text">
              We build robust MLOps platforms and infrastructure so your AI models deliver reliable, high-performance results in production — day after day.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Scale Your AI <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core MLOps Capabilities</h2>
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
          <h2>Ready to Run AI Like a Pro?</h2>
          <p>Let’s build infrastructure that makes your AI reliable, scalable, and future-proof.</p>
          <a href="/contact" className="btn-primary large">Build Your MLOps Platform</a>
        </div>
      </section>
    </>
  );
}