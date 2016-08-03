import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addThing } from '../actions/index';

class ThingIndex extends Component {

	constructor(props) {
		 super(props);
		this.state = {
			search: ''
		};
	}
	
	onInputChange(e){
		this.setState({
			search : e.target.value
		});
	}

	onSearchSubmit(e){
		e.preventDefault();
		/* Going to dispatch the action */
		this.props.addThing(this.state.search);
		// this.setState({ search : '' })
	}

	renderThing(thing, index){
		debugger;
		return <div key={index}>{thing}</div>
	}

	render() {
		return (
			<div>
				<input value={this.state.search} onChange={this.onInputChange.bind(this)} />
				<button onClick={this.onSearchSubmit.bind(this)} type="button" className="btn btn-primary">Search</button>
				<h1>things</h1>
				{this.props.things.map(this.renderThing)}
			</div>
		);
	}
}

ThingIndex.propTypes = {
	things: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addThing }, dispatch);
}

function mapStateToProps(state){
	return {
		things: state.things
	};
}

/*
	2 function calls... connect returns a function which immediately calls out container component  
	Think of it this way: 
	const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
	connectedStateAndProps(ThingIndex)
*/
export default connect(mapStateToProps, mapDispatchToProps)(ThingIndex);