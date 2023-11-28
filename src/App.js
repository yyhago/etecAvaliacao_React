import React, { useState } from "react";
import Header from "./components/Header.js";
import "./App.css";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <Header openModal={openModal} />
      {/* Outros componentes e lógica da aplicação aqui */}
    </div>
  );
};

export default App;
