import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './asyncComponent.jsx';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';

// const Dashboard = asyncComponent(() => import('components/Home/Dashboard.jsx').then(module => module.default), {});

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {

		return (
			<Router>
				<div id="app-content" className="app-content">
					<Header />
					<div id="main-content" className="main-content">
						<Switch>
							{/* <Route exact path="/" component={Dashboard} /> */}
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}
