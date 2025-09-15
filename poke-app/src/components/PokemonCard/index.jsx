import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #f5f5f5;
  text-decoration: none;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
`;

const PokemonImage = styled.img`
  width: 96px;
  height: 96px;
`;

const PokemonName = styled.h3`
  margin: 0.5rem 0 0;
  font-size: 1.1rem;
  text-transform: capitalize;
`;

const PokemonCard = ({ pokemon }) => {
  // Extrai o ID do Pokémon da URL fornecida pela API
  const pokemonId = pokemon.url.split('/')[6];
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <CardContainer to={`/pokemon/${pokemonId}`}>
      <PokemonImage src={imageUrl} alt={pokemon.name} />
      <PokemonName>{pokemon.name}</PokemonName>
    </CardContainer>
  );
};

export default PokemonCard;