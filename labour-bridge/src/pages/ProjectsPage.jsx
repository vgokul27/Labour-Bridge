import React from "react";
import Navbar from "../components/NavbarCSS";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Projects Page Content */}
      <div className="pt-16">
        {" "}
        {/* Account for fixed navbar */}
        <ProjectsSection />
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
