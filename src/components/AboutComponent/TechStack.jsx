import React from "react";
import { 
  Code2, 
  Server, 
  Smartphone, 
  Cloud, 
  Database, 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  MessageCircle, 
  HeartHandshake 
} from "lucide-react";
import "../../styles/About.css";


export default function TechStack() {
    return(
        <>
            {/* ⚙️ Our Technology Stack */}
      <section className="tech-stack-section">
        <div className="tech-bg-overlay"></div>
        <div className="container">
          <h2 className="top-heading fade-in">⚙️ Our Technology Stack</h2>
          <p className="tech-intro fade-in">
            We leverage industry-leading technologies to build scalable, secure, and future-ready solutions.
          </p>

          <div className="tech-grid">
            <div className="tech-category fade-in">
              <h3><Code2 size={28} /> Web & Frontend</h3>
              <div className="tech-tags">
                <span>HTML5</span><span>CSS3</span><span>JavaScript</span>
                <span>React</span><span>Angular</span><span>Vue</span>
              </div>
            </div>

            <div className="tech-category fade-in">
              <h3><Server size={28} /> Backend & APIs</h3>
              <div className="tech-tags">
                <span>Node.js</span><span>Python</span><span>Java</span>
                <span>PHP</span><span>Django</span><span>Laravel</span>
              </div>
            </div>

            <div className="tech-category fade-in">
              <h3><Smartphone size={28} /> Mobile Development</h3>
              <div className="tech-tags">
                <span>Flutter</span><span>React Native</span>
                <span>Kotlin</span><span>Swift</span>
              </div>
            </div>

            <div className="tech-category fade-in">
              <h3><Cloud size={28} /> Cloud & DevOps</h3>
              <div className="tech-tags">
                <span>AWS</span><span>Azure</span><span>GCP</span>
                <span>Docker</span><span>Kubernetes</span>
              </div>
            </div>

            <div className="tech-category fade-in">
              <h3><Database size={28} /> Databases</h3>
              <div className="tech-tags">
                <span>MySQL</span><span>PostgreSQL</span>
                <span>MongoDB</span><span>Redis</span>
              </div>
            </div>

            <div className="tech-category fade-in">
              <h3><Brain size={28} /> AI & Data Intelligence</h3>
              <div className="tech-tags">
                <span>TensorFlow</span><span>PyTorch</span>
                <span>Apache Spark</span><span>Power BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}