import React, { useState } from 'react';
import { Search, Globe, TrendingUp } from 'lucide-react';
import AppLayout from '../components/Layout/AppLayout';

// Sample destination data
const destinations = [
  {
    id: 1,
    name: 'Paris',
    country: 'France',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    popularity: 'Popular'
  },
  {
    id: 2,
    name: 'Bali',
    country: 'Indonesia',
    image: 'https://images.pexels.com/photos/1694621/pexels-photo-1694621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    popularity: 'Trending'
  },
  {
    id: 3,
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    popularity: 'Popular'
  },
  {
    id: 4,
    name: 'New York',
    country: 'United States',
    image: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    popularity: 'Popular'
  },
  {
    id: 5,
    name: 'Santorini',
    country: 'Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    popularity: 'Trending'
  },
  {
    id: 6,
    name: 'Kyoto',
    country: 'Japan',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    popularity: 'Hidden Gem'
  }
];

// Sample categories
const categories = [
  { id: 'all', name: 'All', icon: <Globe size={16} /> },
  { id: 'popular', name: 'Popular', icon: <TrendingUp size={16} /> },
  { id: 'beaches', name: 'Beaches', icon: '🏖️' },
  { id: 'mountains', name: 'Mountains', icon: '⛰️' },
  { id: 'cities', name: 'Cities', icon: '🏙️' },
  { id: 'winter', name: 'Winter', icon: '❄️' }
];

const Explore: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter destinations based on search query
  const filteredDestinations = destinations.filter(dest => 
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Explore</h1>
        
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search destinations"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-3 w-full bg-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 focus:outline-none transition-colors"
          />
        </div>
        
        <div className="mb-6 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap ${
                  activeCategory === category.id 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <span className="mr-1">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {filteredDestinations.map(destination => (
            <div 
              key={destination.id}
              className="rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-white transition-transform duration-300 hover:shadow-md"
            >
              <div className="aspect-[3/4] relative">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full py-0.5 px-2 text-xs font-medium">
                  ⭐ {destination.rating}
                </div>
                {destination.popularity === 'Trending' && (
                  <div className="absolute top-2 left-2 bg-purple-600 text-white rounded-full py-0.5 px-2 text-xs font-medium">
                    🔥 Trending
                  </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-semibold text-gray-800">{destination.name}</h3>
                <p className="text-xs text-gray-500">{destination.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default Explore;