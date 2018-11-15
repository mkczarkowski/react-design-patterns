import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import StepperContext from './StepperContext';

const styles = {
  img: {
    height: 300,
    maxWidth: 300,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
};

const Image = ({ classes }) => (
  <StepperContext.Consumer>
    {({ activeStepData }) => (
      <img
        className={classes.img}
        src={activeStepData['image']}
        alt={activeStepData['name']}
      />
    )}
  </StepperContext.Consumer>
);

Image.propTypes = {
  path: PropTypes.string,
  alt: PropTypes.string,
  classes: PropTypes.object,
};

export default withStyles(styles)(Image);
