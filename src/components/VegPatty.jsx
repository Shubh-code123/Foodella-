import React, { useState, useRef } from "react"; // Import useState and useRef
import { Link } from "react-router-dom"; // Import Link
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import arrow icons

const products = [
  {
    name: "Veg Burger Patty",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/11/Veg-burger-Petty-min.png",
    path: "/veg-burger-patty",
  },
  {
    name: "Herb Chilli Patty",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/10/Herb-Chilli-Patty-1-247x300.png",
    path: "/herb-chilli-patty",
  },
  
];

function VegPatty({ id }) {
  const scrollContainerRef = useRef(null);
  const itemRefs = useRef([]); // To store refs for each product item
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  // Function to scroll to the next slide
  const nextMobileSlide = () => {
    setCurrentMobileSlide((prevSlide) => {
      const nextSlide = (prevSlide + 1) % products.length;
      if (itemRefs.current[nextSlide]) {
        itemRefs.current[nextSlide].scrollIntoView({
          behavior: 'smooth',
          inline: 'center', // Snap to center
          block: 'nearest' // Adjusts block positioning if needed, often 'start' or 'center' for horizontal
        });
      }
      return nextSlide;
    });
  };

  // Function to scroll to the previous slide
  const prevMobileSlide = () => {
    setCurrentMobileSlide((prevSlide) => {
      const nextSlide = (prevSlide - 1 + products.length) % products.length;
      if (itemRefs.current[nextSlide]) {
        itemRefs.current[nextSlide].scrollIntoView({
          behavior: 'smooth',
          inline: 'center', // Snap to center
          block: 'nearest'
        });
      }
      return nextSlide;
    });
  };

  // Optional: Update currentMobileSlide state when user manually scrolls
  // This is more complex for scroll-snap, often better to rely on arrow clicks for explicit navigation
  // For a robust solution, you'd listen to scroll events and determine the active slide based on scroll position
  // For simplicity and arrow-driven navigation, we'll keep it driven by clicks.

  return (
    <section id={id} className="bg-red-800 w-full px-4 py-16 flex items-center justify-center">
      <div className="text-center w-full max-w-[1280px]">
        <h2 className="text-[36px] md:text-[42px] text-yellow-500 font-extrabold mb-12">
          Veg Patty
        </h2>

        {/* Desktop Grid - Centered based on item count */}
        <div className="hidden md:flex justify-center">
          <div
            className={`grid gap-y-16 gap-x-12 lg:gap-x-20 ${
              products.length === 1
                ? "grid-cols-1"
                : products.length === 2
                ? "grid-cols-2"
                : "grid-cols-3"
            }`}
          >
            {products.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[250px] lg:w-[280px] h-auto drop-shadow-xl"
                />
                <h3 className="text-yellow-500 font-semibold text-[22px] mt-6 max-w-[240px]">
                  {item.name}
                </h3>
                <Link to={item.path}>
                  <button className="bg-black text-white font-bold px-8 py-2 mt-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                    EXPLORE
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel/Scrollable Section with Arrows */}
        <div className="md:hidden relative w-full px-0"> {/* Removed px-4/6 here, will be handled by item margin/padding */}
          {/* Left Arrow Button */}
          {products.length > 1 && ( // Only show arrows if there's more than one product
            <button
              onClick={prevMobileSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 text-gray-800 rounded-full shadow-lg hover:bg-opacity-100 transition-all ml-2"
              aria-label="Previous product"
            >
              <FaChevronLeft size={20} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
            // The scrollPaddingLeft style helps center the first/last item when scrolled
            style={{ scrollPaddingLeft: '24px', scrollPaddingRight: '24px' }}
          >
            {products.map((item, idx) => (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)} // Assign ref to each item
                className="flex-shrink-0 snap-center w-full max-w-[calc(100%-48px)] mx-3 flex flex-col items-center p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[150px] sm:w-[160px] h-auto drop-shadow-xl"
                />
                <h3 className="text-yellow-500 font-semibold text-[18px] mt-4 text-center leading-tight">
                  {item.name}
                </h3>
                <Link to={item.path}>
                  <button className="bg-black text-white font-bold px-6 py-2 mt-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                    EXPLORE
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          {products.length > 1 && ( // Only show arrows if there's more than one product
            <button
              onClick={nextMobileSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white bg-opacity-70 text-gray-800 rounded-full shadow-lg hover:bg-opacity-100 transition-all mr-2"
              aria-label="Next product"
            >
              <FaChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default VegPatty;