import React from "react";

export default function OurProcess() {
  const steps = [
    { num: "1", title: "Discovery & Requirement Analysis", desc: "Understanding your needs deeply" },
    { num: "2", title: "Design & Development", desc: "Building innovative solutions" },
    { num: "3", title: "Quality Assurance & Testing", desc: "Ensuring perfection" },
    { num: "4", title: "Deployment & Launch", desc: "Going live seamlessly" },
    { num: "5", title: "Maintenance & Ongoing Support", desc: "Long-term partnership" },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="portfolio-heading">🧭 Our Process (How We Work)</h2>
        <div className="portfolio-grid">
          {steps.map((step, i) => (
            <div key={i} className="portfolio-item" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="portfolio-overlay">
                <h3>{step.num}. {step.title}</h3>
                <p>{step.desc}</p>
                <span>Step Details</span>
              </div>
              <div className="placeholder-img" style={{
                background: 'rgba(0, 123, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
                color: 'var(--accent-blue)'
              }}>
                {step.num}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}