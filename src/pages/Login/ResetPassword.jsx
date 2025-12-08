import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AuthLayout } from "../../components/Layout/AuthLayout";
import { Input } from "../../components/Ui/Input";

export const ResetPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset submitted");
    // Add your password reset logic here
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter your new password below."
    >
      <div className="mb-8">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="new-password"
          label="New Password"
          type="password"
          placeholder="Enter at least 8 characters"
          required
        />
        <Input
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your new password"
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all"
        >
          Reset Password
        </button>
      </form>
    </AuthLayout>
  );
};