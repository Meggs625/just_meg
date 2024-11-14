import React from "react";

import ThemeProvider from "./context/ThemeProvider";
import HomePage from "../src/views/HomePage/HomePage";

export default function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
