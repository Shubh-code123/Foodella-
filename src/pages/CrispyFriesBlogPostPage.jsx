import React, { useEffect, useRef,  } from 'react';
import { Link } from 'react-router-dom';

function CrispyFriesBlogPostPage() {
  const heroRef = useRef(null); // For scroll animation of hero
  const contentRef = useRef(null); // For scroll animation of content

  // Blog Post ka data directly yahan hai
  const blogPost = {
    id: 1,
    slug: 'the-secret-to-crispy-fries-foodellas-way',
    title: 'The Secret to Crispy Fries: Foodella’s Way',
    image: 'https://foodellafoods.com/wp-content/uploads/2023/08/chips-fries-ketchup-dark-background-unhealthy-food_752567-738.jpg', // Detail page ke liye thodi badi image
    excerpt: 'Discover the unique process Foodella uses to ensure every fry is perfectly crispy on the outside and fluffy on the inside. It\'s more than just potatoes; it\'s science and passion.',
    fullContent: `
      <p class="mb-4">At Foodella, we believe a perfect fry is an art form. It's not just about slicing potatoes; it's about a meticulous process that guarantees a golden, crispy exterior and a soft, fluffy interior every single time. Our journey to the perfect fry begins right at the farm.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Sourcing the Best Potatoes</h3>
      <p class="mb-4">We partner with local farmers who cultivate specific potato varieties known for their ideal starch content and low moisture. These aren't just any potatoes; they are hand-picked for their ability to transform into the ultimate fry.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">The Blanching Magic</h3>
      <p class="mb-4">Once harvested, our potatoes are carefully cut and then undergo a precise blanching process. This step is crucial – it partially cooks the potato, setting the stage for that sought-after texture. It also helps in reducing sugar content, preventing excessive browning during frying.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Our Unique Freezing Method</h3>
      <p class="mb-4">Unlike conventional methods, Foodella employs a rapid individual quick freezing (IQF) technique. This locks in freshness and prevents ice crystals from forming, which can lead to soggy fries. The rapid freezing creates micro-cracks on the surface, which become incredibly crispy when fried.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">The Final Touch: Your Kitchen</h3>
      <p class="mb-4">When you bring Foodella fries home, you're just a few minutes away from perfection. Whether you bake them in the oven or fry them, our precisely prepared fries will deliver a restaurant-quality experience right at your table. The key is to ensure your oil is hot enough, or your oven is preheated, to achieve that glorious crisp.</p>
      <p class="mb-4">So, the next time you enjoy Foodella fries, know that it's not just a snack; it's a testament to our passion for perfection, from farm to your fork.</p>
      <p class="text-lg italic text-gray-700 mt-6">#Foodella #CrispyFries #FoodScience #QualityFood</p>
    `,
    date: 'July 20, 2025',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Page top par scroll kare
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      if (heroRef.current) observer.observe(heroRef.current);
      if (contentRef.current) observer.observe(contentRef.current);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []); // Dependence array empty rakha, kyunki content static hai

  return (
    <div className="font-poppins bg-[#FFF8E1] text-gray-800 leading-relaxed overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] md:h-[70vh] bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center p-8 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
        style={{ backgroundImage: `url(${blogPost.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto md:pb-20 flex flex-col items-center justify-center relative z-10 text-white text-center gap-4">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-2 drop-shadow-lg animate-fade-in-up">
            {blogPost.title}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl opacity-90 animate-fade-in-up animation-delay-500">
            Published on {blogPost.date}
          </p>
          <Link
            to="/Our-blog"
            className="mt-6 inline-block bg-yellow-400 text-red-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
          >
            &#x2B05; Back to Blog {/* Left Arrow Unicode */}
          </Link>
        </div>
      </section>

      {/* Blog Content Section */}
      <section
        ref={contentRef}
        className="bg-white py-24 transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8 max-w-4xl">
          <div
            className="prose prose-lg mx-auto text-gray-800"
            dangerouslySetInnerHTML={{ __html: blogPost.fullContent }}
          />
        </div>
      </section>

      {/* Footer - Consistent with other pages */}
      <footer className="bg-red-900 text-yellow-100 text-center py-8 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Inspired by Taste. Driven by Quality.</p>
        </div>
      </footer>
    </div>
  );
}

export default CrispyFriesBlogPostPage;