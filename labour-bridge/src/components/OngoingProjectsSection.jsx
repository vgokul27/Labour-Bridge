import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OngoingProjectsSection = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: "Metro Rail Extension Phase III",
      location: "Chennai",
      image: "/ongoing-1.jpg",
      workforce: "180+",
      duration: "In Progress",
      status: "65% Complete",
      highlights: [
        "Advanced tunneling and station construction work",
        "24/7 operations with skilled workforce deployment",
        "Zero safety incidents recorded to date",
      ],
    },
    {
      id: 2,
      title: "IT Corridor Infrastructure Development",
      location: "Chennai",
      image: "/ongoing-2.jpg",
      workforce: "220+",
      duration: "In Progress",
      status: "40% Complete",
      highlights: [
        "Road expansion and utility infrastructure",
        "Specialized concrete and steel fabrication teams",
        "Coordination with multiple sub-contractors",
      ],
    },
    {
      id: 3,
      title: "Residential Complex - Premium Towers",
      location: "Chennai",
      image: "/ongoing-3.jpg",
      workforce: "150+",
      duration: "In Progress",
      status: "55% Complete",
      highlights: [
        "High-rise construction with advanced techniques",
        "Skilled masonry and electrical installation teams",
        "Quality control and safety compliance maintained",
      ],
    },
  ];

  return (
    <section
      id="ongoing-projects"
      className="pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-20 bg-gray-50 w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Current <span className="text-yellow-500">Ongoing Projects</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Currently active projects where our skilled workforce is making a
            difference across Chennai's infrastructure and construction
            landscape.
          </motion.p>
        </motion.div>

        {/* Ongoing Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Project Image Only */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x320/3B82F6/FFFFFF?text=Ongoing+Project`;
                  }}
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Excellence in Every Project
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              These ongoing projects demonstrate our commitment to quality,
              safety, and timely delivery across Chennai's growing
              infrastructure needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-300">
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Real-time Progress Monitoring
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Safety First Approach
              </span>
              <span className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-yellow-500" />
                Quality Assurance
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OngoingProjectsSection;
