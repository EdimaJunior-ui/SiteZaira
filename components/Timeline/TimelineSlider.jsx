// src/components/Timeline/TimelineSlider.jsx
import React, { useState, useEffect } from 'react';
import './TimelineSlider.css';

const TimelineSlider = ({ periods, activePeriod, onPeriodChange }) => {
  const [sliderValue, setSliderValue] = useState(0);
  
  // Encontrar o índice do período ativo atual
  useEffect(() => {
    const index = periods.findIndex(period => period.id === activePeriod);
    if (index !== -1) {
      setSliderValue(index);
    }
  }, [activePeriod, periods]);
  
  // Manipular mudanças no slider
  const handleSliderChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    onPeriodChange(periods[newValue].id);
  };
  
  return (
    <div className="timeline-slider-container">
      <div className="slider-label-container">
        {periods.map((period, index) => (
          <div 
            key={period.id}
            className={`slider-label ${sliderValue === index ? 'active' : ''}`}
            style={{ left: `${(index / (periods.length - 1)) * 100}%` }}
          >
            <span className="year-label">{period.year}</span>
          </div>
        ))}
      </div>
      
      <div className="slider-track">
        <input
          type="range"
          min="0"
          max={periods.length - 1}
          value={sliderValue}
          onChange={handleSliderChange}
          className="timeline-slider"
        />
      </div>
      
      <div className="period-display">
        <h3>{periods[sliderValue].name}</h3>
        <p>{periods[sliderValue].year}</p>
      </div>
    </div>
  );
};

export default TimelineSlider;
