import React, { useRef, useState } from 'react';
import { X, Download, UploadCloud, FileSpreadsheet } from 'lucide-react';

const BulkUploadModal = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  if (!isOpen) return null;

  // Handle Drag & Drop events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDownloadTemplate = () => {
    // Logic to download file would go here
    alert("Downloading template...");
  };

  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      
      {/* Modal Container */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Bulk Upload Customer</h2>
            <p className="text-sm text-gray-500 mt-1">Upload multiple customers at once using a CSV or Excel file.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Step 1: Download Template */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="text-gray-900 font-semibold mb-1">Download Template</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download our Excel/CSV template with the correct format and required fields.
                </p>
                <button 
                  onClick={handleDownloadTemplate}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Download size={16} /> Download Customer Template
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Upload File */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex gap-4 mb-4">
               <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                 <h3 className="text-gray-900 font-semibold">Upload Your File</h3>
                 <p className="text-sm text-gray-600">Fill in the template with your data and upload it here.</p>
              </div>
            </div>

            {/* Drop Zone */}
            <div 
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer
                ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"}
              `}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input 
                ref={fileInputRef}
                type="file" 
                className="hidden" 
                onChange={handleChange}
                accept=".csv, .xlsx, .xls"
              />
              
              {selectedFile ? (
                <div className="flex flex-col items-center text-green-600">
                  <FileSpreadsheet size={40} className="mb-3" />
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-xs text-gray-400 mt-1">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                </div>
              ) : (
                <div className="flex flex-col items-center text-gray-500">
                  <UploadCloud size={40} className="mb-3 text-gray-400" />
                  <p className="text-sm">
                    <span className="text-blue-600 font-medium">Click to upload</span> or drag or drop
                  </p>
                  <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 flex justify-end gap-3 bg-gray-50">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          {selectedFile && (
             <button 
                className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                onClick={() => { alert("Uploading..."); onClose(); }}
             >
                Upload File
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulkUploadModal;