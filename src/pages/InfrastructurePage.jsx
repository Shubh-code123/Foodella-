import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const InfrastructurePage = () => {
  const sectionRefs = useRef([]); // For scroll animations

  // Hero Section ke liye images
  const heroInfrastructureImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/12/foodellafoods-1024x576.webp", // Replace with your factory exterior image 1
    "https://foodellafoods.com/wp-content/uploads/2023/12/chef-cooking-french-fries-restau-1024x576.webp", // Replace with another factory exterior image 2
    "https://foodellafoods.com/wp-content/uploads/2023/12/food-safety-pesticide-analysis-m-jpg.webp", // Replace with front office/reception image 3
  ];

  // Technology & Innovation Section ke liye images
  const techInnovationImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/08/food-industry-processing-whey-in2-768x512.jpg", // Replace with machinery image A
    "https://foodellafoods.com/wp-content/uploads/2023/08/2022-11-172-768x512.jpg", // Replace with automated line image B
    "https://foodellafoods.com/wp-content/uploads/2023/12/professional-technologist-using-tablet-production-plant-checking-productivity-quality_342744-1162-1-768x512.webp", // Replace with quality lab image C
  ];

  // --- Carousel Logic (AutoImageCarousel component ka code yahan le aaye hain) ---
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);
  const [currentTechImageIndex, setCurrentTechImageIndex] = useState(0);

  // Effect for Hero Carousel
  useEffect(() => {
    if (!heroInfrastructureImages || heroInfrastructureImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentHeroImageIndex((prevIndex) =>
        prevIndex === heroInfrastructureImages.length - 1 ? 0 : prevIndex + 1
      );
    },1000   ); 
    return () => clearInterval(timer);
  }, [heroInfrastructureImages]);

  // Effect for Tech Carousel
  useEffect(() => {
    if (!techInnovationImages || techInnovationImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentTechImageIndex((prevIndex) =>
        prevIndex === techInnovationImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // 4 seconds interval for tech carousel
    return () => clearInterval(timer);
  }, [techInnovationImages]);

  // Manual navigation for Hero Carousel
  const goToPrevHeroImage = () => {
    setCurrentHeroImageIndex((prevIndex) =>
      prevIndex === 0 ? heroInfrastructureImages.length - 1 : prevIndex - 1
    );
  };
  const goToNextHeroImage = () => {
    setCurrentHeroImageIndex((prevIndex) =>
      prevIndex === heroInfrastructureImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manual navigation for Tech Carousel
  const goToPrevTechImage = () => {
    setCurrentTechImageIndex((prevIndex) =>
      prevIndex === 0 ? techInnovationImages.length - 1 : prevIndex - 1
    );
  };
  const goToNextTechImage = () => {
    setCurrentTechImageIndex((prevIndex) =>
      prevIndex === techInnovationImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  // --- Carousel Logic End ---


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

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

      {/* Hero Section - Infrastructure */}
      <section className="relative h-[100vh] bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center  overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-10 flex flex-col items-center justify-center relative z-10 text-white text-center ">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
            Our World-Class Infrastructure
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mb- opacity-90 animate-fade-in-up animation-delay-500">
            Precision, hygiene, and cutting-edge technology: the backbone of Foodella's quality.
          </p>
          {/* Hero Carousel JSX directly yahan hai */}
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl shadow-2xl mt-8 transform scale-95 animate-scale-in-delay">
            <div className="relative  w-full h-full" style={{ aspectRatio: '16/9' }}>
              {heroInfrastructureImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Factory Slide ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
                    index === currentHeroImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            {/* Controls */}
            {heroInfrastructureImages.length > 1 && (
              <>
                <button
                  onClick={goToPrevHeroImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-yellow-300 transition-colors z-20 drop-shadow-lg focus:outline-none"
                >
                  &#x25C0; {/* Left Arrow Symbol */}
                </button>
                <button
                  onClick={goToNextHeroImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-yellow-300 transition-colors z-20 drop-shadow-lg focus:outline-none"
                >
                  &#x25B6; {/* Right Arrow Symbol */}
                </button>
              </>
            )}
            {/* Indicators */}
            {heroInfrastructureImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {heroInfrastructureImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                      idx === currentHeroImageIndex ? 'bg-white scale-125' : 'bg-gray-300 opacity-75'
                    }`}
                    onClick={() => setCurrentHeroImageIndex(idx)}
                  ></span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pillars of Our Infrastructure Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative bg-red-700 text-white py-24 pb-32 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-[#FFF8E1] transform -skew-y-3 origin-top-left -mt-12 z-0"></div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="text-5xl font-extrabold mb-16 drop-shadow-md animate-fade-in-up">
            The Pillars of Foodella's Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <span className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform">🏢</span> {/* Building Icon */}
              <h3 className="text-3xl font-bold mb-4">Modern Facilities</h3>
              <p className="text-lg opacity-90">
                Our state-of-the-art production units are designed for efficiency and hygiene.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <span className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform">⚙️</span> {/* Cogs/Gear Icon */}
              <h3 className="text-3xl font-bold mb-4">Precision Manufacturing</h3>
              <p className="text-lg opacity-90">
                Every step from ingredient processing to final packaging is handled with utmost precision.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <span className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform">🚚</span> {/* Truck Icon */}
              <h3 className="text-3xl font-bold mb-4">Advanced Cold Chain</h3>
              <p className="text-lg opacity-90">
                Maintaining optimal temperatures from production to delivery, preserving freshness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="bg-[#FFF8E1] py-24 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-red-600 mb-16">
            Technology at the Core
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2 flex justify-center order-2 md:order-1">
              {/* Tech Carousel JSX directly yahan hai */}
              <div className="relative w-full overflow-hidden rounded-xl shadow-xl object-cover h-auto max-h-96">
                <div className="relative w-full h-full" style={{ aspectRatio: '16/9' }}>
                  {techInnovationImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Technology Slide ${index + 1}`}
                      className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
                        index === currentTechImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                {/* Controls */}
                {techInnovationImages.length > 1 && (
                  <>
                    <button
                      onClick={goToPrevTechImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-yellow-300 transition-colors z-20 drop-shadow-lg focus:outline-none"
                    >
                      &#x25C0; {/* Left Arrow Symbol */}
                    </button>
                    <button
                      onClick={goToNextTechImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-yellow-300 transition-colors z-20 drop-shadow-lg focus:outline-none"
                    >
                      &#x25B6; {/* Right Arrow Symbol */}
                    </button>
                  </>
                )}
                {/* Indicators */}
                {techInnovationImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {techInnovationImages.map((_, idx) => (
                      <span
                        key={idx}
                        className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                          idx === currentTechImageIndex ? 'bg-white scale-125' : 'bg-gray-300 opacity-75'
                        }`}
                        onClick={() => setCurrentTechImageIndex(idx)}
                      ></span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="md:w-1/2 text-left order-1 md:order-2">
              <p className="text-lg leading-relaxed mb-6">
                At Foodella, we leverage cutting-edge technology to ensure superior product quality and operational efficiency. Our automated processing lines minimize human contact, ensuring maximum hygiene and consistency in every product.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our R&D department continuously works on innovative techniques for food preservation and flavor enhancement, ensuring that our products not only meet but exceed global standards. We are committed to adopting sustainable technologies that reduce our environmental footprint.
              </p>
              <p className="text-lg leading-relaxed">
                From precise ingredient mixing to rapid freezing and automated packaging, every step is meticulously controlled to lock in freshness and taste, delivering the best to your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Hygiene & Sustainability */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="bg-red-600 text-white py-24 transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-extrabold mb-16 drop-shadow-md">
            Our Unwavering Commitments
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <span className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform">🔬</span> {/* Lab/Flask Icon */}
              <h3 className="text-3xl font-bold mb-4">Strict Hygiene Standards</h3>
              <p className="text-lg opacity-90">
                Adhering to the highest international food safety and hygiene protocols at every stage of production.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <span className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform">♻️</span> {/* Recycle Icon */}
              <h3 className="text-3xl font-bold mb-4">Environmental Responsibility</h3>
              <p className="text-lg opacity-90">
                Implementing eco-friendly practices and minimizing waste to protect our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Explore Products or Contact */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-yellow-400 text-red-800 py-20 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Experience Foodella's Quality Firsthand
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-10 max-w-4xl mx-auto">
            Discover the difference that world-class infrastructure makes in every bite.
          </p>
          <Link to="/allproducts" className="inline-block bg-red-700 text-white font-extrabold text-2xl py-5 px-16 rounded-full shadow-2xl hover:bg-red-800 hover:scale-105 transition-all duration-300 transform-gpu animate-pulse-btn">
            View Our Products
          </Link>
        </div>
      </section>

      {/* Footer - Minimalist & Branded */}
      <footer className="bg-red-900 text-yellow-100 text-center py-8 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Built on Quality. Delivered with Care.</p>
        </div>
      </footer>
    </div>
  );
};

export default InfrastructurePage;