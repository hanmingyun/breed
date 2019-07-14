import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';
import Layout from './component/layout';
import Home from './page/home/home';
import Detail from './page/detail/detail';
import SubCategory from './page/sub/sub-category';


import './App.css'

class App extends Component {
  render() {
    return (
		<Router>
			<Layout>
				<Switch>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/sub/:id" component={SubCategory} />
					<Route path="/" component={Home} />
				</Switch>
			</Layout>
		</Router>
	)
  }
}

export default withRouter(App);
