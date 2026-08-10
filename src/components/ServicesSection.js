import React from 'react';
import ServiceCard from './ServiceCard'; // Importa o componente ServiceCard
import './ServicesSection.css'; // Estilos para a seção de serviços

const servicesData = [
  {
    id: 1,
    title: "Amarração Amorosa",
    description: "Fortaleça os laços afetivos e traga seu amor de volta com rituais poderosos e direcionados.",
    iconName: "amarração" // Usado para lógica de ícone no ServiceCard
  },
  {
    id: 2,
    title: "Reconciliação de Casais",
    description: "Restaure a harmonia e a paixão em seu relacionamento, superando crises e desentendimentos.",
    iconName: "reconciliação"
  },
  {
    id: 3,
    title: "Abertura de Caminhos",
    description: "Remova obstáculos e atraia prosperidade, amor e sucesso para todas as áreas da sua vida.",
    iconName: "caminhos"
  },
  {
    id: 4,
    title: "Consultas de Tarô",
    description: "Obtenha clareza e orientação sobre suas questões mais importantes através da sabedoria do Tarô.",
    iconName: "taro" // Adicionar um ícone para tarô se desejar
  }
  // Adicionar mais serviços conforme necessário
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Serviços Oferecidos</h2>
        <p className="section-subtitle text-center">Descubra como Priscila Kollin pode iluminar seus caminhos.</p>
        <div className="services-grid">
          {servicesData.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

