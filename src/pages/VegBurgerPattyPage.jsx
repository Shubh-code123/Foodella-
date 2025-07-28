import React, { useEffect, useRef, useState } from 'react';
import { FaFireAlt, FaRegClock, FaLeaf, FaShoppingBasket, FaStar } from 'react-icons/fa';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const VegBurgerPattyPage = () => {
  const sectionRefs = useRef([]); // For scroll animations
  const productImages = [
    "https://foodellafoods.com/wp-content/uploads/2023/11/Veg-burger-Petty-min.png", // Replace with your Veg Burger Patty pack image
    "https://foodellafoods.com/wp-content/uploads/2023/10/veg-burger-method-scaled.jpg", // Replace with close-up of patty inside/texture
  ];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // State for Nutritional Facts Accordion
  const [activeNutrition, setActiveNutrition] = useState(false);

  // Sample data for Nutritional Facts (IMPORTANT: Update with actual data for your Veg Burger Patty)
  const nutritionalData = [
    { nutrient: "Energy (kcal)", per100g: "170", rda: "8.5" },
    { nutrient: "Protein (g)", per100g: "4.8", rda: "-" },
    { nutrient: "Carbohydrate (g)", per100g: "20.5", rda: "-" },
    { nutrient: "Total Sugars (g)", per100g: "1.0", rda: "-" },
    { nutrient: "Added Sugars (g)", per100g: "0", rda: "0" },
    { nutrient: "Total Fat (g)", per100g: "7.8", rda: "11.7" },
    { nutrient: "  Saturated Fat (g)", per100g: "Not more than 2.5", rda: "12.5" },
    { nutrient: "  Trans Fat (g)", per100g: "Not more than 0.1", rda: "5" },
    { nutrient: "Sodium (mg)", per100g: "220", rda: "11.0" }, // Slightly lower than spicy if it's less seasoned
    { nutrient: "Dietary Fibre (g)", per100g: "3.5", rda: "-" },
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full opacity-20 translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-20 flex flex-col md:flex-row items-center justify-between relative z-10 text-white gap-12">
          {/* Product Info Left */}
          <div className="text-center md:text-left md:w-1/2 animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
              Foodella <span className="text-red-900">Veg Burger</span> Patty
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-lg mb-8 opacity-90">
              The perfect foundation for your homemade gourmet burgers! Our Veg Burger Patty is
              packed with wholesome goodness and classic flavors.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <span className="text-yellow-300 text-2xl flex items-center"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
              <span className="text-yellow-200 text-lg">(4.8/5 stars)</span> {/* Slightly different rating */}
            </div>
            
          </div>

          {/* Product Image Right - Dynamic & Large */}
          <div className="relative w-full md:w-2/7 mx-15 flex justify-center items-center h-96 md:h-[600px] animate-scale-in-delay">
            <img
              src={productImages[currentImageIndex]}
              alt="Foodella Veg Burger Patty Pack"
              className="object-cover drop-shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-105"
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
            Why Foodella Veg Burger Patty?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaFireAlt className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Classic Taste</h3>
              <p className="text-lg opacity-90">
                Crafted for that authentic, satisfying burger experience with every bite.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaRegClock className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Quick & Easy</h3>
              <p className="text-lg opacity-90">
                Whip up delicious burgers in minutes, perfect for busy weeknights or spontaneous cravings.
              </p>
            </div>
            <div className="flex flex-col items-center p-8 bg-red-800 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-300 group">
              <FaLeaf className="text-6xl text-yellow-400 mb-6 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold mb-4">Versatile Base</h3>
              <p className="text-lg opacity-90">
                Your canvas for culinary creativity - customize with endless toppings and sauces!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INLINED: Nutritional Facts Section for Veg Burger Patty */}
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
            Your Path to a Perfect Burger
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Preheat</h3>
              <p className="text-gray-700">
                Preheat your pan with a drizzle of oil, oven, or air fryer to the recommended temperature.
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/08/aloo-tikki-recipe018-.jpg" alt="Preheat" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cook</h3>
              <p className="text-gray-700">
                Cook the frozen patty for 6-8 minutes, flipping halfway until golden and heated through.
              </p>
              <img src="https://www.sidechef.com/recipe/ee0c8954-86e0-4964-8087-9d2a426c696a.jpg?d=1408x1120" alt="Cook" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Assemble</h3>
              <p className="text-gray-700">
                Place your perfectly cooked patty in a fresh bun with your favorite toppings and condiments.
              </p>
              <img src="https://i.ytimg.com/vi/grHIM5SkpCs/mqdefault.jpg" alt="Assemble" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
            </div>
            {/* Step 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-yellow-500 hover:shadow-xl hover:border-red-500 transition-all duration-300">
              <div className="text-6xl font-black text-red-400 mb-4">04</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjoy!</h3>
              <p className="text-gray-700">
                Serve immediately and savor the classic deliciousness of your homemade veggie burger!
              </p>
              <img src="https://foodellafoods.com/wp-content/uploads/2023/10/veg-burger-method-scaled.jpg" alt="Enjoy" className="mt-6 rounded-lg shadow-md mx-auto w-full object-cover h-32" />
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
              src="https://images.archanaskitchen.com/images/recipes/snack-recipes/burger-recipes/Homemade_Black_Bean_Burger_Recipe_1_2e594fbc4b.jpg" // Example image for a classic burger
              alt="Classic Veg Burger Recipe"
              className="w-full h-auto max-w-lg rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500"
            />
            {/* A small "Recipe" tag floating */}
            <div className="absolute -top-4 -left-4 bg-yellow-400 text-red-800 text-lg font-bold px-5 py-2 rounded-full shadow-lg rotate-[-5deg]">
              Burger Perfection!
            </div>
          </div>
          <div className="text-center md:text-left order-1 md:order-2 animate-slide-in-right-delay">
            <h2 className="text-5xl font-extrabold mb-6">
              Build Your Dream Veg Burger!
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-lg mx-auto md:mx-0">
              Craft the ultimate classic with our **Simple & Satisfying Veg Burger** recipe, starring Foodella's patty.
              It's burger bliss made easy!
            </p>
            <ul className="text-lg opacity-90 mb-8 list-disc list-inside space-y-2 max-w-md mx-auto md:mx-0">
              <li>Foodella Veg Burger Patty</li>
              <li>Soft Burger Buns</li>
              <li>Fresh Lettuce, Onion, Pickle</li>
              <li>Your Favorite Cheese & Sauce</li>
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
            Your Perfect Burger Starts Here!
          </h2>
          <p className="text-2xl md:text-3xl font-light mb-10 max-w-4xl mx-auto">
            Find Foodella Veg Burger Patty at a store near you and create burger magic at home!
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
          <p className="mt-2">The heart of every great veggie burger.</p>
        </div>
      </footer>
    </div>
  );
};

export default VegBurgerPattyPage;