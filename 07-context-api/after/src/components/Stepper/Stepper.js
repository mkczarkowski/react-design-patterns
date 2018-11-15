import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Label from './Label';
import Image from './Image';
import Progress from './Progress';
import StepperContext from './StepperContext';

const styles = {
  root: {
    margin: '0 auto',
    position: 'relative',
    top: '25%',
    maxWidth: 300,
  },
};

class Stepper extends React.Component {
  static Label = Label;
  static Image = Image;
  static Progress = Progress;

  render() {
    const { classes } = this.props;

    return (
      <StepperContext.Consumer>
        {({ maxSteps }) => {
          return (
            maxSteps > 0 && (
              <div className={classes.root}>{this.props.children}</div>
            )
          );
        }}
      </StepperContext.Consumer>
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stepper);
