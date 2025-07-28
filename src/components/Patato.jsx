import React from "react";
import { Link } from "react-router-dom"; // Import Link

const products = [
  {
    name: "Potato Cheese Shotz",
    image:
      "https://foodellafoods.com/wp-content/uploads/2023/10/Potato-Cheese-Shotz-1-247x300.png",
    path: "/Potato-Cheese-Shotz",
  },
];

function Patato({ id }) {
  return (
    <section
      id={id}
      className="bg-yellow-500 w-full px-4 py-16 flex items-center justify-center"
    >
      <div className="text-center w-full max-w-[1280px]">
        <h2 className="text-[42px] text-red-800 font-extrabold mb-12">
          Potato Cheese Shotz
        </h2>

        {/* Desktop Grid - Centered based on item count */}
        <div className="hidden md:flex justify-center">
          <div
            className={`grid gap-y-16 gap-x-20 ${
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
                  className="w-[280px] h-auto drop-shadow-xl"
                />
                <h3 className="text-red-800 font-semibold text-[22px] mt-6 max-w-[240px]">
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

        {/* Mobile Scrollable Section - Center if few items */}
        <div className="md:hidden overflow-x-auto px-2 flex justify-center">
          <div
            className={`flex gap-10 ${
              products.length < 2 ? "justify-center w-full" : ""
            }`}
          >
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
                <button className="bg-black text-white font-bold px-6 py-2 mt-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                  EXPLORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Patato;
