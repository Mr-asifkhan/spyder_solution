import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BrandLogos = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const brands = [
    {
      name: "Microsoft",
      logo: "/brands/microsoft.svg",
      color: "from-blue-500/10 to-blue-600/10",
    },
    {
      name: "Google",
      logo: "/brands/google.svg",
      color: "from-red-500/10 to-yellow-500/10",
    },
    {
      name: "Amazon",
      logo: "/brands/amazon.svg",
      color: "from-orange-500/10 to-yellow-500/10",
    },
    {
      name: "Apple",
      logo: "/brands/apple.svg",
      color: "from-gray-500/10 to-gray-600/10",
    },
    {
      name: "Meta",
      logo: "/brands/meta.svg",
      color: "from-blue-400/10 to-blue-500/10",
    },
    {
      name: "Netflix",
      logo: "/brands/netflix.svg",
      color: "from-red-600/10 to-red-700/10",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          {/* Decorative Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl transform rotate-12"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Partnering with global brands to deliver exceptional results
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${brand.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Logo Container */}
                <div className="relative flex items-center justify-center h-20">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-12 w-auto object-contain filter dark:invert dark:brightness-0 dark:opacity-80 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Brand Name */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mt-4"
                >
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {brand.name}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { number: "500+", label: "Global Clients" },
            { number: "95%", label: "Client Retention" },
            { number: "10+", label: "Years Experience" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandLogos;
