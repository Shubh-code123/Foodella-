import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

function HeroSection4() {
  // Product Data
  const products = [
    {
      id: 1,
      name: "Masala Chaska Fries",
      tagline: "Crispy & Spicy – A Flavorful Delight!",
      description: "Finest potatoes cut into perfect fries, seasoned with a unique blend of aromatic Indian spices. Experience the perfect crunch and a burst of flavor in every bite. Ready in minutes, ideal for any time snacking.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/11/Classic-fries-55-min.png",
    },
    {
      id: 2,
      name: "Potato Cheese Shotz",
      tagline: "Cheesy Goodness in Every Round!",
      description: "Irresistibly crispy on the outside, gooey and cheesy on the inside. Our Potato Cheese Shotz are made with premium potatoes and a generous filling of melting cheese, perfect for appetizers or a quick snack.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/10/Potato-Cheese-Shotz-1-247x300.png",
    },
    {
      id: 3,
      name: "Herb Chilli Patty",
      tagline: "Spicy Herbs, Hearty Bites!",
      description: "A delightful blend of mashed potatoes, fresh herbs, and a spicy kick. These versatile patties are perfect for burgers, wraps, or as a side dish. Quick to prepare, rich in flavor.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/10/Herb-Chilli-Patty-1-247x300.png",
    },
    {
      id: 4,
      name: "Lime 'n' Mint Wedges",
      tagline: "Zesty & Refreshing Wedges!",
      description: "Experience a refreshing twist on classic potato wedges with the vibrant taste of lime and cool mint. Perfectly seasoned and golden-fried, these wedges are a tangy treat for your taste buds.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/10/Lime-N-mint-wedges-2-247x300.png",
    },
    {
      id: 5,
      name: "Spicy Wedges",
      tagline: "Unleash the Fiery Flavor!",
      description: "Bold and robust, our spicy wedges are coated with an intense blend of hot spices for those who love a kick. Crispy on the outside, fluffy on the inside – a truly satisfying snack.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/10/Potato-Cheese-Shotz-1-247x300.png",
    },
    {
      id: 6,
      name: "Veggie Finger",
      tagline: "Healthy & Deliciously Crispy!",
      description: "A wholesome and tasty snack packed with the goodness of mixed vegetables and potatoes. Perfectly golden and crunchy, Veggie Fingers are a great option for kids and adults alike.",
      imageUrl: "https://foodellafoods.com/wp-content/uploads/2023/10/Veggie-Finger-2-247x300.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel (5 seconds)
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, products.length]);

  // Animation variants for section header
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for product card
  const cardVariants = {
    enter: (direction) => ({ // Direction-aware entry
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (direction) => ({ // Direction-aware exit
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 }
      }
    })
  };

  // For directional animation (swipe)
  const [direction, setDirection] = useState(0); // 0: no direction, 1: next, -1: prev

  const handleDragEnd = (event, info) => {
    const threshold = 150; // pixels to swipe to trigger next/prev
    if (info.offset.x > threshold) {
      setDirection(-1); // Swiping right, going to previous
      goToPrev();
    } else if (info.offset.x < -threshold) {
      setDirection(1); // Swiping left, going to next
      goToNext();
    }
  };

  return (
    <section id="products-section" ref={sectionRef} className="relative w-full py-16 px-4 sm:px-8 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle Background Shapes/Patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Section Header */}
      <motion.div
        className="text-center mb-12 z-10 relative"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headerVariants}
      >
        <h3 className="text-xl sm:text-2xl font-semibold uppercase text-orange-600 mb-2 tracking-widest"> {/* Responsive text size */}
          Our Products
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"> {/* Responsive text size */}
          Where Taste and Freeze Unite
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4"> {/* Responsive text size */}
          Discover Foodella's exquisite range of frozen potato delights. Crafted from the finest farm ingredients, our products offer a symphony of savoury flavours, ready to bring joy to every meal.
        </p>
      </motion.div>

      {/* Product Carousel */}
      {/* min-h controlled responsively to avoid large empty gaps on small screens */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] z-10">
        <AnimatePresence initial={false} custom={direction} mode='wait'>
          <motion.div
            key={currentIndex}
            className="flex flex-col h-full lg:flex-row items-center justify-center
                       bg-yellow-500 rounded-3xl shadow-2xl
                       p-6 md:p-10 lg:p-16 w-full max-w-5xl // Responsive padding for the card
                       transform hover:scale-[1.01] transition-transform duration-300 ease-in-out
                       relative overflow-hidden"
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
          >
            {/* Background elements inside the orange card (Subtle gradient overlay) */}
            <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay pointer-events-none rounded-3xl"></div>

            {/* Left Product Image Area */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-2 sm:p-4"> {/* Responsive padding */}
              <motion.div
                className="relative w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] aspect-square flex flex-col items-center justify-center p-4 shadow-xl rounded-full" // Responsive max-width for image container, added rounded-full for the circle effect
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <img
                  src={products[currentIndex].imageUrl}
                  alt={products[currentIndex].name}
                  className="w-full h-auto object-contain z-10" // Ensure image is above pseudo-elements
                />
                
                <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-orange-100 text-orange-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-semibold">
                  Foodella™
                </span>
                {/* Optional: Add a subtle inner glow or reflection effect if desired */}
                <div className="absolute inset-0 rounded-full pointer-events-none
                                  bg-gradient-to-br from-transparent via-white/10 to-transparent
                                  mix-blend-overlay opacity-50"></div>
              </motion.div>
            </div>

            {/* Right Product Info Area */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left
                            p-2 sm:p-4 mt-8 lg:mt-0"> {/* Responsive padding and top margin for mobile */}
              <motion.h3
                className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 leading-tight" // Responsive text size
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {products[currentIndex].name}
              </motion.h3>
              <motion.p
                className="text-orange-100 text-base sm:text-lg mb-3 md:mb-4 max-w-md font-semibold" // Responsive text size
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {products[currentIndex].tagline}
              </motion.p>
              <motion.p
                className="text-white text-sm sm:text-base mb-4 md:mb-6 max-w-md opacity-90 leading-relaxed" // Responsive text size
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {products[currentIndex].description}
              </motion.p>

              <motion.ul
                className="text-white text-sm sm:text-base list-none space-y-2 text-left w-full max-w-sm" // Responsive text size
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, staggerChildren: 0.1 }}
              >
                {["Ready in 3 Mins", "Store in Freezer", "No Added Preservatives"].map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button
          onClick={() => { setDirection(-1); goToPrev(); }}
          className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg z-20
                     transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:scale-110"
          aria-label="Previous product"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </motion.button>
        <motion.button
          onClick={() => { setDirection(1); goToNext(); }}
          className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-orange-600 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg z-20
                     transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 transform hover:scale-110"
          aria-label="Next product"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>

      {/* Navigation Dots */}
      <motion.div
        className="flex justify-center mt-6 sm:mt-8 z-10 relative gap-2"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {products.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              const newDirection = index > currentIndex ? 1 : -1;
              setDirection(newDirection);
              goToSlide(index);
            }}
            className={`h-2 w-2 sm:h-3 sm:w-3 mx-1 rounded-full transition-all duration-300 ${ // Responsive dot size
              currentIndex === index ? 'bg-orange-600 w-4 sm:w-6' : 'bg-gray-400 hover:bg-orange-300' // Responsive active dot width
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}

export default HeroSection4;