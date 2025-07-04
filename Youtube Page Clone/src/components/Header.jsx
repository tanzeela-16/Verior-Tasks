import React from 'react';
import { FaYoutube, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <FaYoutube className="text-red-600 text-2xl" />
        <span className="text-xl font-bold text-gray-800">YouClone</span>
      </div>

      {/* Middle: Search bar */}
      <div className="flex-1 max-w-xl mx-4">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-1 outline-none text-sm line-clamp-1"
          />
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Right: User Icon */}
      <div className="text-gray-700 text-xl">
        <FaUserCircle />
      </div>
    </header>
  );
};

export default Header;
