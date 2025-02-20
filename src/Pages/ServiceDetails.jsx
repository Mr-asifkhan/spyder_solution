import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCheck,
  FaArrowRight,
  FaLightbulb,
  FaClock,
  FaUsers,
} from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import img1 from "../assets/Homepageimg/aboutus.jpg";
const ServiceDetails = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    "Custom solution development",
    "Responsive design implementation",
    "Performance optimization",
    "SEO-friendly architecture",
    "Regular maintenance & support",
    "24/7 Technical assistance",
  ];

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      description: "Cutting-edge technology solutions tailored to your needs",
    },
    {
      icon: <FaClock />,
      title: "Quick Turnaround",
      description: "Fast and efficient delivery without compromising quality",
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Dedicated professionals with years of industry experience",
    },
  ];

  return (
    <div className="bg-gray-50">
      <Breadcrumbs />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-white pt-24 pb-16"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-50 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Create stunning, high-performance websites that drive results
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Get Started
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Service Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Digital Presence
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Our web development services combine creative design with
                  technical excellence to deliver websites that not only look
                  great but also perform exceptionally well.
                </p>
                <p>
                  We focus on creating responsive, user-friendly websites that
                  help businesses achieve their digital goals and provide an
                  outstanding user experience.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <FaCheck className="w-3 h-3" />
                    </span>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="Web Development"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Choose Our Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
            >
              Contact Us
              <FaArrowRight className="text-sm" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
