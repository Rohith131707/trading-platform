"use client";
import Link from "next/link";
import { Search } from "lucide-react"; // Optional: Using lucide-react icon library

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="data:image/png;base64,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" alt="EasyTrade" className="w-10 h-10 mr-2" />
        <h2 className="text-xl font-bold">EasyTrade</h2>
      </div>

      <ul className="flex space-x-4">
        {['Invest', 'Trade', 'Platforms', 'Pricing', 'Markets', 'Learn', 'Partner'].map(item => (
          <li key={item} className="hover:text-red-600 cursor-pointer">{item}</li>
        ))}
      </ul>

      <div className="flex items-center space-x-2">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {/* You can use a unicode icon like 👁 or 🔍 if not using a library */}
            <Search size={16} />
          </span>
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="pl-10 pr-4 py-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <Link href="/register">
        <button className="bg-red-600 text-white px-3 py-2 rounded-full cursor-pointer">Open Demat Account</button>
        </Link>
        <Link href="/login">
          <button className="border border-red-600 text-red-600 px-3 py-2 rounded-full cursor-pointer">Log In</button>
        </Link>
      </div>
    </nav>
  );
}
