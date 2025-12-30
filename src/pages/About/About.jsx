import React from 'react';
import AboutIntro from '../../components/AboutComponent/AboutIntro';     
import OurProcess from '../../components/AboutComponent/OurProcess';
import ReadySection from "../../components/ReadySection.jsx";
import '../../styles/About.css';

export default function About() {
  return (
    <>
      <AboutIntro />
      <OurProcess />
      <ReadySection />
    </>
  );
}