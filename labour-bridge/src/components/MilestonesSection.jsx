import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Trophy, Users, Target } from 'lucide-react';

const MilestonesSection = () => {
  const milestones = [
    {
      year: '2023',
      quarter: 'Q1',
      title: 'Company Foundation',
      description: 'LABOURBridge India was established with a vision to revolutionize manpower outsourcing in India.',
      icon: Trophy,
      stats: 'Founded'
    },
    {
      year: '2023',
      quarter: 'Q2',
      title: 'First Major Client Win',
      description: 'Successfully partnered with TATA Projects for a large-scale infrastructure project.',
      icon: Target,
      stats: '1st Client'
    },
    {
      year: '2023',
      quarter: 'Q4',
      title: '1,000+ Active Workers',
      description: 'Reached the milestone of managing over 1,000 active workers across multiple projects.',
      icon: Users,
      stats: '1,000+ Workers'
    },
    {
      year: '2024',
      quarter: 'Q2',
      title: 'Pan-India Expansion',
      description: 'Opened regional offices in Hyderabad, Mumbai, Kerala, Gujarat, and Kolkata.',
      icon: Calendar,
      stats: '6 Cities'
    },
    {
      year: '2024',
      quarter: 'Q4',
      title: '25,000+ Workforce',
      description: 'Successfully scaled operations to manage over 25,000 active workers nationwide.',
      icon: Users,
      stats: '25,000+ Workers'
    },
    {
      year: '2025',
      quarter: 'Q1',
      title: '35,000+ Active Workers',
      description: 'Achieved unprecedented growth with over 35,000 active workers and 50+ satisfied clients.',
      icon: Trophy,
      stats: '35,000+ Workers'
    }
  ];

  const achievements = [
    { number: '35,000+', label: 'Active Workers', color: 'blue' },
    { number: '500+', label: 'Projects Completed', color: 'green' },
    { number: '50+', label: 'Trusted Clients', color: 'yellow' },
    { number: '6', label: 'Cities Presence', color: 'purple' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      yellow: 'from-yellow-500 to-yellow-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="milestones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-blue-600">Journey</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From our inception in 2023 to becoming India's trusted manpower partner, 
            here are the key milestones that define our growth story.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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
              <div className={`bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-2xl p-6 text-white mb-4`}>
                <div className="text-3xl md:text-4xl font-bold">{achievement.number}</div>
              </div>
              <div className="text-gray-900 font-semibold">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${isEven ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-3 rounded-xl">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-blue-600">{milestone.year} {milestone.quarter}</div>
                          <div className="text-lg font-bold text-gray-900">{milestone.title}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      
                      <div className="bg-blue-50 rounded-lg p-3 inline-block">
                        <span className="text-blue-800 font-semibold">{milestone.stats}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Looking Ahead</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              As we continue to grow, our commitment remains unchanged: to be India's most trusted 
              manpower partner, driving infrastructure development and creating opportunities for millions of workers.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold">2025 Goal</div>
                <div className="text-blue-200">50,000+ Workers</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold">2026 Vision</div>
                <div className="text-blue-200">10+ Cities</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-2xl font-bold">2027 Mission</div>
                <div className="text-blue-200">100+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;