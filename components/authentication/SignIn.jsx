"use client";

import { useState } from "react";
import Link from "next/link";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub } from "react-icons/fa";
import { Mail, Lock, UserRound, GitFork } from "lucide-react";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
    // Submit to API
  };

  return (
    <main className="flex justify-center items-center bg-muted px-4 min-h-screen">
      <div className="space-y-6 bg-background shadow-xl p-8 rounded-2xl w-full max-w-md">
        <div className="flex items-center gap-2">
          <UserRound className="text-primary" />
          <h2 className="font-bold text-foreground text-3xl">
            Welcome Back 👋
          </h2>
        </div>
        <p className="mt-1 text-muted-foreground">Sign in to your account</p>

        {/* Social logins */}
        <div className="flex gap-3">
          <button className="flex flex-1 justify-center items-center gap-2 hover:bg-accent px-4 py-2 border rounded-lg text-muted-foreground text-sm">
            <span className="text-2xl">G</span>Google
          </button>
          <button className="flex flex-1 justify-center items-center gap-2 hover:bg-accent px-4 py-2 border rounded-lg text-muted-foreground text-sm">
            <GitFork />
            GitHub
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="border-t w-full" />
          </div>
          <div className="relative flex justify-center text-muted-foreground text-sm">
            <span className="bg-background px-2">or continue with email</span>
          </div>
        </div>

        {/* Email login form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block font-medium text-foreground text-sm"
            >
              Email address
            </label>
            <div className="relative">
              <Mail
                className="top-1/2 left-3 absolute text-muted-foreground -translate-y-1/2"
                size={18}
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
                className="shadow-sm mt-1 px-3 py-2 pl-10 border focus:border-primary rounded-lg focus:ring-primary w-full"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block font-medium text-foreground text-sm"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="top-1/2 left-3 absolute text-muted-foreground -translate-y-1/2"
                size={18}
              />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={form.password}
                onChange={handleChange}
                className="shadow-sm mt-1 px-3 py-2 pl-10 border focus:border-primary rounded-lg focus:ring-primary w-full"
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="flex items-center text-muted-foreground text-sm">
              <input
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
                className="mr-2 border-input rounded w-4 h-4 text-primary"
              />
              Remember me
            </label>
            <Link
              href="/forgot-password"
              className="text-primary text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 py-2 rounded-lg w-full text-white transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-muted-foreground text-sm text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/userAuth/signup"
            className="text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
