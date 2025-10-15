import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Target,
  Eye,
  Heart,
  Building,
  Factory,
  Hammer,
  Home,
  Truck,
  Zap,
} from "lucide-react";

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
      role: "Site Supervisor - Orrisa & Surat",
      image: "mahaveer-chowdhry.jpg",
    },
    {
      name: "Shubajit Bhattacharjee",
      role: "Asst Manager- Site Supervisior ( PAN INDIA)",
      image: "shubajit.jpg",
    },
  ];

  const industries = [
    {
      icon: Building,
      title: "Construction",
      description:
        "M/s Labour Bridges India is a leading manpower service provider specializing in the construction industry across PAN India. We supply skilled and unskilled workers including masons, carpenters, bar benders, welders, electricians, helpers, and site supervisors for civil, mechanical, and electrical works. Our workforce supports large-scale projects for reputed companies like TATA, L&T, NCC, ADANI, and KEC, ensuring timely completion and superior workmanship. With a focus on safety, quality, and productivity, we provide end-to-end manpower management—covering recruitment, deployment, and on-site supervision. M/s Labour Bridges India stands as a trusted partner in building India's infrastructure with reliability and workforce excellence.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description:
        "M/s Labour Bridges India provides dependable manpower services to the manufacturing industry across PAN India. We supply skilled and semi-skilled workers, including machine operators, fitters, welders, fabricators, helpers, and supervisors, ensuring smooth plant operations and production efficiency. Our workforce supports diverse manufacturing sectors such as automotive, steel, cement, engineering, and heavy industries. With a strong focus on quality, safety, and timely deployment, we help clients maintain continuous operations and meet production targets. Partnering with leading industrial firms, M/s Labour Bridges India delivers reliable workforce solutions that enhance productivity, reduce downtime, and ensure compliance with industry standards and best practices.",
    },
    {
      icon: Hammer,
      title: "Infrastructure",
      description:
        "M/s Labour Bridges India plays a vital role in strengthening the infrastructure sector by providing skilled and unskilled manpower across major projects in India. Our workforce supports the construction of roads, bridges, railways, power plants, ports, and industrial structures with precision and dedication. We supply engineers, supervisors, equipment operators, welders, fitters, and general laborers to ensure seamless project execution. With a focus on safety, quality, and on-time delivery, M/s Labour Bridges India partners with top infrastructure companies like TATA, L&T, NCC, and ADANI, contributing to nation-building through reliable workforce solutions and efficient manpower management across diverse project environments.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description:
        "M/s Labour Bridges India delivers efficient and dependable manpower solutions to the real estate sector across India. We supply skilled and unskilled workers including masons, bar benders, electricians, plumbers, painters, and site supervisors for residential, commercial, and industrial projects. Our workforce ensures high-quality workmanship, adherence to timelines, and compliance with safety standards. By supporting developers and construction firms in every project phase—from foundation to finishing—we help achieve smooth execution and timely possession. M/s Labour Bridges India is trusted by leading real estate companies for its professionalism, workforce reliability, and commitment to excellence in building modern infrastructure and urban developments.",
    },
    {
      icon: Truck,
      title: "Logistics",
      description:
        "M/s Labour Bridges India provides reliable manpower services to the logistics and supply chain sector across PAN India. We supply skilled and unskilled personnel including loaders, unloaders, warehouse assistants, forklift operators, delivery staff, and supervisors to ensure smooth handling, storage, and movement of goods. Our workforce supports logistics operations in ports, warehouses, distribution centers, and factories, ensuring timely dispatch and efficiency. With a focus on discipline, productivity, and safety, M/s Labour Bridges India helps clients reduce operational downtime and improve supply chain performance. We are a trusted partner for logistics companies seeking dependable workforce solutions across India's growing logistics network.",
    },
    {
      icon: Zap,
      title: "EPC Sectors",
      description:
        "M/s Labour Bridges India offers specialized manpower solutions to the EPC (Engineering, Procurement & Construction) sector across PAN India. We supply skilled and unskilled workers including engineers, technicians, welders, fitters, riggers, and helpers for civil, mechanical, and electrical projects. Our workforce supports all project stages—from foundation and fabrication to commissioning and maintenance—ensuring quality, safety, and timely completion. Partnering with leading EPC companies like TATA, L&T, NCC, and KEC, we provide reliable manpower for industrial plants, refineries, power projects, and infrastructure works. M/s Labour Bridges India is committed to delivering excellence and efficiency in every EPC project nationwide.",
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
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h3>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We <span className="text-yellow-500">Serve</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering specialized manpower solutions across diverse sectors
              with excellence and reliability
            </p>
          </motion.div>

          <div className="space-y-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-2xl">
                        <Icon className="h-10 w-10 text-black" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {industry.title}
                      </h4>
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
