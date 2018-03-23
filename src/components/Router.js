import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import App from './App';
import Welcome from './Welcome';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path ="/" component={App} />
			<Route path="/Welcome" component={Welcome} />
		</Switch>
	</BrowserRouter>
);

export default Router;
