import React from "react";
import { HomeIcon, Search, HeartIcon, UserIcon, PlusIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center px-3 ${
        isActive ? "text-purple-600" : "text-gray-500"
      }`}
    >
      <div className={`p-1 ${isActive ? "text-purple-600" : "text-gray-500"}`}>
        {icon}
      </div>
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-16">{children}</main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 h-16 flex items-center justify-around px-4 z-10">
        <NavItem
          to="/"
          icon={<HomeIcon size={20} />}
          label=""
          isActive={currentPath === "/"}
        />
        <NavItem
          to="/explore"
          icon={<Search size={20} />}
          label=""
          isActive={currentPath === "/explore"}
        />
        <div className="mt-0.5">
          <Link
            to="/create-trip"
            className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          >
            <PlusIcon size={24} className="text-white" />
          </Link>
        </div>
        <NavItem
          to="/trips"
          icon={<HeartIcon size={20} />}
          label=""
          isActive={currentPath === "/trips"}
        />
        <NavItem
          to="/profile"
          icon={<UserIcon size={20} />}
          label=""
          isActive={currentPath === "/profile"}
        />
      </footer>
    </div>
  );
};

export default AppLayout;
