import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Web Development", path: "/services/web" },
      { name: "Mobile Apps", path: "/services/mobile" },
      { name: "UI/UX Design", path: "/services/design" },
      { name: "Digital Marketing", path: "/services/marketing" },
      { name: "Consulting", path: "/services/consulting" },
    ],
    support: [
      { name: "Help Center", path: "/help" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF size={18} />,
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={18} />,
      url: "#",
      color: "hover:bg-sky-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      url: "#",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn size={18} />,
      url: "#",
      color: "hover:bg-blue-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      url: "#",
      color: "hover:bg-gray-800",
    },
  ];

  return (
    <footer ref={ref} className="bg-white dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-2xl font-bold text-green-500 mb-6 block"
            >
              Asif
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Creating innovative digital solutions for businesses worldwide.
              Transform your ideas into reality.
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} hover:text-white dark:hover:text-white transition-all duration-300`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-6 capitalize">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-gray-800 pt-8"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm sm:text-base">
              © {new Date().getFullYear()} Techida. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
