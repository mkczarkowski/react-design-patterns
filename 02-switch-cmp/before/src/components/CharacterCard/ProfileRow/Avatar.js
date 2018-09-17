import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ image, name }) => (
  <div className="profile-row__avatar">
    <img className="avatar__image" src={image} alt={`${name}'s avatar`} />
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Avatar.defaultProps = {
  name: 'Unknown',
};

export default Avatar;
