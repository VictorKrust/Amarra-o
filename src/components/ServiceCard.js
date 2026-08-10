import React from 'react';
import './ServiceCard.css'; // Estilos para o card de serviço

// Ícones podem ser SVGs importados ou de uma biblioteca como react-icons
// Exemplo: import { FaHeart, FaHandHoldingHeart, FaLightbulb } from 'react-icons/fa';

const ServiceCard = ({ title, description, iconName }) => {
  // Lógica para renderizar o ícone com base no iconName, se estiver usando uma biblioteca
  // const renderIcon = () => {
  //   if (iconName === 'amarração') return <FaHeart size={40} className="service-icon" />;
  //   if (iconName === 'reconciliação') return <FaHandHoldingHeart size={40} className="service-icon" />;
  //   if (iconName === 'caminhos') return <FaLightbulb size={40} className="service-icon" />;
  //   return null; // Ou um ícone padrão
  // };

  return (
    <div className="service-card misty-glow">
      {/* {renderIcon()} */}
      {/* Placeholder para ícone, pode ser um <img> ou um componente de ícone SVG */}
      <div className="service-icon-placeholder">✨</div> 
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <a href="#contact" className="button-global button-secondary service-button">Saiba Mais</a>
    </div>
  );
};

export default ServiceCard;

