import React, { useState } from 'react';
import { Users, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Swift',
    images: [
      '/images/swift-dzire/exterior1.png',
      '/images/swift-dzire/exterior2.png',
      '/images/swift-dzire/interior1.jpg',
      '/images/swift-dzire/interior2.jpg',


    ],
    capacity: '4 Passengers',
    price: '₹12/km',
    features: [
      'Professional Experienced Driver',
      'Air Conditioning',
      'Bluetooth Audio',
      'Comfortable Seating',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'City Tours, Small Families, Airport Transfers',
    description: 'Efficient and comfortable hatchback perfect for city travel and small groups.'
  },
  {
    id: 2,
    name: 'Vitara Brezza',
    images: [
'/images/Vitara Brezza/exterior1.png',
      '/images/Vitara Brezza/exterior2.png',
      '/images/Vitara Brezza/interior1.webp',
      '/images/Vitara Brezza/interior2.webp',

    ],
    capacity: '4Passengers',
    price: '₹13/km',
    features: [
      'Professional Experienced Driver',
      'Powerful AC',
      'Spacious Boot',
      'High Ground Clearance',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'Family Trips, Weekend Getaways',
    description: 'Compact SUV offering perfect blend of comfort and performance.'
  },
  {
    id: 3,
    name: 'Tata Punch',
    images: [
      '/images/tata-punch/exterior1.png',
  '/images/tata-punch/exterior2.png',
  '/images/tata-punch/interior1.jpeg',
  '/images/tata-punch/interior2.jpg'
    ],
    capacity: '4 Passengers',
    price: '₹12/km',
    features: [
      'Professional Experienced Driver',
      'Premium Interiors',
      'Cruise Control',
      'High Safety Rating',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'City Travel, Weekend Trips',
    description: 'Modern micro-SUV with excellent features and comfort.'
  },
  {
    id: 4,
    name: 'Maruti WagonR',
    images: [
  '/images/wagonr/exterior1.png',
  '/images/wagonr/exterior2.png',
  '/images/wagonr/interior1.jpeg',
  '/images/wagonr/interior2.jpg',
    ],
    capacity: '4 Passengers',
    price: '₹11/km',
    features: [
      'Professional Experienced Driver',
      'Air Conditioning',
      'Spacious Interior',
      'Good Boot Space',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'City Travel, Small Families',
    description: 'Practical and spacious hatchback for comfortable city travel.'
  },
  {
    id: 5,
    name: 'Swift-vdi',
    images: [
     '/images/swift-vdi/exterior 1.png',
      '/images/swift-vdi/exterior 2.png',
       '/images/swift-vdi/interior1.jpg',
        '/images/swift-vdi/interior2.jpg',
    ],
    capacity: '4 Passengers',
    price: '₹13/km',
    features: [
      'Professional Experienced Driver',
      'Premium Air Conditioning',
      'Diesel Efficiency',
      'Comfortable Seating',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'Long Trips, City Travel',
    description: 'Fuel-efficient diesel variant perfect for long journeys.'
  },
  {
    id: 6,
    name: 'Innova',
    images: [
       '/images/INNOVA/exterior1.png',
       '/images/INNOVA/exterior2.png',
       '/images/INNOVA/interior 1.png',
       '/images/INNOVA/interior2.jpg', 
    ],
    capacity: '7 Passengers',
    price: '₹17/km',
    features: [
      'Professional Experienced Driver',
      'Powerful AC',
      'Captain Seats',
      'Ample Luggage Space',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'Family Trips, Long Journeys',
    description: 'Spacious and comfortable MPV for family travel.'
  },
  {
    id: 7,
    name: 'Innova Crysta',
    images: [
      '/images/innovacrysta/exterior1.png',
      '/images/innovacrysta/exterior2.png',
      '/images/innovacrysta/interior1.jpeg',
      '/images/innovacrysta/interior2.jpeg', 
    ],
    capacity: '7 Passengers',
    price: '₹20/km',
    features: [
      'Professional Experienced Driver',
      'Premium Interiors',
      'Leather Seats',
      'Entertainment System',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'Luxury Travel, Family Trips',
    description: 'Premium MPV offering luxurious travel experience.'
  },
  
  
  {
    id: 9,
    name: 'Chevrolet Tavera',
    images: [
      '/images/Chevrolet Tavera/exterior1.png',
      '/images/Chevrolet Tavera/exterior2.png',
      '/images/Chevrolet Tavera/interior1.jpeg',
      '/images/Chevrolet Tavera/interior2.jpeg', 
    ],
    capacity: '10Passengers',
    price: '₹16/km',
    features: [
      'Professional Experienced Driver',
      'Air Conditioning',
      'Spacious Interior',
      'Large Boot Space',
      'All-India Permits',
      '24/7 Customer Support'
    ],
    ideal: 'Group Travel, Long Journeys',
    description: 'Reliable MUV for comfortable group travel.'
  },
  {
    id: 10,
    name: 'Tempo Traveller',
    images: [
      '/images/tempo/exterior1.png',
      '/images/tempo/exterior2.jpeg',
      '/images/tempo/interior1.jpeg',
      '/images/tempo/interior2.jpeg', 
    ],
    capacity: '16 Passengers',
    price: '₹28/km',
    features: [
      'Professional Experienced Driver',
      'Powerful AC',
      'Push-back Seats',
      'LCD Screen',
      'Border Tax excludes',
      '24/7 Customer Support'
    ],
    ideal: 'Group Tours, Corporate Events',
    description: 'Spacious tempo traveller for comfortable group travel.'
  },

];

const VehicleFleet: React.FC = () => {
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<number, number>>({});

  const handleBooking = (vehicle: typeof vehicles[0]) => {
    const message = `Hello RoamRiders! I'm interested in booking the ${vehicle.name} (${vehicle.capacity}) at ${vehicle.price} for my journey. Looking for a vehicle with an experienced driver. Please provide details about availability and final pricing.`;
    const whatsappUrl = `https://wa.me/919963696214?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const nextImage = (vehicleId: number) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [vehicleId]: ((prev[vehicleId] || 0) + 1) % vehicles.find(v => v.id === vehicleId)!.images.length
    }));
  };

  const prevImage = (vehicleId: number) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [vehicleId]: ((prev[vehicleId] || 0) - 1 + vehicles.find(v => v.id === vehicleId)!.images.length) % vehicles.find(v => v.id === vehicleId)!.images.length
    }));
  };

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Premium Vehicle Fleet</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Choose from our range of well-maintained vehicles, each coming with an experienced driver for a safe and comfortable journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vehicle.images[activeImageIndexes[vehicle.id] || 0]} 
                  alt={`${vehicle.name} - View ${activeImageIndexes[vehicle.id] || 0 + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full font-semibold">
                  {vehicle.price}
                </div>
                <button 
                  onClick={() => prevImage(vehicle.id)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => nextImage(vehicle.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {vehicle.images.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === (activeImageIndexes[vehicle.id] || 0) ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{vehicle.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    <span>{vehicle.capacity}</span>
                  </div>
                  <p className="text-gray-600">{vehicle.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Vehicle Features:</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {vehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                  <p className="text-gray-600">{vehicle.ideal}</p>
                </div>

                <button 
                  onClick={() => handleBooking(vehicle)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Book Vehicle with Driver
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose Our Vehicles?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Experienced Drivers</h4>
              <p className="text-gray-600">All our drivers are professionally trained with years of experience</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-800 mb-2">All-India Permits</h4>
              <p className="text-gray-600">Travel anywhere in India with proper documentation and permits</p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-blue-800 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Round-the-clock customer support for a worry-free journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFleet;