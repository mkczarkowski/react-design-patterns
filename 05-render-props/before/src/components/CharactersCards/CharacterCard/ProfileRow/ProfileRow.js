import React from 'react';
import PropTypes from 'prop-types';

const ProfileRow = ({ children }) => (
  <div className="profile-row">{children}</div>
);

ProfileRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
  ]).isRequired,
};

export default ProfileRow;
