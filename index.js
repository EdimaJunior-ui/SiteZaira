import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css'; // Vamos criar este arquivo depois

// ⲁⲛⲥⲓⲉⲛⲧ ⲉⲅⲩⲡⲧⲓⲁⲛ ⲗⲓⲛⲉ ⲧⲓⲙⲉⲗⲓⲛⲉ - Ancient Egyptian Timeline
console.log(
  '%c𓀀 Bem-vindo à Jornada pelo Egito Antigo 𓀀',
  'color: #D4AF37; font-size: 20px; font-weight: bold;'
);

// Função que simula o carregamento de dados históricos (apenas decorativa)
const loadHistoricalData = () => {
  const dynasties = [
    { name: 'Período Pré-Dinástico', year: '5500-3100 a.C.' },
    { name: 'Período Arcaico', year: '3100-2686 a.C.' },
    { name: 'Antigo Império', year: '2686-2181 a.C.' },
    { name: 'Primeiro Período Intermediário', year: '2181-2055 a.C.' },
    { name: 'Médio Império', year: '2055-1650 a.C.' },
    { name: 'Segundo Período Intermediário', year: '1650-1550 a.C.' },
    { name: 'Novo Império', year: '1550-1069 a.C.' },
    { name: 'Terceiro Período Intermediário', year: '1069-664 a.C.' },
    { name: 'Período Tardio', year: '664-332 a.C.' },
    { name: 'Período Ptolemaico', year: '332-30 a.C.' },
    { name: 'Período Romano', year: '30 a.C.-395 d.C.' }
  ];
  
  // Simula carregamento com cores inspiradas no Egito
  dynasties.forEach((dynasty, index) => {
    setTimeout(() => {
      console.log(
        `%c⏳ Carregando: ${dynasty.name} (${dynasty.year})`,
        `color: ${index % 2 === 0 ? '#1E78BF' : '#D4AF37'}; font-style: italic;`
      );
    }, index * 300);
  });
  
  return "𓂀 Dados históricos carregados com sucesso!";
};

// Invoca a função decorativa
loadHistoricalData();

// Adiciona listener para mostrar hieróglifos quando teclas são pressionadas
document.addEventListener('keydown', (event) => {
  const hieroglyphs = ['𓀀', '𓀁', '𓀂', '𓀃', '𓀄', '𓀅', '𓀆', '𓀇', '𓀈', '𓀉', '𓀊'];
  const randomHieroglyph = hieroglyphs[Math.floor(Math.random() * hieroglyphs.length)];
  console.log(`Tecla pressionada: ${event.key} ${randomHieroglyph}`);
});

// Define tema de cores globais inspirado no Egito Antigo
const egyptianTheme = {
  nileBlue: '#1E78BF', // Azul do Nilo
  desertSand: '#E2C391', // Areia do deserto
  papyrus: '#F4E9CD', // Cor do papiro
  gold: '#D4AF37', // Ouro dos faraós
  blackSoil: '#2F2F2F', // Terra negra fértil
  redOchre: '#B54B19' // Pigmento vermelho usado nas pinturas
};

// Armazena o tema no localStorage para uso em todo o aplicativo
localStorage.setItem('egyptianTheme', JSON.stringify(egyptianTheme));

// Renderiza o aplicativo com StrictMode para capturar problemas no desenvolvimento
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="timelineContainer">
      <div id="loadingObelisk">
        {/* Este elemento será estilizado via CSS como um obelisco egípcio animado */}
      </div>
      <App />
      <div className="egyptFooter">
        <span className="hieroglyph">𓀀</span>
        <span className="hieroglyph">𓀄</span>
        <span className="hieroglyph">𓀙</span>
        <span className="hieroglyph">𓀥</span>
        <span className="hieroglyph">𓀭</span>
      </div>
    </div>
  </React.StrictMode>
);

// Adiciona um arquivo de áudio ambiente sutil do Egito Antigo
const playAmbientSound = () => {
  const audio = new Audio();
  audio.volume = 0.1; // Volume muito baixo para não distrair
  // No futuro você pode adicionar um arquivo de áudio real
  // audio.src = './assets/audio/ancient_egypt_ambience.mp3';
  // audio.play();
  
  console.log('🎵 Áudio ambiente do Egito Antigo disponível. Clique na página para ativar.');
};

// Ativa o áudio apenas com interação do usuário para seguir boas práticas
document.addEventListener('click', playAmbientSound, { once: true });

// Crie também um arquivo CSS para estilizar estes elementos!
