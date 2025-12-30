import React from "react";
import '../../styles/About.css';
import{
  Shield, 
  Zap, 
  Users, 
  Clock, 
  MessageCircle, 
  HeartHandshake 
} from "lucide-react";

export default function WhyUs() {
    return(
        <>
            {/* 🏆 Why Work With Technestra */}
      <section className="why-technestra-section">
        <div className="why-bg-overlay"></div>
        <div className="container">
          <h2 className="top-heading fade-in">🏆 Why Work With Technestra</h2>
          <p className="why-subtitle fade-in">
            Trusted by growing businesses for reliable, innovative, and long-term digital partnerships.
          </p>

          <div className="why-grid">
            <div className="why-card fade-in">
              <div className="why-icon"><Shield size={32} /></div>
              <h3>Experienced Professionals</h3>
              <p>Senior engineers and IT consultants with deep domain expertise across industries.</p>
            </div>

            <div className="why-card fade-in">
              <div className="why-icon"><Zap size={32} /></div>
              <h3>Quality-Driven Delivery</h3>
              <p>Obsessed with performance, security, user experience, and measurable business results.</p>
            </div>

            <div className="why-card fade-in">
              <div className="why-icon"><Users size={32} /></div>
              <h3>Flexible Engagement Models</h3>
              <p>Project-based, dedicated teams, or staff augmentation — tailored to your needs.</p>
            </div>

            <div className="why-card fade-in">
              <div className="why-icon"><MessageCircle size={32} /></div>
              <h3>Transparent Communication</h3>
              <p>Real-time updates, clear milestones, and proactive progress reporting.</p>
            </div>

            <div className="why-card fade-in">
              <div className="why-icon"><Clock size={32} /></div>
              <h3>Proven Processes</h3>
              <p>End-to-end methodology from discovery to deployment and ongoing optimization.</p>
            </div>

            <div className="why-card fade-in">
              <div className="why-icon"><HeartHandshake size={32} /></div>
              <h3>Long-Term Partnerships</h3>
              <p>24/7 support, maintenance, and evolution — we grow with your business.</p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}