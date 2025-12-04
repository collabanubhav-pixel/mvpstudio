"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center px-3 md:px-0 pt-32 pb-16 bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-3 py-0.5 rounded-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 border border-gray-300 shadow-[0_2px_8px_rgba(0,0,0,0.08),_inset_0_1px_2px_rgba(255,255,255,0.5)] text-xs text-gray-900 font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif', letterSpacing: '0.08em' }}>
          15+ MVPs Delivered
        </span>
        {/* Heading */}
        <h1 className="text-gray-900 text-4xl md:text-6xl font-normal text-center mb-6 mt-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          From Ideas To Impact  <br/>
         MVPs that Validate And Dominate
        </h1>
        {/* Subtitle */}
        <br/>
        <br/>
        <br/>
        {/* Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 mb-14">
          <Link href="/work" className="px-6 py-2 rounded-full text-white font-normal text-base transition bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-700 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.15)] hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            See All Projects
          </Link>
          <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-gray-900 text-white font-normal text-base border border-gray-800 transition hover:bg-gray-800 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            Contact Now
          </a>
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