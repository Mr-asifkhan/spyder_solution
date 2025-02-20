import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";
import image1 from "../../assets/Homepageimg/t-1.jpg";
import image2 from "../../assets/Homepageimg/t-1.jpg";
import image3 from "../../assets/Homepageimg/t-1.jpg";
import image4 from "../../assets/Homepageimg/t-1.jpg";

const OurTeam = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: image1,
      bio: "Visionary leader with 15+ years of industry experience",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#",
      },
    },
    {
      name: "Sarah Williams",
      role: "Lead Designer",
      image: image2,
      bio: "Award-winning designer passionate about user experience",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#",
      },
    },
    {
      name: "Michael Brown",
      role: "Senior Developer",
      image: image3,
      bio: "Full-stack developer specialized in scalable solutions",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#",
      },
    },
    {
      name: "Emily Davis",
      role: "Project Manager",
      image: image4,
      bio: "Certified PM with a track record of successful deliveries",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "#",
      },
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-slate-50 via-gray-50 to-zinc-100 overflow-hidden"
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 via-gray-500/10 to-zinc-500/10 rounded-full blur-3xl transform rotate-12"></div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our <span className="text-green-500">Expert Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-900"
          >
            Passionate professionals dedicated to bringing your vision to life
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-700">
                {/* Image Container - Added cursor-pointer */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => window.open(member.social.linkedin, "_blank")}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social Links Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-3">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <motion.a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-8 h-8 bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-300"
                        >
                          {platform === "linkedin" && (
                            <FaLinkedin className="text-sm" />
                          )}
                          {platform === "twitter" && (
                            <FaTwitter className="text-sm" />
                          )}
                          {platform === "github" && (
                            <FaGithub className="text-sm" />
                          )}
                          {platform === "email" && (
                            <FaEnvelope className="text-sm" />
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name with cursor-pointer */}
                  <h3
                    onClick={() =>
                      window.open(member.social.linkedin, "_blank")
                    }
                    className="text-lg font-semibold text-gray-900 mb-1 cursor-pointer hover:text-green-500 transition-colors duration-300"
                  >
                    {member.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-green-600 text-sm">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Join Our Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
