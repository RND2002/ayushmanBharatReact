import React from 'react'
import Navbar from './Navbar'
import landingImage from '../assets/landing background.jpg'
import Footer from './Footer'
const LandingPage = () => {
  return (
    <div className='bg-slate-200 h-screen'>
        <Navbar/>

        <img  className='object-cover' src= {landingImage} alt='landing image'/>
        <Footer/>
    </div>
  )
}

export default LandingPage
