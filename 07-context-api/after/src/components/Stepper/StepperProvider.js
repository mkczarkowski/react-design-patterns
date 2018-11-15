import React, { Component } from 'react';
import StepperContext, {
  defaultValue as defaultStepperValue,
} from './StepperContext';
import PropTypes from 'prop-types';

class StepperProvider extends Component {
  state = defaultStepperValue;

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

StepperProvider.propTypes = {
  data: PropTypes.array,
};

StepperProvider.defaultProps = {
  data: [],
};

export default StepperProvider;
