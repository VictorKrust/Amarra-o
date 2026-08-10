import React from 'react';
import './WhatsAppButton.css'; // Estilos para o botão flutuante do WhatsApp
// import { FaWhatsapp } from 'react-icons/fa'; // Exemplo se usar react-icons

const WhatsAppButton = ({ phoneNumber }) => {
  const defaultPhoneNumber = phoneNumber || '5511999998888'; // Número de placeholder, substitua pelo real
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre seus serviços.');
  const whatsappLink = `https://wa.me/${defaultPhoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappLink} 
      className="whatsapp-float-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Entre em contato pelo WhatsApp"
    >
      {/* <FaWhatsapp size={30} /> */}
      <span className="whatsapp-icon-placeholder">💬</span> {/* Placeholder para ícone */}
    </a>
  );
};

export default WhatsAppButton;

