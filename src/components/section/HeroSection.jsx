// eslint-disable-next-line no-unused-vars
import { easeOut, motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React from "react";

import { containerVariants, itemVariants } from "../../utils/helper";
import { HERO_TAGS } from "../../utils/data";
import useTypewriter from "../../hooks/useTypewriter";

import PROFILE_PIC from "../../assets/images/profile1.jpg";

const ROLES = ["DevOps Engineer", "Backend Developer", "Cloud Architect"];

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const typedRole = useTypewriter(
    ROLES,
    80,
    40,
    2500
  );

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 100], [0, -50]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: easeOut,
        delay: 0.5,
      },
    },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
              }`}
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`absolute bottom-20 left-20 w-48 h-48 rounded-full blur-3xl opacity-10 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
              }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout - Centered */}
          <div className="block lg:hidden">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-center"
            >
              {/* Profile Image - Mobile */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-full h-32 rounded-2xl overflow-hidden border-4  ${isDarkMode ? "border-gray-800" : "border-gray-300"
                      } shadow-2xl`}
                  >
                    <img
                      src={PROFILE_PIC}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Decorative Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="absolute -inset-2 rounded-2xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Content -Mobile */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                  } mb-4 h-6`}
              >
                {typedRole}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[2px] h-4 ml-1 bg-current align-middle"
                />
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6 leading-tight"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Orchestrating scalable and
                </span>
                <span className="text-blue-500 font-light ml-2">secure</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  infrastructure
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
              >
                I build and automate secure cloud infrastructure, scalable
                backends, and efficient developer pipelines using modern DevOps
                tools like Docker, Terraform, and Nomad.
              </motion.p>

              {/* CTA Buttons - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 "
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${isDarkMode
                    ? "bg-gray-700 hover:border-gray-600 text-gray-300"
                    : "border-gray-300 hover:border-gray-400 text-gray-700"
                    } px-8 py-3 rounded-full text-sm  uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2`}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
              {/* Social links - Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/Buff-alo", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kwadwo-boakye", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@kwadwolabs.cloud", label: "Email" },
                  { icon: Download, href: "/resume.pdf", label: "Resume", download: true },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    href={social.href}
                    download={social.download || undefined}
                    target={social.download ? undefined : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className={`p-3 rounded-full transition-colors ${isDarkMode
                      ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
              {/* Tech stack -Mobile */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center items-center space-x-6 text-xs uppercase tracking-widest flex-wrap"
              >
                {HERO_TAGS.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span
                      className={isDarkMode ? "text-gray-600" : "text-gray-500"}
                    >
                      {tech}
                    </span>
                    {idx < HERO_TAGS.length - 1 && (
                      <span
                        className={
                          isDarkMode ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        •
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop Layout - Split */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="text-left"
            >
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
                  } mb-6 h-6`}
              >
                {typedRole}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-[2px] h-4 ml-1 bg-current align-middle"
                />
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl xl:text-7xl font-light mb-8 leading-light"
              >
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  Orchestrating scalable and
                </span>
                <br />
                <span className="text-blue-500 font-medium">secure</span>
                <br />
                <span
                  className={`${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  infrastructure
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"
                  } mb-12 font-light leading-relaxed max-w-lg`}
              >
                I build and automate secure cloud infrastructure, scalable
                backends, and efficient developer pipelines using modern DevOps
                tools like Docker, Terraform, and Nomad.
              </motion.p>

              {/* CTA Buttons - Desktop */}
              <motion.div variants={itemVariants} className="flex gap-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-sm tracking-wider transisition-all duration-300 "
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${isDarkMode
                    ? "border-gray-700 hover:border-gray-600 text-gray-300"
                    : "border-gray-300 hover:border-gray-400 text-gray-700"
                    } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center gap-2`}
                >
                  Get In Touch
                </motion.button>
              </motion.div>

              {/* Social links - Desktop */}
              <motion.div
                variants={itemVariants}
                className="flex space-x-6 mb-12"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/Buff-alo", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kwadwo-boakye", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:contact@kwadwolabs.cloud?subject=Let's%20Talk&body=Hi%20Kwadwo,%20I%20checked%20your%20portfolio...", label: "Email" },
                  // { icon: Download, href: "/resume.pdf", label: "Resume", download: true }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -3 }}
                    href={social.href}
                    download={social.download || undefined}
                    target={social.download ? undefined : "_blank"}
                    rel={social.download ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className={`p-3 rounded-full transition-colors ${isDarkMode
                      ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                      }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Img */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Tech Stack - Desktop */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-20"
                >
                  {HERO_TAGS.map((tech, idx) => (
                    <React.Fragment key={tech}>
                      <span
                        className={
                          isDarkMode ? "text-gray-600" : "text-gray-500"
                        }
                      >
                        {tech}
                      </span>
                      {idx < HERO_TAGS.length - 1 && (
                        <span
                          className={
                            isDarkMode ? "text-gray-700" : "text-gray-400"
                          }
                        >
                          •
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-80 h-96 rounded-3xl overflow-hidden border-4 ${isDarkMode ? "border-gray-800" : "border-gray-300"
                    } shadow-2xl`}
                >
                  <img
                    src={PROFILE_PIC}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Element */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-4 rounded-3xl border border-blue-500/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 rounded-3xl border border-purple-500/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
