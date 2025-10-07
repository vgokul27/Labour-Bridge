import React from 'react';
import Navbar from '../components/NavbarCSS';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* About Us Page Content */}
      <div className="pt-16"> {/* Account for fixed navbar */}
        <AboutSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;