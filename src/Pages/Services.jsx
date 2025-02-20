import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMobile,
  FaPalette,
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Tuning",
        "API Integration",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "mobile-development",
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: [
        "Native Apps",
        "Cross-Platform",
        "UI/UX Design",
        "App Store Support",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "ui-ux-design",
      icon: <FaPalette className="text-4xl" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that engage and convert.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "digital-marketing",
      icon: <FaChartLine className="text-4xl" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence.",
      features: ["SEO", "Social Media", "Content Strategy", "Analytics"],
      color: "from-red-500 to-red-600",
    },
    {
      id: "cloud-solutions",
      icon: <FaCloud className="text-4xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
      features: ["AWS", "Azure", "DevOps", "Monitoring"],
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: "cybersecurity",
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets.",
      features: [
        "Security Audit",
        "Penetration Testing",
        "Compliance",
        "Training",
      ],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: "it-consulting",
      icon: <FaCogs className="text-4xl" />,
      title: "IT Consulting",
      description: "Expert guidance for your digital transformation journey.",
      features: ["Strategy", "Architecture", "Implementation", "Support"],
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "support",
      icon: <FaHeadset className="text-4xl" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance.",
      features: ["Live Support", "Maintenance", "Updates", "Monitoring"],
      color: "from-pink-500 to-pink-600",
    },
  ];

  const handleServiceClick = (service) => {
    navigate(`/services/${service.id}`, { state: { service } });
  };

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-r from-green-500 to-green-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-white/[0.1]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Comprehensive digital solutions to help your business grow and
              succeed
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section ref={ref} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="p-6">
                  <div className="text-green-500 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    onClick={() => handleServiceClick(service)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
          >
            Our Process
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Discovery", "Planning", "Development", "Launch"].map(
              (step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
                    <div className="text-3xl font-bold text-green-500 mb-4">
                      {(index + 1).toString().padStart(2, "0")}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {step}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-green-500 transform translate-x-1/2">
                      <div className="absolute right-0 w-3 h-3 bg-green-500 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                    </div>
                  )}
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our services can help you achieve your goals.
            </motion.p>
            <Link to="/contact">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
