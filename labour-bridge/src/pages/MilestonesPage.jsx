import React from "react";
import Navbar from "../components/NavbarCSS";
import MilestonesSection from "../components/MilestonesSection";
import Footer from "../components/Footer";

const MilestonesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Milestones Page Content */}
      <div className="pt-16">
        {" "}
        {/* Account for fixed navbar */}
        <MilestonesSection />
      </div>

      <Footer />
    </div>
  );
};

export default MilestonesPage;
