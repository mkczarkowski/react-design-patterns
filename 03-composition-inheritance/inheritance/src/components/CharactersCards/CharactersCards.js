import React from 'react';

import CharacterCard from './CharacterCard/CharacterCard';
import ProfileRow from './CharacterCard/ProfileRow/ProfileRow';
import Avatar from './CharacterCard/ProfileRow/Avatar';
import FetchError from '../shared/FetchError/FetchError';
import LoadingSpinner from '../shared/LoadingSpinner/LoadingSpinner';
import DescriptionWithAutumnIcon from './CharacterCard/ProfileRow/Description/DescriptionWithAutumnIcon';

const CharactersCards = ({ characters, loading, error }) => {
  if (error) {
    return <FetchError />;
  } else if (loading) {
    return <LoadingSpinner />;
  }
  return characters.map(({ name, image, species, gender }) => (
    <CharacterCard key={name}>
      <ProfileRow>
        <Avatar image={image} name={name} />
        <DescriptionWithAutumnIcon species={species} gender={gender} name={name} />
      </ProfileRow>
    </CharacterCard>
  ));
};

export default CharactersCards;
