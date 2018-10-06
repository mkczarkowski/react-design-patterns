import React from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import autumnIcons from '../../../../shared/autumnIcons';

function DescriptionWithAutumnIcons({ name, gender, species }) {
  return (
    <Description name={name} gender={gender} species={species}>
      {autumnIcons}
    </Description>
  );
}

DescriptionWithAutumnIcons.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
};

export default DescriptionWithAutumnIcons;
