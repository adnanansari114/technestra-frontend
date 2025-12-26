import React from 'react'
import Testimonials from '../../components/AboutComponent/Testimonials';
import Portfolio from '../../components/HomeComponent/Portfolio';
import '../../styles/About.css';
import ReadySection from "../../components/ReadySection.jsx";

export default function About() {
  return (
    <div>
      <Testimonials />
      <Portfolio />
      <ReadySection />
    </div>
  )
}
