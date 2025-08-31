import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/internshipSlice';

const category = [
    "Data Analyst",
    "Data Scientist",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer"

]


export const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchInternshipHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    
    }
    return (
    <div>
        <Carousel className="w-full max-w-xl mx-auto my-20 border-gray-200 ">
            <CarouselContent>
                {
                    category.map((cat, index) => (
                        <CarouselItem className="md:basis-1/2 lg-basis-1/3 ">
                            <Button onClick={()=>searchInternshipHandler(cat)} variant="outline"  className="rounded-full">{cat}</Button>

                        </CarouselItem>

                    ))
                }
                
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
        </Carousel>

    </div>
  )
}
export default CategoryCarousel