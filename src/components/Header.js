// Header.js
import React from "react";
import styled from "styled-components";
import mortarboard from "../img/mortarboard.png";

const Header = ({ openModal }) => {
  return (
    <HeaderContainer>
      <img
        src={mortarboard}
        alt="logo"
      />
      <AddPostButton onClick={openModal}>Postar Exemplo de TCC</AddPostButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddPostButton = styled.button`
  background-color: #202022;
  color: white;
  margin-right: 60px;
  padding: 18px 16px;
  font-size: 20px;
  cursor: pointer;
  border: none;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 1px black;
`;

export default Header;
