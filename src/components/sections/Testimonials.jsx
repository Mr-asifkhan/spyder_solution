import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import img1 from "../../assets/Homepageimg/t-1.jpg";
import img2 from "../../assets/Homepageimg/t-1.jpg";
import img3 from "../../assets/Homepageimg/t-1.jpg";
import img4 from "../../assets/Homepageimg/t-1.jpg";

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Frank Kinney",
      role: "CEO, Tech Corp",
      content:
        "Aenean pulvinar dui ornare, feugiat lorem non, ultrices justo. Mauris efficitur, mauris in auctor euismod, quam elit ultrices urna, eget eleifend arcu risus id metus. Maecenas ex enim, mattis eu velit vitae, blandit mattis sapien. Sed aliquam leo et semper vestibulum.",
      image: img1,
    },
    {
      name: "John Doe",
      role: "CEO, Tech Corp",
      content:
        "Working with this team has been an absolute game-changer for our business. Their innovative solutions and attention to detail exceeded all our expectations.",
      image: img2,
      rating: 5,
      company: "/companies/techcorp.png",
    },
    {
      name: "Sarah Wilson",
      role: "Marketing Director",
      content:
        "The level of creativity and technical expertise they brought to our project was exceptional. They truly understand modern digital needs.",
      image: img3,
      rating: 5,
      company: "/companies/marketing.png",
    },
    {
      name: "Mike Johnson",
      role: "Startup Founder",
      content:
        "From concept to execution, they delivered excellence at every step. Their team's dedication to quality is unmatched in the industry.",
      image: img4,
      rating: 5,
      company: "/companies/startup.png",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Desktop/Tablet View */}
          <div className="hidden md:block">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-green-500 dark:!bg-green-600",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-green-500 dark:!bg-green-500",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              className="testimonials-slider"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center px-4 py-8"
                  >
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-8">
                      <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="mb-8">
                      <p className="text-lg sm:text-xl text-green-500 italic leading-relaxed mb-6">
                        "{testimonial.content}"
                      </p>
                      <footer>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-900 text-bold">
                          {testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-green-500 dark:!bg-green-600",
                bulletActiveClass:
                  "swiper-pagination-bullet-active !bg-green-500 dark:!bg-green-500",
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              className="testimonials-slider pb-12"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center px-4 py-6"
                  >
                    {/* Profile Image */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-green-500"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-green-500"></div>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>

                    {/* Testimonial Content */}
                    <blockquote>
                      <p className="text-base text-green-500 italic leading-relaxed mb-4">
                        "{testimonial.content}"
                      </p>
                      <footer>
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 text-bold">
                          {testimonial.role}
                        </p>
                      </footer>
                    </blockquote>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
