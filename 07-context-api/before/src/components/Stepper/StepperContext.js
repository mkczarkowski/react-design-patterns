import React from 'react';

const defaultValue = {
  activeStep: 0,
};

const StepperContext = React.createContext(defaultValue);

export default StepperContext;

export { defaultValue };
