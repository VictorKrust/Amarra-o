import React from 'react';
import './AboutSection.css'; // Estilos específicos para a seção Sobre
import priscilaKollinFoto from '../../public/assets/images/priscila_kollin_foto.jpg'; // Caminho placeholder, ajustar conforme o nome real da imagem

const AboutSection = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-content">
          <div className="about-image-container">
            <img src={priscilaKollinFoto} alt="Priscila Kollin" className="about-image misty-glow" />
          </div>
          <div className="about-text-container">
            <h2 className="section-title">Sobre Priscila Kollin</h2>
            <p className="section-subtitle">Conheça quem está por trás da magia que transforma vidas.</p>
            <p>
              Priscila Kollin é uma especialista em relacionamentos e caminhos espirituais, com anos de experiência dedicados a ajudar pessoas a encontrarem a felicidade e a harmonia em suas vidas amorosas e pessoais. Sua missão é reconectar corações, restaurar laços perdidos e abrir as portas para um futuro mais pleno e realizado através de práticas ancestrais e uma profunda conexão com o universo místico.
            </p>
            <p>
              Com um dom natural e um profundo conhecimento das artes esotéricas, Priscila oferece uma abordagem acolhedora, confidencial e personalizada para cada cliente, entendendo que cada jornada é única. Seja para reacender a chama do amor, superar obstáculos ou buscar clareza espiritual, você encontrará em Priscila Kollin uma guia confiável e dedicada.
            </p>
            {/* Adicionar mais parágrafos conforme o conteúdo real fornecido */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

