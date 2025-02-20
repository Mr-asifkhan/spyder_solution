import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaDesktop,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaPalette,
  FaMobile,
  FaSearch,
} from "react-icons/fa";
import heroImage from "../assets/Homepageimg/hero.avif";

// Import all section components
import AboutSection from "../components/sections/AboutSection";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Portfolio from "../components/sections/Portfolio";
import Testimonials from "../components/sections/Testimonials";
// import OurTeam from "../components/sections/OurTeam";
import BlogSection from "../components/sections/BlogSection";
// import FaqSection from "../components/sections/FaqSection";

const Home = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Portfolio */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* Team */}
      {/* <OurTeam /> */}

      {/* Blog */}
      <BlogSection />

      {/* FAQ */}
      {/* <FaqSection /> */}
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </motion.div>

      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Welcome to the Future
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Transform Your
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We create innovative digital solutions that help businesses grow
              and succeed in the modern world.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg cursor-pointer"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium border-2 border-gray-200 hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-1/2 relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <img
                src={heroImage}
                alt="Hero Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-500/10 to-transparent" />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg"
            >
              <span className="text-2xl">💡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: "Web Development",
      description:
        "Custom web apps and responsive websites built with modern tech stack",
      icon: <FaCode className="text-3xl" />,
      color: "from-green-400 to-green-500",
    },
    {
      title: "Digital Marketing",
      description:
        "Data-driven digital marketing strategies to grow your business",
      icon: <FaChartLine className="text-3xl" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "SEO Services",
      description:
        "Search engine optimization to improve your online visibility",
      icon: <FaSearch className="text-3xl" />,
      color: "from-indigo-400 to-indigo-600",
    },
    {
      title: "Cyber Security",
      description: "Enterprise-grade security solutions to protect your data",
      icon: <FaShieldAlt className="text-3xl" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Graphic Design",
      description: "Creative design solutions that capture your brand essence",
      icon: <FaPalette className="text-3xl" />,
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile app development",
      icon: <FaMobile className="text-3xl" />,
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-medium mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What We're Offering?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive digital solutions to help businesses thrive
            in the modern digital landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 mb-6 rounded-lg bg-green-50 flex items-center justify-center text-green-500 transform group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>

              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 flex items-center text-green-500 font-medium group"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
