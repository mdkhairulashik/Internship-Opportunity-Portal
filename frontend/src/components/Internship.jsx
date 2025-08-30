import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Internship = ({ internship }) => {
  const navigate = useNavigate();
  const id = internship?._id;

  const handleViewDetails = () => {
    if (!id) return; // guard: do nothing if id missing
    navigate(`/description/${id}`);
  };

  const daysAgoFunction =(mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/(1000*24*60*60));
  }
  return (
    <div className="p-6 rounded-lg shadow-lg bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{daysAgoFunction(internship?.createdAt)===0 ? "Today" : `${daysAgoFunction(internship?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full p-2 hover:bg-gray-100 transition-colors">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage
            src={internship?.company?.logo}
            />
          </Avatar>

        </Button>
        
        <div>
          <h4 className="text-lg font-semibold text-gray-800">{internship?.company?.name}</h4>
          <p className="text-sm text-gray-500">Bangladesh</p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-bold text-2xl text-gray-900">{internship?.title}</h4>
        <p className="text-sm text-gray-600 mt-2">
          {internship?.description}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          {internship?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">
          {internship?.internshipType}
        </Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">
          {internship?.salary}K
        </Badge>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <Button onClick={handleViewDetails} disabled={!id} variant="outline" className="w-32 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
          Details
        </Button>
        <Button
          className="w-32 py-2 text-sm font-medium bg-[#7209b7] text-[#7209b7] hover:bg-[#6a18a1] transition-colors">
          Save for Later
        </Button>
      </div>
    </div>
  );
};

export default Internship;
