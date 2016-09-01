import React, { Component } from 'react';
import { connect } from 'react-redux';

class FoodList extends Component {

	constructor(props){
		super(props);
	}

	onInputChange(e){
		debugger;
	}

	renderSelectedFood(food, index){

	}

	render(){
		return (
			<div id="list">
			<input onChange={this.onInputChange.bind(this)} />
				<h2>List</h2>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		// food: state.food,
		thing: state.thing
	};
}

export default connect(mapStateToProps, null)(FoodList);