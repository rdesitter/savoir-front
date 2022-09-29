export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {
    id: 1,
    title: 'Mon annonce',
    createdAt: '12/15/2022',
    location: 'Montpellier',
    description: 'Je souhaite apprendre à me servir (...)',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
