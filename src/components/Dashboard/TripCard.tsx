import React from 'react';
import { CalendarIcon, MapPinIcon } from 'lucide-react';

interface TripCardProps {
  destination: string;
  image: string;
  dates: string;
  daysLeft: number;
  onClick?: () => void;
}

const TripCard: React.FC<TripCardProps> = ({
  destination,
  image,
  dates,
  daysLeft,
  onClick
}) => {
  return (
    <div 
      className="relative rounded-2xl overflow-hidden shadow-lg h-48 cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={destination} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
        <h3 className="text-2xl font-bold tracking-tight">{destination.toUpperCase()}</h3>
        
        <div className="flex items-center mt-2">
          <CalendarIcon size={16} className="mr-1" />
          <span className="text-sm opacity-90">{dates}</span>
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <MapPinIcon size={16} className="mr-1" />
            <span className="text-sm opacity-90">Explore now</span>
          </div>
          
          <div className="bg-purple-600 rounded-full py-1 px-3 text-xs font-semibold">
            {daysLeft === 0 
              ? 'Today!' 
              : daysLeft === 1 
                ? 'Tomorrow' 
                : `${daysLeft} days left`
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;