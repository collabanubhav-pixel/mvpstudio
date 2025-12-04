import Link from "next/link";

const steps = [
  {
    title: 'Contact',
    description: 'Book a call to discuss your goals, and ideas.',
    step: 'Step 1',
  },
  {
    title: 'Discuss Your Idea',
    description: "Tell me your unique vision, and I'll create stunning, functional MVP.",
    step: 'Step 2',
  },
  {
    title: 'Kickstart Development',
    description: 'I expertly transform your idea into a powerful, scalable solution.',
    step: 'Step 3',
  },
  {
    title: 'And Hand Over',
    description: 'Receive a fully tested, polished, quality product tailored to you.',
    step: 'Step 4',
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
              className="relative rounded-3xl p-6 flex flex-col justify-between min-h-[240px] bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 shadow-xl"
            >
              <span className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-300 text-gray-900 text-lg font-bold">
                {idx + 1}
              </span>

              <div className="mb-4">
                <h3 className="text-gray-900 text-xl font-bold mb-2" style={{ fontFamily: 'Satoshi-Medium, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                  {step.description}
                </p>
              </div>

              <div className="mt-auto">
                <hr className="border-t border-gray-200 mb-2" />
                <span className="inline-block px-3 py-0.5 rounded-full border border-gray-300 text-xs text-gray-600">
                  {step.step}
                </span>
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