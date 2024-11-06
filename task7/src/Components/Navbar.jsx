import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src="/pic.png"
                alt="Innomatics Research Labs"
                className="h-16 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black-700 hover:text-blue-600 hover:underline transition-colors">Home</Link>
            <Link to="/courses" className="text-black-700 hover:text-blue-600 hover:underline  transition-colors">Courses</Link>
            <Link to="/services" className="text-black-700 hover:text-blue-600 hover:underline transition-colors">Services</Link>
            <Link to="/about" className="text-black-700 hover:text-blue-600 hover:underline transition-colors">About</Link>
            <Link to="/contact" className="text-black-700 hover:text-blue-600 hover:underline transition-colors">Contact</Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:underline transition-colors">
              Login
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md">
            <Link to="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</Link>
            <Link to="/courses" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Courses</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Services</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</Link>
            <button className="w-full text-left px-3 py-2 text-blue-600 hover:bg-gray-50">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;