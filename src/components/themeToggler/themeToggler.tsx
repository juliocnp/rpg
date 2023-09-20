import React from 'react';
import { useThemeContext } from '../../contexts/themeContext';

const ThemeToggler = () => {
  const { toggleColor } = useThemeContext();

  return (
    <div className="theme-toggler">
      <button onClick={toggleColor}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeToggler;
