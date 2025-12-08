import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import illustration from "../../assets/HeroImg.png";

export const AuthLayout = ({ children, title, subtitle, backLink }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-16 xl:p-24 relative">
        {backLink && (
          <Link
            to={backLink.to}
            className="absolute top-8 left-8 lg:left-16 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Need help?
          </Link>
        )}

        <div className="max-w-md mx-auto w-full">
          <img src={logo} alt="STARK-ASIA Logo" className="h-12 mb-8" />
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
          {subtitle && <p className="text-gray-500 mb-8">{subtitle}</p>}
          {children}
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden lg:block relative w-1/2 bg-gray-50 p-4 lg:p-8 my-4 mr-4 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <img
              src={illustration}
              alt="Logistics Illustration"
              className="w-full h-auto object-contain max-w-2xl ml-auto"
            />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;