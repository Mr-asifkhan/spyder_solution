import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blog = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // For mobile slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const blogPosts = [
    {
      title: "The Future of Web Development",
      category: "Technology",
      date: "March 15, 2024",
      image: "/blog1.jpg",
      excerpt:
        "Exploring the latest trends and technologies shaping the web development landscape.",
      author: "John Doe",
      authorRole: "Senior Developer",
      authorImage: "/author1.jpg",
    },
    {
      title: "UI/UX Design Principles",
      category: "Design",
      date: "March 12, 2024",
      image: "/blog2.jpg",
      excerpt:
        "Essential principles for creating user-friendly and engaging digital experiences.",
      author: "Sarah Smith",
      authorRole: "Lead Designer",
      authorImage: "/author2.jpg",
    },
    {
      title: "Digital Marketing Strategies",
      category: "Marketing",
      date: "March 10, 2024",
      image: "/blog3.jpg",
      excerpt:
        "Effective strategies to boost your online presence and reach your target audience.",
      author: "Mike Johnson",
      authorRole: "Marketing Director",
      authorImage: "/author3.jpg",
    },
    {
      title: "AI in Modern Business",
      category: "Technology",
      date: "March 8, 2024",
      image: "/blog4.jpg",
      excerpt:
        "How artificial intelligence is transforming business operations and decision-making.",
      author: "Emily Chen",
      authorRole: "AI Specialist",
      authorImage: "/author4.jpg",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < blogPosts.length - 1) {
      setCurrentSlide(currentSlide + 1);
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-r from-emerald-500 to-emerald-600"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Insights, updates, and stories from our team
          </motion.p>
        </div>
      </motion.section>

      {/* Blog Posts Grid/Slider */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} inView={inView} />
            ))}
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden relative">
            <div
              ref={sliderRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollBehavior: "smooth",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="flex-none w-full snap-center px-4"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <BlogCard post={post} index={index} inView={inView} />
                </div>
              ))}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex justify-center items-center mt-4 gap-3">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`p-1.5 rounded-full ${
                  currentSlide === 0
                    ? "bg-gray-200 text-gray-400"
                    : "bg-emerald-500 text-white"
                }`}
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {blogPosts.map((_, index) => (
                  <div
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      currentSlide === index ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                disabled={currentSlide === blogPosts.length - 1}
                className={`p-1.5 rounded-full ${
                  currentSlide === blogPosts.length - 1
                    ? "bg-gray-200 text-gray-400"
                    : "bg-emerald-500 text-white"
                }`}
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 dark:text-white mb-6"
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 dark:text-gray-300 mb-8"
            >
              Get the latest articles and insights delivered straight to your
              inbox.
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:border-emerald-500 dark:text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post, index, inView }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col max-w-sm mx-auto hover:scale-105"
  >
    <div className="relative">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover"
      />
      <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs px-2.5 py-0.5 rounded-full">
        {post.category}
      </span>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
        {post.date}
      </div>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {post.title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <img
            src={post.authorImage}
            alt={post.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xs font-medium text-gray-800 dark:text-white">
              {post.author}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {post.authorRole}
            </p>
          </div>
        </div>
        <Link to={`/blog/${post.id}`}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-emerald-500 hover:text-emerald-600 font-medium cursor-pointer"
          >
            Read More →
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.article>
);

export default Blog;
