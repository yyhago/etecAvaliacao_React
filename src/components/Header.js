import React, { useState } from "react";
import styled from "styled-components";

const Header = ({ openModal }) => {
  return (
    <HeaderContainer>
      <Button onClick={openModal}>Postar Exemplo Tcc</Button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #ccc;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;


export default Header;  
