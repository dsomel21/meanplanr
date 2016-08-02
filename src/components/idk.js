import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';

class Idk extends Component {

	renderIDK(){
		setTimeout(function(){ 
			debugger
		}, 3000);
	}

	render() {
		return (
			<div>
				<SearchBar />
				{this.renderIDK()}
			</div>
		)
	}
}

function mapStateToProps( {food} ){
	// Use state.weather because in index reducer, the key was weather
	return { food }
}

export default connect(mapStateToProps)(Idk);