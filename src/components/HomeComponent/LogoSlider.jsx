// import React from "react";
// import '../../styles/Home.css';

// export default function LogoSlider() {
//   const logos = [
//     { name: "Google", color: "#4285F4" },
//     { name: "Apple", color: "#A2AAAD" },
//     { name: "Microsoft", color: "#00A4EF" },
//     { name: "Amazon", color: "#FF9900" },
//     { name: "Meta", color: "#1877F2" },
//     { name: "Netflix", color: "#E50914" },
//     { name: "Tesla", color: "#CC0000" },
//     { name: "Adobe", color: "#FF0000" },
//     { name: "Spotify", color: "#1DB954" },
//     { name: "Shopify", color: "#95BF47" },
//     { name: "Stripe", color: "#635BFF" },
//     { name: "Figma", color: "#F24E1E" },
//   ];

//   // Duplicate for infinite loop
//   const duplicatedLogos = [...logos, ...logos];

//   return (
//     <section className="logo-slider-section">
//       <div className="container">
//         <div className="slider-header">
//           <h2 className="top-heading">Trusted by Industry Leaders</h2>
//           <p className="para-one" style={{ textAlign: 'center', opacity: 0.8 }}>
//             We work with the world's most innovative companies
//           </p>
//         </div>

//         <div className="logo-slider-wrapper">
//           <div className="logo-track">
//             {duplicatedLogos.map((logo, index) => (
//               <div key={index} className="logo-item">
//                 <div 
//                   className="logo-box"
//                   style={{ 
//                     background: `linear-gradient(135deg, ${logo.color}20, ${logo.color}40)`,
//                     border: `1px solid ${logo.color}40`,
//                     boxShadow: `0 10px 30px ${logo.color}15`
//                   }}
//                 >
//                   <span className="logo-text">{logo.name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { FaGoogle } from "react-icons/fa";

export default function LogoSlider() {
  const logos = [
    { icon: FaGoogle, color: "#4285F4" },
    { icon: FaGoogle, color: "#A2AAAD" },
    { icon: FaGoogle, color: "#00A4EF" },
    { icon: FaGoogle, color: "#FF9900" },
    { icon: FaGoogle, color: "#1877F2" },
    { icon: FaGoogle, color: "#E50914" },
    { icon: FaGoogle, color: "#CC0000" },
    { icon: FaGoogle, color: "#FF0000" },
    { icon: FaGoogle, color: "#1DB954" },
    { icon: FaGoogle, color: "#95BF47" },
    { icon: FaGoogle, color: "#635BFF" },
    { icon: FaGoogle, color: "#F24E1E" },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="logo-slider-section">
      <div className="container">
        <div className="slider-header">
          <h2 className="top-heading">Trusted by Industry Leaders</h2>
          <p className="para-one" style={{ textAlign: 'center', opacity: 0.8 }}>
            We work with the world's most innovative companies
          </p>
        </div>

        <div className="logo-slider-wrapper">
          <div className="logo-track">
            {duplicatedLogos.map((logo, index) => {
              const Icon = logo.icon;
              return (
                <div key={index} className="logo-item">
                  <div 
                    className="logo-box"
                    style={{ 
                      background: `linear-gradient(135deg, ${logo.color}15, ${logo.color}30)`,
                      border: `1px solid ${logo.color}50`,
                      boxShadow: `0 15px 40px ${logo.color}20`
                    }}
                  >
                    <Icon className="brand-icon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}