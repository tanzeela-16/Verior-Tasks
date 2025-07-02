// src/components/Navbar.jsx
import { FiMenu, FiBell, FiSearch, FiSun, FiMoon } from "react-icons/fi";

const Navbar = ({ toggleSidebar, darkMode, setDarkMode }) => {
  return (
    <nav
      className={`w-full h-16 px-4 flex items-center justify-between shadow-md z-10
        ${darkMode
          ? "bg-gray-900"
          : "bg-gradient-to-r from-yellow-200 via-pink-200 to-yellow-100"}`}
    >
      {/* Left: Menu Icon + Logo */}
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className={`text-2xl mr-4 focus:outline-none ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <FiMenu />
        </button>

        <img
          src="/logo.png"
          alt="Logo"
          className="h-16 w-16 mr-3 scale-150 object-contain"
        />
        <span className="text-xl font-bold">Admin Panel</span>
      </div>

      {/* Center: Search */}
      <div
        className={`hidden md:flex items-center px-3 py-1 rounded-full w-96 transition-all ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        <FiSearch
          className={`mr-2 ${
            darkMode ? "text-gray-300" : "text-gray-500"
          } transition-colors`}
        />
        <input
          type="text"
          placeholder="Search..."
          className={`bg-transparent outline-none text-sm w-full placeholder-gray-400 ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <FiBell
          className={`text-xl cursor-pointer ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        />

        {/* Theme toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`text-xl focus:outline-none ${
            darkMode ? "text-yellow-300" : "text-gray-800"
          }`}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* user profile */}
        <img
          src="/user.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover border transition-all duration-300 
          border-gray-300 dark:border-white"
        />
      </div>
    </nav>
  );
};

export default Navbar;
