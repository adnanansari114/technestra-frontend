import React from 'react'
import Testimonials from '../../components/HomeComponent/Testimonials';
import Portfolio from '../../components/HomeComponent/Portfolio';
import Team from '../../components/HomeComponent/Team';
import ContactForm from '../../components/HomeComponent/ContactForm';
import '../../styles/About.css';

export default function About() {
  return (
    <div>
      <Testimonials />
      <Portfolio />
      <Team />
      <ContactForm />
    </div>
  )
}
