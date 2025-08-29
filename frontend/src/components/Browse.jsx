import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Internship from './Internship';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/internshipSlice';
import useGetAllAdminInternships from '@/hooks/useGetAllAdminInternships';

// const randomInternships =[1,2,3,4,5,6,7,8,9];

export const Browse = () => {
    useGetAllAdminInternships();
    const {allInternships} = useSelector(store => store.internship);
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    },[])
   return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto my-10'>
            <h4 className='font-bold text-xl my-10'>Search Results ({allInternships.length})</h4>
            <div className='grid grid-cols-3 gap-4'>
                {
                allInternships.map((internship)=>{
                    return (
                        <Internship key={internship._id} internship={internship}/>
                    )
                })
            }

            </div>
            
        </div>
    </div>
  )
}

export default Browse