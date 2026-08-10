import React from 'react';
import './Banner.css'; // Estilos específicos para o Banner

const Banner = () => {
  return (
    <section className="banner-section section-padding subtle-gradient-bg">
      <div className="container text-center">
        <h1 className="banner-title subtle-lavender-glow">Reconecte-se com o Amor e a Felicidade</h1>
        <p className="banner-subtitle">Descubra como a magia e a espiritualidade podem transformar seus relacionamentos e abrir seus caminhos.</p>
        <a href="#contact" className="button-global button-primary">Agende sua Consulta</a>
      </div>
    </section>
  );
};

export default Banner;

