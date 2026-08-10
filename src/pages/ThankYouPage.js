import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando React Router
import './ThankYouPage.css'; // Estilos para a página de obrigado

const ThankYouPage = () => {
  return (
    <div className="thank-you-page-container section-padding">
      <div className="container text-center">
        <div className="thank-you-icon">🎉</div> {/* Ícone de celebração */}
        <h1 className="thank-you-title subtle-lavender-glow">Mensagem Enviada com Sucesso!</h1>
        <p className="thank-you-text">
          Obrigado por entrar em contato com Priscila Kollin.
          Sua mensagem foi recebida e em breve você terá um retorno.
        </p>
        <p className="thank-you-text">
          Enquanto aguarda, sinta-se à vontade para explorar mais sobre nossos serviços ou nos seguir nas redes sociais.
        </p>
        <Link to="/" className="button-global button-primary back-home-button">Voltar para a Página Inicial</Link>
        {/* Adicionar links para redes sociais se desejar */}
        {/* <div className="social-links-thank-you">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div> */}
      </div>
    </div>
  );
};

export default ThankYouPage;

