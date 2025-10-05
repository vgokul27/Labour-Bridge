import Navbar from "./components/NavbarCSS";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import ProjectsSection from "./components/ProjectsSection";
import MilestonesSection from "./components/MilestonesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* About Us Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Clients & Why Choose Us Section */}
      <ClientsSection />

      {/* Key Projects Section */}
      <ProjectsSection />

      {/* Milestones Section */}
      <MilestonesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
