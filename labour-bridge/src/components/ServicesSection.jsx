import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap,
  Hammer,
  Wrench,
  Construction,
  Paintbrush,
  Flame,
  Building,
  UserCheck,
  Layers,
  Settings,
  Users,
  Brush,
  Package,
  HardHat,
  Home,
  Calendar,
  Briefcase,
  FileText,
  Clock,
  CreditCard,
} from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: "Skilled Manpower Supply",
      subtitle: "Expert professionals for specialized construction roles",
      services: [
        { name: "Electricians", icon: Zap },
        { name: "Barbenders", icon: Construction },
        { name: "Plumbers", icon: Wrench },
        { name: "Masons", icon: Construction },
        { name: "Painters", icon: Paintbrush },
        { name: "Welders", icon: Flame },
        { name: "Shuttering Carpenters", icon: Building },
        { name: "Supervisors & Foremen", icon: UserCheck },
        { name: "Tiling Experts", icon: Layers },
        { name: "Fabricators", icon: Settings },
      ],
    },
    {
      title: "Unskilled Manpower Supply",
      subtitle: "Trained and verified support workforce",
      services: [
        { name: "Helpers", icon: Users },
        { name: "Cleaners", icon: Brush },
        { name: "Loaders", icon: Package },
        { name: "Site Assistants", icon: HardHat },
        { name: "Fitters' Helpers", icon: Wrench },
        { name: "Housekeeping Labour", icon: Home },
      ],
      customLayout: true, // Flag to identify this section for custom layout
    },
    {
      title: "Project-Based Staffing",
      subtitle: "Customized workforce solutions for specific project needs",
      services: [
        { name: "Short-term Projects", icon: Clock },
        { name: "Long-term Installations", icon: Building },
        { name: "Timeline-specific Deployment", icon: Calendar },
        { name: "Budget-optimized Solutions", icon: CreditCard },
        { name: "Skill-matched Staffing", icon: UserCheck },
      ],
    },
    {
      title: "Turnkey Labour Solutions",
      subtitle: "Complete end-to-end workforce management",
      services: [
        { name: "Recruitment & Onboarding", icon: Users },
        { name: "Accommodation Management", icon: Home },
        { name: "Compliance Handling", icon: FileText },
        { name: "Complete Project Staffing", icon: Briefcase },
        { name: "Single-point Contact", icon: UserCheck },
      ],
    },
    {
      title: "NMR and Contract-Based Labour",
      subtitle: "Flexible employment models for construction firms",
      services: [
        { name: "Daily Wage Workers", icon: Clock },
        { name: "Contract-based Labour", icon: FileText },
        { name: "Payroll Services", icon: CreditCard },
        { name: "Compliance Management", icon: Briefcase },
      ],
      centerCards: true, // Add this flag to center the cards
    },
  ];

  const renderServiceGrid = (category, categoryIndex) => {
    if (category.customLayout && category.services.length === 6) {
      // Custom layout for Unskilled Manpower: 4 cards in first row, 2 centered in second row
      const firstRowServices = category.services.slice(0, 4);
      const secondRowServices = category.services.slice(4, 6);

      return (
        <div className="space-y-6">
          {/* First Row - 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {firstRowServices.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={serviceIndex}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: serviceIndex * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Service Item */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center min-h-[140px] flex flex-col items-center justify-center">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-3 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300"
                      
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                    </div>

                    {/* Service Name */}
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                  </div>

                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md">
              {secondRowServices.map((service, serviceIndex) => {
                const Icon = service.icon;
                const actualIndex = serviceIndex + 4; // Continue index from first row
                return (
                  <motion.div
                    key={actualIndex}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: actualIndex * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Service Item */}
                    <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center min-h-[140px] flex flex-col items-center justify-center">
                      {/* Icon */}
                      <div
                        className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-3 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300"
                        
                      >
                        <Icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                      </div>

                      {/* Service Name */}
                      <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                        {service.name}
                      </h4>
                    </div>

                    {/* Hover Effect Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={false}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (category.centerCards && category.services.length === 4) {
      // Centered layout for NMR section (4 cards)
      return (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mt-2 py-4 px-4">
            {category.services.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={serviceIndex}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: serviceIndex * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Service Item - Same fixed width as unskilled section */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center min-h-[140px] mx-auto flex flex-col items-center justify-center">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-3 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300"
                      
                    >
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                    </div>

                    {/* Service Name */}
                    <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                  </div>

                  {/* Hover Effect Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      );
    } else {
      // Default grid layout for other sections
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {category.services.map((service, serviceIndex) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={serviceIndex}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: serviceIndex * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Service Item */}
                <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center min-h-[140px] flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-3 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300"
                    
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                  </div>

                  {/* Service Name */}
                  <h4 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                    {service.name}
                  </h4>
                </div>

                {/* Hover Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-yellow-500">Services</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            LABOUR BRIDGES India offers a comprehensive range of manpower services
            tailored to the infrastructure, engineering, construction, and
            manufacturing sectors.
          </motion.p>
        </motion.div>

        {/* Services Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="relative"
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">{category.subtitle}</p>
              </div>

              {/* Services Grid - Using custom render function */}
              {renderServiceGrid(category, categoryIndex)}

              {/* Decorative Line */}
              {categoryIndex < serviceCategories.length - 1 && (
                <motion.div
                  className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-12"
                  initial={{ width: 0 }}
                  whileInView={{ width: 128 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 text-black">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Workforce Solutions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us create a tailored manpower strategy for your specific
              project requirements.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Get Custom Quote
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
