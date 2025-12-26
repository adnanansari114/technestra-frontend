import React from 'react'
import HeroBanner from '../components/HomeComponent/HeroBanner';
import ServicesSection from '../components/HomeComponent/ServicesSection';
import LogoSlider from '../components/HomeComponent/LogoSlider';
import ContactSection from "../components/ContactComponent/ContactSection";
import ReadySection from '../components/ReadySection';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ServicesSection />
      <LogoSlider />
      <ContactSection />
      <ReadySection />
    </div>
  )
}
