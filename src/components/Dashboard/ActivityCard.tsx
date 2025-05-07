import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';

interface ActivityCardProps {
  title: string;
  image: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  price: string;
  onClick?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  image,
  date,
  time,
  duration,
  location,
  price,
  onClick
}) => {
  return (
    <div 
      className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-md"
      onClick={onClick}
    >
      <div className="w-1/3 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="w-2/3 p-3">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 line-clamp-2 text-sm">{title}</h3>
          <span className="text-xs font-medium text-gray-700 whitespace-nowrap ml-1">
            {price}
          </span>
        </div>
        
        <div className="mt-2 space-y-1">
          <div className="flex items-center text-xs text-gray-500">
            <CalendarIcon size={12} className="mr-1 flex-shrink-0" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <ClockIcon size={12} className="mr-1 flex-shrink-0" />
            <span>{time} · {duration}</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <MapPinIcon size={12} className="mr-1 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;