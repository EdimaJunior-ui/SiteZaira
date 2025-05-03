// src/components/common/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Array com informações dos membros da equipe
  const teamMembers = [
    { name: "Edima Junior", role: "Estrutura Social", info: "" },
    { name: "Pedro Spinola", role: "Religião", info: "Foco em mitologia e rituais religiosos" },
    { name: "Mayra", role: "Arquitetura", info: "Estudo das construções monumentais" },
    { name: "Maria Alicia", role: "Ciência", info: "Conhecimentos de astronomia e medicina" },
    { name: "Isadora", role: "Cultura", info: "Artes e expressões culturais egípcias" }
  ];
  
  return (
    <footer className="egypt-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre o Projeto</h3>
          <p>Este site foi desenvolvido como parte de um seminário escolar sobre as sociedades egípcias.</p>
        </div>
        
        <div className="footer-section">
          <h3>Equipe</h3>
          <ul className="team-list">
            {teamMembers.map((member, index) => (
              <li key={index} className="team-member">
                <span className="member-name">{member.name}</span>
                <span className="member-role"> - {member.role}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Fontes</h3>
          <ul>
            <li><a href="https://britishmuseum.org" target="_blank" rel="noopener noreferrer">Museu Britânico</a></li>
            <li><a href="https://egymonuments.gov.eg" target="_blank" rel="noopener noreferrer">Museu Egípcio do Cairo</a></li>
            <li><a href="https://nationalgeographic.com" target="_blank" rel="noopener noreferrer">National Geographic</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="hieroglyph-divider">
          <span>𓀀</span><span>𓀁</span><span>𓀂</span><span>𓀃</span><span>𓀄</span>
        </div>
        <p>&copy; {currentYear} - Projeto Egito Antigo</p>
      </div>
    </footer>
  );
};

export default Footer;
