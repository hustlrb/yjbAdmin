// We only need to import the modules necessary for initial render
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import MainFrame from './route/MainFrame/index'
import Home from './route/Home/index'
import About from './route/About/index'

const RootRouter = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MainFrame}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  );
};

export { RootRouter };