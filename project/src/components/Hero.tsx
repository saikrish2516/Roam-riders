import { useEffect, useState } from 'react';
import { ChevronRight, Car, Plane, MapPin, Clock, Route, Globe, X } from 'lucide-react';

const slideImages = [
  '/images/bg/bg1.jpg',
  '/images/bg/bg2.jpg',
  '/images/bg/bg3.jpg',
  '/images/bg/bg4.jpg',
];

const services = [
  {
    icon: <Car className="w-8 h-8 text-blue-600" />,
    title: 'City Trip',
    description: 'Explore the city with our comfortable vehicles',
    redirectTo: 'vehicles'
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600" />,
    title: 'Airport Pickup',
    description: 'Reliable airport pickup service',
    redirectTo: 'vehicles'
  },
  {
    icon: <Plane className="w-8 h-8 text-blue-600 rotate-180" />,
    title: 'Airport Drop',
    description: 'Punctual airport drop service',
    redirectTo: 'vehicles'
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-600" />,
    title: 'One Day Packages',
    description: '8 hours, 80km limit packages',
    redirectTo: 'packages'
  },
  {
    icon: <Route className="w-8 h-8 text-blue-600" />,
    title: 'Long Ride Packages',
    description: 'Multi-day tours across India',
    redirectTo: 'packages'
  },
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: 'Pan India Service',
    description: 'We serve all over India',
    redirectTo: 'vehicles'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setShowServices(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slide Images */}
      {slideImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/30 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Explore India <span className="text-blue-400">Your Way</span>
              </h2>
              <p className="text-gray-100 text-xl md:text-2xl mb-6 leading-relaxed">
                Premium travel experiences with safety and comfort at reasonable prices
              </p>
              <p className="text-gray-200 text-lg mb-8">
                We pick you up in Hyderabad and take you anywhere in India
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => scrollToSection('vehicles')}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Book a Vehicle <ChevronRight size={20} className="ml-2" />
                </button>
                <button 
                  onClick={() => setShowServices(!showServices)}
                  className="bg-white hover:bg-gray-100 text-blue-900 text-lg font-medium px-8 py-3 rounded-md transition-colors duration-300 inline-flex items-center justify-center"
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Modal */}
      {showServices && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900">Our Services</h3>
                <button 
                  onClick={() => setShowServices(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(service.redirectTo)}
                    className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-left transition-colors"
                  >
                    <div className="mb-4">{service.icon}</div>
                    <h4 className="text-lg font-semibold text-blue-900 mb-2">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-blue-600 w-8' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;