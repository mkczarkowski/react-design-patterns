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
  state = {
    activeStep: 0,
  };

  static Label = Label;
  static Image = Image;
  static Progress = Progress;

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { data, classes } = this.props;

    const children = data.length > 0 && React.Children.map(
      this.props.children,
      mapPropsToStepperChild.bind(this),
    );

    return data.length > 0 && <div className={classes.root}>{children}</div>;
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stepper);
