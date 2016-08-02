import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addThing } from '../actions/index';
import SearchThing from '../containers/thing_iindex';

class SearchThingTest extends Component {
	
	// componentDidMount(){
	// 	debugger;
	// }

	renderStuff(stuff){
		// console.log(stuff);
		debugger;
	}

	render(){
		return (
			<div>
				{this.props.things.map((x, i) => { return (
					<li key={i}>
						{x}
					</li>
					);
				})}
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		things: state.things
	}
}

export default connect(mapStateToProps)(SearchThing)