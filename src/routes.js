import React from 'react';
import { Route } from 'react-router';
/* We need App to be in our outermost route, because it renders children */
import App from './components/app';
import Thing from './components/thing_iindex';

export default (
	<Route path="/" component={App}>
		<Route path="/test" component={Thing} />
	</Route>
)