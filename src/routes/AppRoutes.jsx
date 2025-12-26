// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import Layout from "../components/Layout";

// Pages
import Dashboard from "../pages/Dashboard";
import Customer from "../pages/Customer/Customer";
import AddCustomer from "../pages/Customer/AddNewCustomer";
import CustomerDetails from "../pages/Customer/CustomerDetails";
import EnquiriesList from "../pages/Enquiries/EnquiriesList";
import NewEnquiries from "../pages/Enquiries/NewEnquiries";
import NewQuotation from "../pages/Enquiries/NewQuotation";
import { Login } from "../pages/Login/Login";
import { ForgotPassword } from "../pages/Login/ForgotPassword";
import { ResetPassword } from "../pages/Login/ResetPassword";

const AppRoutes = () => {
  return (
    <Routes>
      {/* 1. PUBLIC AUTH ROUTES */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      

      {/*2. PROTECTED APP ROUTES (Inside Layout)*/}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/customer/view" element={<CustomerDetails />} />
        <Route path="/enquiries" element={<EnquiriesList />} />
        <Route path="/enquiries/new-enquiries" element={<NewEnquiries />} />
        <Route path="/enquiries/new-quotation" element={<NewQuotation />} />
        
        {/* Placeholders */}
        
        <Route path="/calendar" element={<div>Calendar Page</div>} />
        <Route path="/claims" element={<div>Claims Page</div>} />
        <Route path="/settings" element={<div>Settings Page</div>} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;