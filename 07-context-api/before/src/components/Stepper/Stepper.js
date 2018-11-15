import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import mapPropsToStepperChild from './mapPropsToStepperChild';

import Label from './Label';
import Image from './Image';
import Progress from './Progress';

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

    return <div className={classes.root}>{this.props.children}</div>;
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stepper);
