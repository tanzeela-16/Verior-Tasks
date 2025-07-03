import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Admin Dashboard",
    description: "Custom dashboard with charts, analytics, and UI components.",
    image: "/dashboard.PNG",
    link: "https://github.com/tanzeela-16/Verior-Tasks/tree/main/Admin%20Dashboard",
  },
  {
    title: "Profile Card",
    description: "Animated profile card with hover effects and clean design.",
    image: "/profile-card.PNG",
    link: "https://github.com/tanzeela-16/Verior-Tasks/tree/main/Profile%20Card",
  },
  {
    title: "Shopping Cart UI",
    description: "Interactive shopping cart with item count and dynamic price updates.",
    image: "/shopping-cart.PNG",
    link: "https://github.com/tanzeela-16/Verior-Tasks/tree/main/Shopping%20Cart",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#0c0f1a] to-[#1e2a3a] text-white px-6 py-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1f1f1f] rounded-xl border border-gray-700 hover:border-cyan-400 shadow-md hover:shadow-cyan-400/30 transform transition duration-300 hover:scale-105 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-pink-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
