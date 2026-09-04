import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-500">
      {/* Navbar */}
      <Navbar />      
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Services */}
        <Services />
        {/* About */}
        <About />
        {/*/Resevations */}
        <Reservations />
      </main>
      {/* Footer */}
      <Footer />
      {/* Mobile Nav Overlay */}
    </div>
  );
}