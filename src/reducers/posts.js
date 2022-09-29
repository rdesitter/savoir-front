export const initialState = {
  posts: [],
  loading: true,
  selectedPost: {
    id: 1,
    title: 'Mon annonce',
    createdAt: '12/15/2022',
    location: 'Montpellier',
    description: 'Je souhaite apprendre à me servir (...)',
    user: {
      username: 'Jeanne',
      email: 'jeanette@mail.fr',
      createdAt: '23/05/2022',
      avatar: 'NOHAIR1',
    },
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
