import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";

export default function LocationSection() {
  const locations = [
    {
      country: "India (HQ)",
      address: "Indore, Madhya Pradesh",
      phone: "+91 97543 64386"
    },
    {
      country: "UAE",
      address: "Al Khaleej St, Deira, Dubai",
      phone: "+971 54 750 9138"
    }
  ];

  return (
    <section className="location-section">
      <div className="container">
        <h2 className="section-title">Our Locations</h2>
        <div className="location-grid">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="location-card"
            >
              <MapPin size={32} className="location-icon" />
              <h3>{loc.country}</h3>
              <p>{loc.address}</p>
              <a href={`tel:${loc.phone.replace(/ /g, '')}`} className="location-phone">
                <Phone size={18} />
                {loc.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}