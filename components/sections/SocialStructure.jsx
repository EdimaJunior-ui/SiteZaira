// components/sections/SocialStructure.jsx
import React from 'react';
import './SectionStyles.css';

const SocialStructure = () => {
  return (
    <div className="section-container">
      <h2>Estrutura Social Egípcia</h2>
      <div className="pyramid-structure">
        <div className="pyramid-level" id="pharaoh">
          <h3>Faraó</h3>
          <p>Governante supremo, considerado divino</p>
        </div>
        <div className="pyramid-level" id="nobles">
          <h3>Nobres e Sacerdotes</h3>
          <p>Elite que auxiliava o faraó na administração</p>
        </div>
        <div className="pyramid-level" id="scribes">
          <h3>Escribas</h3>
          <p>Responsáveis pela escrita e registros</p>
        </div>
        <div className="pyramid-level" id="merchants">
          <h3>Artesãos e Comerciantes</h3>
          <p>Produziam bens e realizavam comércio</p>
        </div>
        <div className="pyramid-level" id="farmers">
          <h3>Camponeses</h3>
          <p>Maioria da população, trabalhavam na agricultura</p>
        </div>
        <div className="pyramid-level" id="slaves">
          <h3>Escravos</h3>
          <p>Prisioneiros de guerra e condenados</p>
        </div>
      </div>
    </div>
  );
};

export default SocialStructure;
