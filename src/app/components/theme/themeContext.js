'use client'
import { createContext, useContext, useState } from 'react';
import { blueTheme, orangeTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(blueTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === blueTheme ? orangeTheme : blueTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
