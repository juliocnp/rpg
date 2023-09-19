import React from 'react';
import { useThemeContext } from '../../contexts/themeContext';
// import './themeToggler.scss'; // Create this file for styling the button

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
