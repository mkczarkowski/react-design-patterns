import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

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

const Label = ({ activeStepData, type, classes }) => (
  <Paper square elevation={0} className={classes.label}>
    <Typography>{activeStepData[type]}</Typography>
  </Paper>
);

Label.propTypes = {
  activeStepData: PropTypes.object.isRequired,
  type: PropTypes.string,
};

Label.defaultProps = {
  type: 'name',
};

export default withStyles(styles, { withTheme: true })(Label);
