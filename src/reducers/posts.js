export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {
    id: 1,
    title: 'Mon annonce',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
