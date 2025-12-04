"use client";

export default function ProcessSection() {
  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-32">
          <div className="flex-1">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-100/50 border border-blue-200/50 text-xs text-gray-700 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Our Process
            </span>
            <h2 className="text-gray-900 text-5xl md:text-6xl lg:text-7xl font-normal leading-tight" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Move at Startup<br />Speed
            </h2>
          </div>
          <div className="flex-1 flex flex-col items-end gap-6">
            <p className="text-gray-600 text-base md:text-lg text-right max-w-md leading-relaxed" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Our 4-step process is built for momentum. We keep it lean, focused, and validation-ready so you can launch without delays.
            </p>
            <a
              href="https://cal.com/mvpstudio.in/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium text-base hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}
            >
              Book a slot
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Step 01 - Initial Consultation */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
          <div className="flex-1">
            <div className="text-8xl md:text-9xl font-light text-gray-200 mb-4" style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>01</div>
            <h3 className="text-blue-600 text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
              Initial Consultation
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              We kick things off with a quick discovery call to understand your product idea, goals, and user needs.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/40 rounded-[3rem] p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <div className="px-5 py-2.5 rounded-full bg-blue-200/60 text-gray-800 text-sm font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Discovery Call
                </div>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="hidden md:block">
                  <path d="M 0 20 Q 15 10, 30 20 T 60 20" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                </svg>
                <div className="px-5 py-2.5 rounded-full bg-green-200/60 text-gray-800 text-sm font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Idea
                </div>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="hidden md:block">
                  <path d="M 0 20 Q 15 30, 30 20 T 60 20" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                </svg>
                <div className="px-5 py-2.5 rounded-full bg-blue-300/60 text-gray-800 text-sm font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Planning
                </div>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="hidden md:block">
                  <path d="M 0 20 Q 15 10, 30 20 T 60 20" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                </svg>
                <div className="px-5 py-2.5 rounded-full bg-purple-200/60 text-gray-800 text-sm font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Roadmap
                </div>
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="hidden md:block">
                  <path d="M 0 20 Q 15 30, 30 20 T 60 20" stroke="#9ca3af" strokeWidth="2" fill="none" strokeDasharray="4 4"/>
                </svg>
                <div className="px-5 py-2.5 rounded-full bg-yellow-200/60 text-gray-800 text-sm font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  Strategy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 02 - Strategy */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-32">
          <div className="flex-1 text-left lg:text-right">
            <div className="text-8xl md:text-9xl font-light text-gray-200 mb-4" style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>02</div>
            <h3 className="text-blue-600 text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
              Strategy
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md ml-auto" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              We map out features, prioritize what to build first, and align the roadmap around fast validation and clear outcomes.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-gradient-to-br from-blue-100/40 via-blue-200/30 to-cyan-100/40 rounded-[3rem] p-8 md:p-12 perspective-1000">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-blue-300 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-8 bg-blue-400 rounded w-full mt-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 03 - Code */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-32">
          <div className="flex-1">
            <div className="text-8xl md:text-9xl font-light text-gray-200 mb-4" style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>03</div>
            <h3 className="text-blue-600 text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
              Code
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              We use industry-standard AI tools like Lovable and Cursor to write clean, scalable code faster.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-gradient-to-br from-purple-100/40 via-pink-100/30 to-blue-100/40 rounded-[3rem] p-8 md:p-12">
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded bg-gray-700 text-white text-xs font-medium flex items-center gap-1.5" style={{ fontFamily: 'monospace' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 3L4 7L8 11V8H16V6H8V3Z"/>
                      </svg>
                      CURSOR
                    </div>
                    <div className="px-3 py-1 rounded bg-purple-600 text-white text-xs font-medium flex items-center gap-1.5" style={{ fontFamily: 'monospace' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                      </svg>
                      Lovable
                    </div>
                  </div>
                </div>
                <div className="p-4 font-mono text-sm space-y-2">
                  <div className="text-green-400">
                    <span className="text-purple-400">const</span> <span className="text-blue-300">buildMVP</span> = <span className="text-yellow-300">async</span> () {'=>'} {'{'}
                  </div>
                  <div className="text-gray-400 pl-4">
                    <span className="text-purple-400">return</span> <span className="text-green-300">'scalable code'</span>;
                  </div>
                  <div className="text-green-400">{'}'}</div>
                  <div className="text-gray-500">{'// Supercharged by AI'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 04 - Launch */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="flex-1 text-left lg:text-right">
            <div className="text-8xl md:text-9xl font-light text-gray-200 mb-4" style={{ fontFamily: 'Satoshi-Light, sans-serif' }}>04</div>
            <h3 className="text-blue-600 text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
              Launch
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md ml-auto" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Once launched, your product is ready to test with users, pitch to investors, or go to market — with support from our team along the way.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-gradient-to-br from-blue-100/40 via-cyan-100/30 to-blue-200/40 rounded-[3rem] p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300">
                  <div className="text-xs text-gray-500 mb-2 font-medium uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                    MVP IN 21 DAYS
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-gray-700">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 flex-1 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-xs text-gray-500 uppercase mb-1 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                      AI LEAD DEVELOPMENT
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg px-4 py-3 flex-1 transform hover:scale-105 transition-transform duration-300">
                    <div className="text-xs text-gray-500 uppercase mb-1 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                      SPEED TO MARKET
                    </div>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 flex items-center justify-center gap-3 transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-700" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>Ready to Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
