import React from "react";
import { FaHeart, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import profileImg from "/profile.webp"; 

const ProfileCard = () => {
  return (
    <div className="relative w-[400px] md:w-[480px] bg-white/30 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] p-10 text-center font-[Inter] text-gray-900 transition-transform duration-300 hover:scale-[1.03]">
      
      {/* Heart Icon */}
      <button className="absolute top-5 right-5 text-pink-600 hover:text-red-500 text-3xl">
        <FaHeart />
      </button>

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Profile"
        className="w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full border-4 border-white shadow-xl object-cover mb-6"
      />

      {/* Name */}
      <h2 className="text-4xl font-extrabold mb-2 text-gray-900">Tanzeela Memon</h2>

      {/* Role */}
      <p className="text-xl text-pink-600 font-semibold mb-4">Web Developer</p>

      {/* Bio */}
      <p className="text-md md:text-lg text-gray-800 mb-8 leading-relaxed">
        “Code is like humor. When you have to explain it, it’s bad.”
      </p>

      {/* Follow Button */}
      <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-9 py-3 rounded-full text-lg font-semibold tracking-wide shadow-lg hover:from-pink-600 hover:to-yellow-500 transition duration-300">
        Follow Me
      </button>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-800">
        <a href="#" className="hover:text-blue-600 transition">
          <FaLinkedin />
        </a>
        <a href="#" className="hover:text-sky-500 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
