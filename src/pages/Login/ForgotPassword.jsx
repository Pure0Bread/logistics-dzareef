import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "../../components/Layout/AuthLayout";
import { Input } from "../../components/Ui/Input";

export const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    setIsSubmitted(true);
    // Add your API call logic here
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle={
          <span>
            We've sent a password reset link to <strong>{email}</strong>
          </span>
        }
      >
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <p className="text-center text-gray-500 mb-8">
            Click the link in the email to reset your password.
          </p>
        </div>

        <div className="text-center text-sm text-gray-500">
          Didn't receive the email?{" "}
          <button
            onClick={() => console.log("Resend email")}
            className="font-medium text-orange-500 hover:text-orange-600 transition-colors"
          >
            Resend email
          </button>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email address and we'll send you a link to reset your password."
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
          id="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all"
        >
          Send Reset Email
        </button>
      </form>
    </AuthLayout>
  );
};