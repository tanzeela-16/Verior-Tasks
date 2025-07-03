// src/components/Hero.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-start justify-center"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      {/* Glass Container */}
      <div className="w-full mx-4 md:mx-8 mt-24 h-[85vh] bg-black/40 backdrop-blur-lg rounded-2xl shadow-lg px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 text-left pl-6 md:pl-12"
          data-aos="fade-right"
        >
          <p className="text-pink-400 text-sm md:text-base">— Hello</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
            I'm <span className="text-pink-500">Tanzeela Memon</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 mt-2">
            Web Developer
          </h2>
          <p className="text-gray-300 mt-4 max-w-md">
            My passion for coding and web development has driven me to create
            stunning and interactive websites that bring ideas to life.
          </p>
          <button className="mt-6 px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-pink-400/40">
            Hire Me
          </button>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
          data-aos="fade-left"
        >
          <div className="relative group">
            <img
                src="/hero.webp"
                alt="Tanzeela Profile"
                className="w-[28rem] h-[18rem] object-cover rounded-xl border-4 border-pink-400 shadow-xl group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 border-2 border-cyan-500 rounded-xl animate-pulse opacity-20 blur-md"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
