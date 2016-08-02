import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    	/* Question: How does this have access to this.props.children? */
      <div>
      	{this.props.children}
      </div>
    );
  }
}
