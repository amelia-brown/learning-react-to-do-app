import React, { Component, PropTypes } from 'react';

var List = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

// so the error you are getting here has to do with not having the expected
// type of the prop defined. How we can remedy this is by using React's
// predefined type system to assign the expected type in the class definition.

/*
List.propTypes = {
  items: PropTypes.array,
};
*/

module.exports = List;
