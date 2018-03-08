import { ADD_TODO, REMOVE } from '../actions/constants';
const initialState = [];

const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          date: action.date,
          image: action.image
        }
      ];
    case REMOVE:
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};

export default addTodo;
