import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #e53935;
  padding: 1rem 2rem;
  color: white;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-family: 'Arial', sans-serif;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Pokédex</Title>
  </HeaderContainer>
);

export default Header;