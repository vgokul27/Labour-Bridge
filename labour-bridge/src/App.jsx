import Navbar from "./components/NavbarCSS";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ClientsSection from "./components/ClientsSection";
import OngoingProjectsSection from "./components/OngoingProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Clients & Why Choose Us Section */}
      <div id="clients">
        <ClientsSection />
      </div>

      {/* Ongoing Projects Section */}
      <div id="ongoing-projects">
        <OngoingProjectsSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
