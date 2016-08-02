import React, { Component } from 'react';
import SearchThing from '../containers/thing_iindex';

export default class App extends Component {
  render() {
    return (
    	/* Question: How does this have access to this.props.children? */
      <div>
      	<SearchThing />
      </div>
    );
  }
}
