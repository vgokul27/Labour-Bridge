import React from "react";
import Navbar from "../components/NavbarCSS";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Contact Page Content */}
      <div className="pt-16">
        {" "}
        {/* Account for fixed navbar */}
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
