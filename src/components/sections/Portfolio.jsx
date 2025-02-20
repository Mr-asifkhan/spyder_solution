import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import img1 from "../../assets/Homepageimg/portfolio-img/p-1.avif";
import img2 from "../../assets/Homepageimg/portfolio-img/p-2.jpg";
import img3 from "../../assets/Homepageimg/portfolio-img/p-3.jpg";
import img4 from "../../assets/Homepageimg/portfolio-img/p-4.jpg";
import img5 from "../../assets/Homepageimg/portfolio-img/p-5.jpg";
import img6 from "../../assets/Homepageimg/portfolio-img/p-6.jpg";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "web", "mobile", "design", "branding"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: img1,
      description: "Modern e-commerce solution with advanced features",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: img2,
      description: "Secure and user-friendly mobile banking application",
      technologies: ["React Native", "Firebase"],
      link: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      image: img3,
      description: "Complete brand identity package for tech startup",
      technologies: ["Figma", "Illustrator"],
      link: "#",
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "web",
      image: img4,
      description: "Modern corporate website with CMS integration",
      technologies: ["Next.js", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      category: "mobile",
      image: img5,
      description: "Health and fitness tracking mobile application",
      technologies: ["Flutter", "Firebase"],
      link: "#",
    },
    {
      id: 6,
      title: "Brand Guidelines",
      category: "branding",
      image: img6,
      description: "Comprehensive brand guidelines documentation",
      technologies: ["InDesign", "Photoshop"],
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-green-500 font-medium mb-4 block">
            OUR PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Latest <span className="text-green-500">Projects</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our latest projects and creative solutions
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full capitalize text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:shadow-md"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Slider - Updated breakpoints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              // Mobile
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // Tablet
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              // Desktop
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="portfolio-slider !pb-14"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  layout
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Link */}
                    <Link
                      to={`/portfolio/${project.id}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center text-green-500 hover:text-green-600 font-medium"
                    >
                      View Project
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
