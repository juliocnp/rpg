import React from 'react';
import './testComponent.scss';
import ThemeToggler from '../themeToggler/themeToggler';
import { useThemeContext } from '../../contexts/themeContext';

const TesteComponent = () => {
  const { theme } = useThemeContext();
  const themeClass = theme == 'light' ? 'theme-default' : 'theme-alternate';

  return (
    <div className={`test-component ${themeClass}`}>
      <h2>TESTANDO O THEME COLOR MANE</h2>
      <ThemeToggler />
    </div>
  );
};

export default TesteComponent;
