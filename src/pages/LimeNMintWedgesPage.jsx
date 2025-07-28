import React, { useEffect, useRef, useState } from 'react';
import { FaLemon, FaRegClock, FaLeaf, FaShoppingBasket, FaStar } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const LimeNMintWedgesPage = () => {
  const sectionRefs = useRef([]); // For scroll animations
  const productImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/10/Lime-N-mint-wedges-2-247x300.png", // Replace with your Lime 'n' Mint Wedges pack image
    "https://foodellafoods.com/wp-content/uploads/2023/10/mint.jpg", // Replace with crispy texture close-up
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // State for Nutritional Facts Accordion
  const [activeNutrition, setActiveNutrition] = useState(false);

  // Sample data for Nutritional Facts (IMPORTANT: Update with actual data for your Lime 'n' Mint Wedges)
  const nutritionalData = [
    { nutrient: "Energy (kcal)", per100g: "130", rda: "6.5" },
    { nutrient: "Protein (g)", per100g: "2.7", rda: "-" },
    { nutrient: "Carbohydrate (g)", per100g: "22.5", rda: "-" },
    { nutrient: "Total Sugars (g)", per100g: "<0.5", rda: "-" },
    { nutrient: "Added Sugars (g)", per100g: "0", rda: "0" },
    { nutrient: "Total Fat (g)", per100g: "3.2", rda: "4.8" },
    { nutrient: "  Saturated Fat (g)", per100g: "Not more than 1.4", rda: "7.0" },
    { nutrient: "  Trans Fat (g)", per100g: "Not more than 0.1", rda: "5" },
    { nutrient: "Sodium (mg)", per100g: "45", rda: "2.3" },
  ];

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Intersection Observer for scroll animations
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

    // Give a small delay to ensure elements are rendered before observing
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

  // Image Carousel Navigation
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="font-poppins bg-[#FFF8E1] text-gray-800 leading-relaxed overflow-hidden">

      {/* Hero Section - Product Showcase */}
      <section className="relative min-h-screen bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Decorative Blobs - Reduced size and opacity for mobile, adjusted positioning */}
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-yellow-300 rounded-full opacity-10 md:opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-red-500 rounded-full opacity-10 md:opacity-20 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10 text-white gap-8 md:gap-12">
          {/* Product Info Left */}
          <div className="text-center md:text-left md:w-1/2 animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Foodella <span className="text-red-900">Lime 'n' Mint</span> Wedges
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-light max-w-lg mb-6 md:mb-8 opacity-90">
              Experience a burst of fresh flavor with our crisp and tangy Lime 'n' Mint Wedges.
              A refreshing twist on a classic, perfect for a light snack or meal accompaniment!
            </p>
            <div className="flex justify-center md:justify-start space-x-2 sm:space-x-4 mb-6 md:mb-8">
              <span className="text-yellow-300 text-xl sm:text-2xl flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              <span className="text-yellow-200 text-base sm:text-lg">(4.9/5 stars)</span>
            </div>
            <button className="bg-white text-red-600 font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-full shadow-lg text-base sm:text-lg hover:scale-105 hover:bg-yellow-200 transition-all duration-300 transform-gpu animate-bounce-once">
              Explore Now <FaShoppingBasket className="inline-block ml-2 text-lg sm:text-xl" />
            </button>
          </div>

          {/* Product Image Right - Dynamic & Large */}
          <div className="relative w-full md:w-2/5 flex justify-center items-center h-80 md:h-[500px] lg:h-[600px] animate-scale-in-delay mt-8 md:mt-0">
            <img
              src={productImages[currentImageIndex]}
              alt="Foodella Lime 'n' Mint Wedges Pack"
              className="object-contain drop-shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105 max-h-full max-w-full"
            />
            {/* Image dots for mobile and desktop */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {productImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                    idx === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-300 opacity-75'
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                ></span>
              ))}
            </div>
            {/* Navigation arrows (visible on all screen sizes now) */}
            <button
              onClick={goToPrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-yellow-300 transition-colors z-10 ml-2 md:ml-0"
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-yellow-300 transition-colors z-10 mr-2 md:mr-0"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Foodella? - Feature Grid with diagonal cut */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative bg-red-700 text-white py-16 md:py-24 pb-24 md:pb-32 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="absolute top-0 left-0 w-full h-16 md:h-24 bg-[#FFF8E1] transform -skew-y-3 origin-top-left -mt-8 md:-mt-12 z-0"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 md:mb-16 drop-shadow-md animate-fade-in-up">
            Why Foodella Lime 'n' Mint Wedges?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"> {/* Changed to grid-cols-1 for mobile */}
            <div className="flex flex-col items-center p-6 md:p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-300 group">
              <FaLemon className="text-5xl md:text-6xl text-yellow-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Refreshing Zest</h3>
              <p className="text-base md:text-lg opacity-90">
                A vibrant burst of zesty lime perfectly complements the wholesome potato.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 md:p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-300 group">
              <FaRegClock className="text-5xl md:text-6xl text-yellow-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Aromatic Mint</h3>
              <p className="text-base md:text-lg opacity-90">
                Subtle notes of cool mint elevate the flavor, offering a truly unique experience.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 md:p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 md:hover:-translate-y-4 transition-all duration-300 group">
              <FaLeaf className="text-5xl md:text-6xl text-yellow-400 mb-4 md:mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Crispy Perfection</h3>
              <p className="text-base md:text-lg opacity-90">
                Crispy on the outside, fluffy on the inside, cooked to golden perfection every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INLINED: Nutritional Facts Section for Lime 'n' Mint Wedges */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="font-poppins bg-[#FFF8E1] p-6 md:p-12"> {/* Adjusted padding */}
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-red-600 text-center mb-6 md:mb-8"> {/* Adjusted text size */}
              Nutritional Facts
            </h2>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-yellow-300">
              <button
                className="flex justify-between items-center w-full p-4 md:p-6 text-xl md:text-2xl font-bold text-red-700 focus:outline-none bg-red-100 hover:bg-red-200 transition-colors duration-300"
                onClick={() => setActiveNutrition(!activeNutrition)}
              >
                Detailed Nutritional Information
                <span>{activeNutrition ? '−' : '+'}</span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeNutrition ? 'max-h-[600px] opacity-100 py-6 px-4 md:px-6' : 'max-h-0 opacity-0 px-4 md:px-6' // Adjusted padding
                }`}
              >
                <p className="text-sm text-gray-600 mb-4 text-center">
                  *Sample values per serving (adjust based on your actual product packaging)
                </p>
                <div className="overflow-x-auto"> {/* Ensures table is scrollable on small screens */}
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-yellow-100">
                      <tr>
                        <th className="py-3 px-2 md:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                          Nutritional Information
                        </th>
                        <th className="py-3 px-2 md:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                          Per 100 g
                        </th>
                        <th className="py-3 px-2 md:px-4 text-left text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
                          Per Serve % Contribution to RDA
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {nutritionalData.map((row, index) => (
                        <tr key={index} className="hover:bg-yellow-50">
                          <td className={`py-3 px-2 md:px-4 font-semibold text-sm ${row.nutrient.startsWith('  ') ? 'pl-6 md:pl-8 text-gray-700' : 'text-gray-900'}`}> {/* Adjusted padding for sub-items */}
                            {row.nutrient.replace('  ', '')}
                          </td>
                          <td className="py-3 px-2 md:px-4 text-sm">{row.per100g}</td>
                          <td className="py-3 px-2 md:px-4 text-sm">{row.rda}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4 md:mt-6 italic text-center"> {/* Adjusted font size */}
                  Disclaimer: These are approximate values and may vary slightly. Please refer to the actual product packaging
                  for the most accurate nutritional information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooking Instructions - Visual and Clean */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="bg-[#FFF8E1] py-16 md:py-24 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-red-600 mb-12 md:mb-16">
            Your Path to Refreshing Wedges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"> {/* Changed to grid-cols-1 for mobile */}
            {/* Step 1 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-3 md:mb-4">01</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Preheat</h3>
              <p className="text-base md:text-gray-700">
                Preheat your oven, air fryer, or deep fryer to the recommended temperature.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/Lime-N-mint-wedges-2-247x300.png" alt="Preheat" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-28 md:h-32" />
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-3 md:mb-4">02</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Arrange</h3>
              <p className="text-base md:text-gray-700">
                Lay out frozen wedges in a single layer on a baking sheet or in the air fryer basket.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/08/cooking-french-fries-or-fry-potatoes-in-hot-oil-for-potato-wedges-close-up-fried-potatoes-in-oil-on-pan-free-photo.jpg" alt="Arrange" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-28 md:h-32" />
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-3 md:mb-4">03</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Cook</h3>
              <p className="text-base md:text-gray-700">
                Cook until golden and crispy, typically 15-20 min in oven, 12-15 in air fryer, or 4-6 min deep fry.
              </p>
              <img src="https://www.hyfunfoods.com/wp-content/uploads/2024/05/PW-1.png" alt="Cook" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-28 md:h-32" />
            </div>
            {/* Step 4 */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-3 md:mb-4">04</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Serve Cool!</h3>
              <p className="text-base md:text-gray-700">
                Serve hot or slightly cooled, perhaps with a fresh yogurt dip for an ultimate refresh.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/mint.jpg" alt="Enjoy" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-28 md:h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Highlight Section - More Dynamic Layout */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-red-600 text-white py-16 md:py-24 transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16"> {/* Changed to grid-cols-1 for mobile */}
          <div className="relative order-2 md:order-1 flex justify-center animate-slide-in-left-delay">
            <img
              src="https://hyfunfoods.com/wp-content/uploads/2024/05/Spicy-Wedges-1.png"
              alt="Lime 'n' Mint Wedges with Cucumber Raita"
              className="w-full h-auto max-w-sm sm:max-w-md rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500" // Adjusted max-w
            />
            {/* A small "Recipe" tag floating */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-red-800 text-base sm:text-lg font-bold px-4 py-1 sm:px-5 sm:py-2 rounded-full shadow-lg rotate-[-5deg]"> {/* Adjusted size */}
              Refreshing Pair!
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2 animate-slide-in-right-delay">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 md:mb-6">
              Pair with a Cool Cucumber Raita!
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              Enhance the zesty freshness of your Foodella Lime 'n' Mint Wedges with our
              super easy **Cool Cucumber Raita** recipe. The perfect complement!
            </p>
            <ul className="text-base sm:text-lg opacity-90 mb-6 md:mb-8 list-disc list-inside space-y-2 max-w-md mx-auto md:mx-0">
              <li>Foodella Lime 'n' Mint Wedges</li>
              <li>Fresh Yogurt</li>
              <li>Grated Cucumber</li>
              <li>Hint of Cumin & Salt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer - Minimalist & Branded */}
      <footer className="bg-red-900 text-yellow-100 text-center py-6 text-sm"> {/* Adjusted padding */}
        <div className="container mx-auto px-4"> {/* Adjusted padding */}
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Tangy. Minty. Uniquely Delicious.</p>
        </div>
      </footer>
    </div>
  );
};

export default LimeNMintWedgesPage;