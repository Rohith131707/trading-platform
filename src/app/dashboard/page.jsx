"use client";
import { useEffect, useState, useRef } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FiCpu } from 'react-icons/fi';

import {
  FiLogOut,
  FiFileText,
  FiSun,
  FiUser,
  FiPhone,
  FiBell,
  FiShoppingCart,
  FiTrendingUp,
  FiBarChart2,
  FiActivity,
} from "react-icons/fi";
import {
  MdOutlineTrendingUp,
  MdShowChart,
  MdOutlineNewspaper,
} from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [otpFallbackUser, setOtpFallbackUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Stocks");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const isOtpLoggedIn = localStorage.getItem("isOtpLoggedIn") === "true";
      const otpEmail = localStorage.getItem("otpEmail");

      if (currentUser || isOtpLoggedIn) {
        if (isOtpLoggedIn && (!currentUser || !currentUser.email)) {
          const fallbackName = otpEmail?.split("@")[0] || "OTP User";
          const displayName =
            fallbackName.charAt(0).toUpperCase() + fallbackName.slice(1);

          setOtpFallbackUser({
            displayName: displayName,
            email: otpEmail || "Not Provided",
          });
        } else {
          setUser(currentUser);
        }
      } else {
        router.push("/");
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    const username = user?.displayName || otpFallbackUser?.displayName || "User";
    signOut(auth).then(() => {
      localStorage.removeItem("isOtpLoggedIn");
      localStorage.removeItem("otpEmail");
      toast.success(`${username} logged out successfully`);
      router.push("/");
    });
  };

  if (loading) {
    return <div className="p-6 text-gray-600">Loading Dashboard...</div>;
  }

  const displayUser = user || otpFallbackUser;

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />

      {/* Header */}
      <div className="flex justify-between items-center bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-green-600">Easy Trading</h1>

          <nav className="flex gap-6 text-sm font-medium text-gray-700">
            {[
              { label: "Stocks", icon: <FiTrendingUp /> },
              { label: "F&O", icon: <FiBarChart2 /> },
              { label: "Mutual Funds", icon: <FiActivity /> },
            ].map((tab) => (
              <span
                key={tab.label}
                className={`cursor-pointer flex items-center gap-1 ${
                  activeTab === tab.label
                    ? "text-green-600 border-b-2 border-green-600 pb-1"
                    : "hover:text-green-600"
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.icon}
                {tab.label}
              </span>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Search ..."
            className="border px-3 py-1 rounded-full text-sm outline-none"
          />
          <FiBell className="text-gray-700 text-xl cursor-pointer" />
          <FiShoppingCart className="text-gray-700 text-xl cursor-pointer" />

          {displayUser && (
            <div className="relative" ref={menuRef}>
              {displayUser.photoURL ? (
                <img
                  src={displayUser.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <div
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-semibold cursor-pointer border border-gray-300"
                >
                  {displayUser.displayName
                    ? displayUser.displayName.charAt(0).toUpperCase()
                    : "U"}
                </div>
              )}

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white border rounded-lg shadow-lg z-50 p-4">
                  <div className="flex flex-col items-center text-center">
                    {displayUser.photoURL ? (
                      <img
                        src={displayUser.photoURL}
                        alt="Avatar"
                        className="w-16 h-16 rounded-full mb-2"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-semibold mb-2">
                        {displayUser.displayName
                          ? displayUser.displayName.charAt(0).toUpperCase()
                          : "U"}
                      </div>
                    )}
                    <h2 className="font-semibold text-lg text-gray-800">
                      {displayUser.displayName || "User"}
                    </h2>
                    <p className="text-sm text-gray-600">{displayUser.email}</p>
                  </div>
                  <hr className="my-3" />
                  <div className="space-y-2">
                    <button className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                      <FiFileText /> All Orders
                    </button>
                    <button className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                      <FiPhone /> 24 x 7 Customer Support
                    </button>
                    <button className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                      <FiUser /> Reports
                    </button>
                    <hr />
                    <button className="flex items-center gap-2 w-full text-left text-sm text-gray-700 hover:bg-gray-100 px-2 py-1 rounded">
                      <FiSun /> Theme
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 w-full text-left text-sm text-red-600 hover:bg-gray-100 px-2 py-1 rounded"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Welcome Box */}
      {displayUser && (
        <div className="bg-white m-6 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-800 mb-2">
            Welcome, <strong>{displayUser.displayName || "User"}</strong> 👋
          </p>
          <p className="text-sm text-gray-600">
            Email: {displayUser.email || "No Email"}
          </p>
        </div>
      )}

      {/* Dashboard UI */}
      <div className="mx-6 mt-4 grid gap-6">
        {/* Market Indices */}
        <div>
          <h2 className="text-md font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <MdShowChart /> Market Indices
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "NIFTY",
                value: "20,519.1",
                icon: <MdShowChart className="text-green-600 text-xl" />,
                link: "https://in.tradingview.com/symbols/NSE-NIFTY/",
              },
              {
                name: "SENSEX",
                value: "23,519.35",
                icon: <FiTrendingUp className="text-green-600 text-xl" />,
                link: "https://www.bseindia.com/sensex/code/16",
              },
              {
                name: "BANIFTY",
                value: "29,219.15",
                icon: <FiBarChart2 className="text-green-600 text-xl" />,
                link: "https://in.tradingview.com/symbols/NSE-BANKNIFTY/",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow text-center cursor-pointer"
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <p className="font-semibold text-gray-700">{item.name}</p>
                <p className="text-lg font-bold text-gray-800">{item.value}</p>
                <p className="text-sm text-gray-500">0.00 (0.00%)</p>
              </a>
            ))}
          </div>
        </div>

        {/* Top Gainers */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold text-gray-700 flex items-center gap-2">
              <MdOutlineTrendingUp />
              Top Gainers <span className="text-xs text-gray-500">NIFTY100</span>
            </h2>
            <button className="text-green-600 text-sm font-medium">SEE MORE</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "Tata Consumer Pr...",
                price: "798.15",
                change: "+2.18%",
                up: true,
                link: "https://www.tataconsumer.com/",
              },
              {
                name: "HDFC Bank",
                price: "1,624.10",
                change: "-0.57%",
                up: false,
                link: "https://www.hdfcbank.com/",
              },
              {
                name: "Wipro",
                price: "564.45",
                change: "+1.68%",
                up: true,
                link: "https://www.wipro.com/",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow text-left hover:shadow-md"
              >
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
                <p className="text-lg font-bold text-gray-800">₹ {item.price}</p>
                <p className={`text-sm ${item.up ? "text-green-600" : "text-red-600"}`}>
                  {item.change}
                </p>
              </a>
            ))}
          </div>
        </div>
        {/* Top Gainers */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold text-gray-700 flex items-center gap-2">
              <MdOutlineTrendingUp />
              Stocks of News<span className="text-xs text-gray-500"></span>
            </h2>
            <button className="text-green-600 text-sm font-medium">SEE MORE</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "TCS",
                price: "3,268.00",
                change: "21.40(2.18%",
                up: true,
                link: "https://groww.in/stocks/tata-consultancy-services-ltd",
              },
              {
                name: "Bank of India",
                price: "108.33",
                change: "1.57(1.57%)",
                up: false,
                link: "https://groww.in/stocks/bank-of-india",
              },
              {
                name: "INfosys",
                price: "1,320.00",
                change: "26.30(1.68%)",
                up: true,
                link: "https://groww.in/stocks/infosys-ltd",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow text-left hover:shadow-md"
              >
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
                <p className="text-lg font-bold text-gray-800">₹ {item.price}</p>
                <p className={`text-sm ${item.up ? "text-green-600" : "text-red-600"}`}>
                  {item.change}
                </p>
              </a>
            ))}
          </div>
        </div>
        

        {/* Products & Tools */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-md font-semibold text-gray-700 flex items-center gap-2">
              <MdOutlineTrendingUp />
              Products & Tools
            </h2>
            <button className="text-green-600 text-sm font-medium">SEE MORE</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              {
                name: "Terminal",
                icon: <FiCpu className="text-green-600 text-2xl" />,
                link: "https://groww.in/charts/indices/nifty",
              },
              {
                name: "Events",
                icon: <FiBell className="text-blue-600 text-2xl" />,
                link: "https://groww.in/stocks/calendar",
              },
              {
                name: "Intraday",
                icon: <FiTrendingUp className="text-orange-600 text-2xl col-end-2" />, 
                link: "https://groww.in/screener/stocks/intraday",
              },
              {
                name: "IPO",
                icon: <FiFileText className="text-red-600 text-2xl" />,
                link: "https://groww.in/ipo",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg shadow text-left hover:shadow-md"
              >
                <div className="flex justify-center mb-1">{item.icon}</div>
                <p className="text-amber-50 font-bold text-gray-700 text-center">{item.name}</p>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
