// components/Team.jsx
import React from "react";

export default function Team() {
  const team = [
    { name: "Alex Rivera", role: "Creative Director", img: "A" },
    { name: "Jamie Lee", role: "Lead Developer", img: "J" },
    { name: "Taylor Kim", role: "UI/UX Designer", img: "T" },
  ];

  return (
    <section className="team-section">
      <div className="container">
        <h2 className="top-heading">Meet The Team</h2>
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-img">{member.img}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                <span>In</span>
                <span>Tw</span>
                <span>Be</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}