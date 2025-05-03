// src/components/Timeline/Timeline.jsx (atualização)
import React, { useState } from 'react';
import TimelineSlider from './TimelineSlider';
import './Timeline.css';
import egyptData from '../../data/egyptData'; // Importe seus dados

const Timeline = () => {
  const [activePeriod, setActivePeriod] = useState('pre-dinastico');
  
  // Dados formatados para o slider
  const timelinePeriods = [
    { id: 'pre-dinastico', name: 'Período Pré-Dinástico', year: '5500-3100 a.C.' },
    { id: 'antigo-imperio', name: 'Antigo Império', year: '2686-2181 a.C.' },
    { id: 'medio-imperio', name: 'Médio Império', year: '2055-1650 a.C.' },
    { id: 'novo-imperio', name: 'Novo Império', year: '1550-1069 a.C.' },
    { id: 'tardio', name: 'Período Tardio', year: '664-332 a.C.' }
  ];
  
  const handlePeriodChange = (periodId) => {
    setActivePeriod(periodId);
  };
  
  return (
    <div className="timeline-container">
      <h2>Linha do Tempo das Sociedades Egípcias</h2>
      
      <TimelineSlider 
        periods={timelinePeriods}
        activePeriod={activePeriod}
        onPeriodChange={handlePeriodChange}
      />
      
      {activePeriod && egyptData[activePeriod] && (
        <div className="era-description">
          <h3>{egyptData[activePeriod].title}</h3>
          <p>{egyptData[activePeriod].description}</p>
          
          <h4>Fatos Importantes:</h4>
          <ul>
            {egyptData[activePeriod].keyFacts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Timeline;
