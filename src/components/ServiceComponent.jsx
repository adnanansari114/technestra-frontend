import React from "react";
import { Brain, Database, Cloud, Globe, Users, Wrench, ArrowRight } from "lucide-react";
import '../styles/Service.css';
import { motion } from "framer-motion";

export default function ServiceComponent() {
    const services = [
        {
            icon: Globe,
            title: "Web & App Development",
            desc: "End-to-end development of robust websites, mobile apps (Android, iOS), and web platforms using React, Angular, Vue, Node.js, Python, Java, Laravel, Flutter, React Native, and more.",
            points: ["React | Next.js | Flutter", "React Native | Laravel | Node.js", "PWA | Full-Stack Solutions"],
            link: "/webandappdevelopment"
        },
        {
            icon: Users,
            title: "Staff Augmentation",
            desc: "Scale your tech team with pre-vetted developers and engineers based on your needs — remote, hybrid, or onsite models.",
            points: ["Pre-vetted Senior Talent", "Fast Onboarding", "Flexible Engagement Models"],
            link: "/staffaugmentation"
        },
        {
            icon: Cloud,
            title: "Cloud Engineering & DevOps",
            desc: "Accelerate deployment and performance with cloud strategy, CI/CD automation, infrastructure setup, monitoring, and optimization across AWS, Azure & Google Cloud.",
            points: ["AWS | Azure | GCP", "CI/CD | Docker | Kubernetes", "Terraform | Infrastructure as Code"],
            link: "/cloud-devops"
        },
        {
            icon: Database,
            title: "Data Engineering & Analytics",
            desc: "Build data pipelines, integrate BI tools, and harness insights with modern data engineering, visualization, and analytics solutions.",
            points: ["ETL Pipelines | Data Warehousing", "Big Data | Real-time Analytics", "Power BI | Tableau | Looker"],
            link: "/dataengineering"
        },
        {
            icon: Brain,
            title: "Artificial Intelligence & Machine Learning",
            desc: "Drive innovation with AI/ML models, automation solutions, NLP, and data-driven intelligence.",
            points: ["Machine Learning Models", "NLP | Computer Vision", "Predictive Analytics | Automation"],
            link: "/artificialintelligence"
        },
        {
            icon: Wrench,
            title: "Maintenance & 24/7 Support",
            desc: "Keep digital platforms secure, updated, and performing well with ongoing maintenance, patching, performance optimization, and dedicated support teams.",
            points: ["Proactive Monitoring", "Security Updates & Patching", "Performance Optimization | SLA Support"],
            link: "/maintenance"
        }
    ];

    return (
    <>
        {/* SERVICES GRID - CLEAN DARK (Content Updated) */}
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
    </>
)
}