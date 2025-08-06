import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export const InternshipDescription = () => {
    const isApplied=true;
    return (
    <div className='max-w-7xl mx-auto my-8'>
        <div className='flex items-center justify-between'>
        <div>
            <h4 className='font-bold text-xl'>Frontend Developer</h4>
            <div className="flex items-center gap-4 mt-4">
                <Badge className="text-blue-700 font-semibold" variant="ghost">2 Positions</Badge>
                <Badge className="text-[#F83002] font-semibold" variant="ghost">Full Time</Badge>
                <Badge className="text-[#7209b7] font-semibold" variant="ghost">50K</Badge>

            </div>
        </div>
        <Button 
        disabled={isApplied} 
        className={`rounded-lg ${isApplied ?  'bg-gray-600 text-right text-black cursor-not-allowed':'text-[#7209b7] hover:bg-[#5f32ad]'}`}>{ isApplied ? 'Already Applied' : 'Apply Now'} </Button>
        
        </div>
        <h3 className='border-b-2 border-b-gray-300 font-medium py-4'>Internship Description</h3>
        <div className='my-4'>
            <h4 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h4>
            <h4 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>Dhaka</span></h4>
            <h4 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>Part Time</span></h4>
            <h4 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>Freash Graduates or Fourth Year University Student </span></h4>
            <h4 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>50k</span></h4>
            <h4 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>5</span></h4>
            <h4 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>05-08-2025</span></h4>
            

        </div>
    </div>
  )
}

export default InternshipDescription