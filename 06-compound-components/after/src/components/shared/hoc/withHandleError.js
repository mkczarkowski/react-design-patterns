import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FetchError from '../FetchError/FetchError';

export default Cmp => {
  class withHandleError extends Component {
    render() {
      const { error, ...rest } = this.props;

      if (error) {
        return <FetchError />;
      }
      return <Cmp {...rest} />;
    }
  }

  withHandleError.propTypes = {
    error: PropTypes.object,
  };

  withHandleError.defaultProps = {
    error: null,
  };

  withHandleError.displayName = `withHandleError(${Cmp.displayName ||
    Cmp.name})`;

  return withHandleError;
};
