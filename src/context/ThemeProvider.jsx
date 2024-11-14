import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(localStorage.getItem("theme") || true);

  const toggleTheme = () => {
    setIsLight(!isLight);
    localStorage.setItem("theme", !isLight);
    document.documentElement.setAttribute("theme-mode", !isLight);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
