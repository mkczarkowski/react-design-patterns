import React from 'react';
import CharacterCard from './CharacterCard';

const CharactersCards = ({ characters }) =>
  characters.map(({ name, image, species, gender }) => (
    <CharacterCard
      name={name}
      image={image}
      species={species}
      gender={gender}
      key={name}
    />
  ));

export default CharactersCards;
