import React, { useEffect, useRef, useState } from 'react';
import { FaStar, FaRegClock, FaLeaf, FaShoppingBasket } from 'react-icons/fa'; // FaStar for classic, FaRegClock for quick, FaLeaf for quality
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const HashBrownPage = () => {
  const sectionRefs = useRef([]); // For scroll animations
  const productImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/10/Hash-Brown-247x300.png", // Replace with your Hash Brown pack image
    "https://foodellafoods.com/wp-content/uploads/2023/10/hash-method.jpg", // Replace with crispy texture close-up
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // State for Nutritional Facts Accordion
  const [activeNutrition, setActiveNutrition] = useState(false);

  // Sample data for Nutritional Facts (IMPORTANT: Update with actual data for your Hash Brown)
  const nutritionalData = [
    { nutrient: "Energy (kcal)", per100g: "170", rda: "8.5" },
    { nutrient: "Protein (g)", per100g: "2.5", rda: "-" },
    { nutrient: "Carbohydrate (g)", per100g: "28.0", rda: "-" },
    { nutrient: "Total Sugars (g)", per100g: "<1.0", rda: "-" },
    { nutrient: "Added Sugars (g)", per100g: "0", rda: "0" },
    { nutrient: "Total Fat (g)", per100g: "6.0", rda: "9.0" },
    { nutrient: "  Saturated Fat (g)", per100g: "Not more than 2.5", rda: "12.5" },
    { nutrient: "  Trans Fat (g)", per100g: "Not more than 0.1", rda: "5" },
    { nutrient: "Sodium (mg)", per100g: "90", rda: "4.5" },
  ];

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
      <section className="relative h-screen bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-20 flex flex-col md:flex-row items-center justify-between relative z-10 text-white gap-12">
          {/* Product Info Left */}
          <div className="text-center md:text-left md:w-1/2 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Foodella <span className="text-red-900">Hash Brown</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-lg mb-8 opacity-90">
              Start your day the crispy way with Foodella Hash Browns! Golden brown,
              perfectly seasoned, and irresistibly crunchy. A breakfast classic, anytime!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <span className="text-yellow-300 text-2xl flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              <span className="text-yellow-200 text-lg">(4.7/5 stars)</span>
            </div>
            
          </div>

          {/* Product Image Right - Dynamic & Large */}
          <div className="relative w-full md:w-2/5 mx-10 flex justify-center items-center h-96 md:h-[600px] animate-scale-in-delay">
            <img
              src={productImages[currentImageIndex]}
              alt="Foodella Hash Brown Pack"
              className="object-contain drop-shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
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
            <button
              onClick={goToPrevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-300 transition-colors hidden md:block"
            >
              <IoIosArrowDropleftCircle />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-yellow-300 transition-colors hidden md:block"
            >
              <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Foodella? - Feature Grid with diagonal cut */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative bg-red-700 text-white py-24 pb-32 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="absolute top-0 left-0 w-full h-24 bg-[#FFF8E1] transform -skew-y-3 origin-top-left -mt-12 z-0"></div>

        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="text-5xl font-extrabold mb-16 drop-shadow-md animate-fade-in-up">
            Why Foodella Hash Brown?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaStar className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Classic Golden Crisp</h3>
              <p className="text-lg opacity-90">
                Cooks up to a perfect golden-brown exterior with an irresistible crisp, a true classic.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaLeaf className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Perfectly Shredded Potato</h3>
              <p className="text-lg opacity-90">
                Made from high-quality, finely shredded potatoes for that authentic, fluffy interior.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaRegClock className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Breakfast Ready</h3>
              <p className="text-lg opacity-90">
                Quick and easy to prepare, making delicious hash browns accessible any morning (or anytime!).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INLINED: Nutritional Facts Section for Hash Brown */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="font-poppins bg-[#FFF8E1] p-8 md:p-12">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center mb-8">
              Nutritional Facts
            </h2>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-yellow-300">
              <button
                className="flex justify-between items-center w-full p-6 text-2xl font-bold text-red-700 focus:outline-none bg-red-100 hover:bg-red-200 transition-colors duration-300"
                onClick={() => setActiveNutrition(!activeNutrition)}
              >
                Detailed Nutritional Information
                <span>{activeNutrition ? '−' : '+'}</span>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeNutrition ? 'max-h-[600px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 px-6'
                }`}
              >
                <p className="text-sm text-gray-600 mb-4 text-center md:text-left">
                  *Sample values per serving (adjust based on your actual product packaging)
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-yellow-100">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Nutritional Information
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Per 100 g
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          Per Serve % Contribution to RDA
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {nutritionalData.map((row, index) => (
                        <tr key={index} className="hover:bg-yellow-50">
                          <td className={`py-3 px-4 font-semibold ${row.nutrient.startsWith('  ') ? 'pl-8 text-gray-700' : 'text-gray-900'}`}>
                            {row.nutrient.replace('  ', '')}
                          </td>
                          <td className="py-3 px-4">{row.per100g}</td>
                          <td className="py-3 px-4">{row.rda}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-6 italic text-center">
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
        className="bg-[#FFF8E1] py-24 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-red-600 mb-16">
            Your Path to Perfect Hash Brown
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preheat</h3>
              <p className="text-gray-700">
                Preheat your pan with oil, oven, or air fryer to the recommended temperature.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/Hash-Brown-247x300.png" alt="Preheat" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Place</h3>
              <p className="text-gray-700">
                Place frozen hash browns in a single layer, ensuring even cooking.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/hash-br.jpg" alt="Place" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cook</h3>
              <p className="text-gray-700">
                Cook until golden brown and crispy, flipping halfway if pan-frying.
              </p>
              <img src="https://a.storyblok.com/f/251978/3550x1848/a5038547a0/oval-hashbrowns-300dpi-417x276mm-c-nr-2369.jpg" alt="Cook" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">04</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serve & Enjoy!</h3>
              <p className="text-gray-700">
                Serve hot as a breakfast side, or as a versatile addition to any meal.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/hash-method.jpg" alt="Enjoy" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Highlight Section - More Dynamic Layout */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="bg-red-600 text-white py-24 transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8 grid md:grid-cols-2 items-center gap-16">
          <div className="relative order-2 md:order-1 flex justify-center animate-slide-in-left-delay">
            <img
              src="https://cdn.dotpe.in/longtail/item_thumbnails/6862337/6YenFG7J-800-800.webp" // Example image for hash brown recipe
              alt="Breakfast Burrito with Hash Browns"
              className="w-full h-auto max-w-lg rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500"
            />
            {/* A small "Recipe" tag floating */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-red-800 text-lg font-bold px-5 py-2 rounded-full shadow-lg rotate-[-5deg]">
              Breakfast Hero!
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2 animate-slide-in-right-delay">
            <h2 className="text-5xl font-extrabold mb-6">
              Make a Hearty Breakfast Burrito!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Elevate your morning routine with a delicious and filling **Breakfast Burrito**
              featuring Foodella Hash Browns. The ultimate start to your day!
            </p>
            <ul className="text-lg opacity-90 mb-8 list-disc list-inside space-y-2 max-w-md mx-auto md:mx-0">
              <li>Foodella Hash Brown</li>
              <li>Scrambled Eggs</li>
              <li>Salsa & Cheese</li>
              <li>Warm Tortillas</li>
            </ul>
            {/* <button className="bg-yellow-400 text-red-800 font-bold px-10 py-4 rounded-full shadow-lg text-lg hover:scale-105 hover:bg-yellow-300 transition-all duration-300 transform-gpu">
              Get the Full Recipe
            </button> */}
          </div>
        </div>
      </section>

      {/* Call to Action - Vibrant & Direct */}
      {/* <section
        ref={(el) => (sectionRefs.current[4] = el)}
        className="bg-yellow-400 text-red-800 py-20 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            Craving That Breakfast Crunch?
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-10 max-w-4xl mx-auto">
            Find Foodella Hash Browns at a store near you and make every breakfast golden!
          </p>
          <button className="bg-red-700 text-white font-extrabold text-2xl py-5 px-16 rounded-full shadow-2xl hover:bg-red-800 hover:scale-105 transition-all duration-300 transform-gpu animate-pulse-btn">
            Find a Store Now!
          </button>
        </div>
      </section> */}

      {/* Footer - Minimalist & Branded */}
      <footer className="bg-red-900 text-yellow-100 text-center py-8 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Golden. Crispy. Breakfast Perfect.</p>
        </div>
      </footer>
    </div>
  );
};

export default HashBrownPage;