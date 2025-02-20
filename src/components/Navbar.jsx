import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import AuthModals from "./auth/AuthModals";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Navigation Items with proper links
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Blog", path: "/blog" },
    { title: "Contact Us", path: "/contact" },
  ];

  // Check if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-2xl font-bold text-green-500 hover:text-green-600 transition-colors duration-300 cursor-pointer"
            >
              Asif
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative group cursor-pointer"
              >
                <Link
                  to={item.path}
                  className={`${
                    isActive(item.path)
                      ? "text-green-500"
                      : "text-gray-600 dark:text-gray-300"
                  } hover:text-green-500 transition-colors duration-300`}
                >
                  {item.title}
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300"></span>
              </motion.div>
            ))}
          </div>

          {/* Join Now Button & Dark Mode Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 cursor-pointer"
              onClick={() => setIsAuthOpen(true)}
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.path)
                  ? "text-green-500 bg-green-50 dark:bg-gray-800"
                  : "text-gray-600 dark:text-gray-300 hover:text-green-500 hover:bg-gray-50 dark:hover:bg-gray-800"
              } cursor-pointer transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <button
            className="w-full mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-300 cursor-pointer"
            onClick={() => setIsAuthOpen(true)}
          >
            Join Now
          </button>
        </div>
      </motion.div>

      {/* Auth Modals */}
      <AuthModals
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView="login"
      />
    </nav>
  );
};

export default Navbar;
