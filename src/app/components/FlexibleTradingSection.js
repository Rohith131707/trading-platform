import Image from "next/image";
import Link from 'next/link';


export default function FlexibleTradingSection() {
  return (
    <section className="bg-[#F7FCFF] py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="https://elitetraderfunding.com/templates/v1/assets/images/innovation.png"
          alt="Clock and Calendar Illustration"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <div className="inline-block bg-green-600 text-white font-bold py-1 px-4 rounded-md text-sm">
          Trade When You Want
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B3B] leading-snug">
          We don't choose when you trade
        </h2>

        <p className="text-gray-600 text-lg">
          Part of the benefit of being a successful trader is being able to work
          your own hours. Today’s market provides an almost always-on opportunity.
          You pick when you trade, and you can do it during holidays, special events,
          and market-moving news events!
        </p>
        <Link href="/login">
        <button href="/login" className="mt-4 bg-[#0B0B3B] hover:bg-[#131365] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Ready yet? Get started!
        </button>
        </Link>

      </div>
    </section>
  );
}
