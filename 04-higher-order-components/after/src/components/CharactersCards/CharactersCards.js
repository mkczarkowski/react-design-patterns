import React from 'react';

import CharacterCard from './CharacterCard/CharacterCard';
import ProfileRow from './CharacterCard/ProfileRow/ProfileRow';
import Avatar from './CharacterCard/ProfileRow/Avatar';
import DescriptionWithAutumnIcons from './CharacterCard/ProfileRow/Description/DescriptionWithAutumnIcons';

const CharactersCards = ({ characters }) => {
  return characters.map(({ name, image, species, gender }) => (
    <CharacterCard key={name}>
      <ProfileRow>
        <Avatar image={image} name={name} />
        <DescriptionWithAutumnIcons
          species={species}
          gender={gender}
          name={name}
        />
      </ProfileRow>
    </CharacterCard>
  ));
};

export default CharactersCards;
