import React, { useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';

interface UserProfileProps {
  onComplete: (userData: { name: string; email: string }) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    onComplete({ name, email });
  };

  return (
    <div className="p-5 flex flex-col h-full">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-indigo-800 rounded-2xl opacity-90"></div>
        <div className="relative p-6 text-white">
          <h1 className="text-xl font-bold mb-2">Welcome to Travella</h1>
          <p className="text-purple-100">Let's get to know you better</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {error && (
          <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
        >
          <span>Continue</span>
          <ArrowRightIcon size={16} className="ml-2" />
        </button>
      </form>
      
      <p className="mt-6 text-center text-sm text-gray-500">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
};

export default UserProfile;