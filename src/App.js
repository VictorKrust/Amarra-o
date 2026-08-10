import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ThankYouPage from './pages/ThankYouPage';
import './styles/global.css'; // Estilos globais

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={<ThankYouPage />} />
        {/* Adicionar outras rotas se necessário */}
      </Routes>
    </Router>
  );
}

export default App;

