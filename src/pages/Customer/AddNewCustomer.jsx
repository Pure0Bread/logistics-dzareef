import React, { useState } from 'react';
import { ArrowLeft, Save, X, Upload, Camera } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';

const AddNewCustomer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    
    name: '',
    position: '',
    phoneNum: '',
    email: '',
    companyName: '',
    companyType: '',
    industry: '',
    companySize: '',
    groupCode: '',
    oldSSM: '',
    newSSM: '',
    taxStatus:'',
    SSTnum:'',
    Website:'',
    address: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if( name === "oldSSM"){
      if (/^[0-9]*$/.test(value)){
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
    else if( name === "newSSM"){
      if (/^[0-9]*$/.test(value)){
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
    else if( name === "SSTnum"){
      if (/^[0-9]*$/.test(value)){
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    }
    else{
    setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Data Submitted:", formData);
    
    // Simulate API call
    alert("Customer created successfully!");
    
    // Redirect to Customer List after save
    navigate('/customer'); 
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button // Back button
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-200 rounded-full transition"
            title="Go Back"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Add New Customer</h1>
            <p className="text-sm text-gray-500">Create a new customer profile for logistics.</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button // Cancel button
            onClick={() => navigate('/customer')}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            <X className="w-4 h-4" /> Cancel
          </button>
          
          <button // Save customer buttton
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors shadow-md flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Customer
          </button>
        </div>
      </div>

      {/* Main Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          
          {/* Section 1: Company Information */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Customer Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Name *</label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. Stark Asia"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Type</label>
              <select 
                name="companyType" 
                value={formData.companyType}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. Logistics Solutions Inc."
              >
                <option>Type 1</option>
                <option>Type 2</option>
                <option>Type 3</option>
                <option>Type 4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select 
                name="industry" 
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option>Industry 1</option>
                <option>Industry 2</option>
                <option>Industry 3</option>
                <option>Industry 4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
              <select 
                name="companySize" 
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option>Size 1</option>
                <option>Size 2</option>
                <option>Size 3</option>
                <option>Size 4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group Code</label>
              <select 
                name="groupCode" 
                value={formData.groupCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option>Code 1</option>
                <option>Code 2</option>
                <option>Code 3</option>
                <option>Code 4</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Old SSM Number</label>
              <input 
                type="text" 
                inputMode="numeric"
                pattern="[0-9]*"
                name="oldSSM" 
                value={formData.oldSSM}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. 01234567"
                maxLength={12}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">New SSM Number *</label>
              <input 
                type="text" 
                inputMode="numeric"
                pattern="[0-9]*"
                name="name" 
                value={formData.newSSM}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. 01234567"
                maxLength={12}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax Status *</label>
              <select 
                name="status" 
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">SST Number *</label>
              <input 
                type="text" 
                inputMode="numeric"
                pattern="[0-9]*"
                name="name" 
                value={formData.SSTnum}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="e.g. 01234567"
                maxLength={12}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input 
                type="text" 
                name="name" 
                value={formData.Website}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input 
                type="text" 
                name="name" 
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          {/* Section 2: Primary Contact Information */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Primary Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position *</label>
              <input 
                type="text" 
                name="position" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input 
                type="tel" 
                name="phoneNum" 
                value={formData.phoneNum}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="flex gap-4">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                type="button"
              >
                <Upload size={18} />
                Upload Photo
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                type="button"
              >
                <Camera size={18} />
                Take Photo
              </button>
            </div>
          </div>

          {/* Section 3: Secondary Contact Information */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Shipping Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <input 
                type="text" 
                name="position" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input 
                type="tel" 
                name="phoneNum" 
                value={formData.phoneNum}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex gap-4">
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                type="button"
              >
                <Upload size={18} />
                Upload Photo
              </button>
              <button 
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                type="button"
              >
                <Camera size={18} />
                Take Photo
              </button>
            </div>
          </div>
          {/* Section 4: Additional Information */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Additional Information</h3>
          <div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <input 
                type="textarea" 
                name="notes" 
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Add additional notes about this customer..."
              />
            </div>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddNewCustomer;