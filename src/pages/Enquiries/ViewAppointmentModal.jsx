import React from 'react';
import { X, Calendar, FileText, CheckCircle2, Download, File, Image as ImageIcon } from 'lucide-react';

const ViewAppointmentModal = ({ isOpen, onClose, appointment }) => {
  if (!isOpen) return null;

  const data = {
    title: appointment?.title || "Initial consultation",
    status: "Completed",
    date: "31 Oct 2025, 10:00 AM",
    id: "APT-2025-001",
    createdBy: "Aisha Rahman",
    customer: "John Smith",
    company: "Penang Manufacturing Sdn Bhd",
    location: "Penang Manufacturing Sdn Bhd Office",
    type: "Initial Consultation",
    purpose: "Discuss Air Freight - Export requirements and provide initial consultation",
    attendees: ["John Smith", "Aisha Rahman"],
    notes: "Customer satisfied with clearance timeline. Discussed new import procedures for pharmaceutical products. Need to send updated documentation checklist by Monday. Customer interested in our cold chain services.",
    actionItems: [
      "Discuss Air Freight - Export requirements and provide initial consultation",
      "Prepare updated documentation checklist",
      "Send cold chain service brochure"
    ],
    documents: [
      { name: "Customs_Documentation_Checklist.pdf", size: "245 KB" },
      { name: "Meeting_notes.pdf", size: "245 KB" },
      { name: "Customs_Documentation_Checklist.pdf", size: "245 KB" }
    ],
    photos: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=300&h=200",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=300&h=200",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=300&h=200"
    ]
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* --- Header --- */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white z-10">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-bold text-gray-900">{data.title}</h1>
              <span className="px-2.5 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                {data.status}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar size={14} />
              {data.date}
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={24} />
          </button>
        </div>

        {/* --- Scrollable Content --- */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* 1. Appointment Details Card */}
          <div>
             <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
               <FileText size={16} /> Appointment Details
             </h3>
             <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                   <p className="text-xs text-gray-400 mb-1">Appointment ID</p>
                   <p className="text-sm font-medium text-gray-900">{data.id}</p>
                   <p className="text-xs text-gray-400 mt-4 mb-1">Location</p>
                   <p className="text-sm font-medium text-gray-900">{data.location}</p>
                </div>
                <div>
                   <p className="text-xs text-gray-400 mb-1">Customer</p>
                   <p className="text-sm font-medium text-gray-900">{data.customer} <span className="text-gray-400">/ {data.company}</span></p>
                   <p className="text-xs text-gray-400 mt-4 mb-1">Type</p>
                   <p className="text-sm font-medium text-gray-900">{data.type}</p>
                </div>
             </div>
          </div>

          {/* 2. Purpose */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Purpose</h3>
            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg text-sm text-blue-800">
              {data.purpose}
            </div>
          </div>

          {/* 3. Attendees */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Attendees</h3>
            <div className="space-y-2">
              {data.attendees.map((person, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  {person}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* 4. Meeting Notes */}
          <div>
             <h3 className="text-sm font-bold text-gray-900 mb-3">Meeting Notes</h3>
             <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg text-sm text-gray-700 leading-relaxed">
               {data.notes}
             </div>
          </div>

          {/* 5. Action Items */}
          <div>
             <h3 className="text-sm font-bold text-gray-900 mb-3">Action Items</h3>
             <div className="space-y-3">
               {data.actionItems.map((item, idx) => (
                 <div key={idx} className="flex items-center gap-3 p-3 bg-green-50/50 border border-green-100 rounded-lg">
                    <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="border-t border-gray-100"></div>

          {/* 6. Attachments */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Document Attachments ({data.documents.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {data.documents.map((doc, idx) => (
                 <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <div className="flex items-center gap-3 overflow-hidden">
                       <div className="p-2 bg-red-50 rounded-lg">
                          <File size={18} className="text-red-500" />
                       </div>
                       <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                          <p className="text-xs text-gray-400">{doc.size}</p>
                       </div>
                    </div>
                    <button className="p-1.5 text-gray-400 hover:text-gray-600">
                       <Download size={16} />
                    </button>
                 </div>
               ))}
            </div>
          </div>

          {/* 7. Photos */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 mb-3">Meeting Photos ({data.photos.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {data.photos.map((photo, idx) => (
                 <div key={idx} className="aspect-video rounded-lg overflow-hidden border border-gray-200 group relative cursor-pointer">
                    <img src={photo} alt={`Meeting ${idx}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ViewAppointmentModal;