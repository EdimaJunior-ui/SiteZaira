// components/interactive/InteractiveMap.jsx
import React, { useState } from 'react';
import './InteractiveMap.css';
import mapImage from '../../assets/images/ancient-egypt-map.jpg'; // Adicione esta imagem

const InteractiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  
  const locations = [
    { id: 'giza', name: 'Gizé', top: '30%', left: '48%', info: 'Local das Grandes Pirâmides e da Esfinge' },
    { id: 'luxor', name: 'Luxor (Tebas)', top: '60%', left: '55%', info: 'Antiga capital com importantes templos' },
    { id: 'memphis', name: 'Mênfis', top: '35%', left: '50%', info: 'Uma das capitais mais antigas do Egito' },
    // Adicione mais locais
  ];
  
  return (
    <div className="map-container">
      <h2>Mapa do Egito Antigo</h2>
      <div className="interactive-map">
        <img src={mapImage} alt="Mapa do Egito Antigo" />
        
        {locations.map(location => (
          <div 
            key={location.id}
            className="map-marker"
            style={{ top: location.top, left: location.left }}
            onClick={() => setSelectedLocation(location)}
          >
            <span className="marker-dot"></span>
            <span className="marker-name">{location.name}</span>
          </div>
        ))}
        
        {selectedLocation && (
          <div className="location-info">
            <h3>{selectedLocation.name}</h3>
            <p>{selectedLocation.info}</p>
            <button onClick={() => setSelectedLocation(null)}>Fechar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
