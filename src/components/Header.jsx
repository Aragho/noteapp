import React, { useState, useEffect } from "react";

const Header = ({ onSearchChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.body.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.body.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const handleSearchChange = (event) => {
    onSearchChange(event.target.value); 
  };

  return (
    <header className="bg-cyan-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Note Manager</h1>
      <input
        type="text"
        placeholder="Search notes..."
        className="p-2 rounded w-1/3 text-black outline-none"
        onChange={handleSearchChange}
      />
      <button
        onClick={toggleTheme}
        className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
