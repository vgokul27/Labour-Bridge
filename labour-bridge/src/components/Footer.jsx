import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ArrowUp,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Milestones", href: "#milestones" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Skilled Manpower Supply",
    "Unskilled Manpower Supply",
    "Project-Based Staffing",
    "Turnkey Workforce Solutions",
    "NMR & Contract Labour",
  ];

  const industries = [
    "Construction",
    "Manufacturing",
    "Infrastructure",
    "Real Estate",
    "Logistics",
    "EPC Sectors",
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white">Labour Bridge</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              India's most trusted manpower outsourcing company, connecting
              skilled talent with industry leaders since 2023.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 93636 51657</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@labourbridgesindia.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-3 rounded-lg transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-yellow-500 hover:text-black p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Industries We Serve</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {industry}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 LABOURBridge India. All rights reserved. | Privacy Policy |
              Terms of Service
            </div>

            <button
              onClick={scrollToTop}
              className="bg-yellow-600 hover:bg-yellow-500 text-black p-3 rounded-lg transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
