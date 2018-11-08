import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    const { activeStep } = this.state;
    const maxSteps = data.length;

    return (
      data.length > 0 && (
        <div className={classes.root}>
          <Label activeStepData={data[activeStep]} />
          <Image
            path={data[activeStep]['image']}
            alt={data[activeStep]['name']}
          />
          <Progress
            activeStep={activeStep}
            handleBack={this.handleBack}
            handleNext={this.handleNext}
            maxSteps={maxSteps}
          />
        </div>
      )
    );
  }
}

Stepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Stepper);
