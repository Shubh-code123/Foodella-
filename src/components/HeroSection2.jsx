import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function HeroSection2() {
  const sectionRef = useRef(null);
  // useInView hook check karega ki component screen par visible hai ya nahi
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 }); // 'once: true' matlab animation ek baar hi chale, 'amount: 0.5' matlab 50% dikhne par trigger ho

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2, // Children ko ek ke baad ek animate karega
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef} // Ref ko section par attach karein
      className="relative w-full min-h-[600px] flex flex-col md:flex-row items-center justify-center bg-yellow-500 py-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background image/pattern (optional, if you want something subtle) */}
      {/* <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-10 pointer-events-none"></div> */}

      {/* Left Column (Text Content) */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 p-4 md:pr-12"
        variants={textVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate jab component dikhe
      >
        <motion.h1
          className="text-white text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight mb-4"
          variants={itemVariants}
        >
          FoodellaFoods
        </motion.h1>
        <motion.h2
          className=" text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight mb-6"
          variants={itemVariants}
        >
          Potato Frozen Delights: <br /> The Taste Of Freshness, Anytime!
        </motion.h2>
        <motion.p
          className="text-white text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          variants={itemVariants}
        >
          Foodella Foods & Frozen commits to excellence, innovation, and customer
          satisfaction. We specialize in crafting an assortment of frozen delights from
          potatoes, that are bound to content your taste buds. Foodella Foods & Frozen
          stands as a premier destination for all your cravings, with products that cater to
          every plate.
        </motion.p>
       
      </motion.div>

      {/* Right Column (Image) */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center p-4 md:pl-12 mt-8 md:mt-0 z-10"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Animate jab component dikhe
      >
        <img
          src="https://thumbs.dreamstime.com/b/hands-peeling-potato-using-blue-handled-peeler-several-potatoes-nearby-wood-ideal-food-preparation-content-383314010.jpg" // Aapki upload ki hui image ka URL
          alt="Potato Frozen Delights"
          className="max-w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out object-cover max-h-[500px]"
          // object-cover ensures image fills the space without distortion
          // max-h-[500px] prevents image from becoming too large on very big screens
        />
      </motion.div>
    </section>
  );
}

export default HeroSection2;