"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="projects" className="w-full min-h-[85vh] flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden" style={{ backgroundImage: 'url(/herobackground.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 shadow-sm">
            <span className="text-sm text-gray-800 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              15+ MVPs Delivered
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-gray-900 text-5xl md:text-7xl font-medium text-center mb-8 leading-tight" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
            From Ideas To Impact<br />
            Products that <span className="italic font-light">Dominate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-800 text-lg md:text-xl font-normal mb-10 max-w-xl leading-relaxed text-center" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            A fully customizable MVP development service for individuals, businesses and startups building products where users meet users.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4">
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-white text-gray-900 font-medium text-base border border-gray-200 shadow-md transition hover:shadow-lg hover:scale-105 active:scale-95" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Get started
            </a>
            <Link href="/work" className="px-7 py-3 rounded-full text-gray-900 font-medium text-base border-2 border-gray-900/20 backdrop-blur-sm transition hover:bg-white/50 hover:border-gray-900/30 active:scale-95" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              View Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const Twitter=()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )
}