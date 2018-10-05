import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default Cmp => {
  class withLoading extends Component {
    render() {
      return <Cmp {...this.props} />;
    }
  }

  withLoading.propTypes = {};

  const mapStateToProps = state => ({});

  const mapDispatchToProps = dispatch => ({});

  withLoading.displayName = `withLoading(${Cmp.displayName ||
  Cmp.name})`;

  return connect(mapStateToProps, mapDispatchToProps)(withLoading);
};
