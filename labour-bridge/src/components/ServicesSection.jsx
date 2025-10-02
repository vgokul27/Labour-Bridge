import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Settings, FileText, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: 'Skilled and Unskilled Manpower Supply',
      description: 'Comprehensive workforce solutions providing both skilled technicians and unskilled laborers across various industries.',
      features: ['Quality screening process', 'Skills assessment', 'Background verification', 'Training support']
    },
    {
      icon: Briefcase,
      title: 'Project-Based Staffing',
      description: 'Tailored staffing solutions for specific projects with flexible deployment and scalable workforce management.',
      features: ['Project timeline alignment', 'Scalable workforce', 'Cost optimization', 'Progress monitoring']
    },
    {
      icon: Settings,
      title: 'Turnkey Workforce Solutions',
      description: 'Complete workforce management including recruitment, deployment, payroll, and compliance management.',
      features: ['End-to-end management', 'Payroll processing', 'Compliance handling', 'Performance tracking']
    },
    {
      icon: FileText,
      title: 'NMR and Contract-Based Labour',
      description: 'Supply of non-muster roll (NMR) and contract-based workers with full legal compliance and documentation.',
      features: ['Legal compliance', 'Contract management', 'Documentation support', 'Flexible terms']
    }
  ];

  const industries = [
    { name: 'Construction', icon: '🏗️', description: 'Infrastructure and building projects' },
    { name: 'Manufacturing', icon: '🏭', description: 'Production and assembly operations' },
    { name: 'Logistics', icon: '🚚', description: 'Supply chain and warehousing' },
    { name: 'Infrastructure', icon: '🛣️', description: 'Roads, bridges, and utilities' },
    { name: 'Real Estate', icon: '🏢', description: 'Residential and commercial projects' },
    { name: 'EPC Sectors', icon: '⚡', description: 'Engineering, procurement & construction' }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-x-hidden">
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive manpower solutions tailored to meet your specific business requirements 
            across multiple industries and project types.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-blue-100 group-hover:bg-blue-200 p-4 rounded-2xl transition-colors">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries We Serve */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h3>
            <p className="text-xl text-gray-600">Delivering specialized workforce solutions across key sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border-2 border-gray-100 hover:border-blue-300 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h4>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Scale Your Workforce?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you find the right talent for your projects. Get a customized workforce solution today.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center group">
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;