"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const SignupPage = () => {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email(
      {
        name: user.name,
        email: user.email,
        password: user.password,
        role: "user",
      } as any,
      {
        onRequest: (ctx) => {
          console.log("request: ", ctx);
        },
        onSuccess: (ctx) => {
          console.log(ctx);
          setUser({ name: "", email: "", password: "" });
          redirect("/signin");
        },
        onError: (ctx) => {
          alert(`Error:${ctx}`);
        },
      },
    );
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
          <p className="text-gray-500 mt-2">Join us and start your journey</p>
        </div>

        <form className="space-y-5" onSubmit={handleFormSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-4 py-3 text-gray-800 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-white/50"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-4 text-gray-800 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-white/50"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full px-4 py-3 text-gray-800 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all bg-white/50"
            />
          </div>

          {/* Signup Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 transition-all"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/signin"
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Log in
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
