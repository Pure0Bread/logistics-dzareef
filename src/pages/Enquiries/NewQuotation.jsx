import React, { useState } from 'react';
import { ArrowLeft, Save, X, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AddNewQuotation = () => {
  const navigate = useNavigate();

  // 1. Initial State
  const [formData, setFormData] = useState({
    currency: 'MYR - Malaysia Ringgit (RM)',
    validity: '14 Days',
    notes: '',
    terms: '1. Payment terms: Net 30 days\n2. Prices are valid for 14 days from quotation date\n3. Prices are subject to availability\n4. GST/SST will be added as per Malaysian regulations'
  });

  const [lineItems, setLineItems] = useState([
    { id: 1, category: 'Documentation', qty: 1, unit: 'per shipment', price: 30.00, amount: 30.00 },
    { id: 2, category: '', qty: 1, unit: 'per shipment', price: 0.00, amount: 0.00 }
  ]);

  // 2. Calculation Helpers
  const subtotal = lineItems.reduce((acc, item) => acc + item.amount, 0);
  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  // 3. Handlers
  const handleItemChange = (id, field, value) => {
    setLineItems(items => items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        if (field === 'qty' || field === 'price') {
          updatedItem.amount = Number(updatedItem.qty) * Number(updatedItem.price);
        }
        return updatedItem;
      }
      return item;
    }));
  };

  const addItem = () => {
    const newId = lineItems.length + 1;
    setLineItems([...lineItems, { id: newId, category: '', qty: 1, unit: 'per shipment', price: 0.00, amount: 0.00 }]);
  };

  const removeItem = (id) => {
    setLineItems(lineItems.filter(item => item.id !== id));
  };

  const handleSubmit = () => {
    console.log("Quotation Created:", { ...formData, lineItems, total });
    alert("Quotation saved successfully!");
    navigate(-1); // Go back
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen pb-24">
      
      {/* --- Header --- */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <h1 className="text-2xl font-bold text-gray-900">Create New Quotation</h1>
        <div className="text-sm text-gray-500 mt-1">
          Quotation #: <span className="font-medium text-gray-700">QUO-2025-0011</span> • For Enquiry: <span className="font-medium text-gray-700">ENQ001</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">

        {/* --- Section 1: Quotation Details --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Quotation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select 
                value={formData.currency}
                onChange={(e) => setFormData({...formData, currency: e.target.value})}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>MYR - Malaysia Ringgit (RM)</option>
                <option>USD - US Dollar ($)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Validity Period (Days)</label>
              <select 
                value={formData.validity}
                onChange={(e) => setFormData({...formData, validity: e.target.value})}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>14 Days</option>
                <option>30 Days</option>
                <option>60 Days</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Section 2: Line Items --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Line Items</h2>
            <button 
              onClick={addItem}
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-gray-700 shadow-sm"
            >
              <Plus size={16} /> Add Item
            </button>
          </div>

          <div className="space-y-4">
            {lineItems.map((item, index) => (
              <div key={item.id} className="p-4 bg-gray-50/50 border border-gray-200 rounded-xl relative group">
                <div className="flex items-center justify-between mb-4">
                   <h3 className="font-semibold text-gray-700 text-sm">Item {index + 1}</h3>
                   {index > 0 && (
                     <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600">
                       <Trash2 size={16} />
                     </button>
                   )}
                </div>

                <div className="grid grid-cols-12 gap-4">
                  {/* Category */}
                  <div className="col-span-4">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Service Category <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={item.category}
                      onChange={(e) => handleItemChange(item.id, 'category', e.target.value)}
                      placeholder="e.g. Documentation" 
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none text-sm"
                    />
                  </div>

                  {/* Qty */}
                  <div className="col-span-1">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Qty <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      value={item.qty}
                      onChange={(e) => handleItemChange(item.id, 'qty', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none text-sm"
                    />
                  </div>

                  {/* Unit */}
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Unit <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={item.unit}
                      onChange={(e) => handleItemChange(item.id, 'unit', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none text-sm"
                    />
                  </div>

                  {/* Unit Price */}
                  <div className="col-span-2">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Unit Price (RM) <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      value={item.price}
                      onChange={(e) => handleItemChange(item.id, 'price', e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg outline-none text-sm"
                    />
                  </div>

                  {/* Amount (Read Only) */}
                  <div className="col-span-3">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Amount <span className="text-red-500">*</span></label>
                    <input 
                      type="number" 
                      value={item.amount.toFixed(2)}
                      disabled
                      className="w-full px-3 py-2 bg-gray-200 border border-gray-200 rounded-lg outline-none text-sm font-medium text-gray-700 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals Section */}
          <div className="flex justify-end mt-6">
            <div className="w-64 space-y-3 bg-gray-50 p-4 rounded-lg border border-gray-200">
               <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-medium">RM {subtotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax (6% SST):</span>
                  <span className="font-medium">RM {tax.toFixed(2)}</span>
               </div>
               <div className="border-t border-gray-200 pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>Total:</span>
                  <span>RM {total.toFixed(2)}</span>
               </div>
            </div>
          </div>
        </div>

        {/* --- Section 3: Footer Info --- */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Notes (Optional)</label>
            <textarea 
              rows="2" 
              value={formData.notes}
              onChange={(e) => setFormData({...formData, notes: e.target.value})}
              placeholder="Add any additional notes for this quotation"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-800 mb-2">Terms & Conditions</label>
            <textarea 
              rows="4" 
              value={formData.terms}
              onChange={(e) => setFormData({...formData, terms: e.target.value})}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-sm resize-none text-gray-600"
            />
          </div>

        </div>

      </div>

      {/* --- Footer Buttons --- */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-10 flex justify-end gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
         <button 
           onClick={() => navigate(-1)}
           className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2"
         >
           <X className="w-4 h-4" /> Cancel
         </button>
         <button 
           onClick={handleSubmit}
           className="px-6 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-900 flex items-center gap-2"
         >
           <Save className="w-4 h-4" /> Save Quotation
         </button>
      </div>

    </div>
  );
};

export default AddNewQuotation;