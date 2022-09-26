export const initialState = {
  list: [
    'Cuisine',
    'Informatique',
    'Sport',
  ],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
