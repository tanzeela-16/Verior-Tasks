import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-6 px-4 text-center border-t border-white/10 transition-all duration-300 hover:bg-[#1a1a1a] hover:text-gray-300">
      <p className="text-sm md:text-base">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-pink-400 font-semibold hover:text-cyan-400 transition-colors duration-300">
          Tanzeela
        </span>
        . All rights reserved.
      </p>

      <p className="text-xs mt-1 transition-colors duration-300">
        Designed with ❤️ using React & Tailwind CSS
      </p>
    </footer>
  );
};

export default Footer;
