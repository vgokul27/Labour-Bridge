import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 pt-20 sm:pt-24 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building India's
              <span className="text-yellow-400"> Infrastructure</span>,
              <br />
              One Workforce at a Time
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              India's most trusted manpower outsourcing company, connecting
              skilled professionals with industry leaders across construction,
              manufacturing, and infrastructure sectors.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-8 border-t border-gray-600 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {[
                { icon: Users, number: "35,000+", label: "Active Workers" },
                {
                  icon: Building2,
                  number: "500+",
                  label: "Projects Completed",
                },
                { icon: Award, number: "50+", label: "Trusted Clients" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="h-8 w-8 text-yellow-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src="/images/construction-workers.jpg"
                alt="Three professional construction workers in safety gear standing at construction site"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-500 text-blue-900 p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm font-semibold">Certified</div>
                <div className="text-xs">Professional Workers</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white text-blue-900 p-4 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-sm font-semibold">Safety First</div>
                <div className="text-xs">100% Compliance</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
