import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FaqSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 15-day return window for a full refund or exchange on unused items. Returns must include original packaging and proof of purchase for processing.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary by location.",
    },
    {
      question: "What if I receive a damaged or defective product?",
      answer:
        "Please contact our customer support team immediately with photos of the damaged item. We'll arrange a replacement or refund.",
    },
    {
      question: "Are the product colors on the website accurate?",
      answer:
        "We strive to display colors as accurately as possible, but slight variations may occur due to different screen settings.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can reach our customer support team via email, phone, or live chat. We're available 24/7 to assist you.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section ref={ref} className="py-20 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-4">
            Do you have questions?
          </h2>
          <p className="text-gray-600">
            Find answers to frequently asked questions about our products and
            services
          </p>
        </motion.div>

        {/* FAQ Cards */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
                >
                  <span className="font-medium text-[#2d3748]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-green-500"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-gray-600">
                        <div className="h-px w-full bg-gray-100 mb-4"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-500 text-center sm:text-left mb-3 sm:mb-0">
              My question is not here
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              CONNECT US
              <FaChevronDown className="transform rotate-[-90deg]" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
