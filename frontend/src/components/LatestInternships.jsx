import React from 'react'
import { LatestInternshipsCards } from './LatestInternshipsCards';

const randomInernships=[1,2,3,4,5,6,7,8];
export const LatestInternships = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span>New</span> <span className='text-[#6A38C2]'>Internship</span> Oppenings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
            {
            randomInernships.slice(0,6).map((Item, index) => <LatestInternshipsCards/> )
            }

        </div>
        
    </div>
  )
}
export default LatestInternships