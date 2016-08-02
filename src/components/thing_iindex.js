import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addThing } from '../actions/index';

class ThingIndex extends Component {
	
	onInputChange(e){
		debugger;
		this.props.addThing(e.target.value);
	}

	render() {

		return (
			<input onChange={this.onInputChange.bind(this)}/>
			<div>{this.props.}</div>
		)
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ addThing }, dispatch);
// };

export default connect(null, { addThing })(ThingIndex);