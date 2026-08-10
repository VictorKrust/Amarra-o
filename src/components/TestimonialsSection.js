import React from 'react';
import TestimonialItem from './TestimonialItem';
import './TestimonialsSection.css'; // Estilos para a seção de depoimentos

// Dados dos depoimentos - idealmente viriam de um backend ou arquivo JSON
// Incluir caminhos para as imagens dos depoimentos após copiá-las para public/assets/images/
const testimonialsData = [
  {
    id: 1,
    text: "A Priscila mudou minha vida amorosa! Consegui reatar meu relacionamento e hoje estamos mais felizes do que nunca. Gratidão eterna!",
    author: "Maria S.",
    location: "São Paulo, SP",
    imageSrc: "/assets/images/depoimento_cliente1.jpg" // Exemplo, substituir pelo caminho real
  },
  {
    id: 2,
    text: "Estava perdida e sem rumo, mas as consultas com a Priscila abriram meus caminhos de uma forma incrível. Recomendo de olhos fechados!",
    author: "Ana P.",
    location: "Rio de Janeiro, RJ",
    imageSrc: "/assets/images/depoimento_cliente2.jpg" // Exemplo
  },
  {
    id: 3,
    text: "Nunca acreditei muito nessas coisas, mas a Priscila me provou o contrário. Minha energia mudou, minha vida mudou!",
    author: "Carlos A.",
    location: "Belo Horizonte, MG",
    // imageSrc: "/assets/images/depoimento_cliente3.jpg" // Exemplo, se houver imagem
  }
  // Adicionar mais depoimentos conforme os arquivos fornecidos
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Depoimentos de Clientes</h2>
        <p className="section-subtitle text-center">Veja o que dizem aqueles que já transformaram suas vidas.</p>
        <div className="testimonials-grid">
          {testimonialsData.map(testimonial => (
            <TestimonialItem
              key={testimonial.id}
              text={testimonial.text}
              author={testimonial.author}
              location={testimonial.location}
              imageSrc={testimonial.imageSrc} // Passar a imagem se houver
            />
          ))}
        </div>
        {/* Adicionar aqui o carrossel se for implementado com uma biblioteca externa */}
      </div>
    </section>
  );
};

export default TestimonialsSection;

