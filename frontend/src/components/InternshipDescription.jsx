import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { APPLICATION_API_END_POINT, INTERNSHIP_API_END_POINT } from '@/utils/constant';
import { setSingleInternship } from '@/redux/internshipSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

export const InternshipDescription = () => {
    const {singleInternship} = useSelector(store => store.internship);
    const {user} =useSelector(store => store.auth);
    
    const isInitiallyApplied = singleInternship?.applications?.some(application => application.applicant == user?._id) || false;

    const [isApplied, setIsApplied]= useState(isInitiallyApplied);


    const params = useParams();
    const internshipId = params.id;
    
    const dispatch = useDispatch();

    const applyInternshipHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${internshipId}`, {withCredentials:true});
            console.log(res.data);
            if (res.data.success){
                setIsApplied(true); //update the local state
                const updatedSingleInternship = {...singleInternship, applications:[...singleInternship.applications, {applicant:user?._id}]} //updating single internships
                dispatch(setSingleInternship(updatedSingleInternship)); // helps us to real time Ui update
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    

    useEffect(() =>{
        const fetchSingleInternship = async() => {
            try {
                const res = await axios.get(`${INTERNSHIP_API_END_POINT}/get/${internshipId}`,{withCredentials:true});
                if (res.data.success){
                    dispatch(setSingleInternship(res.data.internship));
                    setIsApplied(res.data.internship.applications.some(application=>application.applicant == user?._id)) //Ensure the state is in sync with fetched data


                }
            } catch (error) {
                console.log(error);
                
                
            }
        }
        fetchSingleInternship();
    },[internshipId, dispatch, user?._id]);

    return (
    <div className='max-w-7xl mx-auto my-8'>
        <div className='flex items-center justify-between'>
        <div>
            <h4 className='font-bold text-xl'>{singleInternship?.title}</h4>
            <div className="flex items-center gap-4 mt-4">
                <Badge className="text-blue-700 font-semibold" variant="ghost">{singleInternship?.position} Positions</Badge>
                <Badge className="text-[#F83002] font-semibold" variant="ghost">{singleInternship?.internshipType}</Badge>
                <Badge className="text-[#7209b7] font-semibold" variant="ghost">{singleInternship?.salary}K</Badge>

            </div>
        </div>
        <Button 
        onClick={isApplied ? null : applyInternshipHandler}
        disabled={isApplied} 
        className={`rounded-lg ${isApplied ?  'bg-gray-600 text-right text-black cursor-not-allowed':'text-[#7209b7] hover:bg-[#5f32ad]'}`}>{ isApplied ? 'Already Applied' : 'Apply Now'} </Button>
        
        </div>
        <h3 className='border-b-2 border-b-gray-300 font-medium py-4'>Internship Description</h3>
        <div className='my-4'>
            <h4 className='font-bold my-1'>Role:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.title}</span></h4>
            <h4 className='font-bold my-1'>Location:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.location}</span></h4>
            <h4 className='font-bold my-1'>Description:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.description}</span></h4>
            <h4 className='font-bold my-1'>Experience:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.experience} </span></h4>
            <h4 className='font-bold my-1'>Salary:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.salary}K</span></h4>
            <h4 className='font-bold my-1'>Total Applicants:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.application?.length}</span></h4>
            <h4 className='font-bold my-1'>Posted Date:<span className='pl-4 font-normal text-gray-800'>{singleInternship?.createdAt.split("T")[0]}</span></h4>
            

        </div>
    </div>
  )
}

export default InternshipDescription