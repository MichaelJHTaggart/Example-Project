import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AccountDash from './components/AccountDash';
import Login from './components/Login';
import AboutUs from './components/AboutUs';

export default (
 <Switch>
  <Route exact path='/accountdash' component={AccountDash} />
  <Route exact path='/' component={Login} />
  <Route exact path='/about-us' component={AboutUs} />
 </Switch>
)