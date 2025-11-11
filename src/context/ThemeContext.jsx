import React, { createContext, useContext, useState, useEffect } from "react";

// 1️. Create the Context
const ThemeContext = createContext();

// 2️. Create a provider component
export const ThemeProvider = ({ children }) => {
  // Load the saved theme from local storage or default to light
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Update the HTML <html> class whenever the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3️⃣ Custom hook for easy use
export const useTheme = () => useContext(ThemeContext);
