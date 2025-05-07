import React, { useState } from 'react';
import { UserRoundIcon, UsersIcon, HeartIcon, HomeIcon } from 'lucide-react';

type CompanionType = 'solo' | 'couple' | 'family' | 'friends';

interface TravelPreferencesProps {
  onContinue: (preferences: {
    destination: string;
    duration: string;
    companions: CompanionType;
  }) => void;
}

const TravelPreferences: React.FC<TravelPreferencesProps> = ({ onContinue }) => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [companions, setCompanions] = useState<CompanionType>('solo');

  const handleContinue = () => {
    onContinue({
      destination,
      duration,
      companions
    });
  };

  const CompanionButton = ({ type, icon, label }: { type: CompanionType, icon: React.ReactNode, label: string }) => (
    <button
      type="button"
      onClick={() => setCompanions(type)}
      className={`
        flex flex-col items-center justify-center p-3 rounded-xl
        ${companions === type 
          ? 'bg-purple-100 border-2 border-purple-500' 
          : 'bg-white border border-gray-200'
        }
        transition-all duration-200 hover:shadow-md
      `}
    >
      <div className={`p-2 rounded-full ${companions === type ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-600'}`}>
        {icon}
      </div>
      <span className={`mt-2 text-sm font-medium ${companions === type ? 'text-purple-700' : 'text-gray-700'}`}>
        {label}
      </span>
    </button>
  );

  return (
    <div className="p-5 flex flex-col h-full bg-gray-50">
      <h1 className="text-xl font-bold text-center my-5">Plan Your Journey, Your Way!</h1>
      
      <div className="space-y-5 flex-1">
        <div className="space-y-2">
          <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
            Enter Destination
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where would you like to go?"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
            Select Duration
          </label>
          <select
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">How long will you stay?</option>
            <option value="weekend">Weekend (1-3 days)</option>
            <option value="week">Week (4-7 days)</option>
            <option value="twoWeeks">Two weeks</option>
            <option value="month">Month or longer</option>
          </select>
        </div>
        
        <div className="space-y-3">
          <p className="block text-sm font-medium text-gray-700">
            Who are you traveling with?
          </p>
          <div className="grid grid-cols-2 gap-3">
            <CompanionButton 
              type="solo" 
              icon={<UserRoundIcon size={20} />}
              label="Solo" 
            />
            <CompanionButton 
              type="couple" 
              icon={<HeartIcon size={20} />}
              label="Couple" 
            />
            <CompanionButton 
              type="family" 
              icon={<HomeIcon size={20} />}
              label="Family" 
            />
            <CompanionButton 
              type="friends" 
              icon={<UsersIcon size={20} />}
              label="Friends" 
            />
          </div>
        </div>
      </div>
      
      <button
        onClick={handleContinue}
        disabled={!destination || !duration}
        className={`
          w-full py-3 px-4 rounded-xl text-white font-medium mt-6
          ${(!destination || !duration) 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-purple-600 hover:bg-purple-700 transition-colors'}
        `}
      >
        Continue
      </button>
    </div>
  );
};

export default TravelPreferences;