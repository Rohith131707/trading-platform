"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    localStorage.setItem("user_email", email);
    router.push("/verify-otp");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Groww</h2>
        <input
          type="email"
          required
          placeholder="Your Email Address"
          className="w-full p-3 border border-gray-300 rounded-xl mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white p-3 rounded-xl font-semibold">
          Continue
        </button>
      </form>
    </div>
  );
}
