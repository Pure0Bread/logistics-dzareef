import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/Layout/AuthLayout";
import { Input } from "../../components/Ui/Input";

export const Login = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");

    navigate("/dashboard");
  };

  return (
    <AuthLayout
      title="Sign In"
      subtitle="Welcome to logistics management system."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="name@example.com"
          required
        />
        <div className="space-y-1.5">
          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-black text-white font-medium rounded-xl hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-all"
        >
          Log In
        </button>
      </form>
    </AuthLayout>
  );
};