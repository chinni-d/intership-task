import React from 'react';
import { LogOutIcon, SettingsIcon, HeartIcon, CreditCardIcon, HelpCircleIcon, UserIcon } from 'lucide-react';
import AppLayout from '../components/Layout/AppLayout';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center w-full p-4 hover:bg-gray-50 rounded-xl"
    >
      <div className="text-gray-600 mr-3">{icon}</div>
      <span className="text-gray-800">{label}</span>
    </button>
  );
};

const Profile: React.FC = () => {
  // In a real app, this would come from authentication/user context
  const user = {
    name: "Chhavi",
    email: "chhavi@example.com",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    trips: 3,
    wishlist: 5
  };
  
  return (
    <AppLayout>
      <div className="p-5">
        <h1 className="text-2xl font-bold mb-5">Profile</h1>
        
        <div className="flex items-center mb-8">
          <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
        </div>
        
        <div className="flex mb-8">
          <div className="flex-1 bg-purple-50 p-3 rounded-l-xl text-center">
            <p className="text-xl font-bold text-purple-700">{user.trips}</p>
            <p className="text-xs text-gray-600">Trips</p>
          </div>
          
          <div className="flex-1 bg-pink-50 p-3 rounded-r-xl text-center">
            <p className="text-xl font-bold text-pink-700">{user.wishlist}</p>
            <p className="text-xs text-gray-600">Wishlist</p>
          </div>
        </div>
        
        <div className="space-y-1 mb-5">
          <MenuItem 
            icon={<UserIcon size={20} />} 
            label="Account Settings" 
            onClick={() => console.log('Account Settings')}
          />
          
          <MenuItem 
            icon={<HeartIcon size={20} />} 
            label="Saved Places" 
            onClick={() => console.log('Saved Places')}
          />
          
          <MenuItem 
            icon={<CreditCardIcon size={20} />} 
            label="Payment Methods" 
            onClick={() => console.log('Payment Methods')}
          />
        </div>
        
        <div className="space-y-1">
          <MenuItem 
            icon={<HelpCircleIcon size={20} />} 
            label="Help & Support" 
            onClick={() => console.log('Help & Support')}
          />
          
          <MenuItem 
            icon={<SettingsIcon size={20} />} 
            label="Settings" 
            onClick={() => console.log('Settings')}
          />
          
          <MenuItem 
            icon={<LogOutIcon size={20} />} 
            label="Log Out" 
            onClick={() => console.log('Log Out')}
          />
        </div>
        
        <div className="mt-10 p-4 bg-gray-50 rounded-xl text-center text-sm">
          <p className="text-gray-500">App Version 1.0.0</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;