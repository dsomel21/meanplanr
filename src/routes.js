import React from 'react';
import { Route, IndexRoute } from 'react-router';
/* We need App to be in our outermost route, because it renders children */
import App from './components/app';
import ContainerThingy from './containers/thing_iindex';
import Thingy from './components/test_thing_page';
import FoodSearchBar from './containers/search_food';

export default (
	<Route path="/" component={App}>
		<Route path="/test" component={ContainerThingy} />
	</Route>
)