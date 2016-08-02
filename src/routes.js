import React from 'react';
import { Route } from 'react-router';
/* We need App to be in our outermost route, because it renders children */
import App from './components/app';
import Thing from './components/thing_iindex';
import SearchFood from './components/search_bar'
import idk from './components/idk'

export default (
	<Route path="/" component={App}>
		<Route path="/test" component={Thing} />
		<Route path="/search" component={SearchFood} />
		<Route path="/idk" component={idk} />
	</Route>
)