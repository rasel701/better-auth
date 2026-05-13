"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-blue-100 p-4 mt-10">
      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-3 font-medium">
            Please enter your details to sign in
          </p>
        </div>

        <form className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-white/80 placeholder:text-gray-400"
            />
          </div>

          {/* Password Field */}
          <div>
            <div className="flex justify-between mb-2 ml-1">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all bg-white/80 placeholder:text-gray-400"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2 ml-1">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="remember"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Remember for 30 days
            </label>
          </div>

          {/* Sign In Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl shadow-xl transition-all mt-4"
          >
            Sign In
          </motion.button>

          {/* Social Login (Optional) */}
          <button
            type="button"
            className="w-full py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl flex items-center justify-center space-x-2 hover:bg-gray-50 transition-all"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              className="w-5 h-5"
              alt="Google"
            />
            <span>Sign in with Google</span>
          </button>
        </form>

        {/* Bottom Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?
          <Link
            href="/signup"
            className="text-blue-600 font-bold hover:underline ml-1"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignInPage;
