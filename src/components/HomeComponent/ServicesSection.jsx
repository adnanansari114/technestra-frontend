// import React from "react";
// import { Link } from "react-router-dom";

// export default function ServicesSection() {
//   const services = [
//     {
//       icon: "computer",
//       title: "Web Design",
//       desc: "UI/UX design that feels intuitive, intelligent, and on-brand.",
//       color: "var(--second-primary)",
//     },
//     {
//       icon: "code",
//       title: "Webflow Development",
//       desc: "Lightning-fast, scalable websites built with clean semantic code.",
//       color: "#00f2ea",
//     },
//     {
//       icon: "speed",
//       title: "Performance & SEO",
//       desc: "Optimized for speed, search, and seamless experience across all devices.",
//       color: "var(--primary)",
//     },
//   ];

//   return (
//     <section className="services-section">
//       <div className="container">
//         {/* Top Text */}
//         <div className="services-header">
//           <p className="services-small">S E R V I C E S</p>
//           <h2 className="services-title ">What I Build</h2>
//           <p className="services-desc">
//             From concept to clean Webflow code — I design and develop<br />
//             future-proof digital experiences.
//           </p>
//         </div>

//         {/* Services Cards */}
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="service-card"
//               style={{ "--card-delay": `${index * 0.2}s` }}
//             >
//               <div className="card-glow" style={{ background: service.color }}></div>
//               <div className="card-icon">
//                 <span className={`icon-${service.icon}`}></span>
//               </div>
//               <h3 className="card-title sub-heading">{service.title}</h3>
//               <p className="card-desc para-two">{service.desc}</p>
//               <Link to="/services" className="card-link">
//                 Learn More →
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Big SERVICES Text Background */}
//         <div className="bg-text">SERVICES</div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import { FileText, Clock, Users } from "lucide-react"; // Lucide icons import

export default function ServicesSection() {
  const services = [
    {
      icon: <FileText size={48} className="lucide-icon" />,  // Document icon
      title: "Fixed-Price Projects",
      desc: "Clear scope, fixed budget, and guaranteed delivery timeline. Perfect for well-defined projects with predictable outcomes.",
      color: "var(--accent-blue)",  // Blue glow
    },
    {
      icon: <Clock size={48} className="lucide-icon" />,     // Clock icon
      title: "Time & Material",
      desc: "Flexible engagement for evolving requirements. Pay for actual effort with full control and scalability.",
      color: "#7209b7",        // Purple vibe for flexibility
    },
    {
      icon: <Users size={48} className="lucide-icon" />,     // Users icon
      title: "Dedicated Teams",
      desc: "Your extended team of senior specialists working exclusively on your goals with complete alignment and ownership.",
      color: "#4cc9f0",        // Cyan for team feel
    },
  ];

  return (
    <section className="services-section">
      <div className="container">
        {/* Top Text */}
        <div className="services-header">
          <p className="services-small">E N G A G E M E N T</p>
          <h2 className="services-title">Engagement Models</h2>
          <p className="services-desc">
            Flexible collaboration options designed to match your project needs,<br />
            timeline, and long-term vision.
          </p>
        </div>

        {/* Services Cards - Lucide Icons */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              style={{ "--card-delay": `${index * 0.2}s` }}
            >
              <div className="card-glow" style={{ background: service.color }}></div>
              <div className="card-icon">
                {service.icon}  {/* Lucide icon rendered here */}
              </div>
              <h3 className="card-title sub-heading">{service.title}</h3>
              <p className="card-desc para-two">{service.desc}</p>
              {/* <Link to="/contact" className="card-link">
                Get Started →
              </Link> */}
            </div>
          ))}
        </div>

        {/* Big Background Text */}
        <div className="bg-text">MODELS</div>
      </div>
    </section>
  );
}