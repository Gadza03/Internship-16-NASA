import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContex";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const savedTheme = () => {
    const theme = localStorage.getItem("theme");
    return theme ? JSON.parse(theme) : false;
  };

  const [isLight, setIsLight] = useState(savedTheme);

  useEffect(() => {
    document.body.id = isLight ? "light" : "dark";
    localStorage.setItem("theme", JSON.stringify(isLight));
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev: boolean) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
