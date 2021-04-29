
/* selectors */
export const getOneItem = ({gallery}, id) => {
  const chosenProduct = gallery.find(item => item.id === id);
  return chosenProduct;
};
  
  
/* action name creator */
const reducerName = 'watches';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const ADD_WATCH = createActionName('ADD_WATCH');

/* action creators */

export const addWatchToCart = payload => ({payload, type: ADD_WATCH});



/* thunk creators */

/* reducer */
export const reducer = (cart = [], action = {}) => {
  switch (action.type) {      

    default:
      return cart;
  }
};
  