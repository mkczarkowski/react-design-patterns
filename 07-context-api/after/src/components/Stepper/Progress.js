import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import MobileStepper from '@material-ui/core/MobileStepper';
import StepperContext from './StepperContext';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const Progress = ({ theme }) => (
  <StepperContext.Consumer>
    {({ activeStep, maxSteps, handleNext, handleBack }) => {
      return (
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="progress"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      );
    }}
  </StepperContext.Consumer>
);

Progress.propTypes = {
  maxStep: PropTypes.number,
  activeStep: PropTypes.number,
  theme: PropTypes.object,
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};

export default withStyles(null, { withTheme: true })(Progress);
