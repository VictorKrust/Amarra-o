import React from 'react';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import VideoSection from '../components/VideoSection';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <VideoSection />
      <ContactForm />
      <WhatsAppButton phoneNumber="5511999998888" /> {/* Substitua pelo número real se diferente */}
      <Footer />
    </>
  );
};

export default HomePage;

