import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ name, species, gender }) => (
  <div className="profile-row__desc">
    <h1 className="desc__name">{name}</h1>
    <p>Species: {species}</p>
    <p>Gender: {gender}</p>
  </div>
);

Description.propTypes = {
  gender: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Description;
