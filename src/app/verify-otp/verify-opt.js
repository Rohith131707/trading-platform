"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig"; // your firebase config
import { signInWithCustomToken } from "firebase/auth";

export default function VerifyOtpPage() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const router = useRouter();

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: enteredEmail,
          otp: enteredOtp,
        }),
      });

      const data = await response.json();

      if (data.success && data.firebaseToken) {
        // ✅ Sign user in using Firebase custom token
        await signInWithCustomToken(auth, data.firebaseToken);
        alert("OTP Verified! Redirecting...");
        router.push("/dashboard");
      } else {
        alert(data.message || "OTP verification failed.");
      }
    } catch (err) {
      console.error("Server error while verifying OTP.", err);
      alert("Server error. Try again.");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Verify OTP</h1>
      <input
        type="email"
        placeholder="Enter your email"
        value={enteredEmail}
        onChange={(e) => setEnteredEmail(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Enter OTP"
        value={enteredOtp}
        onChange={(e) => setEnteredOtp(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={handleVerifyOtp}
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Verify OTP
      </button>
    </div>
  );
}
