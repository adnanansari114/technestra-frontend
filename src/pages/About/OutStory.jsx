import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Target, 
  Users, 
  Rocket, 
  Globe, 
  Brain, 
  Cloud, 
  Database, 
  FileText, 
  Clock, 
  HeartHandshake 
} from "lucide-react";
import ReadySection from "../../components/ReadySection";
import '../../styles/About.css';

export default function OurStory() {
  // Why Choose Us Cards
  const whyChoose = [
    { icon: Zap, title: "Quality Comes First", desc: "We focus on results, performance & exceptional user experience in every solution." },
    { icon: Target, title: "On-Time Delivery", desc: "Proven track record of delivering projects on schedule with zero compromises." },
    { icon: Shield, title: "Transparent Pricing", desc: "No hidden costs — clear, honest, and competitive pricing from day one." },
    { icon: Users, title: "Scalable Team Options", desc: "From single experts to full dedicated teams — we scale with your needs." },
    { icon: HeartHandshake, title: "Customer-Centric Support", desc: "Dedicated support teams ensuring your success long after launch." },
  ];

  // Quick Services Preview
  const servicesPreview = [
    { icon: Globe, title: "Web & App Development", desc: "Custom websites, mobile apps (Android/iOS), and scalable platforms." },
    { icon: Users, title: "Staff Augmentation", desc: "Pre-vetted senior talent — remote, hybrid, or onsite." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP — automation, CI/CD, monitoring & optimization." },
    { icon: Database, title: "Data & Analytics", desc: "Pipelines, BI tools, real-time insights & visualization." },
    { icon: Brain, title: "AI & Machine Learning", desc: "Intelligent automation, NLP, predictive models & innovation." },
    { icon: Rocket, title: "Maintenance & Support", desc: "24/7 monitoring, updates, security & performance optimization." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="story-hero">
        <div className="neural-glow"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="story-hero-content"
          >
            <h1 className="story-title">
              Technestra —<br />
              <span className="ai-gradient">Your Digital Transformation Partner</span>
            </h1>
            <p className="story-subtitle">
              Empowering Businesses with Modern IT Solutions & Talent
            </p>
            <p className="hero-desc" style={{ maxWidth: '800px', margin: '2rem auto', fontSize: '1.2rem', opacity: 0.9 }}>
              Technestra helps companies accelerate digital transformation with custom software development, top-tier engineering talent, and scalable technology solutions — all tailored to your growth goals.
            </p>
            <div className="hero-cta" style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contact" className="btn-primary large">Contact Us</a>
              <a href="#services" className="btn-secondary">Explore Services</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT TEXT + WHY CHOOSE */}
      <section className="journey-section">
        <div className="container">
          <h2 className="top-heading white">About Technestra</h2>
          <div className="about-main-text" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 4rem' }}>
            <p style={{ fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.8' }}>
              Technestra is a forward-thinking technology services company committed to delivering high-impact digital solutions. 
              We partner with businesses of all sizes — from startups to enterprises — to solve real challenges with innovative technology and engineering excellence.
            </p>
            <div style={{ margin: '3rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Vision</h4>
                <p>To enable organizations to achieve more through purposeful technology.</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Our Mission</h4>
                <p>To deliver scalable, secure, and user-centered solutions that drive business success.</p>
              </div>
            </div>
            <p style={{ fontSize: '1.1rem', opacity: 0.85 }}>
              At Technestra, our mission is to empower businesses with cutting-edge technology solutions and expert IT talent that drive measurable success. 
              With a customer-first approach and a passion for innovation, we help you stay competitive in a fast-moving digital landscape.
            </p>
          </div>

          <h2 className="top-heading white" style={{ marginTop: '6rem' }}>Why Choose Us?</h2>
          <div className="values-grid">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <Icon size={48} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="values-section">
        <div className="container">
          <h2 className="top-heading white">🛠️ Our Services</h2>
          <div className="values-grid">
            {servicesPreview.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <Icon size={48} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="journey-section">
        <div className="container">
          <h2 className="top-heading white">🧭 Our Process (How We Work)</h2>
          <div className="timeline">
            {[
              "Discovery & Requirement Analysis",
              "Design & Development",
              "Quality Assurance & Testing",
              "Deployment & Launch",
              "Maintenance & Ongoing Support"
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{i + 1}</span>
                  <h3>{step}</h3>
                  <p>Ensuring excellence at every stage of your project lifecycle.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="values-section">
        <div className="container">
          <h2 className="top-heading white">📋 Engagement Models</h2>
          <div className="values-grid">
            {[
              { icon: FileText, title: "Fixed-Price Projects", desc: "Clear scope & delivery schedule" },
              { icon: Clock, title: "Time & Material", desc: "Flexible resource allocation" },
              { icon: Users, title: "Dedicated Teams", desc: "Long-term focused talent" },
              { icon: Target, title: "Consulting & Strategy", desc: "Expert guidance for digital transformation" },
            ].map((model, i) => {
              const Icon = model.icon;
              return (
                <div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <Icon size={48} />
                  </div>
                  <h3>{model.title}</h3>
                  <p>{model.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ReadySection />
    </>
  );
}