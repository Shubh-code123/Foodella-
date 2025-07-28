import React from 'react';
import { FaHeart, FaHandsHelping, FaTags, FaHeadset, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeroSection5 = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://ivi-air.com/wp-content/uploads/2018/08/potatoes-on-conveyor-belt.jpg"
          alt="Potatoes Background"
          className="w-full h-full object-cover brightness-50 opacity-50"
        />
      </div>

      {/* Main Content Area (Why Potatoes? text & image) */}
      <div className="relative z-10 container mx-auto
                  px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 // Responsive horizontal padding
                  py-12 md:py-16 lg:py-20 // Responsive vertical padding
                  flex flex-col lg:flex-row items-center gap-8 lg:gap-16"> {/* Responsive gap */}
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-right"> {/* Added text alignment for mobile */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6 leading-tight"> {/* Responsive text size */}
            Why Potatoes?
          </h2>
          <p className="text-base sm:text-lg leading-relaxed font-semibold mb-4"> {/* Responsive text size */}
            Foodella qualifies all global standards like BRCGS and CODEX. Farmers harvest these potatoes under favorable conditions,
            and these rich quality are stored properly at our facility where they are used for our products.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-semibold mb-6"> {/* Responsive text size */}
            This ensures we provide the best quality of products to our customers.
            Foodella is strategically located in Madhya Pradesh, connected to all modes of transport like road, rail, air, and water.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            <FaHandsHelping className="mr-2" />
            Contact Us
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0" data-aos="fade-left"> {/* Added top margin for mobile */}
          <img
            src="https://foodellafoods.com/wp-content/uploads/2023/08/reviews-removebg-preview1.png"
            alt="Happy Potato Chips"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full drop-shadow-xl animate-float" // Responsive max-width
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-yellow-500 py-8 md:py-12 relative z-20"> {/* Responsive vertical padding, removed negative margin */}
        <div className="container mx-auto
                    px-4 sm:px-6 md:px-8 // Responsive horizontal padding for features
                    grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-black font-bold"> {/* Responsive gap for grid */}
          <div data-aos="zoom-in">
            <FaHeart className="mx-auto text-4xl sm:text-5xl font-bold mb-2 text-red-600" /> {/* Responsive icon size */}
            Trusted & Loved
          </div>
          <div data-aos="zoom-in" data-aos-delay="100">
            <FaCertificate className="mx-auto text-4xl sm:text-5xl font-bold mb-2 text-yellow-700" /> {/* Responsive icon size */}
            Original Products
          </div>
          <div data-aos="zoom-in" data-aos-delay="200">
            <FaTags className="mx-auto text-4xl sm:text-5xl font-bold mb-2 text-pink-600" /> {/* Responsive icon size */}
            Wide Range
          </div>
          <div data-aos="zoom-in" data-aos-delay="300">
            <FaHeadset className="mx-auto text-4xl sm:text-5xl font-bold mb-2 text-blue-600" /> {/* Responsive icon size */}
            Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection5;