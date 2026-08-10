import React from 'react';
import './TestimonialItem.css'; // Estilos para o item de depoimento

const TestimonialItem = ({ text, author, location, imageSrc }) => {
  return (
    <div className="testimonial-item">
      {imageSrc && (
        <div className="testimonial-image-container">
          <img src={imageSrc} alt={`Depoimento de ${author}`} className="testimonial-image" />
        </div>
      )}
      <blockquote className="testimonial-text">"{text}"</blockquote>
      <p className="testimonial-author">- {author}, {location}</p>
    </div>
  );
};

export default TestimonialItem;

