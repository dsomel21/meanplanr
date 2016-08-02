import React, { Component } from 'react';
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
		this.props.addThing(this.state.search);
		this.setState({ search : '' })
		// debugger;
		{this.renderThing()}
	}

	renderThing(){
		debugger;
		return this.props.things.map((x) => {
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
				<input value={this.state.search} onChange={this.onInputChange.bind(this)} />
				<button onClick={this.onSearchSubmit.bind(this)} type="button" className="btn btn-primary">Search</button>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ addThing }, dispatch);
};

function mapStateToProps(state){
	return {
		things: state.things.thing
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ThingIndex);