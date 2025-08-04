"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const ResetPass = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Reset alert
    setAlert({ type: "", message: "" });

    if (!email || !password || !confirmPassword) {
      return setAlert({
        type: "error",
        message: "All fields are required.",
      });
    }

    if (password !== confirmPassword) {
      return setAlert({
        type: "error",
        message: "Passwords do not match.",
      });
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));
      setAlert({
        type: "success",
        message: "Password reset successfully!",
      });
      setFormData({ email: "", password: "", confirmPassword: "" });
    } catch (err) {
      setAlert({
        type: "error",
        message: "Failed to reset password.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-muted px-4 w-full min-h-screen">
      <Card className="shadow-xl border border-border w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Reset Your Password
          </CardTitle>
          <CardDescription className="text-muted-foreground text-center">
            Enter your email and choose a new password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {alert.message && (
              <div
                className={`text-sm p-3 rounded-md ${
                  alert.type === "error"
                    ? "bg-destructive/10 text-destructive border border-destructive"
                    : "bg-primary/10 text-primary border border-primary"
                }`}
              >
                {alert.message}
              </div>
            )}

            <div>
              <Label className="mb-2" htmlFor="email">
                Email
              </Label>
              <div className="relative">
                <Mail className="top-2.5 left-3 absolute w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <Label className="mb-2" htmlFor="password">
                New Password
              </Label>
              <div className="relative">
                <Lock className="top-2.5 left-3 absolute w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pr-10 pl-10"
                  required
                />
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                  className="top-1/2 right-1 absolute -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <Label className="mb-2" htmlFor="confirmPassword">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="top-2.5 left-3 absolute w-5 h-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter new password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPass;
