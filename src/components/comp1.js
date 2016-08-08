import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comp1 extends Component {
	render(){
		return (
			<div id="test_bg">
				<h1>TONKA</h1>
			</div>
		)
	}
}
export default connect(null, null)(Comp1);