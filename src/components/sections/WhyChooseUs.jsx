import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaRocket,
  FaUserShield,
  FaClock,
  FaCode,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const reasons = [
    {
      icon: <FaRocket className="text-2xl sm:text-3xl" />,
      title: "Fast Delivery",
      description: "Quick turnaround time without compromising quality",
      color: "from-green-400 to-green-500",
    },
    {
      icon: <FaUserShield className="text-2xl sm:text-3xl" />,
      title: "Secure Solutions",
      description: "Top-notch security measures for your peace of mind",
      color: "from-green-400 to-green-500",
    },
    {
      icon: <FaClock className="text-2xl sm:text-3xl" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
      color: "from-green-400 to-green-500",
    },
    {
      icon: <FaCode className="text-2xl sm:text-3xl" />,
      title: "Clean Code",
      description: "Maintainable and scalable code architecture",
      color: "from-green-400 to-green-500",
    },
    {
      icon: <FaHeadset className="text-2xl sm:text-3xl" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience",
      color: "from-green-400 to-green-500",
    },
    {
      icon: <FaChartLine className="text-2xl sm:text-3xl" />,
      title: "Growth Focus",
      description: "Strategies aligned with your business growth",
      color: "from-green-400 to-green-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-20 relative"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/10 rounded-full blur-3xl transform rotate-12"></div>
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-green-500 font-medium mb-4 block"
          >
            WHY CHOOSE US
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            What Makes Us <span className="text-green-500">Different?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            We combine innovation, expertise, and dedication to deliver
            exceptional results
          </motion.p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-green-50 flex items-center justify-center text-green-500 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>

                {/* Hover line effect */}
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-medium shadow-lg transition-all duration-300"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
