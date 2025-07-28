import React from "react";
import Slider from "react-slick";
// FaArrowLeft, FaArrowRight ko hata denge aur inline SVG use karenge
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // REMOVE THIS LINE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://foodellafoods.com/wp-content/uploads/2023/08/1st-slider-scaled.jpg",
  "https://foodellafoods.com/wp-content/uploads/2023/08/6.jpg",
  "https://foodellafoods.com/wp-content/uploads/2023/08/2.jpg",
];

// CustomPrevArrow (inline SVG)
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 md:left-4 z-10 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-orange-200 cursor-pointer transition-colors duration-300"
    onClick={onClick}
  >
    <svg className="h-5 w-5 text-orange-600 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
    </svg>
  </div>
);

// CustomNextArrow (inline SVG)
const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 md:right-4 z-10 transform -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-orange-200 cursor-pointer transition-colors duration-300"
    onClick={onClick}
  >
    <svg className="h-5 w-5 text-orange-600 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    arrows: true,
    pauseOnHover: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet and smaller desktops (>=768px, <1024px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true, // Arrows remain for tablets
        }
      },
      {
        breakpoint: 768, // Mobile devices (<768px)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
          dots: true, 
          autoplaySpeed: 3000, 
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, 
          dots: true,
        }
      }
    ]
  };

  return (
    // Outer container: Full width, responsive padding.
    // Desktop height: calc(100vh - 80px) using Tailwind's arbitrary value syntax for lg and up.
    // Mobile height: Adjusted to 50vh for smaller screens.
    <section className="w-full overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6 h-[50vh] md:h-[60vh] lg:h-[calc(100vh-80px)]">
      {/* Inner wrapper for max-width and to make sure slider takes full height */}
      <div className="w-full max-w-[1400px] h-full relative">
        <Slider {...settings} className="w-full h-full">
          {images.map((src, i) => (
            <div key={i} className="w-full h-full flex items-center justify-center">
              <img
                src={src}
                alt={`slide-${i}`}
                // Image will take full width and height of its parent slide div.
                // object-cover will ensure it fills the space.
                // If images are pixelated, it's due to their low resolution, not object-cover.
                className="w-full h-[50vh] md:h-full object-fill rounded-xl shadow-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;