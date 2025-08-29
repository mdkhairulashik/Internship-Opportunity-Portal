import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from '@radix-ui/react-label'
import AppliedInternshipTable from './AppliedInternshipTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import useGetAppliedInternships from '@/hooks/useGetAppliedInternships'


//const skills= ["HTML", "CSS", "REACTJS", "JAVASCRIPT"]
const isResume = true;
export const Profile = () => {
  useGetAppliedInternships();
  const[open, setOpen] = useState(false);
  const {user} = useSelector(store => store.auth);


  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl mx-auto bg-white border border-gray-300 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src="https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833524_640.png" alt="profile"/>
            </Avatar>

            <div>
              <h4 className='font-medium text-xl'>{user?.fullname}</h4>
              <p>{user?.profile?.bio}</p>

            </div>
          </div>
          <Button onClick={() =>setOpen(true)} className="text-right" variant="outline"><Pen/></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail/>
            <span>{user?.email}</span>

          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact/>
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className='my-5'>
          <h4>Skills</h4>
          <div className='flex items-center gap-1'>
            {
            user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>): <span>N/A</span>

            }

          </div>
          
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-md font-bold'>Resume</Label>
          {
            isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a> : <span>N/A</span>
          }

        </div>
      </div>
      <div className='max--4xl mx-auto bg-white rounded-2xl'>
          <h4 className='font-bold text-lg my-5'>Applied Internships</h4>
          {/*AppliedInternshipTable*/}
          <AppliedInternshipTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}
export default Profile
