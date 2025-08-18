import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import { CategoryCarousel } from './CategoryCarousel'
import { LatestInternships } from './LatestInternships'
import { Footer } from './Footer'
import useGetAllInternships from '@/hooks/useGetAllInternships'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  useGetAllInternships();
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(()=> {
    if (user?.role == 'recruiter'){
      navigate("/admin/companies");

    }

  },[]);
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