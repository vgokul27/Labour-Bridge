import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/", type: "route" },
    { name: "About Us", href: "/about", type: "route" },
    { name: "Services", href: "/#services", type: "hash" },
    { name: "Clients", href: "/#clients", type: "hash" },
    { name: "Projects", href: "/projects", type: "route" },
    { name: "Milestones", href: "/milestones", type: "route" },
    { name: "Contact Us", href: "/contact", type: "route" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center opacity-0 animate-fade-in hover:opacity-80 transition-all duration-300"
          >
            <img
              src="/logo.jpg"
              alt="LABOURBridge India Logo"
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300 mr-3"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">
                LABOUR BRIDGE
              </h1>
              <p className="text-xs sm:text-sm text-blue-600 font-medium -mt-1">
                India
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              <div className="flex items-baseline space-x-4">
                {navLinks.map((link, index) =>
                  link.type === "route" ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 transform"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-yellow-500 px-3 py-2 rounded-md text-sm font-semibold transition-all duration-200 hover:scale-105 transform"
                      style={{
                        animation: `fadeInUp 0.5s ease-out ${
                          index * 0.1
                        }s both`,
                      }}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
            >
              <div
                className={`transform transition-transform duration-200 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              >
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
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-2xl z-50 lg:hidden animate-slide-in-right">
            <div className="flex flex-col h-full">
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-200 min-h-[60px]">
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="flex items-center min-w-0 flex-1 hover:opacity-80 transition-opacity duration-300"
                >
                  <img
                    src="/logo.jpg"
                    alt="LABOURBridge India Logo"
                    className="h-8 w-auto flex-shrink-0 object-contain drop-shadow-sm mr-3"
                  />
                  <div className="min-w-0">
                    <h2 className="text-sm font-bold text-gray-800 leading-tight truncate">
                      LABOUR BRIDGE
                    </h2>
                    <p className="text-xs text-blue-600 font-medium -mt-1 truncate">
                      India
                    </p>
                  </div>
                </Link>
                <button
                  onClick={toggleMenu}
                  className="p-1.5 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 transition-colors duration-200 flex-shrink-0 ml-2"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-4 py-6">
                <nav className="space-y-2">
                  {navLinks.map((link, index) =>
                    link.type === "route" ? (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={toggleMenu}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-500 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:translate-x-2 transform"
                        style={{
                          animation: `fadeInLeft 0.3s ease-out ${
                            index * 0.1 + 0.2
                          }s both`,
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-500 rounded-lg transition-all duration-200 hover:bg-gray-50 hover:translate-x-2 transform"
                        style={{
                          animation: `fadeInLeft 0.3s ease-out ${
                            index * 0.1 + 0.2
                          }s both`,
                        }}
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
