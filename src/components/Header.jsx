import React, { useState } from "react";
import { Bell, ChevronDown, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform any logout logic here (clear tokens, etc.)
    console.log("Signing out...");
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-20">
      <h2 className="font-semibold text-lg text-gray-800">Dashboard</h2>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          <Bell size={20} />
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 pl-4 border-l hover:bg-gray-50 p-2 rounded-lg transition-all"
          >
            <img
              src="https://ui-avatars.com/api/?name=Mohd+Amin&background=10b981&color=fff"
              alt="User"
              className="w-9 h-9 rounded-full border border-gray-200"
            />
            <div className="text-sm text-left hidden sm:block">
              <p className="font-semibold text-gray-700">Mohd Amin</p>
              <p className="text-gray-500 text-xs">Salesman</p>
            </div>
            <ChevronDown size={16} className={`text-gray-400 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded-xl shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-4 py-3 border-b">
                <p className="text-sm font-medium text-gray-900">Signed in as</p>
                <p className="text-sm text-gray-500 truncate">amin@stark.asia</p>
              </div>
              
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={16} /> Profile
              </button>
              
              <button 
                onClick={handleSignOut}
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}