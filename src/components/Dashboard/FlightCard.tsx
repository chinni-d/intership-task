import React from 'react';
import { ClockIcon, PlaneTakeoffIcon, PlaneLandingIcon } from 'lucide-react';

interface FlightCardProps {
  departureAirport: string;
  departureCode: string;
  arrivalAirport: string;
  arrivalCode: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airlineLogo?: string;
  airlineName: string;
}

const FlightCard: React.FC<FlightCardProps> = ({
  departureAirport,
  departureCode,
  arrivalAirport,
  arrivalCode,
  departureTime,
  arrivalTime,
  flightNumber,
  airlineLogo,
  airlineName
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-700">Flight Details</h3>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded">
            Confirmed
          </span>
        </div>
        
        <div className="mt-4 flex items-center">
          {airlineLogo ? (
            <img src={airlineLogo} alt={airlineName} className="h-8 w-8 object-contain mr-2" />
          ) : (
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
              <PlaneTakeoffIcon size={16} className="text-gray-500" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-700">{airlineName}</p>
            <p className="text-xs text-gray-500">{flightNumber}</p>
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mt-3">
          <div className="text-center">
            <p className="text-lg font-bold">{departureTime}</p>
            <p className="text-xs font-medium text-gray-500">{departureCode}</p>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="relative flex items-center">
              <div className="h-0.5 flex-1 bg-gray-300"></div>
              <div className="mx-2">
                <ClockIcon size={14} className="text-gray-400" />
              </div>
              <div className="h-0.5 flex-1 bg-gray-300"></div>
            </div>
            <p className="text-xs text-center text-gray-500 mt-1">Direct Flight</p>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-bold">{arrivalTime}</p>
            <p className="text-xs font-medium text-gray-500">{arrivalCode}</p>
          </div>
        </div>
        
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <div>
            <p>{departureAirport}</p>
          </div>
          <div>
            <p>{arrivalAirport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;