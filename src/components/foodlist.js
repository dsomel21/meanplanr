import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { selectFood } from '../actions/index';

class FoodList extends Component {

	// propTypes: {
	// 	list: React.PropTypes.array.isRequired
	// }

	constructor(props){
		super(props);
	}

	renderList(food){
		debugger;
		return (
			<div>{food}</div>
		)
	}

	render(){
		return (
			<div id="list">
				<h2>List</h2>
				{this.props.list.map(this.renderList.bind(this))}
			</div>
		)
	}
}

// FoodList.propTypes = {
// 	list: PropTypes.array.isRequired,
// // 	// thing: PropTypes.array.isRequired,
// };

function mapStateToProps(state){
	return {
		list: state.list,
			// thing: state.thing

	};
}

export default connect(mapStateToProps, null)(FoodList);