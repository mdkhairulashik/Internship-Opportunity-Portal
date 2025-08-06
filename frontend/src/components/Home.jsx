import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestInternships } from './LatestInternships'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <CategoryCarousel/>
        <LatestInternships/>
        <Footer/>
    </div>
  )
}
export default Home