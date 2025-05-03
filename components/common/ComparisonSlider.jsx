import React, { useRef, useState, useEffect } from 'react';
import './ComparisonSlider.css';

const ComparisonSlider = ({ beforeImage, afterImage, beforeLabel, afterLabel }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percent, 0), 100));
    }
  };
  
  return (
    <div 
      className="comparison-slider"
      ref={sliderRef}
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      <div 
        className="comparison-before"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          width: `${sliderPosition}%`
        }}
      >
        <span className="comparison-label">{beforeLabel}</span>
      </div>
      
      <div 
        className="comparison-after"
        style={{ backgroundImage: `url(${afterImage})` }}
      >
        <span className="comparison-label">{afterLabel}</span>
      </div>
      
      <div 
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="handle-line"></div>
      </div>
    </div>
  );
};

export default ComparisonSlider;
