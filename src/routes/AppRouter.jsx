import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Pages
import Home from './../components/pages/Home'

class AppRouter extends Component {
  render(){
    return(
      <BrowserRouter> 
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default AppRouter;
