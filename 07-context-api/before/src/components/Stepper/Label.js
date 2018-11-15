import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import StepperContext from './StepperContext';
import Paper from '@material-ui/core/Paper/Paper';
import Typography from '@material-ui/core/Typography/Typography';

const styles = theme => ({
  label: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
});

const Label = ({ type, classes }) => (
  <StepperContext.Consumer>
    {({ activeStepData }) => (
      <Paper square elevation={0} className={classes.label}>
        <Typography>{activeStepData[type]}</Typography>
      </Paper>
    )}
  </StepperContext.Consumer>
);

Label.propTypes = {
  type: PropTypes.string,
};

Label.defaultProps = {
  type: 'name',
};

export default withStyles(styles, { withTheme: true })(Label);
