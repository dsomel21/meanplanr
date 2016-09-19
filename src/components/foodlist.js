import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectFood } from '../actions/index';

class FoodList extends Component {

	constructor(props){
		super(props);
	}

	renderList(food, index){
		debugger;
		return (
			<div>
			<div>{food.data.name}</div>
			<div><img src={food.data.images[0].hostedSmallUrl} /></div>
			</div>
		)
	}

	render(){
		return (
			<div id="list">
				<h2>List</h2>
				<p>LOOK</p>
				{this.props.list.map(this.renderList.bind(this))}
			</div>
		)
	}
}

// FoodList.propTypes = {
// 	list: PropTypes.array.isRequired,
// };

function mapStateToProps(state){
	return {
		list: state.list,
			// thing: state.thing
	};
}

export default connect(mapStateToProps, null)(FoodList);