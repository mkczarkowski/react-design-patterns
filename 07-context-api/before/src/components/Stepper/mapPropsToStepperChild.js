import React from 'react';

function mapPropsToStepperChild(child) {
  const { classes, theme, data } = this.props;
  const { activeStep } = this.state;
  const maxSteps = data.length;

  if (isChildTypeNameEqualTo(child, 'Progress')) {
    return React.cloneElement(child, {
      classes,
      theme,
      activeStep,
      maxSteps,
      handleNext: this.handleNext,
      handleBack: this.handleBack,
    });
  } else if (isChildTypeNameEqualTo(child, 'Label')) {
    return React.cloneElement(child, {
      activeStepData: data[activeStep],
      classes,
    });
  } else if (isChildTypeNameEqualTo(child, 'Image'))
    return React.cloneElement(child, {
      path: data[activeStep].image,
      alt: data[activeStep].name,
      classes,
    });

  return React.cloneElement(child, null);
}

function isChildTypeNameEqualTo(child, name) {
  return (
    child.type.name === name || child.type.displayName == `WithStyles(${name})`
  );
}

export default mapPropsToStepperChild;
