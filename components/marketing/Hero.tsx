"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projectImages = [
  "/autobot.png",
  "/crm.png",
  "/emailai.png",
  "/finc.png",
  "/horoscope.PNG",
  "/nexar.png",
  "/nurodeep.png",
  "/outreach.png",
  "/serene.png",
  "/darkop.png",
];

export default function Hero() {
  return (
    <section id="projects" className="w-full min-h-[85vh] flex items-center justify-center px-6 md:px-12 pt-32 pb-20 relative overflow-hidden" style={{ backgroundImage: 'url(/herobackground.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* White fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

      <div className="w-full max-w-7xl mx-auto relative z-20">
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
            Products that <span className="font-cormorant italic font-medium">Dominate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-800 text-lg md:text-xl font-normal mb-10 max-w-xl leading-relaxed text-center" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
            A fully customizable MVP development service for individuals, businesses and startups building products where users meet users.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 mb-16">
            <a href="https://cal.com/mvpstudio.in/30min" target="_blank" rel="noopener noreferrer" className="px-7 py-3 rounded-full bg-white text-gray-900 font-medium text-base border border-gray-200 shadow-md transition hover:shadow-lg hover:scale-105 active:scale-95" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              Get started
            </a>
            <Link href="/work" className="px-7 py-3 rounded-full text-gray-900 font-medium text-base border-2 border-gray-900/20 backdrop-blur-sm transition hover:bg-white/50 hover:border-gray-900/30 active:scale-95" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
              View Projects →
            </Link>
          </div>

          {/* Animated Project Images */}
          <div className="w-full overflow-hidden relative">
            <div className="flex gap-6">
              <motion.div
                className="flex gap-6 flex-shrink-0"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {[...projectImages, ...projectImages].map((image, index) => (
                  <div
                    key={index}
                    className="relative w-80 h-52 rounded-2xl overflow-hidden bg-white/40 backdrop-blur-sm border border-white/50 shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
                  >
                    <Image
                      src={image}
                      alt={`Project ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-transparent to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-transparent via-transparent to-transparent pointer-events-none z-10"></div>
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