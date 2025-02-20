import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaGlobe, FaGithub, FaExternalLinkAlt, FaTags } from "react-icons/fa";
import img1 from "../assets/Homepageimg/portfolio-img/p-1.avif";
import img2 from "../assets/Homepageimg/portfolio-img/p-2.jpg";
import img3 from "../assets/Homepageimg/portfolio-img/p-3.jpg";
import img4 from "../assets/Homepageimg/portfolio-img/p-4.jpg";

const PortfolioDetails = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(0);

  // Example project data
  const project = {
    title: "E-Commerce Platform",
    category: "Web Development",
    client: "TechStore Inc.",
    duration: "3 months",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    description: `
      A full-featured e-commerce platform with modern design and seamless user experience.
      Built with the latest technologies and best practices in web development.
    `,
    features: [
      "User Authentication",
      "Product Management",
      "Shopping Cart",
      "Payment Integration",
      "Order Tracking",
      "Admin Dashboard",
    ],
    images: [img1, img2, img3, img4],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    results: [
      "50% increase in conversion rate",
      "30% reduction in bounce rate",
      "100,000+ monthly active users",
    ],
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-r from-green-600 to-green-800 py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-emerald-100">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="lg:col-span-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.images[currentImage]}
                  alt={`Project screenshot ${currentImage + 1}`}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex gap-2 justify-center">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          currentImage === index
                            ? "bg-green-500 w-4"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Project Results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {project.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 }}
                        className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center"
                      >
                        <p className="text-gray-600 dark:text-gray-300">
                          {result}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Details
                </h3>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    <FaGlobe className="w-5 h-5" />
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    View Source
                  </a>
                </div>

                {/* Project Timeline */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                    Project Timeline
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.duration}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetails;
