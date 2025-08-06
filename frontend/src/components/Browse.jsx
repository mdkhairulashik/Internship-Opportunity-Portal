import React from 'react'
import Navbar from './shared/Navbar'
import Internship from './Internship';

const randomInternships =[1,2,3,4,5,6,7,8,9];

export const Browse = () => {
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h4 className='font-bold text-xl my-10'>Search Results ({randomInternships.length})</h4>
            <div className='grid grid-cols-3 gap-4'>
                {
                randomInternships.map((item, index)=>{
                    return (
                        <Internship/>
                    )
                })
            }

            </div>
            
        </div>
    </div>
  )
}

export default Browse