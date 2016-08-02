import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addThing } from '../actions/index';

class ThingIndex extends Component {
	
	onInputChange(e){
		this.props.addThing(e.target.value);
	}

	renderThing(){
		return this.props.things.map((thing) => {
			return (
				<li className="list-group-item">
					hi
				</li>
			)
		})
	}

	render() {

		return (
			<div>
				<input onChange={this.onInputChange.bind(this)}/>
				{this.renderThing()}
			</div>
		)
	}
}

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ addThing }, dispatch);
// };

function mapStateToProps(state){
	return {
		thing: state.things.thing
	}
}

export default connect(mapStateToProps, { addThing })(ThingIndex);