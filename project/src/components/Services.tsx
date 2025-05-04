import React from 'react';
import { Shield, MapPin, ThumbsUp, DollarSign, Users, Award } from 'lucide-react';

const serviceItems = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: 'Safe Travel',
    description: 'Safety is our priority with well-maintained vehicles and professional drivers'
  },
  {
    icon: <MapPin className="h-10 w-10 text-blue-600" />,
    title: 'Pan-India Travel',
    description: 'We pick you up in Hyderabad and take you anywhere across India'
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-blue-600" />,
    title: 'Comfort Guaranteed',
    description: 'Enjoy comfortable rides with premium vehicles and amenities'
  },
  {
    icon: <DollarSign className="h-10 w-10 text-blue-600" />,
    title: 'Reasonable Pricing',
    description: 'Transparent pricing with no hidden costs for a worry-free experience'
  },
  {
    icon: <Users className="h-10 w-10 text-blue-600" />,
    title: 'Personalized Service',
    description: 'Customized travel plans tailored to your specific needs and preferences'
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: 'Experienced Team',
    description: 'Our team has years of experience in providing excellent travel services'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose RoamRiders</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We provide exceptional travel experiences with a focus on safety, comfort, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;