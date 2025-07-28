import React, { useEffect, useRef,  } from 'react';
import { Link } from 'react-router-dom';

function InnovativeRecipesBlogPostPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Blog Post ka data directly yahan hai
  const blogPost = {
    id: 4,
    slug: 'innovative-recipes-beyond-the-frying-pan',
    title: 'Innovative Recipes: Beyond the Frying Pan',
    image: 'https://flavosys.com/wp-content/uploads/2024/04/frozen-aloo-tikki-990-removebg-preview.png', // Detail page ke liye image
    excerpt: 'Foodella products are incredibly versatile! Explore creative and delicious recipes that go beyond the usual, transforming your everyday meals.',
    fullContent: `
      <p class="mb-4">While Foodella products are perfect for a quick fry or bake, their versatility extends far beyond the conventional. We encourage you to unleash your culinary creativity and discover exciting new ways to incorporate our delicious frozen foods into your daily meals.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Crispy Potato Shots in a Curry</h3>
      <p class="mb-4">Yes, you read that right! Our Potato Cheese Shotz can add a delightful texture to your gravies. Briefly fry them for extra crispness, then gently fold them into a rich, tomato-based curry just before serving. The contrast of crispy exterior and soft, cheesy interior is a revelation.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Veggie Fingers in Wraps and Salads</h3>
      <p class="mb-4">Instead of just a snack, chop up our golden Veggie Fingers and add them to fresh wraps with some crunchy veggies and a zingy sauce for a quick, wholesome lunch. Or, crumble them over a hearty salad for an extra layer of texture and flavor.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">French Fries as a Pizza Topping</h3>
      <p class="mb-4">For the adventurous foodies, try using our classic French Fries as a quirky pizza topping! Bake them till crispy, then scatter them over your pizza during the last few minutes of baking. A drizzle of your favorite sauce on top of the fries can elevate this unique creation.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Mix-and-Match: Soups and Stews</h3>
      <p class="mb-4">Our range of frozen mixed vegetables can be a fantastic base for quick and nutritious soups and stews. Sauté some aromatics, add your favorite broth, Foodella veggies, and perhaps some lentils or chicken for a complete meal.</p>
      <p class="mb-4">Don't limit yourself to the obvious! Foodella products are designed to inspire culinary exploration. Share your innovative recipes with us on social media using #FoodellaRecipes!</p>
      <p class="text-lg italic text-gray-700 mt-6">#FoodellaRecipes #CookingTips #InnovativeFood #FrozenFoodIdeas</p>
    `,
    date: 'July 05, 2025',
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

export default InnovativeRecipesBlogPostPage;