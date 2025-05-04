import React from 'react';
import { PhoneCall, Car } from 'lucide-react';

const CallToAction: React.FC = () => {
  const scrollToVehicles = () => {
    const vehiclesSection = document.getElementById('vehicles');
    if (vehiclesSection) {
      vehiclesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-blue-100 text-lg max-w-2xl">
              Choose from our fleet of well-maintained vehicles, each with an experienced driver for your next adventure.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToVehicles}
              className="bg-white text-blue-900 hover:bg-blue-50 font-medium px-8 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <Car size={18} className="mr-2" />
              View Our Vehicles
            </button>
            <a 
              href="tel:+919963696214"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
            >
              <PhoneCall size={18} className="mr-2" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;