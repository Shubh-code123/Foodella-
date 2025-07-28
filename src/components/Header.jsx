import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import NavLink and useLocation

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation(); // Hook to get current URL location

  // --- Product Data (directly in Header) ---
  const products = [
    // Changed "allproducts" to "/products" to match a potential actual route
    { name: "All Products", to: "/allproducts" },
    // These are currently hash links. If they are intended to be *pages*,
    // they need corresponding routes in App.js (e.g., /products/fries).
    // For now, I'm assuming these are sections on the /products page.
    { name: "Fries", to: "/allproducts" },
    { name: "Veg Patty", to: "/allproducts" },
    { name: "Wedges", to: "/allproducts" },
    { name: "Chilli Garlic Bites", to: "/allproducts" },
    { name: "Hash Brown", to: "/allproducts" },
    { name: "Aloo Tikki", to: "/allproducts" },
    { name: "Potato Cheese Shotz", to: "/allproducts" },
    { name: "Veggie Finger", to: "/allproducts" },
  ];
  // --- End Product Data ---

  // Determine if any product-related route is currently active
  const isProductsActive = location.pathname.startsWith('/products');

  const navItems = [
    { name: "Home", to: "/" },
    {
      name: "Our Products",
      to: "/products", // Link to the main products page
      isDropdown: true,
      dropdownContent: products,
    },
    { name: "About Us", to: "/aboutUs" }, // Corrected path casing
    { name: "Infrastructure", to: "/infrastructure" }, // Corrected path casing
    { name: "Our Blog", to: "/Our-blog" }, // Corrected path casing
    { name: "Contact Us", to: "/contact-us" }, // Assuming this should be a page, not just a hash
  ];

  // Define common and active classes for navigation links
  const baseLinkClass = "font-medium px-3 py-1 rounded-md transition duration-300 flex items-center gap-1";
  const normalLinkClass = "text-orange-800 hover:text-white hover:bg-orange-500";
  // The active state background and text color
  const activeLinkClass = "text-white bg-red-600 hover:bg-red-700";

  // Function to apply classes based on NavLink's isActive prop
  const getNavLinkClass = ({ isActive }) =>
    `${baseLinkClass} ${isActive ? activeLinkClass : normalLinkClass}`;

  // Function to apply classes for the "Our Products" button (based on any product page being active)
  const getProductsButtonClass = () =>
    `${baseLinkClass} ${isProductsActive ? activeLinkClass : normalLinkClass}`;

  return (
    <header className="bg-yellow-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center h-20 gap-2">
          <Link to="/"> {/* Logo should link to the home page */}
            <img
              src="https://foodellafoods.com/wp-content/uploads/2023/09/cropped-foodellaGreen-logo1-1.jpg"
              alt="Foodella"
              className="h-20 w-auto transition-transform duration-300 hover:scale-110"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2 relative">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.isDropdown ? (
                // "Our Products" with dropdown functionality
                <button
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)} // Allows click-toggle on desktop too
                  className={getProductsButtonClass()} // Apply active class based on product routes
                >
                  {item.name}
                  {/* Dropdown arrow using SVG (replaced IoIosArrowForward) */}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              ) : (
                // Regular nav item using NavLink
                <NavLink
                  to={item.to}
                  className={getNavLinkClass} // Apply active class
                  // `end` prop for exact match for home page to prevent it from being active on all sub-routes
                  end={item.to === "/"}
                >
                  {item.name}
                </NavLink>
              )}

              {/* Products Dropdown Menu (Desktop) */}
              {item.isDropdown && productsDropdownOpen && (
                <div
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                  className="absolute left-0 mt-0 w-60 bg-white rounded-md shadow-lg py-1 z-50 origin-top-left animate-fade-in-down"
                >
                  {item.dropdownContent.map((product, prodIndex) => (
                    // For sub-links, use NavLink for actual routes, <a> for hash links
                    product.to.includes('#') ? (
                      <a
                        key={prodIndex}
                        href={product.to}
                        className="block px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-700 transition duration-200 text-sm flex items-center justify-between"
                        onClick={() => setProductsDropdownOpen(false)} // Close dropdown on click
                      >
                        {product.name}
                        {product.hasSubCategories && (
                          <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </a>
                    ) : (
                      <NavLink
                        key={prodIndex}
                        to={product.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-gray-800 hover:bg-orange-100 hover:text-orange-700 transition duration-200 text-sm flex items-center justify-between ${isActive ? 'bg-orange-200 text-orange-800' : ''}` // Active style for dropdown items
                        }
                        onClick={() => setProductsDropdownOpen(false)} // Close dropdown on click
                      >
                        {product.name}
                        {product.hasSubCategories && (
                          <svg className="w-4 h-4 ml-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                          </svg>
                        )}
                      </NavLink>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-orange-800"
          >
            {menuOpen ? (
              // Close icon SVG (replaced FaTimes)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon SVG (replaced FaBars)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-orange-50 px-4 pb-4 space-y-2 transition-all duration-300">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.isDropdown ? (
                // "Our Products" dropdown trigger in mobile
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className={`block w-full text-left ${baseLinkClass} ${productsDropdownOpen ? activeLinkClass : normalLinkClass}`}
                >
                  {item.name}
                  {/* Dropdown arrow SVG (rotated for open/close state) */}
                  <svg className={`w-4 h-4 ml-auto inline-block transition-transform duration-300 ${productsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              ) : (
                // Regular nav item in mobile
                <NavLink
                  to={item.to}
                  className={getNavLinkClass} // Apply active class
                  end={item.to === "/"}
                  onClick={() => {
                    setMenuOpen(false); // Close main mobile menu
                    setProductsDropdownOpen(false); // Close products dropdown too
                  }}
                >
                  {item.name}
                </NavLink>
              )}

              {/* Mobile Products Sub-menu */}
              {item.isDropdown && productsDropdownOpen && (
                <div className="ml-4 border-l border-orange-300 pl-4 space-y-1">
                  {item.dropdownContent.map((product, prodIndex) => (
                    // For sub-links in mobile, use NavLink for actual routes, <a> for hash links
                    product.to.includes('#') ? (
                      <a
                        key={prodIndex}
                        href={product.to}
                        className="block px-3 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-md text-sm"
                        onClick={() => {
                          setMenuOpen(false); // Close all menus on sub-item click
                          setProductsDropdownOpen(false);
                        }}
                      >
                        {product.name}
                      </a>
                    ) : (
                      <NavLink
                        key={prodIndex}
                        to={product.to}
                        className={({ isActive }) =>
                          `block px-3 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-md text-sm ${isActive ? 'bg-orange-200 text-orange-800' : ''}`
                        }
                        onClick={() => {
                          setMenuOpen(false); // Close all menus on sub-item click
                          setProductsDropdownOpen(false);
                        }}
                      >
                        {product.name}
                      </NavLink>
                    )
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;