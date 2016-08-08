import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* We need App to be in our outermost route, because it renders children */
import App from './components/app';
import FoodSearchBar from './containers/search_food';
import Comp1 from './components/comp1';

export default (
	<Route path="/" component={App}>
		<Route path="/search_food" component={FoodSearchBar} />
		<Route path="/comp1" component={Comp1} />
	</Route>
)