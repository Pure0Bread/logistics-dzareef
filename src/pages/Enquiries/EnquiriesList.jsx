import React, { useState } from "react";
import { 
  Search, 
  Plus, 
  Eye, 
  Bell, 
  Plane, 
  Ship, 
  Truck,
  ChevronDown,
  MapPin,
  Clock,
  RotateCw,
  LayoutList,
  Kanban
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import EnquiryDetailModal from "../Enquiries/EnquiryDetailModal";

export default function Enquiries() {
  const navigate = useNavigate();
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [activeTab, setActiveTab] = useState("Active Enquiries");
  const [viewMode, setViewMode] = useState("list"); // 'list' or 'kanban'

  // Mock Data (Updated statuses to match Kanban columns)
  const enquiries = [
    {
      id: "D-1045",
      displayId: "ENQ004",
      isUrgent: true,
      customerName: "Ahmad Abdullah",
      company: "TechCorp Solutions Sdn Bhd",
      serviceType: "Air Freight - Export",
      serviceIcon: "plane",
      origin: "Bayan Lepas, PENANG",
      destination: "Milan Malpensa Airport",
      status: "New",
      salesman: "Aisha Rahman",
      time: "50 min ago"
    },
    {
      id: "D-1038",
      displayId: "ENQ003",
      isUrgent: true,
      customerName: "Ahmad Abdullah",
      company: "TechCorp Solutions Sdn Bhd",
      serviceType: "Air Freight - Export",
      serviceIcon: "plane",
      origin: "Bayan Lepas, PENANG",
      destination: "Milan Malpensa Airport",
      status: "Negotiation",
      salesman: "Aisha Rahman",
      time: "50 min ago"
    },
    {
      id: "D-1029",
      displayId: "ENQ002",
      isUrgent: true,
      customerName: "Ahmad Abdullah",
      company: "TechCorp Solutions Sdn Bhd",
      serviceType: "Air Freight - Export",
      serviceIcon: "plane",
      origin: "Bayan Lepas, PENANG",
      destination: "Milan Malpensa Airport",
      status: "Quoted",
      salesman: "Aisha Rahman",
      time: "50 min ago"
    },
    {
      id: "D-1021",
      displayId: "ENQ001",
      isUrgent: true,
      customerName: "Ahmad Abdullah",
      company: "TechCorp Solutions Sdn Bhd",
      serviceType: "Air Freight - Export",
      serviceIcon: "plane",
      origin: "Bayan Lepas, PENANG",
      destination: "Milan Malpensa Airport",
      status: "Won",
      salesman: "Aisha Rahman",
      time: "50 min ago"
    },
  ];

  // Helper: Status Colors
  const getStatusColor = (status) => {
    switch (status) {
      case "Negotiation": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Won": return "bg-green-100 text-green-700 border-green-200";
      case "Quoted": return "bg-blue-100 text-blue-700 border-blue-200";
      case "New": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  // Helper: Service Icons
  const renderServiceIcon = (type) => {
    switch (type) {
      case "plane": return <Plane size={16} />;
      case "ship": return <Ship size={16} />;
      case "truck": return <Truck size={16} />;
      default: return <Plane size={16} />;
    }
  };

  return (
    <div className="space-y-6">
      
      <EnquiryDetailModal 
        isOpen={!!selectedEnquiry} 
        onClose={() => setSelectedEnquiry(null)} 
        enquiry={selectedEnquiry}
      />

      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
          <p className="text-sm text-gray-500">Manage customer enquiries and quotations</p>
        </div>
        <button
          onClick={() => navigate('/enquiries/new-enquiries')}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          <Plus size={18} /> New Enquiry
        </button>
      </div>

      {/* 2. Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex gap-6">
          {["Active Enquiries", "Archived"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition-all relative ${
                activeTab === tab 
                  ? "text-blue-600 border-b-2 border-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Toolbar */}
      <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3 min-w-[200px]">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by name" 
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
          {/* Filters */}
          <button className="hidden lg:flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            All Shipment Mode <ChevronDown size={14} />
          </button>
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer select-none ml-2">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span className="flex items-center gap-1 font-medium">
              <Bell size={14} className="text-orange-500 fill-orange-500" />
              Shows only enquiries needing follow up (7)
            </span>
          </label>
        </div>

        {/* View Toggle (List vs Kanban) */}
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200">
           <button 
             onClick={() => setViewMode("list")}
             className={`p-1.5 rounded shadow-sm transition-all ${viewMode === 'list' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
             title="List View"
           >
             <LayoutList size={18} />
           </button>
           <button 
             onClick={() => setViewMode("kanban")}
             className={`p-1.5 rounded shadow-sm transition-all ${viewMode === 'kanban' ? 'bg-white text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
             title="Kanban View"
           >
             <Kanban size={18} />
           </button>
        </div>
      </div>

      {/* 4. CONTENT AREA: Switch between List and Kanban */}
      {viewMode === "list" ? (
        
        /* --- LIST VIEW (Table) --- */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  <th className="p-4">Enquiry ID</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Service Type</th>
                  <th className="p-4">Route</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Salesman</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {enquiries.map((item, index) => (
                  <tr key={index}  
                      onClick={() => setSelectedEnquiry(item)}
                      className="cursor-pointer transition-colors border-b border-gray-100 hover:bg-blue-50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                         <span className="font-medium text-gray-700">{item.id}</span>
                         {item.isUrgent && <Bell size={14} className="text-orange-500 fill-orange-500" />}
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-gray-900 text-sm">{item.customerName}</p>
                      <p className="text-xs text-gray-500">{item.company}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-gray-400">{renderServiceIcon(item.serviceIcon)}</span>
                        {item.serviceType}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-700 flex flex-col">
                          <span>{item.origin}</span>
                          <span className="text-gray-400 text-xs">→ {item.destination}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded border text-xs font-medium ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-700">{item.salesman}</td>
                    <td className="p-4 text-center">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      ) : (

        /* --- KANBAN VIEW --- */
        <div 
          className="flex gap-6 overflow-x-auto pb-6 h-[calc(100vh-200px)]">
          
          {/* Column 1: NEW */}
          <KanbanColumn 
            title="NEW" 
            count={1} 
            color="yellow" 
            items={enquiries.filter(i => i.status === "New")}
            onCardClick={setSelectedEnquiry} 
          />
          
          {/* Column 2: NEGOTIATION */}
          <KanbanColumn 
            title="NEGOTIATION" 
            count={1} 
            color="purple" 
            items={enquiries.filter(i => i.status === "Negotiation")}
            onCardClick={setSelectedEnquiry} 
          />

          {/* Column 3: QUOTED */}
          <KanbanColumn 
            title="QUOTED" 
            count={1} 
            color="blue" 
            items={enquiries.filter(i => i.status === "Quoted")}
            onCardClick={setSelectedEnquiry} 
          />

          {/* Column 4: WON */}
          <KanbanColumn 
            title="WON" 
            count={1} 
            color="green" 
            items={enquiries.filter(i => i.status === "Won")}
            onCardClick={setSelectedEnquiry} 
          />
        </div>
      )}

    </div>
  );
}

// --- Reusable Components for Kanban ---

const KanbanColumn = ({ title, count, color, items, onCardClick }) => {
  const headerColors = {
    yellow: "bg-yellow-500",
    purple: "bg-purple-600",
    blue: "bg-blue-800",
    green: "bg-green-600",
  };

  return (
    /* Added 'min-w-[320px]' so columns stay wide and readable */
    <div className="flex flex-col gap-4 min-w-[320px] h-full">
      {/* Column Header */}
      <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 flex items-center sticky top-0 z-10">
        <div className={`w-1.5 self-stretch rounded-l-md ${headerColors[color] || 'bg-gray-500'}`}></div>
        <div className="flex-1 px-3 py-2 flex justify-between items-center">
          <span className="font-bold text-gray-700 text-sm uppercase">{title}</span>
          <span className="text-xs text-gray-500 font-medium">{items.length} deals</span>
        </div>
      </div>

      {/* Cards List - Scrollable vertically if many items */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item, idx) => (
          <KanbanCard key={idx} item={item} onClick={() => onCardClick(item)} />
        ))}
      </div>
    </div>
  );
};

const KanbanCard = ({ item, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 cursor-pointer transition-all duration-200 hover:border-blue-500 hover:shadow-lg hover:-translate-y-1">
    {/* Card Header: Icon, ID, Urgency */}
    <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
           {item.serviceIcon === 'plane' ? <Plane size={16} /> : <Ship size={16} />}
        </div>
        <div>
           <p className="text-xs font-bold text-gray-900">{item.displayId}</p>
           <p className="text-[10px] text-gray-500">Air Freight - Export</p>
        </div>
      </div>
      {item.isUrgent && <Bell size={16} className="text-orange-500 fill-orange-500" />}
    </div>

    {/* Customer Info */}
    <div className="mb-4">
      <p className="text-sm font-bold text-gray-800 leading-tight">{item.company}</p>
      <p className="text-xs text-gray-500">{item.customerName}</p>
    </div>

    {/* Route Info */}
    <div className="space-y-2 mb-4">
       <div className="flex items-center gap-2 text-xs text-gray-600">
          <MapPin size={14} className="text-gray-400" />
          <span className="truncate">{item.origin}</span>
       </div>
       <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="rotate-45"><Plane size={14} className="text-gray-400" /></div>
          <span className="truncate">{item.destination}</span>
       </div>
    </div>

    {/* Footer: Time & Refresh */}
    <div className="flex items-center justify-end gap-2 text-xs text-gray-400 border-t border-gray-50 pt-3">
       <span>{item.time}</span>
       <RotateCw size={12} />
    </div>
  </div>
);