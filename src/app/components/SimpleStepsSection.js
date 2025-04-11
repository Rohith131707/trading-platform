import React from "react";

const SimpleStepsSection = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        It’s simple to get started
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Step 1 */}
        <div className="text-center">
          <div className="text-green-600 text-5xl font-bold mb-2">1</div>
          <div className="flex justify-center mb-2">
            <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-green-200"></div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Sign up</h3>
          <p className="text-gray-600 text-sm">
            Create an account for free using your email address
          </p>
        </div>

        {/* Step 2 */}
        <div className="text-center">
          <div className="text-green-600 text-5xl font-bold mb-2">2</div>
          <div className="flex justify-center mb-2">
            <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-green-200"></div>
          </div>
          <h3 className="text-xl font-semibold mb-2">Explore the platform</h3>
          <p className="text-gray-600 text-sm">
            See what it’s like to invest without putting your money at risk by practicing on a demo account
          </p>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-green-600 text-5xl font-bold mb-2">3</div>
          <div className="flex justify-center mb-2">
            <div className="w-4 h-4 bg-green-600 rounded-full border-4 border-green-200"></div>
          </div>
          
          <h3 className="text-xl font-semibold mb-2">Start trading</h3>
          <p className="text-gray-600 text-sm">
            Put your trading approach to good use
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleStepsSection;
