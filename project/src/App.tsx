import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Packages from './components/Packages';
import VehicleFleet from './components/VehicleFleet';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "RoamRiders - Premium Travel Experiences";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <VehicleFleet />
      <Packages />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;