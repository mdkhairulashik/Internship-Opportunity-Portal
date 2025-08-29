import React, { useEffect, useState } from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Internship from './Internship';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

// const internshipsArray= [1,2,3,4,5,6,7,8];
export const Internships = () => {
    const {allInternships, searchedQuery} = useSelector(store => store.internship);
    const [filterInternships, setFilterInternships] = useState(allInternships);
    useEffect(() => {
        if(searchedQuery){
            const filteredInternships = allInternships.filter((internship) => {
                return internship.title.toLowerCase().includes(searchedQuery.toLowerCase()) || 
                internship.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
                internship.location.toLowerCase().includes(searchedQuery.toLowerCase()) 

            })
            setFilterInternships(filterInternships)
        } else{
            setFilterInternships(allInternships)
        }

    },[allInternships, searchedQuery]);
    
    return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='flex gap-5'>
                <div className='w-20%'>
                    <FilterCard/>

                </div>
                
            {
                setFilterInternships.length <= 0 ? <span>Internship not found</span>:(
                    <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                        <div className='grid grid-cols-3 gap-4'>
                            {
                                allInternships.map((internship)=>(
                                    <motion.div 
                                    initial={{opacity:0,x:100}}
                                    animate={{opacity:1,x:0}}
                                    exit={{opacity:0,x:-100}}
                                    transition={{duration:0.3}}

                                    
                                    key={internship?._id}>
                                        <Internship internship={internship}/>
                                    </motion.div>

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