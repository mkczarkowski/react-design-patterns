import React from 'react';
import PropTypes from 'prop-types';

import ProfileRow from './ProfileRow/ProfileRow';

const CharacterCard = ({ name, image, species, gender }) => {
  return (
    <div className="id-card-wrapper" key={name}>
      <div className="id-card">
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
  gender: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default CharacterCard;
