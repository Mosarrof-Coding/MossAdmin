"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

const TwoStepVerification = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const [loading, setLoading] = useState(false);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`digit-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d{6}$/.test(pasted)) return;

    const arr = pasted.split("");
    setCode(arr);
    document.getElementById(`digit-5`)?.focus();
  };

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendTimer]);

  const handleVerify = () => {
    const enteredCode = code.join("");
    setLoading(true);
    setTimeout(() => {
      alert(`Code submitted: ${enteredCode}`);
      setLoading(false);
    }, 1500);
  };

  const handleResend = () => {
    setResendTimer(60);
    alert("Verification code resent.");
  };

  return (
    <div className="shadow-md mx-auto mt-12 p-6 border border-border rounded-xl max-w-md">
      <h2 className="mb-4 font-bold text-brand text-2xl text-center">
        Two-Step Verification
      </h2>
      <p className="mb-6 text-sm text-center">
        Enter the 6-digit code we sent to your email or phone.
      </p>

      <div onPaste={handlePaste} className="flex justify-between gap-2 mb-4">
        {code.map((digit, index) => (
          <Input
            key={index}
            id={`digit-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="border-border w-12 h-12 font-medium text-xl text-center"
          />
        ))}
      </div>

      <Button
        onClick={handleVerify}
        disabled={loading || code.some((digit) => digit === "")}
        className="mt-2 w-full"
      >
        {loading ? <Loader2 className="mr-2 w-4 h-4 animate-spin" /> : null}
        Verify
      </Button>

      <div className="mt-4 text-center">
        {resendTimer > 0 ? (
          <p className="text-sm">
            Resend code in <span className="font-semibold">{resendTimer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-brand text-sm hover:underline"
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
};

export default TwoStepVerification;
