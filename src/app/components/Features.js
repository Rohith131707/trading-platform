'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentOptionsPage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] w-full p-4 mx-auto">
      <div className="max-w-xl text-left">
        <h1 className="text-[44px] text-[#2c2c2cd5] font-bold mb-2 italic pl-2">
          Powering your investments,<br /> one trade at a time.
        </h1>
        <p className="text-[18px] text-gray-600 mb-2 pl-2 pt-1">
          Long-term or short-term, high risk or low risk. Be the kind of investor you want to be.
        </p>

        <div className="flex flex-col gap-4 pt-1">
          <Link
            href="/stock"
            className="flex items-center justify-between bg-white bg-opacity-75 p-5 rounded-2xl shadow-md cursor-pointer transition-transform hover:-translate-y-1 no-underline text-inherit"
          >
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1041/1041923.png"
                alt="Stocks"
                width={40}
                height={40}
              />
              <span className="text-[18px] font-light ml-4">Stocks & Intraday</span>
            </div>
            <span className="text-[22px] text-gray-600">&gt;</span>
          </Link>

          <div className="flex items-center justify-between bg-white bg-opacity-75 p-5 rounded-2xl shadow-md cursor-pointer transition-transform hover:-translate-y-1">
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/991/991952.png"
                alt="Mutual Funds"
                width={40}
                height={40}
              />
              <span className="text-[18px] font-light ml-4">Mutual funds & SIPs</span>
            </div>
            <span className="text-[22px] text-gray-600">&gt;</span>
          </div>

          <div className="flex items-center justify-between bg-white bg-opacity-75 p-5 rounded-2xl shadow-md cursor-pointer transition-transform hover:-translate-y-1">
            <div className="flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2306/2306164.png"
                alt="Futures"
                width={40}
                height={40}
              />
              <span className="text-[18px] font-light ml-4">Futures & Options</span>
            </div>
            <span className="text-[22px] text-gray-600">&gt;</span>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-0">
        <img
          src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksBuy.5382418f.webp"
          alt="Mobile UI"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
}
