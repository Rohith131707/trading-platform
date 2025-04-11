'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#fef7f1] min-h-screen text-center">
      <nav className="flex justify-between items-center px-12 py-4 bg-white shadow-md">
        <div className="flex items-center">
           <img src="data:image/png;base64,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" alt="EasyTrade" className="w-10 h-10 mr-2" />
          <h2 className="text-2xl font-semibold text-black pr-2">EasyTrade</h2>
        </div>
        <ul className="flex gap-5 text-sm font-medium text-gray-700">
          <li><a href="#" className="hover:text-red-600">Invest</a></li>
          <li><a href="#" className="hover:text-red-600">Trade</a></li>
          <li><a href="#" className="hover:text-red-600">Platforms</a></li>
          <li><a href="#" className="hover:text-red-600">Pricing</a></li>
          <li><a href="#" className="hover:text-red-600">Markets</a></li>
          <li><a href="#" className="hover:text-red-600">Learn</a></li>
          <li><a href="#" className="hover:text-red-600">Partner</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
            <i className="ri-search-line mr-2" />
            <input type="text" placeholder="What are you looking for today?" className="bg-transparent outline-none text-sm" />
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm">Open Demat Account</button>
          <button onClick={() => window.location.href='/login'} className="border border-red-600 text-red-600 px-4 py-2 rounded font-bold text-sm cursor-pointer">Log In</button>
        
        </div>
      </nav>

      <div className="max-w-3xl mx-auto py-32">
        <h1 className="text-5xl font-bold text-gray-800">Trade smart, not hard.</h1>
        <p className="text-xl text-gray-600 mt-6">Buy, sell, and grow with stocks, ETFs, and more.</p>
        <a href="/login" className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-6 py-3 rounded-lg transition duration-300">Get started</a>
      </div>

      <div className="text-center text-gray-700">
        <div className="flex justify-center pt-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4a4a5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 4-3 3"/><path d="m20 9-3 3"/><path d="m5 14 3 3"/><path d="M14 21a1 1 0 0 0 .62-1.79L4 9l-2 6 6-2 10.21 10.21a1 1 0 0 0 .79.29Z"/><path d="m18 3-2 2"/><path d="m21 6-2 2"/></svg>
        </div>
        <h1 className="text-3xl font-bold mt-4 text-gray-800">Fueled with power, packed with <br className="hidden sm:block" /> everything you need!</h1>
      </div>

      <section className="flex flex-col md:flex-row items-center justify-between bg-white max-w-5xl mx-auto mt-16 p-10 rounded-2xl shadow-md border border-gray-200">
        <div className="md:w-1/2 md:pr-10 text-left">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Markets in a snapshot.</h2>
          <p className="text-gray-600 mb-6">Simplified enough for beginners.<br />Detailed enough for experts.</p>
          <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-gray-700 font-bold hover:bg-gray-100">Try it out <span className="text-lg">→</span></button>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/stocksExplore.b7e25ae9.svg" alt="Markets snapshot" width={350} height={300} className="rounded-lg shadow-md" />
        </div>
      </section>
    </div>
  );
}
