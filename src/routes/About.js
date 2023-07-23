import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonCarousel from '../components/CommonCarousel'

const About = () => {
  return (
    <div>
      <Navbar />
      <CommonCarousel heading="About Me!" text="Automation Engineer"/>
      <Footer />
    </div>
  )
}

export default About
