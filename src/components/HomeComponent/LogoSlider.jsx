import React from "react";
import { FaPython, FaNodeJs, FaBattleNet, FaInternetExplorer,FaLaravel } from "react-icons/fa";
import { GiArtificialHive, GiArtificialIntelligence } from "react-icons/gi";
import { RiMiniProgramLine, RiReactjsLine  } from "react-icons/ri";
import { SiJirasoftware, SiBmcsoftware, SiThealgorithms } from "react-icons/si";

export default function LogoSlider() {
  const logos = [
    { icon: FaPython , color: "#4285F4" },
    { icon: RiMiniProgramLine, color: "#434647ff" },
    { icon: GiArtificialHive, color: "#00A4EF" },
    { icon: RiReactjsLine , color: "#FF9900" },
    { icon: FaNodeJs , color: "#1877F2" },
    { icon: SiJirasoftware, color: "#E50914" },
    { icon: SiBmcsoftware , color: "#CC0000" },
    { icon: FaInternetExplorer , color: "#FF0000" },
    { icon: FaBattleNet , color: "#1DB954" },
    { icon: SiThealgorithms , color: "#95BF47" },
    { icon: FaLaravel , color: "#635BFF" },
    { icon: GiArtificialIntelligence , color: "#F24E1E" },
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