import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// --- Import all your individual product section components ---
import FrenchFriesGrid from './FrenchFriesGrid';
import VegPatty from './VegPatty';
import Wedges from './Wedges';
import ChilliGarlic from './ChilliGarlic';
import HashBrown from './HashBrown';
import Alootikki from './AlooTikki';
import Patato from './Patato'; // Assuming this is Potato Cheese Shotz
import Veggie from './Veggie'; // Assuming this is Veggie Finger

// --- Product Categories Data (Left Section) ---
const categories = [
    { title: 'Fries', sub: ['Classic Fries', 'Masala Fries'], id: 'fries-section' },
    { title: 'Veg Patty', sub: ['Spicy Veg Patty', 'Cheese Veg Patty'], id: 'veg-patty-section' },
    { title: 'Wedges', sub: ['Spicy Wedges', 'Lime n Mint Wedges'], id: 'wedges-section' },
    { title: 'Chilli Garlic Bites', sub: [], id: 'chilli-garlic-bites-section' },
    { title: 'Hash Brown', sub: [], id: 'hash-brown-section' },
    { title: 'Aloo Tikki', sub: [], id: 'aloo-tikki-section' },
    { title: 'Potato Cheese Shotz', sub: [], id: 'potato-cheese-shotz-section' },
    { title: 'Veggie Finger', sub: [], id: 'veggie-finger-section' },
];

// --- Carousel Product Data (Right Section Top) ---
const productShowcaseItems = [
    {
        title: 'Crinkle Fries',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Crinkle-Fries-2-247x300.png',
        rightImage: 'https://foodfusion.com/wp-content/uploads/2020/01/Stuffed-hash-browns-Recipe-by-Food-fusion-1.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'fries-section'
    },
    {
        title: 'Hash Brown',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Hash-Brown-247x300.png',
        rightImage: 'https://www.foodfusion.com/wp-content/uploads/2020/01/Stuffed-hash-browns-Recipe-by-Food-fusion-1.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'hash-brown-section'
    },
    {
        title: 'Spicy Wedges',
        leftImage: "https://foodellafoods.com/wp-content/uploads/2023/10/Spicy-Wedges-247x300.png",
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/veg-.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'wedges-section'
    },
    {
        title: 'Masala Chaska Fries',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Masala-Chaska-Fries-1-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/masala-method2.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'fries-section'
    },
    {
        title: 'Potato Cheese Shotz', // Corrected typo
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Potato-Cheese-Shotz-1-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Allo-shotz.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'potato-cheese-shotz-section'
    },
    {
        title: 'Herb Chilli Patty',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Herb-Chilli-Patty-1-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/08/HerbChilliPatty_1000x1000-01_1400x_741dea46-871f-442e-b7b4-d48ae44e377e.webp',
        bgColor: 'bg-orange-700',
        targetId: 'veg-patty-section'
    },
    {
        title: 'Aloo Tikki',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Aloo-Tikki-F-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/aloo.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'aloo-tikki-section'
    },
    {
        title: 'Chilli Garlic Bites',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Chilli-Garlic-Bites-1-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/chhhiii.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'chilli-garlic-bites-section'
    },
    {
        title: 'Classic Fries',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Classic-fries-6-247x300.png',
        rightImage: 'https://www.mccainindia.com/wp-content/uploads/2023/07/chilli-garlic-bites.png',
        bgColor: 'bg-orange-700',
        targetId: 'fries-section'
    },
    {
        title: 'Veg Burger Patty',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/11/Veg-burger-Petty-min.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/veg-burger-method-scaled.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'veg-patty-section'
    },
    {
        title: 'Veggie Finger',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Veggie-Finger-2-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/veg-fing-method5.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'veggie-finger-section'
    },
    {
        title: 'Lime-N-Mint Wedges',
        leftImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/Lime-N-mint-wedges-2-247x300.png',
        rightImage: 'https://foodellafoods.com/wp-content/uploads/2023/10/mint.jpg',
        bgColor: 'bg-orange-700',
        targetId: 'wedges-section'
    },
];

function AllProducts() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

    const mainContentRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % productShowcaseItems.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + productShowcaseItems.length) % productShowcaseItems.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentProduct = productShowcaseItems[currentSlide];

    const slideVariants = {
        enter: {
            x: '100%',
            opacity: 0,
        },
        center: {
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        },
        exit: {
            x: '-100%',
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleScrollToSection = (id) => {
        if (id && mainContentRef.current) {
            const element = mainContentRef.current.querySelector(`#${id}`);
            if (element) {
                // Adjust yOffset based on where your main header is
                // If there's a fixed header, its height should be considered
                const yOffset = -80; // Example offset for a fixed header of 80px
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
        // Close the menu after selecting a category on mobile
        setIsMenuOpen(false);
    };

    const handleCategoryClick = (index, id) => {
        if (categories[index].sub.length > 0) {
            setOpenCategoryIndex(openCategoryIndex === index ? null : index);
        } else {
            handleScrollToSection(id);
        }
    };

    return (
        // Changed flex-col md:flex-row to allow main content to wrap on mobile
        <div className="relative flex flex-col md:flex-row min-h-screen bg-orange-50">

            {/* --- Hamburger Icon (Visible only on mobile/small screens) --- */}
            {/* Added a higher z-index to ensure it's always on top */}
            <button
                className="md:hidden fixed top-28 left-4 z-[60] p-3 bg-orange-600 text-white rounded-full shadow-lg"
                onClick={toggleMenu}
                aria-label="Open menu"
            >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* --- Mobile Menu Overlay (Click to close menu) --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* --- Left Menu Section (Fixed on desktop, slides in/out on mobile) --- */}
            <nav className={`
                w-full md:w-1/5 bg-red-800 p-6 md:p-8 border-r border-gray-200 shadow-lg
                fixed top-0 bottom-0 left-0 h-screen overflow-y-auto
                transform transition-transform duration-300 ease-in-out
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                md:translate-x-0
                z-50
                flex flex-col
            `}>
                {/* Close Button for Mobile Menu (visible on mobile only, inside the menu) */}
                <button
                    className="absolute top-4 right-4 md:hidden p-2 text-yellow-500 hover:text-gray-900"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <FaTimes size={24} />
                </button>

                {/* Product Categories Header */}
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-orange-600 border-b-4 border-orange-300 pb-3 inline-block">
                    Categories
                </h2>
                {/* Scrollable area for categories on smaller screens if they overflow */}
                <ul className="space-y-3 md:space-y-4 flex-grow overflow-y-auto pb-4">
                    {categories.map((cat, i) => (
                        <li key={i} className="group">
                            <div
                                className="flex justify-between items-center font-bold text-yellow-500 text-base md:text-lg py-2 px-3 md:px-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-orange-100 hover:text-orange-700"
                                onClick={() => handleCategoryClick(i, cat.id)}
                            >
                                {cat.title}
                                {cat.sub.length > 0 && (
                                    <FaChevronDown
                                        size={14}
                                        className={`transform transition-transform duration-300 ${openCategoryIndex === i ? 'rotate-180' : ''}`}
                                    />
                                )}
                            </div>
                            {cat.sub.length > 0 && (
                                <motion.ul
                                    initial={false}
                                    animate={{ height: openCategoryIndex === i ? 'auto' : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-6 md:ml-8 mt-1 md:mt-2 space-y-1 text-sm md:text-base text-gray-200 border-l-2 border-orange-200 pl-3 md:pl-4 overflow-hidden"
                                >
                                    {cat.sub.map((subItem, j) => (
                                        <li
                                            key={j}
                                            className="py-1 hover:text-orange-300 cursor-pointer transition-colors duration-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleScrollToSection(cat.id);
                                            }}
                                        >
                                            {subItem}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-800 to-transparent -z-10"></div>
            </nav>

            {/* --- Right Section (Main scrollable content area) --- */}
            {/* Added md:pt-0 to remove top padding on desktop, and md:w-[80%] to fill remaining width */}
            {/* On mobile, pt-[70px] pushes content below the hamburger, md:pt-0 ensures it's at the top */}
            <main ref={mainContentRef} className="flex-1 w-full md:w-[80%] md:ml-[20%] flex flex-col items-center p-4 md:p-6 bg-orange-50 relative overflow-y-auto pt-[70px] md:pt-0">
                {/* "All Product" Title */}
                {/* Removed mt-12 md:mt-0 to let it naturally flow from the top */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 md:mb-8">
                    All Products
                </h2>

                <div className="w-full max-w-8xl relative flex justify-center items-center">
                    {/* Left Navigation Arrow Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-100 z-20 transition-all shadow-md ml-2"
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft size={24} />
                    </button>

                    {/* Main Carousel Display Area */}
                    <div className="relative w-full max-w-4xl h-[350px] md:h-[350px] overflow-hidden rounded-[60px] shadow-2xl">
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div
                                key={currentSlide}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className={`relative flex flex-col md:flex-row items-center justify-center w-full h-full rounded-[60px] ${currentProduct.bgColor} overflow-hidden p-4 md:p-0`}>
                                    <div className="flex bg-yellow-500 justify-center items-center w-full md:w-1/3 h-1/3 md:h-full order-1 md:order-1
                                        rounded-t-[60px] md:rounded-l-none md:rounded-r-[60px]">
                                        <img
                                            src={currentProduct.leftImage}
                                            alt="Product Packet"
                                            className="max-h-full max-w-[80%] md:max-w-[100%] object-contain"
                                        />
                                    </div>

                                    <div className={`relative flex flex-col justify-center items-center text-center p-2 md:p-6 w-full md:w-1/3 h-1/3 md:h-50 order-2 md:order-2
                                        rounded-[60px]`}>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-yellow-300 mb-2 md:mb-4 leading-tight">
                                            {currentProduct.title}
                                        </h3>
                                        <button
                                            className="bg-black text-white text-sm sm:text-base md:text-lg font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 mt-2"
                                            onClick={() => handleScrollToSection(currentProduct.targetId)}
                                        >
                                            Explore Range
                                        </button>
                                    </div>
                                    <div className="flex bg-yellow-500 justify-center items-center w-full md:w-1/3 h-1/3 md:h-full order-3 md:order-3
                                        rounded-b-[60px] md:rounded-r-none md:rounded-l-[60px]">
                                        <img
                                            src={currentProduct.rightImage}
                                            alt="Product Cutlets"
                                            className="max-h-full max-w-[80%] md:max-w-[100%] object-contain"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* Right Navigation Arrow Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white bg-opacity-70 text-gray-800 hover:bg-opacity-100 z-20 transition-all shadow-md mr-2"
                        aria-label="Next slide"
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>

                {/* --- Dot Indicators for Carousel Navigation --- */}
                <div className="flex justify-center mt-6 md:mt-10 space-x-3">
                    {productShowcaseItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all cursor-pointer duration-300 shadow-md ${
                                index === currentSlide ? 'bg-yellow-400' : 'bg-white opacity-80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* --- Render your individual product grid components with unique IDs --- */}
                <FrenchFriesGrid id="fries-section" />
                <VegPatty id="veg-patty-section" />
                <Wedges id="wedges-section" />
                <ChilliGarlic id="chilli-garlic-bites-section" />
                <HashBrown id="hash-brown-section" />
                <Alootikki id="aloo-tikki-section" />
                <Patato id="potato-cheese-shotz-section" />
                <Veggie id="veggie-finger-section" />

            </main>
        </div>
    );
}

export default AllProducts;