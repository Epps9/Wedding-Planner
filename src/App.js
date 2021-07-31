import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';


import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { About } from './components/views/About/About';
import { Offer } from './components/views/Offer/Offer';
import { Gallery } from './components/views/Gallery/Gallery';
import { GalleryItem } from './components/features/GalleryItem/GalleryItem';
import { Inspirations } from './components/views/Inspirations/Inspirations';
import { Contact } from './components/views/Contact/Contact';
import { MessageSent } from './components/views/MessageSent/MessageSent';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/offer" component={Offer}/>
          <Route exact path="/inspirations" component={Inspirations}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/sent" component={MessageSent}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/:id" component={GalleryItem}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export { App };

