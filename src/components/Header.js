import React, { useState } from "react";
import styled from "styled-components";
import mortarboard from "../img/mortarboard.png"


const Header = ({ openModal }) => {
  return (
    <HeaderContainer>
      <img src={mortarboard} alt="Logo" />
      <Button onClick={openModal}>Postar Seu Exemplo de Tcc</Button>
    </HeaderContainer>
  );
};


const HeaderContainer = styled.div`
  display: flex;
  background-color: #F2F2F2;
  color: black;
  padding: 0 2%;
  
  text-align: center;
`;

const Button = styled.button`
  margin-top: 30px;
  margin-left: 70%;
  width: 240px;
  height: 60px;
  background-color: #68828C;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export default Header;
