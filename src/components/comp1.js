import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectFood } from '../actions/index';

class Comp1 extends Component {
	
	constructor(props){
		super(props);
	}

	onInputChange(e){
		debugger;
	}

	selectedItem(e, item){
		debugger;
		this.props.selectFosod(item);
	}

	renderFoodResults(food, index){
		return (
			food.data.matches.map((item) => { 
				return <div onDoubleClick={this.selectedItem.bind(this)}key={item.id}>{item.recipeName}</div>
			})
		)
	}

	render(){
		return (
			<div id="test_bg">
				<input onChange={this.onInputChange.bind(this)} />
				<h1>TONKA</h1>
				{this.props.food.map(this.renderFoodResults.bind(this))}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		food: state.food,
		// thing: state.thing
	};
}

export default connect(mapStateToProps, null)(Comp1);