import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFood } from '../actions/index';

class SearchBar extends Component {

	constructor(props){
		super(props);
		this.state = {
			search : ""
		};
	}

	onSubmit(e){
		e.preventDefault();
		this.props.getFood(this.state.search);
		{this.renderThing()}
	}

	renderThing(){
		// debugger;
	}

	render(){
		return (
			<div>
				<input />
				<button onClick={this.onSubmit.bind(this)} type="button">Search</button>
			</div>
		)
	}
} 

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getFood }, dispatch);
}

// function mapStateToProps(state){
// 	return {
// 		foods : state.food
// 	}
// }

export default connect (null, mapDispatchToProps)(SearchBar); 