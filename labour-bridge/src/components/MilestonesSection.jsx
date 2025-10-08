import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Trophy,
  Users,
  Target,
  Smartphone,
  Database,
  MapPin,
  Bot,
  Star,
  Quote,
  Award,
  Shield,
} from "lucide-react";

const MilestonesSection = () => {
  const milestones = [
    {
      year: "2023",
      quarter: "Q1",
      title: "Company Foundation",
      description:
        "LABOURBridge India was established with a vision to revolutionize manpower outsourcing in India.",
      icon: Trophy,
      stats: "Founded",
    },
    {
      year: "2023",
      quarter: "Q2",
      title: "First Major Client Win",
      description:
        "Successfully partnered with TATA Projects for a large-scale infrastructure project.",
      icon: Target,
      stats: "1st Client",
    },
    {
      year: "2023",
      quarter: "Q4",
      title: "1,000+ Active Workers",
      description:
        "Reached the milestone of managing over 1,000 active workers across multiple projects.",
      icon: Users,
      stats: "1,000+ Workers",
    },
    {
      year: "2024",
      quarter: "Q2",
      title: "Pan-India Expansion",
      description:
        "Opened regional offices in Hyderabad, Mumbai, Kerala, Gujarat, and Kolkata.",
      icon: Calendar,
      stats: "6 Cities",
    },
    {
      year: "2024",
      quarter: "Q4",
      title: "25,000+ Workforce",
      description:
        "Successfully scaled operations to manage over 25,000 active workers nationwide.",
      icon: Users,
      stats: "25,000+ Workers",
    },
    {
      year: "2025",
      quarter: "Q1",
      title: "35,000+ Active Workers",
      description:
        "Achieved unprecedented growth with over 35,000 active workers and 50+ satisfied clients.",
      icon: Trophy,
      stats: "35,000+ Workers",
    },
  ];

  const achievements = [
    { number: "35,000+", label: "Active Workers", color: "blue" },
    { number: "500+", label: "Projects Completed", color: "green" },
    { number: "50+", label: "Trusted Clients", color: "yellow" },
    { number: "6", label: "Cities Presence", color: "purple" },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      yellow: "from-yellow-500 to-yellow-600",
      purple: "from-purple-500 to-purple-600",
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="milestones"
      className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Our <span className="text-yellow-500">Journey</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From our inception in 2023 to becoming India's trusted manpower
            partner, here are the key milestones that define our growth story.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`bg-gradient-to-r ${getColorClasses(
                  achievement.color
                )} rounded-2xl p-4 sm:p-6 text-white mb-4`}
              >
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                  {achievement.number}
                </div>
              </div>
              <div className="text-gray-900 font-semibold">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - Mobile: left-aligned, Desktop: center */}
          <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8 lg:space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-start lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot - Mobile: left-aligned, Desktop: center */}
                  <div className="absolute left-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 lg:top-1/2 lg:-translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-yellow-500 rounded-full border-2 lg:border-2 border-white shadow-lg z-10"></div>

                  {/* Content - Mobile: left margin, Desktop: alternating */}
                  <div
                    className={`w-full ml-12 lg:ml-0 lg:w-1/2 ${
                      isEven ? "lg:pr-8" : "lg:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 ${
                        isEven ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <div className="flex items-start sm:items-center mb-4">
                        <div className="bg-yellow-500 p-2 sm:p-3 rounded-xl flex-shrink-0">
                          <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
                        </div>
                        <div className="ml-3 sm:ml-4 min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-blue-600">
                            {milestone.year} {milestone.quarter}
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-gray-900 leading-tight">
                            {milestone.title}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      <div className="bg-blue-50 rounded-lg p-2 sm:p-3 inline-block">
                        <span className="text-xs sm:text-sm text-blue-800 font-semibold">
                          {milestone.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology & Innovation Section */}
        <motion.div
          className="mt-12 lg:mt-20 mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology & <span className="text-yellow-500">Innovation</span>{" "}
              in Manpower Management
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Technology is the backbone of LABOURBridge's operations, enabling
              scale, safety, and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Digital Attendance Tracking */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 ml-4">
                  Digital Attendance Tracking
                </h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    GPS-verified attendance apps for daily site check-ins
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Real-time updates to client dashboards</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Biometric & QR-code enabled time sheets</span>
                </li>
              </ul>
            </motion.div>

            {/* Worker ID and Compliance Database */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-xl">
                  <Database className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 ml-4">
                  Worker ID & Compliance Database
                </h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Every worker is issued a LABOURBridge ID with QR scan
                    history
                  </span>
                </li>
                <li className="flex items-start">
                  <Database className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>
                    Linked to their skill, location history, wages, PF/ESI
                    number
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Mobile Operations Team App */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-xl">
                  <Smartphone className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 ml-4">
                  Mobile Operations Team App
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Field teams use an in-house mobile app for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Demand forecasting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Recruitment tracking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Incident reporting</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  <span>Worker grievance redressal</span>
                </li>
              </ul>
            </motion.div>

            {/* AI-based Workforce Allocation */}
            <motion.div
              className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8 shadow-xl border border-yellow-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-xl">
                  <Bot className="h-8 w-8 text-black" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 ml-4">
                  AI-based Workforce Allocation
                </h4>
              </div>
              <div className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Upcoming 2025
              </div>
              <p className="text-gray-700">
                Using historical project trends and skill profiles to
                auto-recommend the right team for upcoming jobs
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-12 lg:mt-20 mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Client <span className="text-yellow-500">Testimonials</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear what our clients say about our services and commitment to
              excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "LABOURBridge has consistently delivered skilled manpower across
                our project sites in Hyderabad and Gujarat. Their attention to
                detail, safety, and daily follow-ups are unmatched."
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Project Head
                  </div>
                  <div className="text-sm text-gray-600">
                    KEC International Ltd
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "During our Smart City Infra deployment in Telangana,
                LABOURBridge deployed over 200 skilled workers within 3 days.
                Their responsiveness is a major asset."
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Procurement Manager
                  </div>
                  <div className="text-sm text-gray-600">NCC Limited</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "For our robotic automation project, we required highly specific
                trades. LABOURBridge's team understood our needs better than
                most technical firms. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Founder</div>
                  <div className="text-sm text-gray-600">
                    Robomatics Hyderabad
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Quote className="h-8 w-8 text-yellow-500 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">
                "More than a manpower agency, LABOURBridge feels like an
                extended project team. We've had 2 years of partnership with
                zero disputes."
              </p>
              <div className="flex items-center">
                <div className="bg-yellow-100 p-2 rounded-full mr-3">
                  <Users className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Project Supervisor
                  </div>
                  <div className="text-sm text-gray-600">TATA Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Media & Recognition Section */}
        <motion.div
          className="mt-12 lg:mt-20 mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Media & <span className="text-yellow-500">Recognition</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                M/s LABOURBridge India has been featured in regional and trade
                publications for its ethical workforce practices and high-volume
                staffing capabilities.
              </p>
            </div>

            {/* Media Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  2023
                </div>
                <p className="text-gray-700 text-sm">
                  Featured in Construction India Today magazine for "Smart
                  Labour Deployment Model"
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  2024
                </div>
                <p className="text-gray-700 text-sm">
                  Recognized by Labour India Forum as one of the "Top 10
                  Workforce Solution Providers – Infrastructure Sector"
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-yellow-500 mb-2">
                  2025
                </div>
                <p className="text-gray-700 text-sm">
                  Invited to speak at BuildTech Conclave for showcasing our
                  digital hiring model
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Certifications & Compliance
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">MSME Registered</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">GST Registered</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    ESIC/EPF Compliant Vendor
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    Registered under Contract Labour Act
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">
                    PAN India Labour License
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <div className="mt-12 lg:mt-20 text-center">
          <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-2xl lg:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Looking Ahead
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              As we continue to grow, our commitment remains unchanged: to be
              India's most trusted manpower partner, driving infrastructure
              development and creating opportunities for millions of workers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-yellow-500">
                  2025 Goal
                </div>
                <div className="text-gray-300">50,000+ Workers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-yellow-500">
                  2026 Vision
                </div>
                <div className="text-gray-300">10+ Cities</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-yellow-500">
                  2027 Mission
                </div>
                <div className="text-gray-300">100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
