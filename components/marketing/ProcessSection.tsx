import Link from "next/link";

const steps = [
  {
    title: 'Contact',
    description: 'Book a call to discuss your goals, and ideas.',
    mockup: (
      <div className="w-full bg-white rounded-2xl p-4 shadow-lg">
        <div className="text-xs text-gray-500 mb-3 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Schedule Meeting</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Initial Consultation</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Requirements Discussion</div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="text-sm text-gray-500" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Project Kickoff</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Discuss Your Idea',
    description: "Tell me your unique vision, and I'll create stunning, functional MVP.",
    mockup: (
      <div className="w-full bg-white rounded-2xl p-4 shadow-lg">
        <div className="text-xs text-gray-500 mb-3 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Project Planning</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Feature Planning</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Design Mockups</div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="text-sm text-gray-500" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Tech Stack Selection</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Kickstart Development',
    description: 'I expertly transform your idea into a powerful, scalable solution.',
    mockup: (
      <div className="w-full bg-white rounded-2xl p-4 shadow-lg">
        <div className="text-xs text-gray-500 mb-3 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Development Progress</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Frontend Complete</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Backend In Progress</div>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="text-sm text-gray-500" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Testing Pending</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'And Hand Over',
    description: 'Receive a fully tested, polished, quality product tailored to you.',
    mockup: (
      <div className="w-full bg-white rounded-2xl p-4 shadow-lg">
        <div className="text-xs text-gray-500 mb-3 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Delivery Status</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Quality Assurance</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-sm text-gray-900 font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Documentation Ready</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-sm text-gray-500" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Handover Complete</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gray-100 border border-gray-300 text-xs text-gray-900 font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          How it works
        </span>
        {/* Heading */}
        <h2 className="text-gray-900 text-4xl md:text-6xl font-normal text-center mb-4" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          <span className="text-gray-900">Process</span> <span className="text-gray-600">Is Everything</span>
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg text-center max-w-2xl mb-14" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Simple, streamlined process is what get's you results
        </p>
        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-6 flex flex-col min-h-[380px] bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 shadow-xl"
            >
              {/* Mockup Preview */}
              <div className="mb-6 transform hover:scale-[1.02] transition-transform duration-300">
                {step.mockup}
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-gray-900 text-xl font-bold mb-2" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Callout Card */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl shadow-lg p-6 md:p-8 mt-8 border border-gray-300">
          <div className="flex flex-col items-start">
            <span className="flex items-center text-gray-900 text-base font-bold mb-1" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Our team is with you
            </span>
            <span className="text-gray-600 text-sm" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              alongside at each step for seamless experience
            </span>
          </div>
          <div className="flex flex-row items-center gap-3 mt-4 md:mt-0">
            <Link href="/work" className="px-6 py-2 rounded-full text-white font-normal text-base transition bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-700 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.15)] hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              See All Projects
            </Link>
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full text-white font-normal text-base transition bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 border border-gray-700 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.15)] hover:from-gray-700 hover:via-gray-800 hover:to-gray-700 active:scale-[0.98]" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Contact Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 