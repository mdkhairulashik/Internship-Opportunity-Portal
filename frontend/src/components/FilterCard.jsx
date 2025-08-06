import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from '@radix-ui/react-label'

const filterData =[
    {
        filterType: "Location",
        array: ["Dhaka", "Chittagong", "Munshiganj", "Bogura", "Barisal"]
    },
    {
        filterType: "Industry",
        array: ["UI/US", "Frontend Developer", "Data Analyt","FullStack Developer"]
    },
    {
        filterType: "Salary",
        array: ["0-20k", "21-30k", "31-100k"]
    },
]

export const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h4 className='font-bold text-lg'>Filter Internships</h4>
        <hr className='mt-3'></hr>
        <RadioGroup>
            {
                filterData.map((data,index) => (
                    <div>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {
                            data.array.map((item,index)=>{
                                return (
                                    <div className='flex items-center space-x-2 my-2'>
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>

                                    </div>
                                )

                            })
                        }
                    </div>
                ))
            }
        </RadioGroup>

    </div>
  )
}

export default FilterCard