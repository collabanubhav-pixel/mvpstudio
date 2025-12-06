"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 md:px-4 mt-1 md:mt-2">
      <div className="max-w-4xl mx-auto px-2 md:px-4">
        <nav className="bg-white/90 backdrop-blur-md border border-gray-300 rounded-full flex items-center justify-between py-2 md:py-2.5 px-4 md:px-6 relative shadow-[0_8px_16px_rgba(0,0,0,0.08),0_4px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.12),0_6px_12px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 transform hover:-translate-y-0.5">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Link href="/#projects" className="flex items-center space-x-2">
              <Image
                src="/logomvp.png"
                alt="MVP Studio"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center ml-2 text-gray-900 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
          </button>
          {/* Center Nav Links */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              <li><Link href="/#development-services" className="text-gray-900 text-sm font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Services</Link></li>
              <li><Link href="/work" className="text-gray-900 text-sm font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Projects</Link></li>
              <li><Link href="/#testimonials" className="text-gray-900 text-sm font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Testimonials</Link></li>
              <li><Link href="/#plans" className="text-gray-900 text-sm font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}>Plans</Link></li>
            </ul>
          </div>
          {/* Book A Call Button (always visible) */}
          <a
            href="https://cal.com/mvpstudio.in/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-300 bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 transition-all duration-300 text-gray-900 text-sm font-normal ml-2 shadow-[0_4px_8px_rgba(0,0,0,0.08),0_2px_4px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.12),0_3px_6px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_3px_rgba(0,0,0,0.1)]"
            style={{ fontFamily: 'Satoshi-Regular, sans-serif' }}
          >
            <FiPhoneCall className="w-4 h-4" />
            <span>Book A Call</span>
          </a>
          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-50 border border-gray-200 border-t-0">
              <ul className="flex flex-col space-y-4 w-full items-center">
                <li><Link href="/#development-services" className="text-gray-900 text-base font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link href="/work" className="text-gray-900 text-base font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Projects</Link></li>
                <li><Link href="/#testimonials" className="text-gray-900 text-base font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
                <li><Link href="/#plans" className="text-gray-900 text-base font-normal hover:text-gray-600 transition" style={{ fontFamily: 'Satoshi-Regular, sans-serif' }} onClick={() => setMenuOpen(false)}>Plans</Link></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}