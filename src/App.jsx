import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import BackToTop from "./components/BackToTop";
import WhatsAppChat from "./components/WhatsAppChat";
import BlogDetails from "./Pages/BlogDetails";
import ServiceDetails from "./Pages/ServiceDetails";
import PortfolioDetails from "./Pages/PortfolioDetails";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for user's preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/portfolio/:id" element={<PortfolioDetails />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
}

export default App;
