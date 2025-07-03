// src/components/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#0c0f1a] to-[#1e2a3a] text-white flex items-center justify-center px-6"
    >
      <div
        className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14 shadow-2xl 
        transition-all duration-500 hover:border-pink-400 hover:shadow-pink-500/30 hover:scale-[1.015]"
        data-aos="fade-up"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-500 mb-8">
          About Me
        </h2>

        <div className="text-center text-lg text-gray-300 space-y-5">
          <p>
            Hi! I'm <span className="text-cyan-400 font-semibold">Tanzeela Memon</span>, a creative{" "}
            <span className="text-pink-400">Web Developer</span> who turns ideas into interactive web experiences.
          </p>

          <p>
            I’ve built projects like a{" "}
            <span className="text-cyan-400">Doctor Appointment App </span> using Mern Stack and a{" "}
            <span className="text-cyan-400">Coffee Shop Website</span> using React and Tailwind.
          </p>

          <p>
            During internships, I worked on UI tasks, responsive layouts and other web development projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
