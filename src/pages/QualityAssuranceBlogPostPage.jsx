import React, { useEffect, useRef,  } from 'react';
import { Link } from 'react-router-dom';

function QualityAssuranceBlogPostPage() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Blog Post ka data directly yahan hai
  const blogPost = {
    id: 3,
    slug: 'behind-the-scenes-foodellas-quality-assurance',
    title: 'Behind the Scenes: Foodella’s Quality Assurance',
    image: 'https://foodellafoods.com/wp-content/uploads/2023/12/foodellafoods-1024x576.webp', // Detail page ke liye image
    excerpt: 'Take a peek into our rigorous quality control processes. From farm to freezer, we ensure every Foodella product meets the highest standards of safety and taste.',
    fullContent: `
      <p class="mb-4">At Foodella, quality isn't just a word; it's the foundation of everything we do. We understand that when you choose our products, you're trusting us with your family's meals. That's why our commitment to quality assurance is unwavering, spanning every stage of our production process.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Farm to Fork Traceability</h3>
      <p class="mb-4">Our journey begins with meticulously selecting our suppliers. We work closely with trusted farmers who adhere to sustainable and ethical agricultural practices. Every ingredient is traceable back to its origin, giving us full transparency and control over what goes into our products.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">State-of-the-Art Processing</h3>
      <p class="mb-4">In our modern facilities, we employ advanced technology and automated systems to minimize human contact and maximize hygiene. Our production lines are designed to prevent cross-contamination and maintain optimal conditions for food processing.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Rigorous Testing and Inspection</h3>
      <p class="mb-4">Before, during, and after processing, our products undergo multiple layers of quality checks. Our in-house laboratories perform extensive microbiological and sensory tests to ensure every batch meets our stringent safety and taste standards. We also conduct regular audits of our facilities and processes.</p>
      <h3 class="text-2xl font-bold text-red-700 mb-3">Cold Chain Integrity</h3>
      <p class="mb-4">Maintaining the cold chain is paramount for frozen food quality. From the moment our products are frozen until they reach your store, we ensure consistent temperature control. Our advanced logistics and storage solutions guarantee that freshness and quality are preserved.</p>
      <p class="mb-4">Foodella's dedication to quality assurance means you can always trust that you're serving the best to your family. It's our promise of excellence in every bite.</p>
      <p class="text-lg italic text-gray-700 mt-6">#FoodSafety #QualityAssurance #FoodellaStandards #BehindTheScenes</p>
    `,
    date: 'July 10, 2025',
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

export default QualityAssuranceBlogPostPage;