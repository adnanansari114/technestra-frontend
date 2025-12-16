import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function SocialSection() {
  const socials = [
    { id: 1, name: "Facebook", icon: FaFacebookF, link: "https://www.facebook.com/theittalents" },
    { id: 2, name: "LinkedIn", icon: FaLinkedinIn, link: "https://www.linkedin.com/company/theittalents/" },
    { id: 3, name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/theittalent?igsh=eWxkYm9xNmVodHZj" },
  ];

  return (
    <>
      <section className="social-section">
        <div className="container">
          <h2 className="social-title">Connect With Us</h2>
          <div className="social-grid">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div className="social-icon">
                    <Icon size={36} />
                  </div>
                  <h3>{item.name}</h3>
                  <p>Follow Us</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}