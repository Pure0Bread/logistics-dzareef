import React, { useState } from 'react';
import { 
  X, Hash, Clock, MapPin, Plane, Package, Scale, Box, 
  FileText, User, Mail, Phone, Briefcase, Tag, Calendar, Plus, Eye,
  CheckCircle2, AlertCircle, FileCheck, Send, MessageSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ViewAppointmentModal from './ViewAppointmentModal';

const EnquiryDetailModal = ({ isOpen, onClose, enquiry }) => {
  const [activeTab, setActiveTab] = useState('Appointments');
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  if (!isOpen) return null;

  // Mock data handling
  const data = {
    id: enquiry?.displayId || "ENQ001",
    status: enquiry?.status || "Negotiation",
    type: "Air Freight - Import",
    created: "7/11/2024, 17:24",
    updated: "17/11/2024, 17:24",
    collection: "Bayan Lepas, PENANG",
    delivery: "Milan Malpensa Airport",
    aol: "PEN",
    aod: "MXP",
    terms: "CIF",
    desc: "Machinery parts",
    qty: "1",
    weight: "108",
    dims: "1.2 x 1 x 0.78",
    cbm: "0.936",
    customer: {
      name: "Aisha Rahman",
      email: "aisha.rahman@email.com",
      phone: "011-3456789",
      company: "NovaTech Solutions",
      type: "End User"
    },
    salesperson: "Aisha Rahman"
  };

  return (
    <>
      {/* 1. The Main Side Drawer Modal */}
      <div 
        className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose} 
      >
        <div 
          className="bg-white w-full max-w-5xl h-screen flex flex-col shadow-2xl animate-in slide-in-from-right duration-300 sm:rounded-l-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()} 
        >
          
          {/* --- Header --- */}
          <div className="flex items-start justify-between p-6 border-b border-gray-200 bg-white z-10">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">{data.id}</h1>
                <span className="px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
                  {data.status}
                </span>
              </div>
              <p className="text-sm font-medium text-blue-600">{data.type}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
              <X size={24} />
            </button>
          </div>

          {/* --- Body --- */}
          <div className="flex flex-1 overflow-hidden">
            
            {/* LEFT SIDEBAR: Details */}
            <div className="w-1/3 bg-gray-50/50 border-r border-gray-200 overflow-y-auto p-6 space-y-8 custom-scrollbar">
              <section>
                <h3 className="text-sm font-bold text-gray-900 mb-4">Details</h3>
                <div className="space-y-3">
                  <DetailRow icon={Hash} label="Enquiry ID" value={data.id} />
                  <DetailRow icon={Clock} label="Created" value={data.created} />
                  <DetailRow icon={Clock} label="Updated" value={data.updated} />
                  <DetailRow icon={MapPin} label="Collection" value={data.collection} />
                  <DetailRow icon={MapPin} label="Delivery" value={data.delivery} />
                  <DetailRow icon={Plane} label="AOL" value={data.aol} />
                  <DetailRow icon={Plane} label="AOD" value={data.aod} />
                  <DetailRow icon={Package} label="Terms" value={data.terms} />
                  <DetailRow icon={FileText} label="Desc" value={data.desc} />
                  <DetailRow icon={Package} label="Qty" value={data.qty} />
                  <DetailRow icon={Scale} label="Weight" value={data.weight} />
                  <DetailRow icon={Box} label="Dims" value={data.dims} />
                  <DetailRow icon={Box} label="CBM" value={data.cbm} />
                </div>
              </section>

              <section className="border-t border-gray-200 pt-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4">Customer</h3>
                <div className="space-y-3">
                  <DetailRow icon={User} label="Name" value={data.customer.name} />
                  <DetailRow icon={Mail} label="Email" value={data.customer.email} isLink />
                  <DetailRow icon={Phone} label="Phone" value={data.customer.phone} />
                  <DetailRow icon={Briefcase} label="Company" value={data.customer.company} />
                </div>
              </section>
            </div>

            {/* RIGHT CONTENT: Tabs */}
            <div className="w-2/3 bg-white flex flex-col">
              <div className="flex border-b border-gray-200 px-6">
                {['Appointments', 'Quotation', 'Activity'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab 
                        ? 'border-orange-500 text-orange-600' 
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar">
                {activeTab === 'Appointments' && (
                  <AppointmentsTab onAppointmentClick={setSelectedAppointment} />
                )}
                {activeTab === 'Quotation' && <QuotationTab />}
                {activeTab === 'Activity' && <ActivityTab />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Nested Appointment Detail Modal */}
      <ViewAppointmentModal 
        isOpen={!!selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
        appointment={selectedAppointment}
      />
    </>
  );
};

// --- SUB-COMPONENTS ---

const DetailRow = ({ icon: Icon, label, value, isLink }) => (
  <div className="flex items-start gap-3">
    <Icon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
    <div className="grid grid-cols-3 w-full gap-2">
      <span className="text-sm text-gray-500 col-span-1">{label}</span>
      <span className={`text-sm font-medium text-gray-900 col-span-2 break-words ${isLink ? 'text-blue-600 cursor-pointer hover:underline' : ''}`}>
        {value}
      </span>
    </div>
  </div>
);

// --- 1. APPOINTMENTS TAB ---
const AppointmentsTab = ({ onAppointmentClick }) => (
  <div className="space-y-8">
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-gray-900">Upcoming</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800">
          <Plus size={14} /> Add
        </button>
      </div>
      
      {/* Active Card - Clickable to view details */}
      <div 
        onClick={() => onAppointmentClick({ title: "Revised Quotation Discussion", status: "Upcoming" })}
        className="bg-blue-50 border border-blue-100 rounded-xl p-5 relative overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2 text-blue-900 font-semibold">
            <Calendar size={18} />
            <span>Revised Quotation Discussion</span>
          </div>
          <Eye size={18} className="text-blue-400" />
        </div>
        <div className="ml-0 space-y-2 mb-4">
          <p className="flex items-center gap-2 text-sm text-gray-600"><Clock size={14} /> 31 Oct 2025, 10:00 AM</p>
          <p className="flex items-center gap-2 text-sm text-gray-600"><MapPin size={14} /> Menara UOA Bangsar</p>
        </div>
        <button className="w-full py-2 bg-white border border-blue-200 text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50">
          Check In
        </button>
      </div>
    </div>

    <div>
      <h3 className="text-base font-bold text-gray-900 mb-4">History</h3>
      <div className="space-y-3">
        <HistoryCard 
          title="Initial consultation" 
          date="12 Oct 2025, 8:00 AM" 
          location="Menara UOA Bangsar"
          onClick={() => onAppointmentClick({ title: "Initial consultation", status: "Completed" })}
        />
        <HistoryCard 
          title="Quotation presentation" 
          date="15 Oct 2025, 10:00 AM" 
          location="Menara UOA Bangsar"
          onClick={() => onAppointmentClick({ title: "Quotation presentation", status: "Completed" })}
        />
      </div>
    </div>
  </div>
);

const HistoryCard = ({ title, date, location, onClick }) => (
  <div 
    onClick={onClick}
    className="border border-gray-100 rounded-xl p-4 hover:bg-gray-50 transition cursor-pointer group"
  >
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2 text-gray-800 font-semibold">
        <CheckCircle2 size={16} className="text-green-500" />
        <span>{title}</span>
      </div>
      <Eye size={16} className="text-gray-300 group-hover:text-gray-500" />
    </div>
    <div className="space-y-1 ml-6">
      <p className="text-xs text-gray-500 flex items-center gap-2"><Clock size={12}/> {date}</p>
      <p className="text-xs text-gray-500 flex items-center gap-2"><MapPin size={12}/> {location}</p>
    </div>
  </div>
);

// --- 2. QUOTATION TAB ---
const QuotationTab = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-gray-900">Quotations</h3>
        <button 
          onClick={() => navigate('/enquiries/quotation/new')}
          className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-lg hover:bg-gray-800">
          <Plus size={14} /> New Quotation
        </button>
      </div>

      {/* Card 1: Active/Sent */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <FileText size={20} />
            </div>
            <div>
               <h4 className="font-bold text-gray-900">QUO-2402</h4>
               <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Sent</span>
            </div>
          </div>
          <Eye size={18} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
           <div>
              <p className="text-gray-500 text-xs">Sent Date</p>
              <p className="font-medium text-gray-800">Oct 11, 2025</p>
           </div>
           <div className="text-right">
              <p className="text-gray-500 text-xs">Total Amount</p>
              <p className="font-bold text-gray-900 text-lg">RM 7,800.00</p>
           </div>
        </div>
      </div>

      {/* Card 2: Rejected/Draft */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow opacity-75">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 text-red-600 rounded-lg">
              <AlertCircle size={20} />
            </div>
            <div>
               <h4 className="font-bold text-gray-900">QUO-2401</h4>
               <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Rejected</span>
            </div>
          </div>
          <Eye size={18} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
           <div>
              <p className="text-gray-500 text-xs">Sent Date</p>
              <p className="font-medium text-gray-800">Oct 01, 2025</p>
           </div>
           <div className="text-right">
              <p className="text-gray-500 text-xs">Total Amount</p>
              <p className="font-bold text-gray-900 text-lg">RM 8,200.00</p>
           </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. ACTIVITY TAB ---
const ActivityTab = () => (
  <div className="space-y-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base font-bold text-gray-900">Activity Timeline</h3>
    </div>

    <div className="relative pl-4 border-l-2 border-gray-100 space-y-8">
      
      {/* Event 1 */}
      <div className="relative">
        <div className="absolute -left-[21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center border-4 border-white">
                <Send size={14} />
            </div>
        </div>
        <div className="ml-6">
            <p className="text-sm font-semibold text-gray-900">Quotation QUO-2402 Sent</p>
            <p className="text-xs text-gray-500 mb-2">Today, 10:23 AM</p>
            <div className="p-3 bg-gray-50 rounded-lg text-xs text-gray-600 border border-gray-100">
                Sent via email to aisha.rahman@email.com
            </div>
        </div>
      </div>

      {/* Event 2 */}
      <div className="relative">
        <div className="absolute -left-[21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center border-4 border-white">
                <MessageSquare size={14} />
            </div>
        </div>
        <div className="ml-6">
            <p className="text-sm font-semibold text-gray-900">Logged Call</p>
            <p className="text-xs text-gray-500 mb-2">Yesterday, 4:00 PM</p>
            <p className="text-sm text-gray-600">
                Discussed revision of weight and dimensions. Customer requested a re-quote.
            </p>
        </div>
      </div>

      {/* Event 3 */}
      <div className="relative">
        <div className="absolute -left-[21px] top-0 w-10 h-10 bg-white flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center border-4 border-white">
                <FileCheck size={14} />
            </div>
        </div>
        <div className="ml-6">
            <p className="text-sm font-semibold text-gray-900">Enquiry Created</p>
            <p className="text-xs text-gray-500">Oct 01, 2025, 9:00 AM</p>
        </div>
      </div>

    </div>
  </div>
);

export default EnquiryDetailModal;