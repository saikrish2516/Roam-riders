import React from 'react';
import { Shield, Award, ThumbsUp, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Your Trusted Travel Partner Since 2015
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            At RoamRiders, we're more than just a vehicle rental service - we're your partners in creating memorable journeys across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Experience the RoamRiders Difference
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">Safety First Approach</h4>
                  <p className="text-gray-600">
                    Every journey is backed by comprehensive insurance, well-maintained vehicles, and professional drivers with extensive safety training.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">Premium Service Quality</h4>
                  <p className="text-gray-600">
                    We maintain the highest standards in vehicle maintenance, customer service, and travel planning to ensure your complete satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <ThumbsUp className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">Transparent Pricing</h4>
                  <p className="text-gray-600">
                    No hidden charges or surprise fees. We believe in complete transparency in our pricing structure.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
                  <p className="text-gray-600">
                    Our team of experienced drivers and travel coordinators ensure every aspect of your journey is perfectly planned and executed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/images/external/person.jpeg"
              alt="Team meeting" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="/images/external/carss.jpeg"
              alt="Vehicle maintenance" 
              className="rounded-lg shadow-lg mt-8"
            />
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Commitment to Excellence</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">8+</p>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">10,000+</p>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-700">Destinations Covered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;