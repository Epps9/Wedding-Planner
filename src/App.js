import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { About } from './components/views/About/About';


const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path="/aboutus" component={About}/>
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export { App };

