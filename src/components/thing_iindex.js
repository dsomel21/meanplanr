import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addThing } from '../actions/index';

class ThingIndex extends Component {
	render(){
		return (
			<div>HI</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ addThing }, dispatch);
};

export default connect(null, mapDispatchToProps)(ThingIndex);