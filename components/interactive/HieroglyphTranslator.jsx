// src/components/interactive/HieroglyphTranslator.jsx
import React, { useState } from 'react';
import './HieroglyphTranslator.css';

const HieroglyphTranslator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  // Mapeamento simplificado de letras para hieróglifos
  const hieroglyphMap = {
    'a': '𓄿', 'b': '𓃀', 'c': '𓎡', 'd': '𓂧', 'e': '𓇋',
    'f': '𓆑', 'g': '𓎼', 'h': '𓉔', 'i': '𓇋', 'j': '𓆓',
    'k': '𓎡', 'l': '𓃭', 'm': '𓅓', 'n': '𓈖', 'o': '𓍯',
    'p': '𓊪', 'q': '𓏘', 'r': '𓂋', 's': '𓋴', 't': '𓏏',
    'u': '𓅱', 'v': '𓆑', 'w': '𓅱', 'x': '𓎡𓋴', 'y': '𓇋',
    'z': '𓊃', ' ': ' '
  };

  const translateText = () => {
    const text = inputText.toLowerCase();
    let result = '';
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      result += hieroglyphMap[char] || char;
    }
    
    setTranslatedText(result);
  };

  return (
    <div className="hieroglyph-translator">
      <h2>Tradutor de Hieróglifos</h2>
      <p>Digite um texto e veja como seria representado com símbolos semelhantes aos hieróglifos egípcios!</p>
      
      <div className="translator-input">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Digite seu texto aqui..."
          rows={4}
        />
        <button onClick={translateText}>Traduzir</button>
      </div>
      
      {translatedText && (
        <div className="translation-result">
          <h3>Sua mensagem em "hieróglifos":</h3>
          <div className="hieroglyph-text">{translatedText}</div>
          <p className="disclaimer">
            Nota: Esta é uma representação simplificada e não uma tradução real. 
            Os hieróglifos egípcios representavam sons e conceitos complexos, não letras individuais.
          </p>
        </div>
      )}
    </div>
  );
};

export default HieroglyphTranslator;
