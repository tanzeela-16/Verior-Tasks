// src/components/Sidebar.jsx
import { FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose, darkMode }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${darkMode
          ? "bg-gray-800"
          : "bg-gradient-to-b from-yellow-100 via-pink-100 to-yellow-50"}`}
    >
      <div
        className={`flex justify-between items-center px-4 py-4 border-b ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-xl">
          <FiX />
        </button>
      </div>

      <nav className="p-4 space-y-4">
        <a
          href="#"
          className={`block hover:text-blue-400 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Dashboard
        </a>
        <a
          href="#"
          className={`block hover:text-blue-400 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Users
        </a>
        <a
          href="#"
          className={`block hover:text-blue-400 transition-colors ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
