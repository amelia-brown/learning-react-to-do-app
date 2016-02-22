import React, {Component, PropTypes} from 'react';
import Greeting from 'components/greeting';

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <Greeting name='Amelia' />
      </div>
    );
  }
}
