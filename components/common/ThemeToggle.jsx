// src/components/common/ThemeToggle.jsx
import React, { useEffect, useState } from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  // Verificar se há preferência de tema salva no localStorage
  const savedTheme = localStorage.getItem('egyptTheme') || 'light';
  const [theme, setTheme] = useState(savedTheme);
  
  // Efeito para aplicar o tema em toda a aplicação
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('egyptTheme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  return (
    <div className="theme-toggle">
      <button 
        onClick={toggleTheme}
        className={`toggle-button ${theme}`}
        aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        <div className="toggle-icon">
          {theme === 'light' ? (
            // Ícone do Sol (Ra)
            <span className="sun-icon">☀</span>
          ) : (
            // Ícone da Lua (Khonsu)
            <span className="moon-icon">☽</span>
          )}
        </div>
        <span className="toggle-text">
          {theme === 'light' ? 'Modo Ra' : 'Modo Khonsu'}
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
