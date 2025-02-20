import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaCalendar, FaTag } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
// Import Swiper modules
import { Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/Homepageimg/Blog-img/blog-1.avif";
import img2 from "../../assets/Homepageimg/Blog-img/blog-2.jpg";
import img3 from "../../assets/Homepageimg/Blog-img/blog-3.avif";
import img4 from "../../assets/Homepageimg/Blog-img/blog-4.jpg";
import profile1 from "../../assets/Homepageimg/Blog-img/pro-5.avif";
import profile2 from "../../assets/Homepageimg/Blog-img/pro-2.jpg";
import profile3 from "../../assets/Homepageimg/Blog-img/pro-3.jpg";
import profile4 from "../../assets/Homepageimg/Blog-img/pro-4.jpg";

const BlogSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring the latest trends and technologies shaping the web development landscape in 2024 and beyond.",
      date: "Mar 15, 2024",
      category: "Technology",
      image: img1,
      readTime: "5 min read",
      author: {
        name: "John Doe",
        avatar: profile1,
      },
    },
    {
      title: "Designing for Accessibility",
      excerpt:
        "Best practices and guidelines for creating inclusive digital experiences that work for everyone.",
      date: "Mar 12, 2024",
      category: "Design",
      image: img2,
      readTime: "4 min read",
      author: {
        name: "Sarah Smith",
        avatar: profile2,
      },
    },
    {
      title: "Mobile-First Development",
      excerpt:
        "Why taking a mobile-first approach is crucial for modern web development and user experience.",
      date: "Mar 10, 2024",
      category: "Development",
      image: img3,
      readTime: "6 min read",
      author: {
        name: "Mike Johnson",
        avatar: profile3,
      },
    },
    {
      title: "Mobile-First Development",
      excerpt:
        "Why taking a mobile-first approach is crucial for modern web development and user experience.",
      date: "Mar 10, 2024",
      category: "Development",
      image: img4,
      readTime: "6 min read",
      author: {
        name: "Mike Johnson",
        avatar: profile4,
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Latest from Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
              Blog
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            Stay updated with our latest insights and industry trends
          </motion.p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} inView={inView} />
          ))}
        </div>

        {/* Tablet View */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} post={post} index={index} inView={inView} />
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-green-500/50",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-green-500",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="pb-12"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <BlogCard post={post} index={index} inView={inView} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// BlogCard component
const BlogCard = ({ post, index, inView }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
  >
    {/* Image Container */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500 text-white">
          <FaTag className="mr-1" /> {post.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      {/* Meta Info */}
      <div className="flex items-center text-xs text-gray-500 mb-3">
        <span className="flex items-center">
          <FaCalendar className="mr-1" /> {post.date}
        </span>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-500 transition-colors duration-300 line-clamp-2">
        {post.title}
      </h3>

      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{post.excerpt}</p>

      {/* Author Info & Read More */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-xs font-medium text-gray-900">
            {post.author.name}
          </span>
        </div>

        <Link to={`/blog/${post.id}`}>
          <motion.button
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-sm text-green-500 font-medium group cursor-pointer"
          >
            Read More
            <FaArrowRight className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.article>
);

export default BlogSection;
