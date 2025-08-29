import React from 'react'
import { LatestInternshipsCards } from './LatestInternshipsCards';
import { useSelector } from 'react-redux';

//const randomInernships=[1,2,3,4,5,6,7,8];
export const LatestInternships = () => {
  const {allInternships} = useSelector(store => store.internship);
  
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span>New</span> <span className='text-[#6A38C2]'>Internship</span> Oppenings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
            {
            allInternships.length <= 0? <span>No Internship Available</span> : allInternships?.slice(0,6).map((internship) => <LatestInternshipsCards key={internship._id} internship={internship}/> )
            }

        </div>
        
    </div>
  )
}
export default LatestInternships