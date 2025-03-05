import { createContext } from "react";

type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isLight: false,
  toggleTheme: () => {},
});
