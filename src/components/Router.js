import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Header from './Header';
import App from './App';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path ="/" component={Header} />
			<Route path = "/App" component={App} />
		</Switch>
	</BrowserRouter>
);

export default Router;
