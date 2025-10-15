import React from "react";
import { motion } from "framer-motion";
import { MapPin, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Maintaining honesty and transparency in all our dealings",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "Delivering superior quality services that exceed expectations",
    },
    {
      icon: Eye,
      title: "Reliability",
      description: "Consistent and dependable manpower solutions you can trust",
    },
    {
      icon: MapPin,
      title: "Safety",
      description:
        "Prioritizing worker safety and workplace security standards",
    },
  ];

  const leadership = [
    {
      name: "Ajay Sharma",
      role: "CEO & Founder Director",
      image: "ajay-sharma.jpg",
    },
    {
      name: "Mriganka Dey",
      role: "Independent Director, Client Management",
      image: "mriganka-dey.jpg",
    },
    {
      name: "Aniket Sharma",
      role: "Partner, Resource Planning",
      image: "aniket.jpg",
    },
    {
      name: "Ms. Manasi Dey",
      role: "Independent Director - Finance Management",
      image: "manasi-dey.jpg",
    },
    {
      name: "Sunil K Nair",
      role: "General Manager - Business Development",
      image: "sunil.jpg",
    },
    {
      name: "Mahaveer Chowdhry",
      role: "Site Supervisor - Orrisa & Surat",
      image: "mahaveer-chowdhry.jpg",
    },
    {
      name: "Shubajit Bhattacharjee",
      role: "Asst Manager- Site Supervisior ( PAN INDIA)",
      image: "shubajit.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-x-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview */}
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
            About <span className="text-yellow-500">LABOUR BRIDGES India</span>
          </motion.h2>
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              LABOURBridge India is a leading manpower outsourcing and labor
              supply company in India, offering end-to-end staffing solutions.
              Headquartered in Chennai with regional offices in Hyderabad,
              Mumbai, Kerala, Gujarat, and Kolkata, we are committed to timely
              deployment, customized solutions, and complete compliance.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400 p-3 rounded-xl">
                <Eye className="h-8 w-8 text-black-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be India's most trusted and innovative manpower provider,
              setting industry standards for excellence in workforce solutions
              and contributing to the nation's infrastructure development.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-400 p-3 rounded-xl">
                <Target className="h-8 w-8 text-black-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To deliver reliable, cost-effective, and efficient manpower
              solutions that enable our clients to focus on their core business
              while we manage their workforce requirements with precision.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-xl inline-block mb-4">
                      <Icon className="h-8 w-8 text-black" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-18 ">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h3>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={leader.image}
                  alt={`${leader.name} - ${leader.role}`}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-100 group-hover:border-yellow-300 transition-colors object-cover shadow-md"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      leader.name
                    )}&background=3B82F6&color=fff&size=150`;
                  }}
                />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {leader.name}
                </h4>
                <p className="text-gray-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
