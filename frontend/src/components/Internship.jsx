import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

export const Internship = () => {
  const navigate= useNavigate();
  const internshipId= "jkhgafhdhjuhyghkjl";
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">3 days ago</p>
        <Button variant="outline" className="rounded-full p-2 hover:bg-gray-100 transition-colors">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Avatar>
          <AvatarImage
            src="https://cdn.pixabay.com/photo/2023/03/06/13/58/logo-7833524_640.png"
            alt="Company Logo"
          />
        </Avatar>
        <div>
          <h4 className="text-lg font-semibold text-gray-800">Company Name</h4>
          <p className="text-sm text-gray-500">Bangladesh</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-2xl text-gray-900">Internship Title</h4>
        <p className="text-sm text-gray-600 mt-2">
          Here we can see the internship description and the skills the company is looking for. This
          is a great opportunity for students to gain experience.
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          2 Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">
          Full Time
        </Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">
          50K
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button onClick={() =>navigate(`description/${internshipId}`)} variant="outline" className="w-32 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
          Details
        </Button>
        <Button
          className="w-32 py-2 text-sm font-medium bg-[#7209b7] text-[#7209b7] hover:bg-[#6a18a1] transition-colors"
        >
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Internship;
