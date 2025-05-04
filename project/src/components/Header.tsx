import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, PhoneCall, Mail, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              <span className="text-blue-600">Roam</span>Riders
            </h1>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <div className={`flex items-center space-x-2 ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              <Clock size={18} className="text-blue-600" />
              <span className="text-sm">24/7 Service</span>
            </div>
            <div className={`flex items-center space-x-2 ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              <MapPin size={18} className="text-blue-600" />
              <span className="text-sm">Hyderabad, India</span>
            </div>
            <a 
              href="tel:+919876543210"
              className={`flex items-center space-x-2 ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              <PhoneCall size={18} className="text-blue-600" />
              <span className="text-sm">+91 9963696214</span>
            </a>
            <a 
              href="mailto:info@roamriders.com"
              className={`flex items-center space-x-2 ${isScrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600 transition-colors`}
            >
              <Mail size={18} className="text-blue-600" />
              <span className="text-sm">roamriders.in</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {[
                { id: '', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'vehicles', label: 'Vehicles' },
                { id: 'packages', label: 'Packages' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors duration-300 ${
                      isScrolled ? 'text-blue-900 hover:text-blue-600' : 'text-white hover:text-blue-200'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollToSection('vehicles')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-blue-600" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {[
                { id: '', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'vehicles', label: 'Vehicles' },
                { id: 'packages', label: 'Packages' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="block text-blue-900 font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button 
                  onClick={() => scrollToSection('vehicles')}
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-center"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;