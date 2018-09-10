import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Description from './Description';

const ProfileRow = ({ name, image, species, gender }) => (
  <div className="profile-row">
    <Avatar name={name} image={image} />
    <Description name={name} species={species} gender={gender} />
  </div>
);

ProfileRow.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default ProfileRow;
