import Navbar from './components/NavbarCSS';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ClientsSection from './components/ClientsSection';
import MilestonesSection from './components/MilestonesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

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
            
      {/* Clients & Why Choose Us Section */}
      <ClientsSection />
      
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