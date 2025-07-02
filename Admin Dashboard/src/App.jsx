import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  // Handle theme toggle logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`h-screen w-full transition-all duration-300 ease-in-out ${
        darkMode
          ? "bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
          : "bg-gradient-to-br from-yellow-100 via-pink-100 to-white"
      }`}
    >
      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          darkMode={darkMode}
        />
      )}

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <Navbar
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="p-6 overflow-y-auto h-[calc(100vh-4rem)] bg-white/60 dark:bg-black/20 backdrop-blur-md">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
