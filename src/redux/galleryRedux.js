import Axios from 'axios';
import { API_URL } from '../config';


/* selectors */
export const getOneItem = ({gallery}, id) => {
  const chosenProduct = gallery.find(item => item.id === id);
  return chosenProduct;
};
  
  
/* action name creator */
const reducerName = 'gallery';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_PHOTOS = createActionName('FETCH_PHOTOS');

/* action creators */
export const fetchPhotos = payload => ({ payload, type: FETCH_PHOTOS });

/* thunk creators */
export const fetchGallery = () => {
  return (dispatch, getState) => {

    Axios
      .get(`${API_URL}/gallery`)
      .then(res => {
        dispatch(fetchPhotos(res.data));
        console.log('dane',typeof(res.data));
      })
      .catch(err => {
        dispatch({message: err});
      });
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_PHOTOS: {
      return {
        gallery: [...action.payload],
      };
    }
    default:
      return statePart;
  }
};
