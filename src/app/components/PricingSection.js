// app/components/PricingSection.js
export default function PricingSection() {
    return (
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-300 pb-10">
            
            {/* Account Opening */}
            <div className="space-y-4">
              <div className="inline-block bg-white text-pink-600 text-sm font-semibold rounded-full px-5 py-1 shadow-sm">
                Pricing
              </div>
              <div className="flex items-end justify-center text-5xl font-bold text-gray-900">
                <span className="text-4xl font-semibold">₹</span>
                <span className="text-6xl font-bold">0</span>
              </div>
              <div className="text-xl font-medium text-gray-800">Account Opening</div>
            </div>
  
            {/* Brokerage */}
            <div className="space-y-4">
              <div className="inline-block bg-white text-pink-600 text-sm font-semibold rounded-full px-5 py-1 shadow-sm">
                Brokerage
              </div>
              <div className="flex items-end justify-center text-5xl font-bold text-gray-900">
                <span className="text-4xl font-semibold">₹</span>
                <span className="text-6xl font-bold">0</span>
                <span className="text-xl ml-1 mb-3">*</span>
              </div>
              <div className="text-xl font-medium text-gray-800">for all trades</div>
            </div>
  
            {/* Mutual Funds */}
            <div className="space-y-4">
              <div className="inline-block bg-white text-pink-600 text-sm font-semibold rounded-full px-5 py-1 shadow-sm">
                Mutual Funds
              </div>
              <div className="flex items-end justify-center text-5xl font-bold text-gray-900">
                <span className="text-4xl font-semibold">₹</span>
                <span className="text-6xl font-bold">0</span>
              </div>
              <div className="text-xl font-medium text-gray-800">Commission</div>
            </div>
          </div>
  
          <div className="mt-8 text-lg text-gray-700 font-medium">
          Straightforward pricing for smarter investing.
          </div>
          <div className="mt-2">
            <a href="/login" className="text-blue-600 hover:underline font-semibold">
              Know more →
            </a>
          </div>
        </div>
      </section>
    );
  }
  