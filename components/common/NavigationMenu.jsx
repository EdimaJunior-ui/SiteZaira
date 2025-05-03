// src/components/common/NavigationMenu.jsx
import React from 'react';
import './NavigationMenu.css';

const NavigationMenu = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav className="egypt-nav">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button 
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
