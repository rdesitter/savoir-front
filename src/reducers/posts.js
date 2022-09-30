export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {
    id: '',
    title: '',
    createdAt: '',
    category: '',
    location: '',
    description: '',
    user: {},
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
