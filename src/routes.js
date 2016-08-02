import React from 'react';
import { Route } from 'react-router';
/* We need App to be in our outermost route, because it renders children */
import App from './components/app';

export default (
	<Route path="/" component={App}>

	</Route>
)