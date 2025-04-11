import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory OTP store (for testing/demo only)
global.otps = global.otps || {};

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required" });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP in memory
    global.otps[email] = { otp, createdAt: Date.now() };

    // ✅ Replace with your real Gmail & App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rohithjayaram33@gmail.com",         // ✅ your Gmail
        pass: "cspp bnjh pnbu pirh",        // ✅ your generated App Password
      },
    });

    const mailOptions = {
      from: "Trading App <your-real-gmail@gmail.com>",
      to: email,
      subject: "Your OTP for Login",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("OTP email sent:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("OTP Send Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to send OTP" });
  }
}
