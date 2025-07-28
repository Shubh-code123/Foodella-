import React from "react";

function HeroSection3() {
  return (
    <div
      className="relative w-full bg-cover bg-center overflow-hidden" // Added overflow-hidden
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1166983581/photo/boiling-oil-background.jpg?s=612x612&w=0&k=20&c=lsOXubA6XtM7qupHX4D0qy-ROnV8fNnm4c4WipNU-bc=)`,
        // Desktop height as requested, responsive min-height for mobile/tablet
        minHeight: "50vh", // Default min-height for small screens
        height: "auto", // Let content define height initially
      }}
      // Use Tailwind for responsive height for better control and consistency
      // For desktop, it will use calc(100vh - 80px)
      // For tablets, a reasonable min-h, and for mobile even smaller.
      // This helps manage gaps and ensures content is visible.
    >
      {/* Overlay with brightness */}
      <div className="absolute inset-0 bg-black opacity-75"></div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-center // Changed justify-evenly to justify-center for better control
                   text-center md:text-left h-full
                   py-12 px-4 md:px-8 lg:px-12 // Responsive vertical and horizontal padding
                   gap-8 md:gap-16 lg:gap-24 // Responsive gap between items
                   min-h-[50vh] md:min-h-[60vh] lg:min-h-[calc(100vh-80px)]" // Responsive min-height for content container
      >
        {/* Left image (Timer) */}
        <img
          src="https://foodellafoods.com/wp-content/uploads/elementor/thumbs/Untitled-1-r2tyftsamlkrqqb94qr59oezcezfv8jvwwq393st0s.png"
          alt="Ready in 3 min"
          className="w-32 md:w-40 lg:w-48 xl:w-56" // More granular control over image size
        />

        {/* Right Text */}
        <div className="max-w-xl text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Quick Fix For A Hungry Tummy In <br className="hidden md:inline" />{" "}
            {/* Break only on md and up */}
            Just 3 Minutes <br />
            With Our Number Of Product Ranges
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HeroSection3;