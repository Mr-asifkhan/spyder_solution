import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaDesktop,
  FaChartLine,
  FaCog,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";
import aboutHero from "../../assets/Homepageimg/aboutus.jpg";

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
      percentage: "95%",
      color: "from-green-400 to-green-500",
      features: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      icon: <FaDesktop className="text-3xl" />,
      title: "UX/UI Design",
      description:
        "User-centered design solutions that enhance user experience",
      percentage: "90%",
      color: "from-green-400 to-green-500",
      features: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing to grow your online presence",
      percentage: "85%",
      color: "from-green-400 to-green-500",
      features: ["SEO", "Social Media", "Content", "Analytics"],
    },
    {
      icon: <FaCog className="text-3xl" />,
      title: "IT Consulting",
      description: "Expert guidance for your technology decisions",
      percentage: "92%",
      color: "from-green-400 to-green-500",
      features: ["Strategy", "Architecture", "Security", "Cloud"],
    },
  ];

  const achievements = [
    {
      number: "500+",
      label: "Happy Clients",
      icon: "👥",
      detail: "Trusted by businesses worldwide",
    },
    {
      number: "21",
      label: "Team Members",
      icon: "🚀",
      detail: "Expert professionals",
    },
    {
      number: "800",
      label: "Projects Complete",
      icon: "✨",
      detail: "Delivered on time",
    },
    {
      number: "30",
      label: "Years Experience",
      icon: "🏆",
      detail: "Industry expertise",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Side Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-green-50 text-green-500 rounded-full text-sm font-medium mb-4"
              >
                Since 2015
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                We Create Digital Solutions for
                <span className="text-green-500 block mt-2">
                  Your Business Growth
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-600 mb-8"
              >
                Leveraging cutting-edge technology to deliver innovative IT
                solutions that drive success and transform businesses.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-300 flex items-center"
                >
                  Get Started
                  <FaArrowRight className="ml-2" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <motion.img
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  src={aboutHero}
                  alt="Digital Solutions"
                  className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xl sm:text-2xl md:text-3xl">🚀</span>
                    <div className="flex flex-col">
                      <p className="font-bold text-xs sm:text-sm md:text-base text-gray-900 dark:text-white">
                        Innovation
                      </p>
                      <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-300">
                        Driving Growth
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <br />
          <br />
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:scale-103">
                  <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <motion.span
                          initial={false}
                          animate={
                            hoveredService === index
                              ? { scale: 1.1 }
                              : { scale: 1 }
                          }
                          className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  number: "500",
                  label: "Happy Clients",
                  color: "from-blue-400 to-blue-600",
                },
                {
                  number: "60",
                  label: "Hard Worker",
                  color: "from-green-400 to-green-600",
                },
                {
                  number: "800",
                  label: "Complete Project",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  number: "30",
                  label: "Years Of Experience",
                  color: "from-red-400 to-red-600",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-colors duration-300 shadow-sm"
                >
                  <motion.h3
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 0.4 + index * 0.1,
                    }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    >
                      {inView ? stat.number : 0}
                      {stat.label.includes("Project") && "+"}
                      {stat.label.includes("Experience") && "+"}
                    </motion.span>
                  </motion.h3>
                  <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
