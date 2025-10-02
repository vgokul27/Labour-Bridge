import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Users, Building } from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    { name: 'TATA Projects', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png' },
    { name: 'NCC Limited', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaI2zGNYT_b8vfTGuQJZ3uVG7MsOpIMwG9mg&s' },
    { name: 'L&T Construction', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png' },
    { name: 'ADANI Group', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Adani_2012_logo.png/1024px-Adani_2012_logo.png' },
    { name: 'Reliance Industries', logo: 'https://rilstaticasset.akamaized.net/sites/default/files/2023-02/L.1.jpg' },
    { name: 'Shapoorji Pallonji', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Shapoorji_Pallonji_Group_logo.svg/1200px-Shapoorji_Pallonji_Group_logo.svg.png' },
    { name: 'GMR Group', logo: 'https://images.seeklogo.com/logo-png/31/2/gmr-group-logo-png_seeklogo-310947.png' },
    { name: 'Hindustan Construction', logo: 'https://constrofacilitator.com/wp-content/uploads/2024/04/HCC-jpg.webp' }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Timely Deployment',
      description: 'Rapid workforce deployment with 95% on-time delivery rate'
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'Rigorous screening and training processes ensure top-quality workforce'
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: 'Access to a vast network of skilled and certified professionals'
    },
    {
      icon: Building,
      title: 'Compliance Excellence',
      description: 'Full legal compliance and documentation management'
    }
  ];

  return (
    <section id="clients" className="py-12 sm:py-16 md:py-20 bg-gray-50 w-full overflow-x-hidden">
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
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We're proud to work with India's most respected companies, delivering exceptional 
            workforce solutions across diverse projects and industries.
          </motion.p>
        </motion.div>

        {/* Client Logos */}
        <motion.div 
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-center w-full">
            {clients.map((client, index) => (
              <motion.div 
                key={index} 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-16 w-auto object-contain"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/150x60/3B82F6/FFFFFF?text=${encodeURIComponent(client.name.split(' ')[0])}`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-blue-600">LABOURBridge India</span>
            </h3>
            <p className="text-xl text-gray-600">Our unique selling propositions that set us apart</p>
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
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <motion.div 
                      className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl inline-block mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
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