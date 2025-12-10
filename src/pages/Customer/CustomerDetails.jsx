import React from 'react';
import { 
  ArrowLeft, 
  Edit, 
  Trash2, 
  Calendar, 
  Globe, 
  Building2, 
  FileText,
  User,
  Phone,
  Mail
} from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const CustomerDetails = () => {
  const navigate = useNavigate();

  // Mock Data matching your screenshot
  const customer = {
    companyName: "Novatech Solutions Sdn Bhd",
    status: "Active",
    type: "End User",
    group: "H",
    lastInteraction: "12-10-2025",
    industry: "Technology & IT Services",
    companySize: "50-100 employees",
    oldSSM: "123456-X",
    newSSM: "202001234567",
    website: "www.novatech.com.my",
    contactName: "Aisha Rahman",
    position: "Manager",
    phone: "123-456-7890",
    email: "aisha.rahman@novatech.com.my",
    notes: "Premium customer - requires express handling for all shipments."
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-6">
      
      {/* --- Breadcrumb & Back --- */}
      <div>
        <h1 className="text-xl font-medium text-gray-500 mb-4">
            Customer <span className="text-gray-300 mx-2">/</span> Customer List <span className="text-gray-300 mx-2">/</span> <span className="text-gray-800">{customer.companyName}</span>
        </h1>
        <button 
          onClick={() => navigate('/customer')} 
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Customer List
        </button>
      </div>

      {/* --- Top Header Card --- */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-gray-900">{customer.companyName}</h1>
            <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
              {customer.status}
            </span>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-gray-600">
               <Building2 size={14} /> {customer.type}
            </span>
            <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">
               Group: {customer.group}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar size={16} />
            <span>Last Interaction: {customer.lastInteraction}</span>
          </div>
        </div>

        <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                <Edit size={16} /> Edit Customer
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-red-600 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                <Trash2 size={16} /> Delete
            </button>
        </div>
      </div>

      {/* --- Company Information --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">Company Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
            <InfoField label="Industry" value={customer.industry} />
            <InfoField label="Company Size" value={customer.companySize} />
            
            <InfoField label="Old SSM Number" value={customer.oldSSM} icon={<FileText size={16} className="text-gray-400"/>} />
            <InfoField label="New SSM Number" value={customer.newSSM} icon={<FileText size={16} className="text-gray-400"/>} />
            
            <InfoField label="Website" value={customer.website} icon={<Globe size={16} className="text-gray-400"/>} isLink />
        </div>
      </div>

      {/* --- Primary Contact Information --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">Primary Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mb-8">
            <InfoField label="Full Name" value={customer.contactName} icon={<User size={16} className="text-gray-400"/>} />
            <InfoField label="Position" value={customer.position} requiredMark />
            <InfoField label="Phone Number" value={customer.phone} icon={<Phone size={16} className="text-gray-400"/>} requiredMark />
            <InfoField label="Email Address" value={customer.email} icon={<Mail size={16} className="text-gray-400"/>} requiredMark isLink />
        </div>

        {/* Business Card Section */}
        <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Business Card Photo</h4>
            <div className="flex gap-6 flex-wrap">
                <div>
                    <span className="text-xs text-gray-500 mb-1 block">Front</span>
                    <div className="w-64 h-36 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                        {/* Replace with actual image tag if available */}
                        <img src="https://ui-avatars.com/api/?name=Business+Card&background=0D8ABC&color=fff&size=128" alt="Front Card" className="w-full h-full object-cover opacity-50" />
                    </div>
                </div>
                <div>
                    <span className="text-xs text-gray-500 mb-1 block">Back</span>
                    <div className="w-64 h-36 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                        <img src="https://ui-avatars.com/api/?name=Business+Card&background=333&color=fff&size=128" alt="Back Card" className="w-full h-full object-cover opacity-50" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- Additional Information --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-100">Additional Information</h3>
        
        <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Notes</h4>
            <div className="w-full p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-700 text-sm">
                {customer.notes}
            </div>
        </div>
      </div>

    </div>
  );
};

// --- Reusable Helper Component for consistent display ---
const InfoField = ({ label, value, icon, isLink, requiredMark }) => (
    <div>
        <h4 className="text-sm font-medium text-gray-900 mb-1 flex items-center gap-1">
            {label} {requiredMark && <span className="text-red-500">*</span>}
        </h4>
        <div className="flex items-center gap-2 text-gray-600">
            {icon && <span>{icon}</span>}
            {isLink ? (
                <a href="#" className="text-blue-600 hover:underline">{value}</a>
            ) : (
                <span>{value || "-"}</span>
            )}
        </div>
    </div>
);

export default CustomerDetails;