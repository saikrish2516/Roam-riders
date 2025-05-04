import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const BookingSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: '1',
    vehicleType: 'sedan'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Booking Request* 🚗\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Pickup:* ${formData.pickupLocation}\n` +
      `*Destination:* ${formData.destination}\n` +
      `*Departure:* ${formData.departureDate}\n` +
      `*Return:* ${formData.returnDate || 'N/A'}\n` +
      `*Passengers:* ${formData.passengers}\n` +
      `*Vehicle:* ${formData.vehicleType}`;

    const whatsappNumber = '919963696214'; // without '+' sign
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-blue-50 rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left side: Image and overlay text */}
            <div className="relative">
              <div 
                className="h-64 md:h-full w-full bg-cover bg-center" 
                style={{ 
                  backgroundImage: "url('/images/bg1/bg1.jpg')" // Local image path
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/50 flex flex-col justify-center p-8">
                  <h2 className="text-white text-3xl font-bold mb-4">Book Your Journey</h2>
                  <p className="text-blue-100 mb-6">
                    Ready to explore? Fill out the form and our team will help you plan the perfect trip.
                  </p>
                  <ul className="space-y-3 text-blue-50">
                    <li className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-blue-300" />
                      <span>Pickup from anywhere in Hyderabad</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="h-5 w-5 mr-3 text-blue-300" />
                      <span>Vehicles for all group sizes</span>
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-blue-300" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="h-5 w-5 mr-3 text-blue-300" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Right side: Booking form */}
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="pickupLocation" className="block text-gray-700 text-sm font-medium mb-1">Pickup Location (Hyderabad)</label>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="destination" className="block text-gray-700 text-sm font-medium mb-1">Destination</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="departureDate" className="block text-gray-700 text-sm font-medium mb-1">Departure Date</label>
                    <input
                      type="date"
                      id="departureDate"
                      name="departureDate"
                      value={formData.departureDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="returnDate" className="block text-gray-700 text-sm font-medium mb-1">Return Date (Optional)</label>
                    <input
                      type="date"
                      id="returnDate"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label htmlFor="passengers" className="block text-gray-700 text-sm font-medium mb-1">Number of Passengers</label>
                    <select
                      id="passengers"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                      <option value="13+">13+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="vehicleType" className="block text-gray-700 text-sm font-medium mb-1">Vehicle Type</label>
                    <select
                      id="vehicleType"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="sedan">Sedan (up to 3 passengers)</option>
                      <option value="suv">SUV (up to 6 passengers)</option>
                      <option value="tempo">Tempo Traveller (up to 12 passengers)</option>
                      <option value="bus">Mini Bus (13+ passengers)</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300"
                >
                  Request Booking via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
