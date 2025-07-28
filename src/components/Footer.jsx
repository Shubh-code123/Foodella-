import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

import { FaInstagram, FaLinkedin, FaFilePdf } from "react-icons/fa"; // Ensure FaFilePdf is here

function Footer() {
  const [showBrochureIcon, setShowBrochureIcon] = useState(false);

  const usefulLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/aboutUs" },
    { name: "Our Products", to: "/allproducts" }, // Assuming this is the route for all products
    { name: "Infrastructure", to: "/infrastructure" },
    { name: "Our blog", to: "/Our-blog" }, // Assuming a /quality route
    { name: "Contact Us", to: "/contact-us" },
  ];



  const openPdfBrochure = () => {
    console.log("PDF button clicked! Attempting to open PDF."); // CHECK YOUR BROWSER CONSOLE FOR THIS MESSAGE
    // IMPORTANT: Verify this URL. Copy-paste it into a new browser tab to ensure it opens your PDF.
    const pdfUrl = "https://foodellafoods.com/wp-content/uploads/2023/10/Foodellafood-1.pdf"; 
    
    window.open(pdfUrl, "_blank"); // Opens the PDF in a new tab
    setShowBrochureIcon(false); // Optionally hide the icon after opening PDF
  };

  return (
    <footer className="bg-gradient-to-br from-yellow-400 to-red-600 shadow-md border-t-4 border-orange-500 pt-10 relative z-10">
      <div className="container px-4 md:px-8 lg:px-15 flex w-full flex-col lg:flex-row justify-evenly">
        {/* Corporate Office */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Corporate Office</h3>
          <img src="https://foodellafoods.com/wp-content/uploads/2023/09/cropped-foodellaGreen-logo1-1.jpg" alt="Foodella Logo" className="w-40 mb-2 mx-auto lg:mx-0" />
          <p className="text-[16px] font-semibold text-gray-700 mb-4">
            Foodella Foods, Plot no.362,<br />
            Scheme no.78, Pratham Phase 2, Dewas naka,<br />
            Indore (Madhya Pradesh) – 452001.
          </p>
          <div className="flex gap-3 justify-center lg:justify-start">
            <a href="https://www.instagram.com/foodellafoods?igsh=MTZhNTlneXhwOGxpbQ==" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-600 p-2 rounded-full hover:scale-110 transition-transform duration-200">
              <FaInstagram size={20}/>
            </a>
            <a href="https://www.linkedin.com/company/yourfoodellalinkedin" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 p-2 rounded-full hover:scale-110 transition-transform duration-200">
              <FaLinkedin size={20}/>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Useful Links</h3>
          <ul className="text-l text-gray-700 font-semibold space-y-2 list-none p-0">
            {usefulLinks.map((item, index) => ( // Use 'item' to represent each link object
              <li key={index} className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-orange-500">›</span>
                {/* Use Link component for internal navigation */}
                <Link to={item.to} className="hover:underline hover:text-red-700 transition-colors duration-200">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Certificates */}
        <div className="lg:w-1/3 text-center lg:text-left">
          <h3 className="text-xl font-semibold text-red-700 mb-4">Certificates</h3>
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <img src="https://images.indianexpress.com/2016/08/fssai-759.jpg?w=414" alt="FSSAI" className="h-16 bg-blend-saturation object-contain" />
            <img src="https://validafoods.com/assets/img/certificate/3-min.png" alt="MSME" className="h-16 object-contain" />
            <img src="https://pbs.twimg.com/profile_images/864158264010854401/VKNw8m6A_400x400.jpg" alt="GST" className="h-16 object-contain" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-red-900 mt-10 py-3 px-6 text-sm flex flex-col md:flex-row justify-between items-center text-white">
        <p>Copyright © {new Date().getFullYear()} | All Rights Reserved.</p>
        <p className="font-semibold text-yellow-100 mt-2 md:mt-0">Web Design By [Your Name/Company Name]</p>
      </div>

      {/* Floating Buttons Container */}
      {/* This container needs to be "fixed" and have a high "z-index" to float above everything else */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-3">
        {/* Product Brochure Icon (conditionally rendered) */}
        {showBrochureIcon && (
          <button
            onClick={openPdfBrochure}
            className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-lg transition-transform duration-300 transform -translate-y-2 opacity-0 animate-fade-in-up-brochure"
            title="Open Product Brochure"
          >
            <FaFilePdf size={24} />
          </button>
        )}

        {/* Main Floating Button */}
        <button
          onClick={openPdfBrochure}
          className="bg-yellow-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          title="Toggle Options"
        >
          <span className="text-xl">📖</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;