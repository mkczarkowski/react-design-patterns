import React from 'react';
import PropTypes from 'prop-types';

import ProfileRow from './ProfileRow';

const UNKNOWN_AVATAR_URL = `${
  process.env.PUBLIC_URL
}/images/unknown-avatar.png`;

const CharacterCard = ({ name, image, species, gender }) => {
  return (
    <div className="character-card-wrapper" key={name}>
      <div className="character-card">
        <ProfileRow
          name={name}
          image={image}
          species={species}
          gender={gender}
        />
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  gender: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

CharacterCard.defaultProps = {
  name: 'John Doe',
  image: UNKNOWN_AVATAR_URL,
  gender: 'n/a',
  species: 'human',
};

export default CharacterCard;
