"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, UserRound, Github } from "lucide-react";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SignUp form submitted:", form);
    // Submit to backend
  };

  return (
    <main className="flex justify-center items-center bg-muted px-4 min-h-screen">
      <div className="space-y-6 bg-background shadow-xl p-8 rounded-2xl w-full max-w-md">
        <div className="flex items-center gap-2">
          <UserRound className="text-primary" />
          <h2 className="font-bold text-foreground text-3xl">
            Create an Account 📝
          </h2>
        </div>
        <p className="text-muted-foreground text-sm">
          Join us by filling the information below
        </p>

        {/* Social Login */}
        <div className="flex gap-3">
          <button className="flex flex-1 justify-center items-center gap-2 hover:bg-accent px-4 py-2 border rounded-lg text-muted-foreground text-sm">
            <span className="text-2xl">G</span>Google
          </button>
          <button className="flex flex-1 justify-center items-center gap-2 hover:bg-accent px-4 py-2 border rounded-lg text-muted-foreground text-sm">
            <Github />
            GitHub
          </button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="border-t w-full" />
          </div>
          <div className="relative flex justify-center text-muted-foreground text-sm">
            <span className="bg-background px-2">or sign up with email</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-medium text-foreground text-sm"
            >
              Full Name
            </label>
            <div className="relative">
              <UserRound
                className="top-1/2 left-3 absolute text-muted-foreground -translate-y-1/2"
                size={18}
              />
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="shadow-sm mt-1 px-3 py-2 pl-10 border focus:border-primary rounded-lg focus:ring-primary w-full"
              />
            </div>
          </div>

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
                required
                value={form.password}
                onChange={handleChange}
                className="shadow-sm mt-1 px-3 py-2 pl-10 border focus:border-primary rounded-lg focus:ring-primary w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 py-2 rounded-lg w-full text-white transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-muted-foreground text-sm text-center">
          Already have an account?{" "}
          <Link
            href="/userAuth/signIn"
            className="text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
