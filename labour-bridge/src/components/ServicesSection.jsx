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
      customLayout: true,
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
      centerCards: true,
    },
  ];

  const renderServiceGrid = (category, categoryIndex) => {
    if (category.customLayout && category.services.length === 6) {
      const firstRowServices = category.services.slice(0, 4);
      const secondRowServices = category.services.slice(4, 6);

      return (
        <div className="space-y-8">
          {/* First Row - 4 cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {firstRowServices.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <div
                  key={serviceIndex}
                  className="group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-6 max-w-md">
              {secondRowServices.map((service, serviceIndex) => {
                const Icon = service.icon;
                const actualIndex = serviceIndex + 4;
                return (
                  <div
                    key={actualIndex}
                    className="group transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                        <Icon className="h-8 w-8 text-black" />
                      </div>
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                        {service.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (category.centerCards && category.services.length === 4) {
      return (
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {category.services.map((service, serviceIndex) => {
              const Icon = service.icon;
              return (
                <div
                  key={serviceIndex}
                  className="group transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-base font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight">
                      {service.name}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {category.services.map((service, serviceIndex) => {
            const Icon = service.icon;
            // Check if this is the Project-Based Staffing category
            const isProjectBased = category.title === "Project-Based Staffing";

            return (
              <div
                key={serviceIndex}
                className="group transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 group-hover:shadow-xl group-hover:border-yellow-300 transition-all duration-300 text-center h-40 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-500 group-hover:to-yellow-600 transition-all duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <h4
                    className={`font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 leading-tight ${
                      isProjectBased ? "text-sm md:text-base" : "text-base"
                    }`}
                  >
                    {service.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-yellow-500" style={{ fontWeight: "800" }}>
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            LABOUR BRIDGES India offers a comprehensive range of manpower
            services tailored to the infrastructure, engineering, construction,
            and manufacturing sectors.
          </p>
        </div>

        {/* Services Categories */}
        <div className="space-y-24">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="w-full">
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-lg">{category.subtitle}</p>
              </div>

              {/* Services Grid */}
              {renderServiceGrid(category, categoryIndex)}

              {/* Decorative Line */}
              {categoryIndex < serviceCategories.length - 1 && (
                <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mx-auto mt-16" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl p-8 text-black">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Custom Workforce Solutions?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let us create a tailored manpower strategy for your specific
              project requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
