import React, {Component, PropTypes} from 'react';
import List from 'components/list';
import ListForm from 'components/list-form';

export default class Root extends Component {
  render() {
    return (
      <div className="root">
        <ListForm />
        <List />
      </div>
    );
  }
}


