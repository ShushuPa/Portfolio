import { useState, useEffect } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]); 

  const applyTheme = (value: string) => {
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "" : "dark"));
  };

  return { theme, toggleTheme };
}
