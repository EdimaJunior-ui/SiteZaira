// src/components/common/InfoCard.jsx (atualizado)
import React, { useState } from 'react';
import './InfoCard.css';

const InfoCard = ({ title, description, icon, image, facts, detailedContent, onCardClick }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleCardClick = () => {
    if (onCardClick && detailedContent) {
      onCardClick({
        title: title,
        content: detailedContent
      });
    }
  };
  
  const handleHeaderClick = (e) => {
    e.stopPropagation(); // Evita que o clique no cabeçalho ative também o clique no card
    setExpanded(!expanded);
  };
  
  return (
    <div 
      className={`info-card ${expanded ? 'expanded' : ''} ${detailedContent ? 'clickable' : ''}`}
      onClick={handleCardClick}
    >
      <div className="card-header" onClick={handleHeaderClick}>
        {icon && <span className="card-icon">{icon}</span>}
        <h3>{title}</h3>
        <span className="expand-icon">{expanded ? '−' : '+'}</span>
      </div>
      
      {image && (
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
      )}
      
      <div className="card-content">
        <p>{description}</p>
        
        {facts && facts.length > 0 && (
          <div className="card-facts">
            <h4>Fatos Importantes:</h4>
            <ul>
              {facts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>
        )}
        
        {detailedContent && (
          <div className="card-more-info">
            <span>Clique para mais informações</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
