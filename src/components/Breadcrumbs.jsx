import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight, HiHome } from "react-icons/hi";

const Breadcrumbs = () => {
  const location = useLocation();
  // Filter out empty strings and handle special characters
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((path) => decodeURIComponent(path));

  // Custom mapping for route names (add more as needed)
  const routeNameMap = {
    about: "About Us",
    services: "Our Services",
    contact: "Contact Us",
    blog: "Blog",
    team: "Our Team",
    projects: "Projects",
    // Add more mappings as needed
  };

  // Get formatted name for display
  const getDisplayName = (path) => {
    return routeNameMap[path.toLowerCase()] || path.replace(/-/g, " ");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative bg-white dark:bg-gray-800 shadow-sm"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500" />

      <div className="container mx-auto px-4">
        <div className="py-4">
          <motion.div className="flex items-center flex-wrap gap-2">
            {/* Home Link */}
            <motion.div variants={itemVariants}>
              <Link
                to="/"
                className="flex items-center text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-500 transition-all duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/30 transition-colors duration-200">
                  <HiHome className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>

            {/* Path Links */}
            <AnimatePresence mode="wait">
              {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                const displayName = getDisplayName(name);

                return (
                  <motion.div
                    key={routeTo}
                    variants={itemVariants}
                    className="flex items-center"
                  >
                    <HiChevronRight className="w-5 h-5 text-gray-400 mx-1" />
                    {isLast ? (
                      <span className="px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-medium capitalize">
                        {displayName}
                      </span>
                    ) : (
                      <Link
                        to={routeTo}
                        className="px-3 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-all duration-200 capitalize"
                      >
                        {displayName}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Breadcrumbs;
