import React, { useState } from 'react';
import './ContactForm.css'; // Estilos para o formulário de contato

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!formData.name || !formData.whatsapp || !formData.message) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Simulação de envio para Formsubmit.co ou backend
    // Em um projeto real, você faria uma requisição fetch/axios aqui
    // Para Formsubmit, o action do form apontaria para o endpoint deles
    // e o método seria POST.

    // Exemplo de como seria com Formsubmit (requer que o form tenha action e method)
    // e.target.submit(); // Isso submeteria o formulário nativamente

    // Para este exemplo, vamos simular o sucesso e redirecionar para /obrigado
    console.log('Dados do formulário:', formData);
    try {
      // Simula uma chamada de API
      const response = await fetch('https://formsubmit.co/your@email.com', { // SUBSTITUA PELO SEU EMAIL DO FORMSUBMIT
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Redirecionamento pode ser feito pelo React Router aqui, ou o Formsubmit faz
        // window.location.href = '/obrigado'; // Se não estiver usando React Router para isso
        // Com Formsubmit, você pode configurar o _next na tag <form>
        // <input type="hidden" name="_next" value="https://seusite.com/obrigado">
        setFormData({ name: '', whatsapp: '', message: '' }); // Limpa o formulário
      } else {
        const data = await response.json();
        if (data.errors) {
          setError(data.errors.map(err => err.message).join(', '));
        } else {
          setError('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
        }
      }
    } catch (err) {
      setError('Ocorreu um erro de conexão. Verifique sua internet e tente novamente.');
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Entre em Contato</h2>
        <p className="section-subtitle text-center">Envie sua mensagem e Priscila Kollin responderá em breve.</p>
        
        {isSubmitted && <p className="success-message">Mensagem enviada com sucesso! Em breve entraremos em contato.</p>}
        {error && <p className="error-message">{error}</p>}

        <form 
          onSubmit={handleSubmit} 
          action="https://formsubmit.co/REPLACE_WITH_YOUR_EMAIL@example.com" // IMPORTANTE: Substitua pelo seu e-mail do Formsubmit
          method="POST"
          className="contact-form"
        >
          {/* Campos ocultos para Formsubmit, se necessário (ex: _subject, _captcha) */}
          <input type="hidden" name="_subject" value="Nova Mensagem do Site Priscila Kollin Landing Page" />
          <input type="hidden" name="_captcha" value="false" /> {/* Desabilita captcha do Formsubmit, use o do Google se preferir */}
          <input type="hidden" name="_template" value="table" /> {/* Formato do email recebido */}
          {/* <input type="hidden" name="_next" value="https://seusite.com/obrigado" /> */}
          {/* A página de obrigado será tratada pelo React Router neste exemplo */}

          <div className="form-group">
            <label htmlFor="name">Nome Completo:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp (com DDD):</label>
            <input 
              type="tel" 
              id="whatsapp" 
              name="whatsapp" 
              value={formData.whatsapp} 
              onChange={handleChange} 
              placeholder="(XX) XXXXX-XXXX" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Sua Mensagem:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="button-global button-primary form-submit-button">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

