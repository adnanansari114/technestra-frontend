import React, { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Bot, Sparkles, Image, Music, ArrowRight, ChevronDown } from "lucide-react";
import '../../styles/Service.css';

export default function GenerativeAI() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const aiServices = [
    {
      title: "Text & Content Generation",
      icon: Bot,
      points: ["AI-Powered Copywriting", "Automated Blog & Article Creation", "Marketing Content at Scale", "Multilingual Content Synthesis"]
    },
    {
      title: "Image & Visual Generation",
      icon: Image,
      points: ["Photorealistic Image Synthesis", "Custom Illustration & Design", "Product Visualization", "Brand Asset Generation"]
    },
    {
      title: "Video & Motion Graphics",
      icon: Zap,
      points: ["Text-to-Video Creation", "Animated Explainer Videos", "Personalized Video Ads", "Synthetic Media Production"]
    },
    {
      title: "Audio & Voice Synthesis",
      icon: Music,
      points: ["Natural-Sounding Voiceovers", "Custom AI Voices & Clones", "Podcast & Audiobook Generation", "Music Composition Assistance"]
    },
    {
      title: "Creative Code & Design",
      icon: Sparkles,
      points: ["AI-Assisted UI/UX Design", "Automated Code Generation", "3D Model & Asset Creation", "Logo & Branding Automation"]
    }
  ];

  const whyChooseUs = [
    "Cutting-Edge Generative Models",
    "Custom Fine-Tuned Solutions",
    "Ethical & Safe AI Deployment",
    "High-Quality Consistent Output",
    "Full Creative Control"
  ];

  const ourProcess = [
    { num: "01", title: "Discovery & Data Foundation", desc: "We deeply understand your creative needs and prepare high-quality training data or leverage pre-trained models." },
    { num: "02", title: "Model Selection & Fine-Tuning", desc: "We choose and customize the best generative models (Stable Diffusion, GPT, etc.) for your specific use case." },
    { num: "03", title: "Rigorous Validation & Refinement", desc: "Every output is tested for quality, brand alignment, and ethical compliance." },
    { num: "04", title: "Production Deployment & Evolution", desc: "Seamless integration with ongoing monitoring and continuous model improvement." }
  ];

  const faqs = [
    { q: "Can you create custom AI voices or images for our brand?", a: "Yes! We specialize in fine-tuning models on your brand assets to generate consistent, on-brand content." },
    { q: "How do you ensure generated content is original and safe?", a: "We implement plagiarism checks, content filters, and ethical guidelines in every deployment." },
    { q: "Do you support multimodal generation?", a: "Absolutely — text, image, video, and audio generation in single or combined workflows." }
  ];

  return (
    <>
      <section className="ai-service-hero">
        <div className="hero-overlay-glow"></div>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="ai-hero-main">
            <div className="ai-service-badge">
              <Sparkles size={34} />
              <span>Generative AI</span>
            </div>
            <h1 className="ai-hero-title">
              Create<br />
              <span className="title-gradient">What Was Impossible</span>
            </h1>
            <p className="ai-hero-text">
              From text to images, videos to voices — we build generative AI systems that create original, high-quality content at scale.
            </p>
            <a href="/contact" className="btn-primary ai-cta-btn">
              Generate the Future <ArrowRight className="ml-2" size={22} />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="ai-capabilities-section">
        <div className="container">
          <h2 className="service-box-heading white">Core Generative Capabilities</h2>
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
          <h2>Ready to Create with AI?</h2>
          <p>Let’s build generative systems that produce extraordinary content.</p>
          <a href="/contact" className="btn-primary large">Start Generating</a>
        </div>
      </section>
    </>
  );
}