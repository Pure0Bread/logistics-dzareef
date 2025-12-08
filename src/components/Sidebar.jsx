import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, LayoutDashboard, Users, MessageSquare, Calendar, FileText, Settings } from "lucide-react";
import logo from "../assets/Logo.png";

export function Sidebar() {
  const [open, setOpen] = useState(true);

  const menu = [
    { label: "Dashboard", to: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Customer", to: "/customer", icon: <Users size={20} /> },
    { label: "Enquiries", to: "/enquiries", icon: <MessageSquare size={20} /> },
    { label: "Calendar", to: "/calendar", icon: <Calendar size={20} /> },
    { label: "Claims", to: "/claims", icon: <FileText size={20} /> },
    { label: "Settings", to: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside
      className={`bg-white border-r z-30 flex flex-col h-full transition-all duration-300 ease-in-out
      ${open ? "w-64" : "w-20"} 
      `} 
    >
      {/* Header Section */}
      <div className="flex items-center gap-3 px-3 mb-6 h-16 border-b border-gray-50"> 
        {/* Logo & Text Wrapper */}
        <div className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${open ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>
            <img 
                src={logo} 
                alt="Logo" 
                className="w-8 h-8 object-contain" 
            />
            <h1 className="font-bold text-xl whitespace-nowrap text-gray-800">
                STARK-ASIA
            </h1>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors ${!open ? "mx-auto" : "ml-auto"}`}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-3">
        {menu.map((item, i) => (
          <NavLink
            key={i}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-colors group relative ${
                isActive
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`
            }
          >
            <div className={`flex-shrink-0 transition-colors ${!open && "mx-auto"}`}>
                {item.icon}
            </div>
            
            <span
              className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${open ? "w-32 opacity-100" : "w-0 opacity-0 hidden"}`}
            >
              {item.label}
            </span>

            {/* Tooltip for closed sidebar (UX Improvement) */}
            {!open && (
                <div className="absolute left-16 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none whitespace-nowrap shadow-lg">
                    {item.label}
                </div>
            )}
          </NavLink>
        ))}
      </nav>
      
      {/* Simple footer */}
      <div className="p-4 border-t border-gray-50 text-xs text-center text-gray-400">
          {open && <p>&copy; 2025 Stark Asia</p>}
      </div>
    </aside>
  );
}