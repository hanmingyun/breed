import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Layout from './component/layout';
import Home from './page/home/home';
import Detail from './page/detail';

import './App.css'

class App extends Component {
  render() {
    return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/detail" component={Detail} />
					<Route path="/" component={Home} />
				</Switch>
			</Layout>
		</Router>
	)
  }
}

export default withRouter(App);
