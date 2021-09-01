import Axios from 'axios';
import { API_URL } from '../config';
import { initialState } from './initialState';


/* selectors */
export const getOneItem = ({gallery}, id) => {
  const chosenProduct = gallery.find(item => item.id === id);
  return chosenProduct;
};
  
  
/* action name creator */
const reducerName = 'gallery';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchGallery = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${API_URL}/gallery`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
        console.log('dane',res.data);
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


/* reducer */
export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
      };
    }
    case FETCH_SUCCESS: {
      console.log('co to kurwa jest',typeof(action.payload));
      return {
        data: [action.payload],
      };
    };
    case FETCH_ERROR: {
      return {
        ...statePart,
      };
    }
    default:
      return statePart;
  }
};
