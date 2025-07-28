import React from "react";
import { Link } from "react-router-dom"; // Import Link

const products = [
  {
    name: "Classic French Fries",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/10/Classic-fries-6-247x300.png",
    // Add a unique path for each product
    path: "/Classic-French-Fries",
  },
  {
    name: "Crinkle Fries",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/10/Crinkle-Fries-2-247x300.png",
    path: "/Crinkle-fries", // This will link to your Crinkle Fries page
  },
  {
    name: "Masala Chaska Fries",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/10/Masala-Chaska-Fries-1-247x300.png",
    path: "/Masala-Chaska-Fries",
  },
];

function FrenchFriesGrid({ id }) {
  return (
    <section
      id={id}
      className="bg-[#f9b701] w-full px-4 py-16 my-12 flex items-center justify-center"
    >
      <div className="text-center w-full max-w-[1280px]">
        <h2 className="text-[42px] text-[#c8102e] font-extrabold mb-12">
          French Fries
        </h2>

        {/* Desktop Grid - Centered */}
        <div className="hidden md:flex justify-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-20`}
          >
            {products.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[280px] h-auto drop-shadow-xl"
                />
                <h3 className="text-[#c8102e] font-semibold text-[22px] mt-6 max-w-[240px]">
                  {item.name}
                </h3>
                {/* Use Link component for navigation */}
                <Link to={item.path}>
                  <button className="bg-black text-white font-bold px-8 py-2 mt-4 rounded-full shadow-lg hover:scale-105 transition-transform">
                    EXPLORE
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scrollable Section */}
        <div className="flex md:hidden gap-10 overflow-x-auto px-2 scrollbar-hide">
          {products.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[220px] flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-[180px] h-auto drop-shadow-xl"
              />
              <h3 className="text-[#c8102e] font-semibold text-[20px] mt-4 max-w-[240px]">
                {item.name}
              </h3>
              {/* Use Link component for navigation */}
              <Link to={item.path}>
                <button className="bg-black text-white font-bold px-6 py-2 mt-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                  EXPLORE
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrenchFriesGrid;