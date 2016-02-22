import React, { Component, PropTypes } from 'react';

export default class Alert extends Component {
  static propTypes = {
    statement: PropTypes.string,
  };
  alert() {
    return alert(this.props.statement);
  }
  render() {
    return (
      <div>
      <button onClick={::this.alert}>Yell</button>
      </div>
    );
  }
}
