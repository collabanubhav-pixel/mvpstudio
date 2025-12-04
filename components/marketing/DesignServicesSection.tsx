'use client'
import Image from "next/image";
import { FaRegObjectGroup, FaPenSquare, FaRegImage, FaRegWindowRestore } from 'react-icons/fa';

const services = [
  {
    icon: <FaRegObjectGroup className="w-5 h-5 text-gray-900" />,
    title: "MVP Development",
    description: "Developing breathtaking, user-centric MVPs that boost engagement, conversions, and growth, perfectly aligned with your brand",
    image: "/emailai.png",
    imageAlt: "MVP Example",
    imageClass: "object-contain bg-white rounded-xl mt-4"
  },
  {
    icon: <FaPenSquare className="w-5 h-5 text-gray-900" />,
    title: "Logo Design",
    description: "Crafting distinctive, scalable, and impactful logos that embody your brand's identity and vision",
  },
  {
    icon: <FaRegWindowRestore className="w-5 h-5 text-gray-900" />,
    title: "Website Design",
    description: "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience",
    image: "/nexar.png",
    imageAlt: "Website Example",
    imageClass: "object-cover rounded-xl mt-4"
  },
  {
    icon: <FaRegImage className="w-5 h-5 text-gray-900" />,
    title: "App Development",
    description: " Beautiful, user-friendly apps that people enjoy using—and keep coming back for.",
  },
];

const features = [
  "MVP Development",
  "Web Development",
  "App Development",
  "Cross Platform Development",
  "AI Agents",
  "Automation",
  "SEO",
  "Framer",
  "Optimization",
];

export default function DesignServicesSection() {
  return (
    <section id="development-services" className="w-full py-24 px-3 md:px-0 bg-transparent">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <span className="inline-block mb-6 px-4 py-1 rounded-full bg-gray-100 border border-gray-300 text-xs text-gray-900 font-normal tracking-wide uppercase" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Development Services
        </span>
        {/* Heading */}
        <h2 className="text-gray-900 text-4xl md:text-6xl font-normal text-center mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Development <span className="text-gray-600">Services</span>
        </h2>
        {/* Subtitle */}
        <p className="text-gray-600 text-base md:text-lg text-center max-w-2xl mb-10" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
          Explore a suite of development services to elevate your brand.
        </p>
        {/* Contact Now Button */}
        
        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl p-6 flex flex-col h-full bg-gradient-to-r from-gray-50 via-white to-gray-50 border border-gray-300 backdrop-blur-sm shadow-[inset_0_1px_3px_rgba(255,255,255,0.5),_0_4px_10px_rgba(0,0,0,0.08)]">
              <div className="flex items-center mb-3">
                {service.icon}
                <span className="ml-2 text-gray-900 text-lg font-bold" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{service.title}</span>
              </div>
              <p className="text-gray-700 text-sm mb-2" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>{service.description}</p>
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={600}
                  height={200}
                  className={(service.title === "MVP Development" ? "object-left " : "") + service.imageClass + " w-full max-h-40 object-cover"}
                />
              )}
            </div>
          ))}
        </div>
        {/* Features Infinite Scroll Row */}
        <div className="w-full overflow-x-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-2 md:gap-3">
            {features.concat(features).map((feature, idx) => (
              <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 text-gray-900 text-xs font-medium" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 