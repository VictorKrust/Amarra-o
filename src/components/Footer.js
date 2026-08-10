import React from 'react';
import './Footer.css'; // Estilos para o rodapé
// import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Exemplo se usar react-icons

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer section-padding">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h4 className="footer-section-title">Priscila Kollin</h4>
            <p>Especialista em reconectar corações e abrir caminhos para a felicidade e o amor através da espiritualidade.</p>
            {/* Adicionar logo aqui se houver */}
          </div>

          <div className="footer-section footer-links">
            <h4 className="footer-section-title">Links Rápidos</h4>
            <ul>
              <li><a href="#banner">Início</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section footer-social">
            <h4 className="footer-section-title">Redes Sociais</h4>
            <div className="social-icons">
              {/* Exemplo com placeholders, substituir por links reais e ícones */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a> */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a> */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a> */}
              <a href="#" className="social-icon-placeholder" aria-label="Facebook">FB</a>
              <a href="#" className="social-icon-placeholder" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon-placeholder" aria-label="YouTube">YT</a>
            </div>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Priscila Kollin. Todos os direitos reservados.</p>
          <p>Desenvolvido com 💜 por Manus WebDev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

