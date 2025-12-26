import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Target, Users, Rocket, Globe } from "lucide-react";
import ReadySection from "../../components/ReadySection";
import '../../styles/About.css';

export default function OurStory() {
  const journey = [
    { year: "2011", title: "Foundation", desc: "Started as a small team of passionate developers solving complex problems with clean code." },
    { year: "2015", title: "Global Expansion", desc: "Expanded to serve clients across USA, Europe, and Middle East with remote talent." },
    { year: "2018", title: "Cloud & DevOps Focus", desc: "Became early adopters of AWS, Azure, and modern DevOps practices." },
    { year: "2021", title: "AI Revolution Begins", desc: "Launched dedicated AI/ML division delivering production-grade intelligent systems." },
    { year: "2024", title: "Enterprise Scale", desc: "Helped Fortune 500 companies build AI-powered products and modern data platforms." },
    { year: "2025", title: "Today", desc: "Leading the future of intelligent digital transformation with 14+ years of excellence." }
  ];

  const values = [
    { icon: Brain, title: "Innovation First", desc: "We push boundaries with cutting-edge AI, cloud, and modern engineering." },
    { icon: Target, title: "Results Driven", desc: "Every solution is designed to deliver measurable business impact." },
    { icon: Users, title: "Talent Obsessed", desc: "We work only with senior engineers who integrate and deliver from day one." },
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
              Our Journey<br />
              <span className="ai-gradient">Into Intelligence</span>
            </h1>
            <p className="story-subtitle">
              14+ years of building the future — from clean code to production AI systems that transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="journey-section">
        <div className="container">
          <h2 className="top-heading white">Our Journey</h2>
          <div className="timeline">
            {journey.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15 }}
                className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="container">
          <h2 className="top-heading white">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="value-card"
                >
                  <div className="value-icon">
                    <Icon size={48} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="stat-item"
            >
              <h3>14+</h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="stat-item"
            >
              <h3>50+</h3>
              <p>Global Clients</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="stat-item"
            >
              <h3>200+</h3>
              <p>Projects Delivered</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="stat-item"
            >
              <h3>98%</h3>
              <p>Client Retention</p>
            </motion.div>
          </div>
        </div>
      </section>

      <ReadySection />
    </>
  );
}