import React, {Component, PropTypes} from 'react';
// Here you are trying to use TodoList without importing it first.
/*
import TodoList from 'components/list';
*/

var ListForm = React.createClass({
  getInitialState: function() {
    this.setState({text: e.target.value});
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>To do</h3>
        <button>Add Item</button>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
});

module.exports = ListForm;
