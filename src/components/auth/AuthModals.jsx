import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLock, FaUser, FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const AuthModals = ({ isOpen, onClose, initialView = "login" }) => {
  const [view, setView] = useState(initialView);

  const switchView = (newView) => {
    setView(newView);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Enhanced Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
          />

          {/* Modal with improved animation */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{
              type: "spring",
              duration: 0.7,
              bounce: 0.35,
            }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-3 sm:p-6"
          >
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-green-500/20">
              {/* Close Button with animation */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-green-600 transition-colors z-10"
              >
                <FaTimes className="w-6 h-6" />
              </motion.button>

              {/* Content with page transition */}
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {view === "login" ? (
                    <LoginForm key="login" switchView={switchView} />
                  ) : (
                    <RegisterForm key="register" switchView={switchView} />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const LoginForm = ({ switchView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 text-center"
      >
        Welcome Back
      </motion.h2>

      <form className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <div className="relative group">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:bg-white"
              placeholder="Enter your email"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Password
          </label>
          <div className="relative group">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:bg-white"
              placeholder="Enter your password"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between"
        >
          <label className="flex items-center group cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="ml-2 text-sm text-gray-600 group-hover:text-gray-900">
              Remember me
            </span>
          </label>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className="text-sm text-green-600 hover:text-green-700 cursor-pointer"
          >
            Forgot password?
          </motion.button>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25 cursor-pointer"
        >
          Sign In
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign in with Google</span>
        </motion.button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Don't have an account?{" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => switchView("register")}
            className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
          >
            Sign up
          </motion.button>
        </p>
      </form>
    </motion.div>
  );
};

const RegisterForm = ({ switchView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl font-bold text-green-500 mb-6 text-center"
      >
        Create Account
      </motion.h2>

      <form className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name
          </label>
          <div className="relative group">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:bg-white"
              placeholder="Enter your full name"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Email
          </label>
          <div className="relative group">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:bg-white"
              placeholder="Enter your email"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Password
          </label>
          <div className="relative group">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-green-500 transition-colors" />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all hover:bg-white"
              placeholder="Create a password"
            />
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-2.5 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
        >
          Sign Up
        </motion.button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="button"
          className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FcGoogle className="w-5 h-5" />
          <span>Sign up with Google</span>
        </motion.button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Already have an account?{" "}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => switchView("login")}
            className="text-green-600 hover:text-green-700 font-medium cursor-pointer"
          >
            Sign in
          </motion.button>
        </p>
      </form>
    </motion.div>
  );
};

export default AuthModals;
