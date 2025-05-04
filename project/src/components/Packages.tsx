import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, ChevronRight, Car, ArrowLeft } from 'lucide-react';

// Small vehicles for one-day city tours
const oneDayPackages = [
  {
    id: 1,
    vehicleName: 'Swift',
    price: '₹2,399',
    image: "/images/swift-dzire/exterior1.png",

    capacity: '4 Passengers'
  },
  {
    id: 2,
    vehicleName: 'WagonR',
    price: '₹2,299',
    image: "/images/wagonr/exterior1.png",

    capacity: '4 Passengers'
  },
  {
    id: 3,
    vehicleName: 'Tata Punch',
    price: '₹2,399',
    image: "/images/tata-punch/exterior1.png",
    capacity: '5 Passengers'
  },
  {
    id: 4,
    vehicleName: 'Vitara Brezza',
    price: '₹2,499',
    image: "/images/Vitara Brezza/exterior1.png",

    capacity: '5 Passengers'
  }
];

// All vehicles suitable for one-day packages
const allOneDayPackages = [
  ...oneDayPackages,
  
  {
    id: 6,
    vehicleName: 'INNOVA',
    price: '₹3,499',
    image: "/images/INNOVA/exterior1.png",
    capacity: '7 Passengers'
  },
  {
    id: 7,
    vehicleName: 'Innova Crysta',
    price: '₹3,999/day',
    image: "/images/innovacrysta/exterior1.png",
    capacity:'7 passengers'

  }
];

// Vehicles suitable for long rides
const longRideVehicles = [
  {
    id: 1,
    vehicleName: 'Innova Crysta',
    price: '₹3,999/day',
    image: "/images/innovacrysta/exterior1.png",
    capacity: '7 Passengers',
    features: ['Premium Comfort', 'Extra Luggage Space', 'Perfect for Long Journeys']
  },
  {
    id: 2,
    vehicleName: 'INNOVA',
    price: '₹4,499/day',
    image: "/images/INNOVA/exterior1.png",

    capacity: '7 Passengers',
    features: ['Luxury Interior', 'Entertainment System', 'Extra Comfort']
  },
  {
    id: 3,
    vehicleName: 'Tempo Traveller',
    price: '₹4,999/day',
    image:       '/images/tempo/exterior1.png',
    capacity: '12 Passengers',
    features: ['Spacious Interior', 'Push-back Seats', 'Perfect for Groups']
  },
  {
    id: 4,
    vehicleName: 'Vitara Brezza',
    price: '₹5,999/day',
    image: "/images/Vitara Brezza/exterior1.png",
    capacity: '5 passengers',
    features: ['Large Groups', 'Air Conditioning', 'Entertainment System']
  }
];

// Long ride package destinations
const longRidePackages = [
  {
    id: 1,
    title: 'Hyderabad to Goa Beach Getaway',
    image: '/images/long/hyd goa.jpeg',

    duration: '5 Days',
    groupSize: '1-12 People',
    location: 'Hyderabad to Goa',
    price: '₹59,999',
    description: 'Comfortable journey from Hyderabad to Goa with stays at premium beach resorts and sightseeing.',
    highlights: ['Calangute Beach', 'Baga Beach', 'Fort Aguada', 'Dudhsagar Falls', 'Spice Plantations']
  },
  {
    id: 2,
    title: 'South India Temple Tour',
    image: '/images/long/south.jpeg',

    duration: '7 Days',
    groupSize: '4-people',
    location: 'Hyderabad to Tamil Nadu & Kerala',
    price: '₹44499',
    description: 'Spiritual journey visiting the most sacred temples of South India starting from Hyderabad.',
    highlights: ['Tirupati', 'Madurai Meenakshi Temple', 'Rameshwaram', 'Kanyakumari', 'Padmanabhaswamy Temple']
  },
  {
    id: 3,
    title: 'Karnataka Heritage Tour',
    image: '/images/long/heritage.jpeg',

    duration: '6 Days',
    groupSize: '1-16 People',
    location: 'Hyderabad to Karnataka',
    price: '₹64,999',
    description: 'Explore the rich heritage and architecture of Karnataka starting from Hyderabad.',
    highlights: ['Hampi', 'Mysore Palace', 'Coorg', 'Bangalore', 'Belur & Halebid']
  },
  {
    id: 4,
    title: 'Maharashtra Discovery',
    image: '/images/long/maharastra.webp',

    duration: '8 Days',
    groupSize: '1-09 People',
    location: 'Hyderabad to Maharashtra',
    price: '₹45,999',
    description: 'Comprehensive tour of Maharashtra\'s best attractions and hidden gems.',
    highlights: ['Mumbai', 'Ajanta Caves', 'Ellora Caves', 'Shirdi', 'Mahabaleshwar']
  }
];

const Packages: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'oneday' | 'longride'>('oneday');
  const [showAllPackages, setShowAllPackages] = useState(false);
  const [showPackageTypes, setShowPackageTypes] = useState(false);
  const [selectedLongRidePackage, setSelectedLongRidePackage] = useState<typeof longRidePackages[0] | null>(null);

  const handleBooking = (pkg: any, type: 'oneday' | 'longride') => {
    const message = type === 'oneday' 
      ? `Hello RoamRiders! I'm interested in booking the One Day Package (8 hours, 80 km) with ${pkg.vehicleName} (${pkg.capacity}) at ${pkg.price}. Please provide more details.`
      : `Hello RoamRiders! I'm interested in booking the "${selectedLongRidePackage?.title}" package with ${pkg.vehicleName} (${pkg.capacity}). Package duration: ${selectedLongRidePackage?.duration}, Price: ${selectedLongRidePackage?.price}. Please provide more details.`;
    
    const whatsappUrl = `https://wa.me/919963696214?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleViewAllClick = () => {
    setShowPackageTypes(true);
    setShowAllPackages(false);
  };

  const handlePackageTypeSelect = (type: 'oneday' | 'longride') => {
    setActiveTab(type);
    setShowPackageTypes(false);
    setShowAllPackages(true);
  };

  const renderOneDayPackages = (packages: typeof allOneDayPackages) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {packages.map((pkg) => (
        <div 
          key={pkg.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
        >
          <div className="relative h-48">
            <img 
              src={pkg.image}
              alt={pkg.vehicleName}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
              {pkg.price}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{pkg.vehicleName}</h3>
            <div className="flex items-center text-gray-600 mb-4">
              <Users className="h-4 w-4 mr-2" />
              <span>{pkg.capacity}</span>
            </div>
            <div className="space-y-2 mb-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-600" />
                <span>8 Hours</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                <span>80 Kilometers</span>
              </div>
            </div>
            <button
              onClick={() => handleBooking(pkg, 'oneday')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-300"
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLongRidePackages = () => (
    <div className="space-y-12">
      {selectedLongRidePackage ? (
        <>
          <button
            onClick={() => setSelectedLongRidePackage(null)}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Packages
          </button>
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{selectedLongRidePackage.title}</h3>
            <p className="text-gray-700 mb-4">{selectedLongRidePackage.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                <span>{selectedLongRidePackage.duration}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span>{selectedLongRidePackage.groupSize}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                <span>{selectedLongRidePackage.location}</span>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Package Highlights:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {selectedLongRidePackage.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="w-4 h-4 mr-2 text-blue-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <h4 className="text-xl font-bold text-blue-900 mb-6">Select Your Vehicle</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {longRideVehicles.map((vehicle) => (
              <div 
                key={vehicle.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <img 
                    src={vehicle.image}
                    alt={vehicle.vehicleName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                    {vehicle.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{vehicle.vehicleName}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <ul className="space-y-2 mb-4 text-gray-600 text-sm">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <ChevronRight className="h-4 w-4 mr-2 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleBooking(vehicle, 'longride')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {longRidePackages.map((pkg) => (
            <div 
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48">
                <img 
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                  {pkg.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-2">{pkg.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedLongRidePackage(pkg)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors duration-300"
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {showPackageTypes 
              ? 'Select Package Type'
              : showAllPackages 
                ? (activeTab === 'oneday' ? 'All One Day Packages' : 'All Long Ride Packages')
                : 'Our Travel Packages'
            }
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {showPackageTypes
              ? 'Choose the type of package you want to explore'
              : showAllPackages
                ? (activeTab === 'oneday' 
                    ? 'All available vehicles for 8-hour, 80-kilometer journeys'
                    : 'Complete list of our curated long-distance travel packages')
                : 'Choose from our carefully curated packages designed for your comfort and convenience'
            }
          </p>
        </div>

        {(showAllPackages || showPackageTypes) && !selectedLongRidePackage && (
          <button
            onClick={() => {
              setShowAllPackages(false);
              setShowPackageTypes(false);
            }}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Package Selection
          </button>
        )}

        {showPackageTypes ? (
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => handlePackageTypeSelect('oneday')}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-blue-900">One Day Packages</h3>
                </div>
                <p className="text-gray-600 mb-2">8 hours, 80 kilometers limit</p>
                <p className="text-gray-600">Perfect for city tours and short trips</p>
              </button>

              <button
                onClick={() => handlePackageTypeSelect('longride')}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-left"
              >
                <div className="flex items-center mb-4">
                  <Car className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-blue-900">Long Ride Packages</h3>
                </div>
                <p className="text-gray-600 mb-2">Multi-day tours across India</p>
                <p className="text-gray-600">Ideal for extended vacations and road trips</p>
              </button>
            </div>
          </div>
        ) : (
          <>
            {!showAllPackages && !selectedLongRidePackage && (
              <div className="flex justify-center space-x-4 mb-12">
                <button
                  onClick={() => setActiveTab('oneday')}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'oneday'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Clock className="w-5 h-5 mr-2" />
                  One Day Packages
                  <span className="ml-2 text-sm opacity-75">(80 km, 8 hours)</span>
                </button>
                <button
                  onClick={() => setActiveTab('longride')}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === 'longride'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Car className="w-5 h-5 mr-2" />
                  Long Ride Packages
                </button>
              </div>
            )}

            {activeTab === 'oneday' && (
              showAllPackages ? renderOneDayPackages(allOneDayPackages) : renderOneDayPackages(oneDayPackages)
            )}

            {activeTab === 'longride' && renderLongRidePackages()}

            {!showAllPackages && !selectedLongRidePackage && (
              <div className="text-center mt-12">
                <button 
                  onClick={handleViewAllClick}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-lg font-medium"
                >
                  View all packages <ChevronRight size={20} className="ml-1" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Packages;