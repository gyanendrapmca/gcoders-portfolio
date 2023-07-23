import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonCarousel from '../components/CommonCarousel'

const Project = () => {
  return (
    <div>
      <Navbar />
      <CommonCarousel heading="Projects" text="Some of my recent works"/>
      <Footer />
    </div>
  )
}

export default Project
