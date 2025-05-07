import React from 'react';
import { CalendarIcon, BedDoubleIcon, StarIcon } from 'lucide-react';

interface HotelCardProps {
  name: string;
  image: string;
  checkIn: string;
  checkOut: string;
  rating: number;
  price: string;
  location: string;
  onClick?: () => void;
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  image,
  checkIn,
  checkOut,
  rating,
  price,
  location,
  onClick
}) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer transition-transform duration-300 hover:shadow-md"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white rounded-lg py-0.5 px-2 text-xs font-medium text-gray-700">
          {price}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-medium text-gray-800 line-clamp-1">{name}</h3>
        
        <div className="flex items-center mt-1 text-xs text-gray-500">
          <div className="flex items-center text-amber-500 mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon 
                key={i} 
                size={12} 
                fill={i < Math.floor(rating) ? 'currentColor' : 'none'} 
                className={i < Math.floor(rating) ? 'text-amber-500' : 'text-gray-300'}
              />
            ))}
            <span className="ml-1 text-gray-700">{rating}</span>
          </div>
          <span>{location}</span>
        </div>
        
        <div className="mt-2 flex items-center justify-between text-xs">
          <div className="flex items-center text-gray-500">
            <CalendarIcon size={14} className="mr-1" />
            <span>{checkIn} - {checkOut}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <BedDoubleIcon size={14} className="mr-1" />
            <span>Deluxe Room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;