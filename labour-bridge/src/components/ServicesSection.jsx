import React from "react";
import { motion } from "framer-motion";
import { Truck, HardHat, Building, Wrench, Home, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Construction Services",
      description:
        "Complete construction solutions for all types of infrastructure projects",
    },
    {
      icon: HardHat,
      title: "Recruitment & Manpower Services",
      description:
        "Skilled and unskilled workforce recruitment for various industries",
    },
    {
      icon: Building,
      title: "Residential & Commercial Construction",
      description:
        "High-quality residential and commercial building construction services",
    },
    {
      icon: Wrench,
      title: "Industrial Construction",
      description:
        "Specialized industrial facility construction and maintenance services",
    },
    {
      icon: Home,
      title: "Renovation & Remodeling",
      description:
        "Professional renovation and remodeling services for existing structures",
    },
    {
      icon: Users,
      title: "Civil Engineering & Structural Works",
      description:
        "Comprehensive civil engineering and structural construction solutions",
    },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-x-hidden"
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Service <span className="text-black">Offerings</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Icon with Yellow Background */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-yellow-500 rounded-2xl mb-6 group-hover:bg-yellow-400 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon
                    className="h-10 w-10 md:h-12 md:w-12 text-black"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
