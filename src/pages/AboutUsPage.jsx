import React, { useEffect, useRef } from 'react';
// Link ko import karein
import { Link } from 'react-router-dom';
import { FaEye, FaBullseye, FaLeaf, FaLightbulb, FaHeart, FaAward, FaHandsHelping } from 'react-icons/fa';

const AboutUsPage = () => {
  const sectionRefs = useRef([]); // For scroll animations

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target); // Unobserve once animated
        }
      });
    }, observerOptions);

    // Give a slight delay before observing to allow initial render
    const timeoutId = setTimeout(() => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="font-poppins bg-[#FFF8E1] text-gray-800 leading-relaxed overflow-hidden">

      {/* Hero Section - About Us */}
      <section className="relative h-[80vh] bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-20 mt-10 flex flex-col items-center justify-center relative z-10 text-white text-center gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
            Our Story: The Heart of Foodella
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mb-8 opacity-90 animate-fade-in-up animation-delay-500">
            Bringing authentic flavors and wholesome goodness from our kitchen to your table.
          </p>
          <img
            src="https://foodellafoods.com/wp-content/uploads/2023/08/about-2.jpg" // Replace with a team photo or a symbolic image
            alt="Foodella Team"
            className=" h-60 rounded-xl shadow-2xl   hover:scale-100 transition-transform duration-500 animate-scale-in-delay"
          />
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative bg-red-700 text-white py-24 pb-32 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-[#FFF8E1] transform -skew-y-3 origin-top-left -mt-12 z-0"></div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="text-5xl font-extrabold mb-16 drop-shadow-md animate-fade-in-up">
            Our Purpose & Path
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaBullseye className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90">
                To deliver consistently high-quality, delicious, and convenient frozen food products that bring joy and ease to every meal, while promoting healthy and sustainable food practices.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaEye className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg opacity-90">
                To be the most trusted and preferred frozen food brand, enriching lives through innovative flavors, superior quality, and a commitment to our communities and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="bg-[#FFF8E1] py-24 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-red-600 mb-16">
            Our Journey: From Concept to Kitchen
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2 text-left">
              <p className="text-lg leading-relaxed mb-6">
                Foodella began with a simple idea: to make delicious, wholesome food accessible to every home, without compromising on taste or quality. What started in a small kitchen, driven by a passion for good food, quickly grew into a mission to serve families across the region.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Over the years, we've invested in state-of-the-art facilities and partnered with local farmers to source the freshest ingredients. Every milestone, from our first product launch to expanding our distribution, has been fueled by the unwavering support of our customers and the dedication of our team.
              </p>
              <p className="text-lg leading-relaxed">
                Today, Foodella stands as a testament to our belief that convenience should never come at the expense of flavor or nutrition. We continue to innovate, bringing new and exciting products that cater to your evolving tastes and lifestyle.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKjHFIFpBOlmviyajbBBdziH8tj5mf0JHNtU-CVwSuh8qw7N0AAsCmSqI4JArSvB4oEM&usqp=CAU" // Replace with a historical image or a modern factory shot
                alt="Foodella Journey"
                className="  rounded-xl shadow-xl object-fill w-full h-auto max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="bg-red-600 text-white py-24 transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-16 drop-shadow-md">
            The Values That Drive Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Value 1: Quality */}
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaAward className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Unwavering Quality</h3>
              <p className="text-lg opacity-90">
                From sourcing ingredients to final packaging, we ensure every Foodella product meets the highest standards.
              </p>
            </div>
            {/* Value 2: Innovation */}
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaLightbulb className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Innovation & Flavor</h3>
              <p className="text-lg opacity-90">
                We constantly explore new flavors and culinary techniques to bring exciting tastes to your home.
              </p>
            </div>
            {/* Value 3: Community */}
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaHandsHelping className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Community & Trust</h3>
              <p className="text-lg opacity-90">
                Building trust with our customers and contributing positively to the communities we serve.
              </p>
            </div>
            {/* Value 4: Sustainability */}
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaLeaf className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Sustainable Practices</h3>
              <p className="text-lg opacity-90">
                Committed to environmentally friendly practices from farm to freezer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Find Our Products */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-yellow-400 text-red-800 py-20 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Ready to Taste the Foodella Difference?
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-10 max-w-4xl mx-auto">
            Explore our range of delicious products crafted with passion and care.
          </p>
          {/* BUTTON KO <Link> SE REPLACE KIYA HAI */}
          <Link
            to="/allproducts" // Is path par click karne par jayega
            className="inline-block bg-red-700 text-white font-extrabold text-2xl py-5 px-16 rounded-full shadow-2xl hover:bg-red-800 hover:scale-105 transition-all duration-300 transform-gpu animate-pulse-btn"
          >
            View Our Products
          </Link>
        </div>
      </section>

      {/* Footer - Minimalist & Branded */}
      <footer className="bg-red-900 text-yellow-100 text-center py-8 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Where Quality Meets Taste.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;