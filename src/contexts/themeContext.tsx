import React, { createContext, useContext, useState } from 'react';

const themeContext = createContext({
  theme: 'light',
  toggleColor: () => { return; },
});

export function useThemeContext() {
  return useContext(themeContext);
}

export function ThemeContextProvider({ children } : ContextProps) {
  const [theme, setTheme] = useState('light');

  const toggleColor = () => {
    setTheme((prevValue) => prevValue === 'dark' ? 'light' : 'dark');
  };

  return (
    <themeContext.Provider value={{ theme, toggleColor }}>
      {children}
    </themeContext.Provider>
  );
}

type ContextProps = {
    children: React.ReactNode
}