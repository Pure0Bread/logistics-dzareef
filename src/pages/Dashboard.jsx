import React from 'react';
import { Calendar, Clock, FileText, File } from "lucide-react";
import { BarChart } from "../components/Ui/BarChart";
import { LineChart } from "../components/Ui/LineChart";
import { PieChart } from "../components/Ui/PieChart";

const Dashboard = () => {
  
  // Custom data for the bottom donuts
  const commissionData = [
    { id: "Standard", value: 100, color: "#8b5cf6" }, // Purple
    { id: "Fast", value: 40, color: "#fca5a5" },      // Orange/Pink
  ];

  const serviceData = [
    { id: "Land", value: 342, color: "#fbbf24" },    // Yellow
    { id: "Sea", value: 120, color: "#60a5fa" },     // Blue
    { id: "Air", value: 80, color: "#34d399" },      // Green
    { id: "Cross", value: 50, color: "#f87171" },    // Red
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">My Dashboard</h1>
        <p className="text-gray-500">
          Welcome back, <span className="font-bold text-orange-500">Mohd Amin</span> ● EMP-001
        </p>
      </div>
      
      {/* 1. Stats Row (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Appointments" 
          value="3" 
          subtext="Scheduled Today" 
          icon={<Calendar className="text-blue-500" size={20} />} 
          bg="bg-blue-50"
        />
        <StatCard 
          title="Follow-ups" 
          value="5" 
          subtext="Due Today" 
          icon={<Clock className="text-orange-500" size={20} />} 
          bg="bg-orange-50"
        />
        <StatCard 
          title="New Enquiries" 
          value="2" 
          subtext="Received" 
          icon={<FileText className="text-green-500" size={20} />} 
          bg="bg-green-50"
        />
        <StatCard 
          title="Quotations" 
          value="1" 
          subtext="Sent Today" 
          icon={<File className="text-blue-400" size={20} />} 
          bg="bg-blue-50"
        />
      </div>

      {/* 2. Charts Row 1: Performance & Commission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg text-gray-800">Performance Trend</h3>
          <p className="text-sm text-gray-400 mb-4">Enquiries and conversions over time</p>
          <LineChart />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg text-gray-800">Commission Earning</h3>
          <p className="text-sm text-gray-400 mb-4">Monthly commission breakdown</p>
          <BarChart />
        </div>
      </div>

      {/* 3. Charts Row 2: Donuts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
          <h3 className="font-semibold text-lg text-gray-800">Commission Breakdown</h3>
          <p className="text-sm text-gray-400 mb-4">By conversion timeline</p>
          
          <div className="relative">
             <PieChart data={commissionData} colors={true} />
             {/* Center Text Trick */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-700 mt-2">100</span>
             </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg text-gray-800">Service Type Distribution</h3>
          <p className="text-sm text-gray-400 mb-4">Your by service category</p>
          
          <div className="relative">
             <PieChart data={serviceData} colors={true} />
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-gray-700 mt-2">342</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mini Component for the top cards to keep code clean
const StatCard = ({ title, value, subtext, icon, bg }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between h-32">
    <div className="flex justify-between items-start">
      <div className={`p-2 rounded-lg ${bg}`}>
        {icon}
      </div>
      <p className="text-gray-400 text-sm font-medium">{title}</p>
    </div>
    <div>
      <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      <p className="text-gray-400 text-sm">{subtext}</p>
    </div>
  </div>
);

export default Dashboard;