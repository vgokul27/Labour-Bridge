import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center opacity-0 animate-fade-in">
            <img 
              src="/logo.jpg" 
              alt="LABOURBridge India Logo" 
              className="h-10 w-auto mr-3"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-800 leading-tight">
                LABOURBridge
              </h1>
              <p className="text-sm text-blue-600 font-medium -mt-1">
                India
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 transform"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105 transform">
                Get a Quote
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-fade-in"
            onClick={toggleMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 lg:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center">
                  <img 
                    src="/logo.jpg" 
                    alt="LABOURBridge India Logo" 
                    className="h-8 w-auto mr-2"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 leading-tight">LABOURBridge</h2>
                    <p className="text-sm text-blue-600 font-medium -mt-1">India</p>
                  </div>
                </div>
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6">
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={toggleMenu}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-500 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:translate-x-2 transform"
                      style={{
                        animation: `fadeInLeft 0.3s ease-out ${index * 0.1 + 0.2}s both`
                      }}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer */}
              <div className="p-4 border-t border-gray-200 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;