import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isLight, setIsLight] = useState(
    window.localStorage.getItem("theme" || true)
  );

  const toggleTheme = () => {
    setIsLight(!isLight);
    localStorage.setItem("theme", !isLight);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
