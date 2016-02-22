import React, {Component, PropTypes} from 'react';
import Greeting from 'components/greeting';
import Alert from 'components/alert';

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <Greeting name='Amelia' />
        <Alert statement='You suck and I hate you' />
      </div>
    );
  }
}


