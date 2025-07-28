import React, { useEffect, useRef, useState } from 'react';
import { FaLeaf, FaFireAlt, FaShoppingBasket, FaStar, FaChild } from 'react-icons/fa'; // FaLeaf for veggies, FaFireAlt for crispy, FaChild for kid-friendly
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const VeggieFingerPage = () => {
  const sectionRefs = useRef([]); // For scroll animations
  const productImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/10/Veggie-Finger-2-247x300.png", // Replace with your Veggie Finger pack image
    "https://foodellafoods.com/wp-content/uploads/2023/10/veg-fing-method5.jpg", // Replace with crispy texture close-up
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // State for Nutritional Facts Accordion
  const [activeNutrition, setActiveNutrition] = useState(false);

  // Sample data for Nutritional Facts (IMPORTANT: Update with actual data for your Veggie Finger)
  const nutritionalData = [
    { nutrient: "Energy (kcal)", per100g: "140", rda: "7.0" },
    { nutrient: "Protein (g)", per100g: "3.0", rda: "-" },
    { nutrient: "Carbohydrate (g)", per100g: "20.0", rda: "-" },
    { nutrient: "Total Sugars (g)", per100g: "<1.5", rda: "-" },
    { nutrient: "Added Sugars (g)", per100g: "0", rda: "0" },
    { nutrient: "Total Fat (g)", per100g: "4.5", rda: "6.8" },
    { nutrient: "  Saturated Fat (g)", per100g: "Not more than 1.8", rda: "9.0" },
    { nutrient: "  Trans Fat (g)", per100g: "Not more than 0.1", rda: "5" },
    { nutrient: "Sodium (mg)", per100g: "100", rda: "5.0" },
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
      <section className="relative h-screen bg-gradient-to-br from-yellow-400 to-red-600 flex items-center justify-center  overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-20 flex flex-col md:flex-row items-center justify-between relative z-10 text-white gap-12">
          {/* Product Info Left */}
          <div className="text-center md:text-left md:w-1/2 animate-slide-in-left">
            <h1 className="text-4xl md:text-7xl  font-extrabold leading-tight mb-4 drop-shadow-lg">
              Foodella <span className="text-red-900">Veggie Finger</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-lg mb-8 opacity-90">
              Crunch into goodness with Foodella Veggie Fingers! Loaded with wholesome
              vegetables and a crispy coating. A delicious and nutritious snack for all ages!
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <span className="text-yellow-300 text-2xl flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              <span className="text-yellow-200 text-lg">(4.7/5 stars)</span>
            </div>
            <button className="bg-white text-red-600 font-bold px-10 py-4 rounded-full shadow-lg text-lg hover:scale-105 hover:bg-yellow-200 transition-all duration-300 transform-gpu animate-bounce-once">
              Explore Now <FaShoppingBasket className="inline-block ml-2 text-xl" />
            </button>
          </div>

          {/* Product Image Right - Dynamic & Large */}
          <div className="relative w-full md:w-2/5 mx-10 flex justify-center items-center h-96 md:h-[600px] animate-scale-in-delay">
            <img
              src={productImages[currentImageIndex]}
              alt="Foodella Veggie Finger Pack"
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
            Why Foodella Veggie Finger?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaLeaf className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Packed with Veggies</h3>
              <p className="text-lg opacity-90">
                A delightful blend of wholesome vegetables in every bite, adding goodness to your meal.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaFireAlt className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Crispy Golden Crunch</h3>
              <p className="text-lg opacity-90">
                Cooks up to a perfect golden-brown crisp, providing a satisfying texture and flavor.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaChild className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Kid-Friendly & Nutritious</h3>
              <p className="text-lg opacity-90">
                A delicious way to get more vegetables into your family's diet, loved by kids and adults alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INLINED: Nutritional Facts Section for Veggie Finger */}
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
            Your Path to Perfect Veggie Fingers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preheat</h3>
              <p className="text-gray-700">
                Preheat your oven, air fryer, or deep fryer to the recommended temperature.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/Veggie-Finger-2-247x300.png" alt="Preheat" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Arrange</h3>
              <p className="text-gray-700">
                Spread frozen Veggie Fingers in a single layer on a baking sheet or in the air fryer basket.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-21-at-12.50.11_035254d1-jpg.webp" alt="Arrange" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cook</h3>
              <p className="text-gray-700">
                Cook until golden brown and crispy, typically 10-15 min in oven, 8-12 in air fryer, or 2-4 min deep fry.
              </p>
              <img src="https://m.media-amazon.com/images/I/71HsANb2otL._AC_UC200,200_CACC,200,200_QL85_.jpg?aicid=community-reviews" alt="Cook" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">04</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serve & Enjoy!</h3>
              <p className="text-gray-700">
                Serve hot with your favorite dip, as a snack, or alongside a main meal.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/veg-fing-method5.jpg" alt="Enjoy" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
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
              src="https://i.pinimg.com/736x/30/2e/d8/302ed89e64dcb896c53f605dc63a146f.jpg" // Example image for Veggie Finger recipe
              alt="Veggie Finger Wrap"
              className="w-full h-auto max-w-lg rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500"
            />
            {/* A small "Recipe" tag floating */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-red-800 text-lg font-bold px-5 py-2 rounded-full shadow-lg rotate-[-5deg]">
              Quick Lunch Idea!
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2 animate-slide-in-right-delay">
            <h2 className="text-5xl font-extrabold mb-6">
              Whip Up a Delicious Veggie Finger Wrap!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Turn your Foodella Veggie Fingers into a wholesome and satisfying **Veggie Finger Wrap**.
              A perfect quick meal for busy days!
            </p>
            <ul className="text-lg opacity-90 mb-8 list-disc list-inside space-y-2 max-w-md mx-auto md:mx-0">
              <li>Foodella Veggie Fingers</li>
              <li>Whole Wheat Tortilla</li>
              <li>Lettuce, Tomatoes, Cucumbers</li>
              <li>Light Mayo or Hummus</li>
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
            Ready for Wholesome Deliciousness?
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-10 max-w-4xl mx-auto">
            Find Foodella Veggie Fingers at a store near you and add a healthy crunch to your day!
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
          <p className="mt-2">Wholesome. Crispy. Veggie Perfection.</p>
        </div>
      </footer>
    </div>
  );
};

export default VeggieFingerPage;