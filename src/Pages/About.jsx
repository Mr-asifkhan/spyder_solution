import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRocket, FaUsers, FaLightbulb, FaClock } from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link } from "react-router-dom";
import img1 from "../assets/Homepageimg/aboutus.jpg";
import profile1 from "../assets/Homepageimg/Blog-img/pro-3.jpg";
import profile2 from "../assets/Homepageimg/Blog-img/pro-4.jpg";
import profile3 from "../assets/Homepageimg/Blog-img/pro-2.jpg";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { icon: <FaRocket />, number: "500+", label: "Projects Completed" },
    { icon: <FaUsers />, number: "100+", label: "Happy Clients" },
    { icon: <FaLightbulb />, number: "10+", label: "Years Experience" },
    { icon: <FaClock />, number: "24/7", label: "Support Available" },
  ];

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: profile1,
      bio: "Visionary leader with 15+ years of industry experience.",
    },
    {
      name: "Sarah Smith",
      role: "Creative Director",
      image: profile2,
      bio: "Award-winning designer with a passion for innovation.",
    },
    {
      name: "Mike Johnson",
      role: "Tech Lead",
      image: profile3,
      bio: "Expert in cutting-edge web technologies and solutions.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Breadcrumbs */}
      <Breadcrumbs />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative py-24 bg-white dark:bg-gray-800"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Our Journey
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We're on a mission to transform digital experiences and empower
              businesses worldwide.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300">
                  Founded in 2010, we began with a simple vision: to make
                  digital transformation accessible to businesses of all sizes.
                  Today, we're proud to have helped hundreds of companies
                  achieve their digital goals.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team of experts combines creativity with technical
                  excellence to deliver solutions that not only meet but exceed
                  our clients' expectations.
                </p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={img1}
                  alt="Our Team"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl text-green-500 mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Meet Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-green-500 mb-4">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Ready to Start Your Project?
            </h2>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
