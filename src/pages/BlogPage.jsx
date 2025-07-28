import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const sectionRefs = useRef([]); // For scroll animations

  // --- Sample Blog Post Data (Replace with your actual blog posts) ---
  const blogPosts = [
    {
      id: 1,
      title: 'The Secret to Crispy Fries: Foodella’s Way',
      image: 'https://foodellafoods.com/wp-content/uploads/2023/08/chips-fries-ketchup-dark-background-unhealthy-food_752567-738.jpg',
      excerpt: 'Discover the unique process Foodella uses to ensure every fry is perfectly crispy on the outside and fluffy on the inside. It\'s more than just potatoes; it\'s science and passion.',
      date: 'July 20, 2025',
      link: '/CrispyFriesBlog', // Link to a specific post section or detail page
    },
    {
      id: 2,
      title: 'Healthy Eating Made Easy with Frozen Veggies',
      image: 'https://foodella.wordpress.com/wp-content/uploads/2014/09/wpid-picsart_1411487145295-1.jpg?w=640',
      excerpt: 'Frozen vegetables are a powerhouse of nutrition and convenience. Learn how Foodella locks in freshness and makes healthy meals a breeze for your family.',
      date: 'July 15, 2025',
      link: '/HealthyEatingBlog',
    },
    {
      id: 3,
      title: 'Behind the Scenes: Foodella’s Quality Assurance',
      image: 'https://foodellafoods.com/wp-content/uploads/2023/12/foodellafoods-1024x576.webp',
      excerpt: 'Take a peek into our rigorous quality control processes. From farm to freezer, we ensure every Foodella product meets the highest standards of safety and taste.',
      date: 'July 10, 2025',
      link: '/QualityAssuranceBlog',
    },
    {
      id: 4,
      title: 'Innovative Recipes: Beyond the Frying Pan',
      image: 'https://flavosys.com/wp-content/uploads/2024/04/frozen-aloo-tikki-990-removebg-preview.png',
      excerpt: 'Foodella products are incredibly versatile! Explore creative and delicious recipes that go beyond the usual, transforming your everyday meals.',
      date: 'July 05, 2025',
      link: '/InnovativeRecipesBlog',
    },
  ];
  // --- End Sample Blog Post Data ---

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-16');
          observer.unobserve(entry.target); // Unobserve once animated
        }
      });
    }, observerOptions);

    const timeoutId = setTimeout(() => {
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      sectionRefs.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="font-poppins bg-[#FFF8E1] text-gray-800 leading-relaxed overflow-hidden">

      {/* Hero Section - Blog */}
      <section className="relative h-[80vh] md:h-[100vh] bg-gradient-to-br from-red-600 to-yellow-400 flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto md:pb-20 flex flex-col items-center justify-center relative z-10 text-white text-center gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-up">
            Foodella Insights: Our Blog
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mb-8 opacity-90 animate-fade-in-up animation-delay-500">
            Explore delicious recipes, healthy eating tips, company news, and behind-the-scenes stories from Foodella.
          </p>
          <img
            src="https://foodellafoods.com/wp-content/uploads/2023/08/6.jpg" // Replace with a relevant blog hero image
            alt="Foodella Blog"
            className="w-full max-w-2xl rounded-xl shadow-2xl mt-8 transform scale-95 hover:scale-100 transition-transform duration-500 animate-scale-in-delay"
          />
        </div>
      </section>

      {/* Blog Posts Grid Section */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="relative bg-[#FFF8E1] py-24 pb-16 overflow-hidden transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-extrabold text-red-600 mb-16 animate-fade-in-up">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 group flex flex-col"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold text-red-700 mb-4 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <p className="text-sm text-gray-500 mb-6 italic">
                    Published: {post.date}
                  </p>
                  <Link
                    to={post.link} // This would ideally link to a specific blog post detail page
                    className="inline-block mt-auto bg-yellow-400 text-red-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 self-start"
                  >
                    Read More &#x27A4; {/* Right arrow Unicode */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Newsletter Subscription */}
      {/* <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="bg-red-700 text-white py-20 text-center transform translate-y-16 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            Stay Updated with Foodella
          </h2>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest blog posts, recipes, and exclusive offers!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 p-4 rounded-full border-2 border-yellow-400 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            />
            <button className="bg-yellow-400 text-red-800 font-extrabold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </section> */}

      {/* Footer - Consistent with other pages */}
      <footer className="bg-red-900 text-yellow-100 text-center py-8 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Inspired by Taste. Driven by Quality.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;