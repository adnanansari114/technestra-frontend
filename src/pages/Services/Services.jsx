import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Cloud, Globe, Users, Wrench, ArrowRight } from "lucide-react";
import '../../styles/Service.css';
import ServiceComponent from "../../components/ServiceComponent";

export default function Services() {
    

    return (
        <>
            {/* HERO - MINIMAL & POWERFUL (Same as before) */}
            <section className="services-hero-minimal">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-minimal-content"
                    >
                        <span className="hero-tag">End-to-End IT Solutions</span>
                        <h1 className="hero-main-title">
                            We Build<br />
                            <span className="highlight">Digital Excellence</span>
                        </h1>
                        <p className="hero-subtitle">
                            14+ years delivering mission-critical IT solutions — from AI & Cloud to scalable apps and expert teams.
                        </p>
                        <div className="hero-cta">
                            <a href="/contact" className="btn-primary large">Start a Project</a>
                            <a href="#services" className="btn-view">View Services ↓</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ServiceComponent />

            {/* WHY CHOOSE US - SAME AS BEFORE */}
            <section className="why-choose-premiums">
                <div className="container">
                    <div className="why-grid-premiums">
                        <div className="why-content-glows">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="why-title-glows"
                            >
                                Why<br />
                                <span className="gradient-highlights">Choose Us</span>
                            </motion.h2>

                            <div className="why-list-glows">
                                {[
                                    "Quality Comes First",
                                    "On-Time Delivery",
                                    "Transparent Pricing",
                                    "Scalable Team Options",
                                    "Customer-Centric Support",
                                    "24/7 Dedicated Support"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        className="why-items"
                                    >
                                        <div className="glow-lines"></div>
                                        <div className="why-icons">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="why-visual-premiums">
                            <div className="image-glow-effects"></div>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                src="/images/about.jpg"
                                alt="Team Collaboration"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}