import React from 'react';
import PropTypes from 'prop-types';

const CharacterCard = ({ children }) => {
  return (
    <div className="id-card-wrapper">
      <div className="id-card">{children}</div>
    </div>
  );
};

CharacterCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CharacterCard;
