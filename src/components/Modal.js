import React from "react";
import styled from "styled-components"


const Modal = ({ isOpen, onClose }) =>{
    return(
        <>
         {isOpen &&(
            <ModalOverlay>
                <ModalContainer>
                    {/* Conteudo da modal aqui*/}
                    <CloseButton onClick={onClose}>Fechar</CloseButton>
                </ModalContainer>
            </ModalOverlay>
         )}
        </>
    )
}

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
  margin-top: 10px;
`;

export default Modal;