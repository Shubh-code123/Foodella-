import React, { useEffect, useRef, } from 'react';
import { Link } from 'react-router-dom';

function HealthyEatingBlogPostPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Blog Post ka data directly yahan hai
  const blogPost = {
    id: 2,
    slug: 'healthy-eating-made-easy-with-frozen-veggies',
    title: 'Healthy Eating Made Easy with Frozen Veggies',
    image: 'https://foodella.wordpress.com/wp-content/uploads/2014/09/wpid-picsart_1411487145295-1.jpg?w=640', // Detail page ke liye image
    excerpt: 'Frozen vegetables are a powerhouse of nutrition and convenience. Learn how Foodella locks in freshness and makes healthy meals a breeze for your family.',
    fullContent: `
      <p class="mb-4">In today's fast-paced world, maintaining a healthy diet can be challenging. Fresh produce, while ideal, often spoils quickly, leading to food waste and a scramble for meal solutions. This is where Foodella's frozen vegetables come to the rescue!</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Nutrient Powerhouses</h3>
      <p class="mb-4">Many people believe fresh is always best, but did you know that frozen vegetables are often just as, if not more, nutritious? Vegetables destined for freezing are picked at their peak ripeness, when their nutrient content is highest. They are then rapidly blanched and frozen, locking in vitamins, minerals, and antioxidants.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Convenience at Your Fingertips</h3>
      <p class="mb-4">Foodella's frozen vegetables eliminate the need for washing, peeling, and chopping, saving you precious time in the kitchen. They are ready to use straight from the freezer, making them perfect for quick weeknight dinners, meal prepping, and impromptu healthy additions to any dish.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Reduce Food Waste</h3>
      <p class="mb-4">With frozen vegetables, you only use what you need, and the rest stays perfectly preserved in the freezer. This significantly reduces food waste compared to fresh produce, which often spoils before it can be fully consumed.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Versatility in Cooking</h3>
      <p class="mb-4">From stir-fries and soups to casseroles and side dishes, Foodella's frozen vegetables are incredibly versatile. They retain their texture and vibrant color, adding both nutrition and appeal to your meals.</p>
      <p class="mb-4">Make healthy eating easy, convenient, and delicious with Foodella's range of high-quality frozen vegetables. Your body and your busy schedule will thank you!</p>
      <p class="text-lg italic text-gray-700 mt-6">#HealthyEating #FrozenVeggies #FoodellaTips #MealPrep</p>
    `,
    date: 'July 15, 2025',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  }, []);

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

export default HealthyEatingBlogPostPage;