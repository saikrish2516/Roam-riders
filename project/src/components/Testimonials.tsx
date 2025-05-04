import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Priya',
    avatar: '/images/customer/cus3.jpg',
    rating: 5,
    text: 'Our family trip from Hyderabad to Kerala was absolutely amazing! The driver was professional and the vehicle was very comfortable. RoamRiders made our vacation perfect.',
    destination: 'Hyderabad to Kerala'
  },
  {
    id: 2,
    name: 'Rahul',
    avatar: '/images/customer/cus6.jpg',
    rating: 5,
    text: 'The service was excellent from booking to the end of our trip. We felt safe throughout our journey to Goa and the driver knew all the best spots to stop along the way.',
    destination: 'Hyderabad to Goa'
  },
  {
    id: 3,
    name: 'Tanmayi',
    avatar: '/images/customer/cus5.jpg',
    rating:4,
    text: 'Professional service with great attention to detail. Our corporate team enjoyed the comfortable ride to Bangalore for our annual retreat. Will definitely book again!',
    destination: 'Hyderabad to Bangalore'
  },

  {
    id: 4,
    name: 'Pavan Sharma',
    avatar: '/images/customer/cus1.jpg',
    rating:5,
    text: 'The journey from Hyderabad to Vijayawada was super comfortable! The car was clean and the driver was punctual and courteous. Highly recommend their service!',
    destination: 'Hyderabad to Vijayawada'
  }







];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg">
            Hear from travelers who have experienced our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg p-8 text-gray-800 shadow-lg">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-blue-600 text-sm">{testimonial.destination}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          fill={i < testimonial.rating ? "#FBBF24" : "none"} 
                          stroke={i < testimonial.rating ? "#FBBF24" : "#CBD5E1"} 
                          className="w-5 h-5" 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white text-blue-900 rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white text-blue-900 rounded-full p-2 shadow-lg hover:bg-blue-50 transition-colors"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-white w-8' : 'bg-blue-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;