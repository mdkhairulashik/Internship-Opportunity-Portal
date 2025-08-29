import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/internshipSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchInternshipHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");

    }


  return (
    <div className='text-center'>
        <div className='flex flex-col gap-5 my-10'>
            <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#6A38C2] font-medium'>Leading Internship Portal in Bangladesh </span>
            <h1 className='text-5xl font-bold'>Search, Apply & <br/>Get Your <span className='text-[#F83002]'>Dream Internships</span></h1>
            <p>Apply now and get your expected internship.</p>
            <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                <input
                    type="text"
                    placeholder='Find your dream internships'
                    onChange={(e) => setQuery(e.target.value)}
                    className='outline-none border-none w-full'
                />
                <Button onClick={searchInternshipHandler} className="rounded-r-full bg-[#6A38C2] text-[#6A38C2]">
                    <Search className='h-5 w-5'/>
                </Button>

            </div>
        </div>
    </div>
  )
}

export default HeroSection