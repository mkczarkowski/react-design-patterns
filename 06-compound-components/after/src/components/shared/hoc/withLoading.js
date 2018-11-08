import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default Cmp => {
  class withLoading extends Component {
    render() {
      const { loading, ...rest } = this.props;

      if (loading) {
        return <LoadingSpinner />;
      }
      return <Cmp {...rest} />;
    }
  }

  withLoading.propTypes = { loading: PropTypes.bool.isRequired };

  withLoading.displayName = `withLoading(${Cmp.displayName || Cmp.name})`;

  return withLoading;
};
