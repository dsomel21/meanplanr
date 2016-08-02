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


	testThing(){
		debugger;
		if (this.props.things.thing){
			console.log(this.props.things.thing);
		}
	}

	onSearchSubmit(e){
		e.preventDefault();
		this.props.addThing(this.state.search);
		this.setState({ search : '' })
		{this.testThing()}
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

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({ addThing }, dispatch);
// };

// function mapStateToProps(state){
// 	return {
// 		things: state.things
// 	}
// }

export default connect(null, { addThing })(ThingIndex);