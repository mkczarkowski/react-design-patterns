import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render(args) {
    const { name, species, gender } = this.props;
    return (
      <div className="profile-row__desc">
        <h1 className="desc__name">{name}</h1>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        {args}
      </div>
    );
  }
}

Description.propTypes = {
  gender: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default Description;
