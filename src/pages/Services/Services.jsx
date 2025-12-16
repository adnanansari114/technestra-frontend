import React from "react";
import { motion } from "framer-motion";
import { Brain, Database, Cloud, Globe, Users, Wrench, ArrowRight } from "lucide-react";
import '../../styles/Service.css';

export default function Services() {
    const services = [
        { icon: Brain, title: "Artificial Intelligence", desc: "Drive smarter decisions and intelligent automation with AI solutions tailored to your business needs.", points: ["Machine Learning | Predictive Analytics", "Chatbots | NLP"], link: "/artifiacialintelligence" },
        { icon: Database, title: "Data Engineering", desc: "Unlock the true power of your data with modern pipelines, data lakes, and real-time analytics infrastructure.", points: ["ETL Pipelines | Data Lakes | Big Data"], link: "/dataengineering" },
        { icon: Cloud, title: "Cloud Engineering & DevOps", desc: "Scalable, secure, and automated cloud infrastructure with CI/CD, Kubernetes, and Infrastructure as Code.", points: ["AWS | Azure | Docker | Terraform"], link: "/clouddevops" },
        { icon: Globe, title: "Web & App Development", desc: "Fast, secure, and user-centric web and mobile applications built with modern frameworks.", points: ["React | Next.js | React Native | PWA"], link: "/webappdevelopment" },
        { icon: Users, title: "Staff Augmentation", desc: "Scale your team instantly with pre-vetted senior developers, designers, and cloud experts.", points: ["On-demand Talent | Fast Onboarding | Flexible Terms"], link: "/staff-augmentation" },
        { icon: Wrench, title: "Maintenance & Support", desc: "24/7 monitoring, bug fixes, performance optimization, and SLA-backed technical support.", points: ["Proactive Monitoring | Security Updates | Performance Tuning"], link: "/maintenanceSupport" }
    ];

    return (
        <>

            {/* HERO - MINIMAL & POWERFUL */}
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

            {/* SERVICES GRID - CLEAN DARK */}
            <section id="services" className="services-section-dark">
                <div className="container">
                    <div className="services-header-center">
                        <h2 className="top-heading white">Our Services</h2>
                    </div>

                    <div className="services-grid-clean">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.a
                                    href={service.link}
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="service-card-minimal"
                                >
                                    <div className="service-icon-glow">
                                        <Icon size={42} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className="service-points">
                                        {service.points.map((p, pi) => (
                                            <span key={pi}>{p}</span>
                                        ))}
                                    </div>
                                    <span className="service-arrow">
                                        <ArrowRight size={20} />
                                    </span>
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="why-choose-premium">
                <div className="container">
                    <div className="why-grid-premium">

                        {/* Left - Animated Glowing List */}
                        <div className="why-content-glow">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="why-title-glow"
                            >
                                Why Top Companies<br />
                                <span className="gradient-highlight">Choose Us</span>
                            </motion.h2>

                            <div className="why-list-glow">
                                {[
                                    "14+ Years of Proven Excellence",
                                    "Senior-Level Talent Only",
                                    "Agile & Transparent Process",
                                    "On-Time, On-Budget Delivery",
                                    "Secure & Scalable Solutions",
                                    "24/7 Dedicated Support"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.6 }}
                                        className="why-item"
                                    >
                                        <div className="glow-line"></div>
                                        <div className="why-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right - Same Image with Better Effect */}
                        <div className="why-visual-premium">
                            <div className="image-glow-effect"></div>
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