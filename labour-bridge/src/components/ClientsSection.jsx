import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Star,
  Users,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Client Carousel Component
const ClientCarousel = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of visible items based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) return 4; // Desktop: 4 items
      if (window.innerWidth >= 480) return 3; // Tablet: 3 items
      return 2; // Small mobile: 2 items
    }
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // Update visible count on window resize and reset position
  React.useEffect(() => {
    const handleResize = () => {
      const newVisibleCount = getVisibleCount();
      if (newVisibleCount !== visibleCount) {
        setVisibleCount(newVisibleCount);
        // Reset to safe position on resize to avoid layout issues
        setCurrentIndex(0);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleCount]);

  // Create extended client list for seamless loop (triple for smoother infinite scroll)
  const extendedClients = [...clients, ...clients, ...clients];
  const totalClients = clients.length;

  // Handle infinite loop reset for seamless animation
  React.useEffect(() => {
    if (currentIndex >= totalClients * 2) {
      // Reset to middle section without animation
      setTimeout(() => {
        setCurrentIndex(totalClients);
      }, 300);
    } else if (currentIndex < 0) {
      // Reset to middle section from end
      setTimeout(() => {
        setCurrentIndex(totalClients - 1);
      }, 300);
    }
  }, [currentIndex, totalClients]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <motion.div
      className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-20"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
          aria-label="Previous clients"
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-4 z-10 bg-white shadow-lg rounded-full p-2 md:p-3 hover:bg-gray-50 transition-all duration-200 hover:scale-110"
          aria-label="Next clients"
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-gray-600" />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden mx-8 md:mx-8">
          <motion.div
            className="flex transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {extendedClients.map((client, index) => (
              <div
                key={`client-${index}`}
                className="flex items-center justify-center flex-shrink-0 px-2 sm:px-3 md:px-4"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <motion.img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 w-auto object-contain opacity-100 transition-all duration-200 cursor-pointer"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=${encodeURIComponent(
                      client.name.split(" ")[0]
                    )}`;
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ClientsSection = () => {
  const clients = [
    {
      name: "TATA Projects",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png",
    },
    {
      name: "NCC Limited",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaI2zGNYT_b8vfTGuQJZ3uVG7MsOpIMwG9mg&s",
    },
    {
      name: "L&T Construction",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png",
    },
    {
      name: "ADANI Group",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/1024px-Adani_2012_logo.png",
    },
    {
      name: "Reliance Industries",
      logo: "https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg",
    },
    {
      name: "Shapoorji Pallonji",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Shapoorji_Pallonji_Group_logo.svg/1200px-Shapoorji_Pallonji_Group_logo.svg.png",
    },
    {
      name: "GMR Group",
      logo: "https://images.seeklogo.com/logo-png/31/2/gmr-group-logo-png_seeklogo-310947.png",
    },
    {
      name: "Hindustan Construction",
      logo: "https://constrofacilitator.com/wp-content/uploads/2024/04/HCC-jpg.webp",
    },
    {
      name: "ITD CEM",
      logo: "https://allpaisa.com/wp-content/uploads/2021/05/ITD-LOGO.jpg",
    },
    {
      name: "PISL",
      logo: "https://pislinfra.com/wp-content/uploads/2023/08/pisl-logo-1.png",
    },
    {
      name: "Robomatic Precon pvt Ltd",
      logo: "/robomatic-logo.jpeg",
    },
    {
      name: "KEC",
      logo: "https://download.logo.wine/logo/KEC_International/KEC_International-Logo.wine.png",
    },
    {
      name: "Star Worth",
      logo: "http://starworthinfra.com/images/logo.png",
    },
    {
      name: "Vijay Nirman",
      logo: "https://vijaynirman.com/wp-content/uploads/2015/06/VNC_logo.jpg",
    },
    {
      name: "Casagrand",
      logo: "https://buzzfame.in/wp-content/uploads/2023/04/Casagrand-Logo.webp",
    },
    {
      name: "DLF",
      logo: "https://cdn.freelogovectors.net/svg05/dlf-logo.svg",
    },
    {
      name: "Godrej",
      logo: "https://psfonttk.com/wp-content/uploads/2020/09/Godrej-Properties-Logo-1024x541.png",
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Timely Deployment",
      description: "Rapid workforce deployment with 95% on-time delivery rate",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description:
        "Rigorous screening and training processes ensure top-quality workforce",
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description:
        "Access to a vast network of skilled and certified professionals",
    },
    {
      icon: Building,
      title: "Compliance Excellence",
      description: "Full legal compliance and documentation management",
    },
  ];

  return (
    <section
      id="clients"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Portfolio */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by <span className="text-yellow-500">Industry Leaders</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're proud to work with India's most respected companies,
            delivering exceptional workforce solutions across diverse projects
            and industries.
          </motion.p>
        </motion.div>

        {/* Client Logos - Manual Carousel */}
        <ClientCarousel clients={clients} />

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24"
        >
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-yellow-500">LABOURBridge India</span>
            </h3>
            <p className="text-xl text-gray-600">
              Our unique selling propositions that set us apart
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                    <motion.div
                      className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-xl inline-block mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="h-8 w-8 text-black" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
