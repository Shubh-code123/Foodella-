import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import OurProduct from "./pages/OurProduct";
import CrinkleFriesPage from "./pages/CrinkleFriesPage";
import ClassicFrenchFriesPage from "./pages/ClassicFrenchFriesPage";
import MasalaChaskaFriesPage from "./pages/MasalaChaskaFriesPage";
import VegBurgerPattyPage from "./pages/VegBurgerPattyPage";
import HerbChilliPattyPage from "./pages/HerbChilliPattyPage";
import SpicyWedgesPage from "./pages/SpicyWedgesPage";
import LimeNMintWedgesPage from "./pages/LimeNMintWedgesPage";
import ChilliGarlicBitesPage from "./pages/ChilliGarlicBitesPage";
import HashBrown from "./components/HashBrown";
import HashBrownPage from "./pages/HashBrownPage";
import AlooTikkiPage from "./pages/AlooTikkiPage";
import PotatoCheeseShotzPage from "./pages/PotatoCheeseShotzPage";
import VeggieFingerPage from "./pages/VeggieFingerPage";
import AboutUsPage from "./pages/AboutUsPage";
import InfrastructurePage from "./pages/InfrastructurePage";
import BlogPage from "./pages/BlogPage";
import CrispyFriesBlogPostPage from "./pages/CrispyFriesBlogPostPage";
import HealthyEatingBlogPostPage from "./pages/HealthyEatingBlogPostPage";
import QualityAssuranceBlogPostPage from "./pages/QualityAssuranceBlogPostPage";
import InnovativeRecipesBlogPostPage from "./pages/InnovativeRecipesBlogPostPage";
import ContactUs from "./pages/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation(); // Current path ko track karega

  useEffect(() => {
    // Har pathname change par page ko top par scroll karein
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]); // pathname ko dependency array mein add karein

  return null; // Yeh component kuch render nahi karega
}

const App = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<OurProduct />} />
        <Route path="/Crinkle-fries" element={<CrinkleFriesPage />} />
        <Route path="/Classic-French-fries" element={<ClassicFrenchFriesPage />} />
        <Route path="/Masala-Chaska-fries" element={<MasalaChaskaFriesPage />} />
        <Route path="/Veg-Burger-Patty" element={<VegBurgerPattyPage />} />
        <Route path="/Herb-Chilli-Patty" element={<HerbChilliPattyPage />} />
        <Route path="/Spicy-Wedges" element={<SpicyWedgesPage />} />
        <Route path="/Lime-n-Mint-Wedges" element={<LimeNMintWedgesPage />} />
        <Route path="/Chilli-Garlic-Bites" element={<ChilliGarlicBitesPage />} />
        <Route path="/Hash-Brown" element={<HashBrownPage />} />
        <Route path="/Aloo-Tikki" element={<AlooTikkiPage />} />
        <Route path="/Potato-Cheese-Shotz" element={<PotatoCheeseShotzPage/>} />
        <Route path="/Veggie-Finger" element={<VeggieFingerPage/>} />
        <Route path="/AboutUs" element={<AboutUsPage/>} />
        <Route path="/Infrastructure" element={<InfrastructurePage/>} />
        <Route path="/Our-blog" element={<BlogPage/>} />
        <Route path="/CrispyFriesBlog" element={<CrispyFriesBlogPostPage/>} />
        <Route path="/HealthyEatingBlog" element={<HealthyEatingBlogPostPage/>} />
        <Route path="/QualityAssuranceBlog" element={<QualityAssuranceBlogPostPage/>} />
        <Route path="/InnovativeRecipesBlog" element={<InnovativeRecipesBlogPostPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
       
      </Routes>
      <Footer></Footer>
    </Router>
  );
};

export default App;
