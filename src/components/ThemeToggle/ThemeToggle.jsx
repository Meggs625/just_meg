import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const existingTheme = localStorage.getItem("theme");

    if (existingTheme) setIsLight(existingTheme);
  }, []);

  const changeTheme = () => {
    setIsLight(!isLight);
    localStorage.setItem("theme", !isLight);
  };

  //Context update? Store in context?
  return <button onClick={changeTheme}>{isLight ? "Moon" : "Sun"}</button>;
}
