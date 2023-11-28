import React, { useState } from "react";
import styled from "styled-components";

const Modal = ({ isOpen, onClose, addPost }) => {   // este const inteiro eu setei os meus useState para cada variavel
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [observation, setObservation] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleObservationChange = (e) => {
    setObservation(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      name,
      description,
      observation,
      image: image ? URL.createObjectURL(image) : null,
    };

    addPost(newPost);
    setName("");
    setDescription("");
    setObservation("");
    setImage("");

    onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContainer>
            <CloseButton onClick={onClose}>Fechar</CloseButton>
            <InputLabel>Nome do Post:</InputLabel>
            <Input
              type="text"
              value={name}
              onChange={handleNameChange}
            />
            <InputLabel>Descrição:</InputLabel>
            <Input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
            <InputLabel>Observação:</InputLabel>
            <Input
              type="text"
              value={observation}
              onChange={handleObservationChange}
            />
            <InputLabel>Upload de Imagem:</InputLabel>
            <Input
              type="file"
              onChange={handleImageChange}
            />
            <SubmitButton onClick={handleSubmit}>Enviar</SubmitButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #ff5555;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  display: block;
  margin-top: 10px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export default Modal;
