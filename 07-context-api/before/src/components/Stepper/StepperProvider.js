import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StepperContext from './StepperContext';
import { defaultValue as defaultContextValue } from './StepperContext';

class StepperProvider extends Component {
  state = defaultContextValue;

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
    return (
      <StepperContext.Provider
        value={{
          activeStep: this.state.activeStep,
          maxSteps: this.props.data.length,
          activeStepData: this.props.data[this.state.activeStep],
          handleBack: this.handleBack,
          handleNext: this.handleNext,
        }}
      >
        {this.props.children}
      </StepperContext.Provider>
    );
  }
}

StepperProvider.propTypes = {};

export default StepperProvider;
