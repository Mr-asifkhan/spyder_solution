import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCalendar, FaUser, FaTag, FaClock, FaShare } from "react-icons/fa";
import { useState } from "react";
import image from "../assets/Homepageimg/Blog-img/blog-2.jpg";
import authorImage from "../assets/Homepageimg/Blog-img/pro-2.jpg";
import related1 from "../assets/Homepageimg/Blog-img/blog-7.jpg";
import related2 from "../assets/Homepageimg/Blog-img/blog-6.jpg";
import related3 from "../assets/Homepageimg/Blog-img/blog-4.jpg";

const BlogDetails = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [isLiked, setIsLiked] = useState(false);

  // Example blog data
  const blog = {
    title: "The Future of Web Development: Trends to Watch in 2024",
    author: "John Doe",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    image: image,
    authorImage: authorImage,
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h2>The Rise of AI in Development</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <blockquote>The future of web development lies in the seamless integration of AI and human creativity.</blockquote>
      
      <h2>Key Trends to Watch</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
    `,
    tags: ["Web Development", "AI", "Technology", "Future Trends"],
    relatedPosts: [
      {
        title: "Getting Started with React Hooks",
        image: related1,
        date: "March 10, 2024",
      },
      {
        title: "Understanding Modern CSS",
        image: related2,
        date: "March 8, 2024",
      },
      {
        title: "The Power of TypeScript",
        image: related3,
        date: "March 5, 2024",
      },
    ],
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] min-h-[400px] bg-gray-900"
      >
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-end pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 text-green-400 mb-4">
              <span className="flex items-center gap-2">
                <FaCalendar className="w-4 h-4" />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4">
              <img
                src={blog.authorImage}
                alt={blog.author}
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div>
                <h3 className="text-white font-medium">{blog.author}</h3>
                <p className="text-green-400 text-sm">Author</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="prose prose-lg dark:prose-invert max-w-none text-gray-900 dark:text-white">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12">
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Interaction Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                    isLiked
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill={isLiked ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  {isLiked ? "Liked" : "Like"}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center gap-2"
                >
                  <FaShare className="w-4 h-4" />
                  Share
                </motion.button>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Related Posts
                </h3>
                <div className="space-y-6">
                  {blog.relatedPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 }}
                      className="flex gap-4 group cursor-pointer"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-24 h-24 rounded-lg object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-green-500 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {post.date}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
