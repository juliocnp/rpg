import React, { createContext, useContext, useState } from 'react';

const themeContext = createContext({
  usePrimary: true,
  toggleColor: () => { return; },
});

export function useThemeContext() {
  return useContext(themeContext);
}

export function ThemeContextProvider({ children } : ContextProps) {
  const [usePrimary, setUsePrimary] = useState(true);

  const toggleColor = () => {
    setUsePrimary((prevValue) => !prevValue);
  };

  return (
    <themeContext.Provider value={{ usePrimary, toggleColor }}>
      {children}
    </themeContext.Provider>
  );
}

type ContextProps = {
    children: React.ReactNode
}