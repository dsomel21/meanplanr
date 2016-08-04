import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFood } from '../actions/index'

class SearchFood extends Component {
	
	constructor(props){
		super(props);
		this.state {
			search : ''
		}
	}

	render(){
		return (
			<input />
		)
	}
}

function mapDispatchToProps(){

}

function mapStateToProps(state){

}

// export default connect(mapDispatchToProps, mapStateToProps)(SearchFood);
