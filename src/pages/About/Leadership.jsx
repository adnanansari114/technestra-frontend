import React from "react";
import { motion } from "framer-motion";
import Team from '../../components/AboutComponent/Team';
import '../../styles/About.css'

export default function Leadership() {
  return (
    <>

      {/* HERO BANNER */}
      <section className="leadership-banner">
        <div className="banner-overlay"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="banner-content"
          >
            <h1 className="banner-title">
              Leadership<br />
              <span className="gradient-lead">That Inspires</span>
            </h1>
            <p className="banner-subtitle">
              Guided by experienced visionaries committed to innovation, integrity, and client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CO-FOUNDER SECTION */}
      <section className="leader-profile co-founder-profile">
        <div className="container">
          <div className="profile-grid">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="profile-image"
            >
              <img src="/images/co-founder.jpg" alt="Co-Founder" />
              <div className="image-glow"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="profile-info"
            >
              <span className="role-badge">Co-Founder</span>
              <h2 className="leader-name">Murtaza</h2>
              <p className="leader-bio">
                Murtaza is a seasoned innovator and advocate in global digital and data transformation, with a strong focus on FinTech, InsurTech, and digital transformation. With over 17 years of business experience across the USA, UK, Middle East, Germany, Hong Kong, and India, I’ve driven enterprise expansion and organizational transformations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="leader-profile ceo-profile">
        <div className="container">
          <div className="profile-grid reverse">
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="profile-info"
            >
              <span className="role-badge ceo">Leadership Team</span>
              <h2 className="leader-name">Touhid Rahman</h2>
              <p className="leader-bio">
                Touhid Rahman is an accomplished Chief Executive Officer with a proven track record across multiple industries, including Communications, Financial Services, and Leadership Development. He is highly skilled in creating momentum for organizations and has extensive experience in establishing and scaling newly-initiated campaigns into major global operations4. He has successfully launched multiple companies into multi-million-dollar ventures and has led teams of over 30+ individuals. His initiatives have generated over $50 million in worldwide revenue.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="profile-image"
            >
              <img src="/images/ceo.jpg" alt="CEO" />
              <div className="image-glow ceo"></div>
            </motion.div>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}