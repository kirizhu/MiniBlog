import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
      break;
    default:
      return state;
      break;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_post' });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
