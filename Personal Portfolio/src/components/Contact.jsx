import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0c0f1a] to-[#1e2a3a] text-white px-6 py-20 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-lg"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 text-left">
            <p className="text-gray-300">
              Want to work together or have a question? Reach out via email or
              my socials below.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-pink-400 text-xl" />
                <a
                  href="mailto:tanzeelamemon167@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  Mail
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaGithub className="text-pink-400 text-xl" />
                <a
                  href="https://github.com/tanzeela-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-pink-400 text-xl" />
                <a
                  href="https://www.linkedin.com/in/tanzeelamemon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            />
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] border border-gray-700 text-white focus:outline-none focus:border-cyan-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition duration-300 shadow-lg hover:shadow-pink-500/30"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
