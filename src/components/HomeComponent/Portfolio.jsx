// components/Portfolio.jsx
import React from "react";
export default function Portfolio() {
  const works = [
    { title: "E-Commerce Platform", category: "Web", img: "1" },
    { title: "Mobile Banking App", category: "Mobile", img: "2" },
    { title: "Brand Identity", category: "Design", img: "3" },
    { title: "SaaS Dashboard", category: "Web", img: "4" },
    { title: "Fitness Tracker", category: "Mobile", img: "5" },
    { title: "Crypto Wallet", category: "Web", img: "6" },
  ];

  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="top-heading">Selected Work</h2>
        <div className="portfolio-grid">
          {works.map((work, i) => (
            <div key={i} className="portfolio-item" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="portfolio-overlay">
                <h3>{work.title}</h3>
                <p>{work.category}</p>
                <span>View Project</span>
              </div>
              <div className="placeholder-img">{work.img}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}