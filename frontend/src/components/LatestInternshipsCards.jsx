import React from 'react'
import { Badge } from './ui/badge'

export const LatestInternshipsCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <h4 className='font-medium text-lg'>Company Name</h4>
        <p className='text-sm text-gray-500'>Bangladesh</p>
        <div>
            <h3 className='font-bold text-lg-my-2'>Internship Title</h3>
            <p className='text-sm text-gray-600'>Internship Description</p>

        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">2 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Full Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">50K</Badge>



        </div>
    </div>
        
    
  )
}
export default LatestInternshipsCards