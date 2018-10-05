import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default Cmp => {
  class withHandleError extends Component {
    render() {
      return <Cmp {...this.props} />;
    }
  }

  withHandleError.propTypes = {};

  const mapStateToProps = state => ({});

  const mapDispatchToProps = dispatch => ({});

  withHandleError.displayName = `withHandleError(${Cmp.displayName ||
  Cmp.name})`;

  return connect(mapStateToProps, mapDispatchToProps)(withHandleError);
};
