import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFood } from '../actions/index';
import { doThing } from '../actions/index';
import Comp1 from '../components/comp1';

class SearchFood extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			search : ''
		}
	}

	onInputChange(e){
		this.setState({
			search : e.target.value
		});
	}

	onSearchSubmit(e){
		e.preventDefault();
		/* Going to dispatch the action */
		this.props.getFood(this.state.search);
		// this.props.doThing(this.state.search);
		this.setState({ search : '' })
	}



	render() {
		return (
			<div id="stuff">
				<input value={this.state.search} onChange={this.onInputChange.bind(this)} />
				<button onClick={this.onSearchSubmit.bind(this)} type="button" className="btn btn-primary">Search</button>
				<h1>food</h1>
				<Comp1 />
			</div>
		);
	}
}

SearchFood.propTypes = {
	food: PropTypes.array.isRequired,
	// thing: PropTypes.array.isRequired,
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getFood }, dispatch);
	// return {
		// getFood: () => getFood(dispatch),
		// doThing: () => doThing(dispatch)
	// }
}

function mapStateToProps(state){
	return {
		food: state.food,
		// thing: state.thing
	};
}

/*
	2 function calls... connect returns a function which immediately calls out container component  
	Think of it this way: 
	const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
	connectedStateAndProps(ThingIndex)
*/
export default connect(mapStateToProps, mapDispatchToProps)(SearchFood);