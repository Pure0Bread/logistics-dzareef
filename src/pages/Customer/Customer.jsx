import React from "react";
import { 
  Search, 
  Upload, 
  Plus, 
  Eye, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

export default function Customer() {
  // Mock Data
  const customers = Array(8).fill({
    company: "NovaTech Solutions",
    category: "End User",
    contactName: "Aisha Rahman",
    role: "Procurement Manager",
    phone: "011-3456789",
    email: "aisha.rahman@novatech.com.my",
    status: "Active",
    lastInteraction: "12/10/2025",
  });

  return (
    <div className="space-y-6">
      {/* 1. Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium text-gray-500">
          Customer <span className="text-gray-300 mx-2">/</span> <span className="text-gray-800">Customer List</span>
        </h1>
      </div>

      {/* 2. Toolbar Section */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Left: Search & Filters */}
        <div className="flex flex-1 items-center gap-3">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by client name" 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
          </div>

          {/* Filter Dropdowns (Visual only) */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            All Status <ChevronDown size={16} />
          </button>
          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
            All Created by <ChevronDown size={16} />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Upload size={18} />
            Bulk Upload
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            <Plus size={18} />
            Customer
          </button>
        </div>
      </div>

      {/* 3. Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <th className="p-4">Company</th>
                <th className="p-4">Primary Contact</th>
                <th className="p-4">Contact Details</th>
                <th className="p-4">Status</th>
                <th className="p-4">Last Interaction</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {customers.map((customer, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors group">
                  
                  {/* Company */}
                  <td className="p-4">
                    <p className="font-semibold text-gray-800 text-sm">{customer.company}</p>
                    <p className="text-xs text-gray-500">{customer.category}</p>
                  </td>

                  {/* Contact */}
                  <td className="p-4">
                    <p className="font-semibold text-gray-800 text-sm">{customer.contactName}</p>
                    <p className="text-xs text-gray-500">{customer.role}</p>
                  </td>

                  {/* Details */}
                  <td className="p-4">
                    <p className="text-sm text-gray-800 font-medium">{customer.phone}</p>
                    <p className="text-xs text-gray-500">{customer.email}</p>
                  </td>

                  {/* Status */}
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      {customer.status}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="p-4">
                    <span className="text-sm text-gray-600">{customer.lastInteraction}</span>
                  </td>

                  {/* Action */}
                  <td className="p-4 text-center">
                    <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 4. Pagination Footer */}
        <div className="flex items-center justify-end gap-4 p-4 border-t border-gray-100">
          <div className="text-sm text-gray-500 flex items-center gap-2">
            Rows per page 
            <select className="border-none bg-transparent font-medium focus:ring-0 cursor-pointer">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
          <div className="text-sm text-gray-500">
            10 of 25
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded hover:bg-gray-100 text-gray-500 disabled:opacity-50">
              <ChevronLeft size={20} />
            </button>
            <button className="p-1 rounded hover:bg-gray-100 text-gray-500">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}