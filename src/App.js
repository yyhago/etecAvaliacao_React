import React, { useState } from 'react';
import Header from './components/Header.js';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    // Aqui você pode adicionar lógica adicional para lidar com a abertura da modal
  };

  return (
    <div>
      <Header openModal={openModal} />
      {/* Outros componentes e lógica da aplicação aqui */}
    </div>
  );
};

export default App;
