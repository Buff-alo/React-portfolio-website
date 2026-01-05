/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion, useTransform, useInView, useScroll } from "framer-motion";
import { Send, AlertCircle, Copy, Check } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import TextInput from "../input/TextInput";
import SuccessModal from "../SuccessModal";

// Get your access key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [botcheck, setBotcheck] = useState(""); // Honeypot for spam protection
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copiedField, setCopiedField] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
    // Clear error when user starts typing
    if (errors[key]) {
      setErrors({ ...errors, [key]: "" });
    }
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitError("Contact form is not configured. Please try again later.");
      console.error("WEB3FORMS_ACCESS_KEY is not set in environment variables");
      return;
    }

    // If honeypot is filled, it's a bot - silently reject
    if (botcheck) {
      setIsSubmitting(true);
      await new Promise((r) => setTimeout(r, 1000));
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: "Kwadwo Labs Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        // Auto hide success modal after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
              } mb-4`}
          >
            Let's Connect
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6 leading-light"
          >
            Get In
            <span className="text-blue-500 font-medium"> Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Feel free to reach out with any questions or inquiries. I'm always
            here to help!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${isDarkMode
                ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                }`}
            >
              <h3 className="text-2xl font-medium mb-8">Send me a message</h3>

              {/* Submit Error Alert */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-3 p-4 mb-6 rounded-xl border ${isDarkMode
                    ? "bg-red-500/10 border-red-500/20 text-red-400"
                    : "bg-red-50 border-red-200 text-red-600"
                    }`}
                >
                  <AlertCircle size={20} />
                  <span className="text-sm">{submitError}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam protection - hidden from humans */}
                <input
                  type="text"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <TextInput
                    id="contact-name"
                    label="Your Name"
                    isDarkMode={isDarkMode}
                    value={formData.name}
                    required
                    error={errors.name}
                    handleInputChange={(text) =>
                      handleInputChange("name", text)
                    }
                  />
                  <TextInput
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    isDarkMode={isDarkMode}
                    value={formData.email}
                    required
                    error={errors.email}
                    handleInputChange={(text) =>
                      handleInputChange("email", text)
                    }
                  />
                </div>

                <TextInput
                  id="contact-message"
                  label="Your Message"
                  isDarkMode={isDarkMode}
                  value={formData.message}
                  textarea
                  rows={5}
                  required
                  error={errors.message}
                  handleInputChange={(text) =>
                    handleInputChange("message", text)
                  }
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-4 rounded-xl text-sm uppercase tracking-wider font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center justify-between p-4 rounded-xl ${isDarkMode
                      ? "bg-gray-800/30 hover:bg-gray-800/50"
                      : "bg-gray-50/50 hover:bg-gray-100/50"
                      } transition-all duration-300 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : " bg-white"
                          }`}
                      >
                        <info.icon size={20} className="text-blue-500" />
                      </div>
                      <div>
                        <div
                          className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                            }`}
                        >
                          {info.label}
                        </div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </div>
                    {info.copyable && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          navigator.clipboard.writeText(info.value);
                          setCopiedField(info.label);
                          setTimeout(() => setCopiedField(null), 2000);
                        }}
                        className={`p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all ${isDarkMode
                          ? "hover:bg-gray-600 text-gray-400"
                          : "hover:bg-gray-200 text-gray-600"
                          }`}
                        aria-label={`Copy ${info.label}`}
                      >
                        {copiedField === info.label ? (
                          <Check size={16} className="text-green-500" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </motion.button>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-medium mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 ${isDarkMode
                      ? "bg-gray-800/50 border-gray-700 hover:bg-gray-600"
                      : "bg-white/80 border-gray-200 hover:bg-gray-300"
                      } ${social.bgColor || ""} ${social.color || ""}`}
                  >
                    <social.icon size={20} className="" />
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            {/* Availability Status */}
            <motion.div
              variants={itemVariants}
              className={`p-6 rounded-xl border ${isDarkMode
                ? "bg-green-500/10 border-green-500/20"
                : "bg-green-50 border-green-200"
                }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-green-500">Available for work </span>
              </div>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                I'm currently available for freelance work. I'm always looking for new projects and opportunities.
              </p>
            </motion.div>
          </motion.div>
        </div>
        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${isDarkMode
              ? "bg-gray-800/30 border-gray-700 "
              : "bg-gray-50/50 border-gray-200 "
              }`}
          >
            <h3 className="text-xl font-medium mb-4">Prefer a quick call?</h3>
            <p
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-6`}
            >
              Sometimes a conversation is worth a thousand messages. Feel free to reach out directly.
            </p>
            <motion.a
              href="mailto:contact@kwadwolabs.cloud?subject=Let's%20Schedule%20a%20Call"
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`inline-block px-6 py-3 rounded-full border font-medium transition-all duration-300 ${isDarkMode
                ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                : "border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <SuccessModal
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};
export default ContactSection;
