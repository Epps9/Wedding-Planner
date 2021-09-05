import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as galleryReducer} from '../redux/galleryRedux';

import { initialState } from './initialState';


// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof galleryReducer[item] == 'undefined') {
    galleryReducer[item] = (statePart = null) => statePart;
  }
});


// create store
export const store = createStore(
  galleryReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
