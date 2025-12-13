import React from 'react'
import HeroBanner from '../components/HomeComponent/HeroBanner';
import ServicesSection from '../components/HomeComponent/ServicesSection';
import LogoSlider from '../components/HomeComponent/LogoSlider';

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ServicesSection />
      <LogoSlider />
    </div>
  )
}
