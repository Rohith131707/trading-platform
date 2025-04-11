"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyABtSHVevFY3QbRZg3SPvbQdqcU7NTaMP4",
  authDomain: "ro-1-d1951.firebaseapp.com",
  projectId: "ro-1-d1951",
  storageBucket: "ro-1-d1951.appspot.com",
  messagingSenderId: "463978408841",
  appId: "1:463978408841:web:e0fa99cda45d53d103cf58",
  measurementId: "G-V48NCKMY46",
};

// Firebase Initialization
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Auto-redirect if user already logged in via Google
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.push("/dashboard");
    });
    return () => unsubscribe();
  }, [router]);

  // Google Sign-In Handler
  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In failed. Try again.");
    }
  };

  // Send OTP Handler
  const handleSendOtp = async () => {
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      console.log("Send OTP Response:", data); // Add this line for debugging
  
      if (data.success) {
        alert("OTP sent to your email!");
        setStep(2); // move to OTP input step
      } else {
        alert("Failed to send OTP: " + data.message);
      }
    } catch (error) {
      console.error("OTP Send Error", error);
      alert("Something went wrong while sending OTP");
    }
  };
  

  // Verify OTP Handler
  const handleVerifyOtp = async () => {
    if (!otp) return alert("Please enter the OTP.");
    setLoading(true);
    try {
      const res = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server error response:", errorText);
        alert("Server error while verifying OTP.");
        return;
      }

      const data = await res.json();
      if (data.success) {
        alert("OTP Verified!...");
        localStorage.setItem("isOtpLoggedIn", "true");
        
        window.location.href = "/dashboard"; 
        router.push("/dashboard");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("OTP Verify Error:", error);
      alert("Something went wrong while verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex shadow-2xl rounded-2xl overflow-hidden max-w-3xl w-full">
        {/* Left Banner */}
        <div className="bg-green-400 p-12 text-white w-1/2">
          <h2 className="text-3xl font-bold mb-2">Simple, Free Investing.</h2>
          <p className="text-xl">Mutual Funds, Stocks & More</p>
        </div>

        {/* Login Form */}
        <div className="bg-white p-10 w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6">Welcome to Trading</h2>

          {/* Google Sign-In */}
          <button
            className="border w-full py-2 flex items-center justify-center gap-2 mb-4 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">Or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Email Step */}
          {step === 1 && (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
              />
              <button
                className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 disabled:opacity-60"
                onClick={handleSendOtp}
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP to Email"}
              </button>
            </>
          )}

          {/* OTP Step */}
          {step === 2 && (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
              />
              <button
                className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 disabled:opacity-60"
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <p
                className="text-sm text-green-600 mt-3 cursor-pointer hover:underline"
                onClick={handleSendOtp}
              >
                Resend OTP
              </p>
            </>
          )}

          <p className="text-sm text-gray-500 mt-6 text-center">
            By proceeding, I agree to{" "}
            <a href="#" className="underline">
              T&amp;C
            </a>
            ,{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            &amp;{" "}
            <a href="#" className="underline">
              Tariff Rates
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
