import React, { useState } from 'react';
import { ArrowLeft, Save, X, UploadCloud, CheckSquare, Square } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddNewEnquiry = () => {
  const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    company: '',
    companyType: '',
    contactPerson: '',
    phone: '',
    email: '',
    collection: '',
    delivery: '',
    mode: '',
    freightType: '',
    aol: '',
    aod: '',
    airServiceType: '',
    incoterms: '',
    cargoDesc: '',
    quantity: '',
    weight: '',
    dimensionType: 'standard', // 'standard' or 'special'
    length: '',
    width: '',
    height: '',
    isDangerous: false,
    imdgCode: '',
    imdgClass: '',
    unNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
    alert("Enquiry created successfully!");
    navigate('/enquiries');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen pb-24"> {/* Added padding bottom for footer */}
      
      {/* --- Header --- */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Enquiry List
        </button>
        <h1 className="text-2xl font-bold text-gray-900">New Enquiry</h1>
        <p className="text-sm text-gray-500">Create a new enquiry</p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* --- Section 1: Customer Information --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Customer Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company <span className="text-red-500">*</span></label>
              <select name="company" onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select company</option>
                <option value="NovaTech">NovaTech Solutions</option>
                <option value="TechCorp">TechCorp</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Type</label>
              <input type="text" disabled className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input type="text" disabled className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" />
            </div>

            <div className="col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input type="text" disabled className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" />
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="text" disabled className="w-full px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-500 cursor-not-allowed" />
            </div>

          </div>
        </div>

        {/* --- Section 2: Shipment Details --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Shipment Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Collection <span className="text-red-500">*</span></label>
              <input name="collection" onChange={handleChange} type="text" placeholder="Enter collection location" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery <span className="text-red-500">*</span></label>
              <input name="delivery" onChange={handleChange} type="text" placeholder="Enter delivery location" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mode <span className="text-red-500">*</span></label>
              <select name="mode" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select mode</option>
                <option value="Air">Air</option>
                <option value="Sea">Sea</option>
                <option value="Land">Land</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Freight Type <span className="text-red-500">*</span></label>
              <select name="freightType" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option value="">Select freight type</option>
                <option value="Import">Import</option>
                <option value="Export">Export</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AOL <span className="text-red-500">*</span></label>
              <select name="aol" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                 <option value="">Select airport of loading</option>
                 <option value="KUL">KUL - Kuala Lumpur</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">AOD <span className="text-red-500">*</span></label>
              <select name="aod" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                 <option value="">Select airport of discharge</option>
                 <option value="SIN">SIN - Singapore</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Air Service Type <span className="text-red-500">*</span></label>
              <select name="airServiceType" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                 <option value="">Select air service type</option>
                 <option value="Express">Express</option>
                 <option value="Standard">Standard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Terms (Incoterms) <span className="text-red-500">*</span></label>
              <select name="incoterms" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                 <option value="">Select Incoterms</option>
                 <option value="FOB">FOB</option>
                 <option value="CIF">CIF</option>
                 <option value="EXW">EXW</option>
              </select>
            </div>

          </div>
        </div>

        {/* --- Section 3: Cargo Details --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Cargo Details</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Cargo Description</label>
            <input name="cargoDesc" onChange={handleChange} type="text" placeholder="Enter detailed cargo descriptions" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity <span className="text-red-500">*</span></label>
              <input name="quantity" onChange={handleChange} type="number" placeholder="Enter quantity" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="flex gap-2">
               <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Weight <span className="text-red-500">*</span></label>
                  <input name="weight" onChange={handleChange} type="number" placeholder="Enter weight" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
               </div>
               <div className="w-24">
                  <label className="block text-sm font-medium text-gray-700 mb-1">&nbsp;</label>
                  <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                    <option>kg</option>
                  </select>
               </div>
            </div>
          </div>

          {/* Dimension Radio Buttons */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions <span className="text-red-500">*</span></label>
            <div className="flex gap-4">
              <label className={`flex-1 p-4 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${formData.dimensionType === 'standard' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <input 
                  type="radio" 
                  name="dimensionType" 
                  value="standard" 
                  checked={formData.dimensionType === 'standard'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900">Standard Dimensions</span>
                  <span className="block text-xs text-gray-500">For regular box-shaped cargo (Length × Width × Height)</span>
                </div>
              </label>

              <label className={`flex-1 p-4 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${formData.dimensionType === 'special' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <input 
                  type="radio" 
                  name="dimensionType" 
                  value="special" 
                  checked={formData.dimensionType === 'special'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 focus:ring-blue-500" 
                />
                <div>
                  <span className="block text-sm font-medium text-gray-900">Special / Irregular Shape</span>
                  <span className="block text-xs text-gray-500">For cylindrical, pipes, or irregularly shaped cargo</span>
                </div>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <input name="length" placeholder="Length" className="col-span-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
            <input name="width" placeholder="Width" className="col-span-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
            <div className="col-span-2 flex gap-2">
               <input name="height" placeholder="Height" className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" />
               <select className="w-20 px-2 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none"><option>cm</option></select>
            </div>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-500">
            Total CBM: <span className="font-medium text-gray-700">Auto-calculated</span>
          </div>
        </div>

        {/* --- Section 4: Dangerous Goods --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
             <span className="text-orange-500">⚠️</span>
             <h2 className="text-lg font-semibold text-gray-800">Dangerous Goods</h2>
          </div>

          <div className={`p-4 border rounded-lg mb-6 transition-colors ${formData.isDangerous ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-200'}`}>
             <label className="flex items-center gap-2 cursor-pointer">
               <input 
                 type="checkbox" 
                 name="isDangerous" 
                 checked={formData.isDangerous}
                 onChange={handleChange}
                 className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500" 
               />
               <span className="text-sm font-medium text-gray-700">This shipment contains dangerous goods</span>
             </label>
          </div>

          {formData.isDangerous && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IMDG Code <span className="text-red-500">*</span></label>
                <input name="imdgCode" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" placeholder="e.g. 3.2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IMDG Class <span className="text-red-500">*</span></label>
                <select name="imdgClass" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none">
                  <option>Select class</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UN Number <span className="text-red-500">*</span></label>
                <input name="unNumber" onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none" placeholder="e.g. UN1203" />
              </div>
            </div>
          )}
        </div>

        {/* --- Section 5: Attachments --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <h2 className="text-lg font-semibold text-gray-800 mb-6">Attachments</h2>
           
           <label className="block text-sm font-medium text-gray-700 mb-1">MSDS (Material Safety Data Sheet) <span className="text-red-500">*</span></label>
           <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <UploadCloud size={32} className="text-blue-500 mb-2" />
              <p className="text-sm font-medium text-blue-600">Click to upload MSDS</p>
              <p className="text-xs text-gray-400 mt-1">PDF, DOC up to 10MB</p>
           </div>
        </div>

      </div>

      {/* --- Footer Buttons --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10 flex justify-end gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
         <button 
           onClick={() => navigate('/enquiries')}
           className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
         >
           <X className="w-4 h-4" /> Cancel
         </button>
         <button 
           onClick={handleSubmit}
           className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 flex items-center gap-2"
         >
           <Save className="w-4 h-4" /> Add Enquiry
         </button>
      </div>

    </div>
  );
};

export default AddNewEnquiry;