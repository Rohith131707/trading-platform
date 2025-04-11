import { NextResponse } from "next/server";

global.otps = global.otps || {}; // Ensure global store

export async function POST(req) {
  const { email, otp } = await req.json();

  if (!email || !otp) {
    return NextResponse.json({ success: false, message: "Email and OTP are required." });
  }

  const storedOTP = global.otps[email];

  if (!storedOTP) {
    return NextResponse.json({ success: false, message: "No OTP sent to this email." });
  }

  const now = Date.now();
  const isExpired = now - storedOTP.createdAt > 10 * 60 * 1000; // 10 minutes

  if (storedOTP.otp !== otp) {
    return NextResponse.json({ success: false, message: "Invalid OTP" });
  }

  if (isExpired) {
    return NextResponse.json({ success: false, message: "OTP expired. Please resend." });
  }

  delete global.otps[email]; // clear OTP after successful verification

  return NextResponse.json({ success: true });
}
