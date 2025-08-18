import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Internship from './Internship';
import { useSelector } from 'react-redux';

const internshipsArray= [1,2,3,4,5,6,7,8];
export const Internships = () => {
    const {allInternships} = useSelector(store => store.internship);
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='flex gap-5'>
                <div className='w-20%'>
                    <FilterCard/>

                </div>
                
            {
                allInternships.length <= 0 ? <span>Internship not found</span>:(
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                allInternships.map((internship)=>(
                                    <div key={internship?._id}>
                                        <Internship internship={internship}/>
                                    </div>

                                ))
                            }
                        </div>
                        
                        

                    </div>
                )
                
            }

            </div>

        </div>
        
        

    </div>
  )
}
export default Internships