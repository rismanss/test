import { ADD_TODO, REMOVE } from './constants';

let todoId = 0;
export const addTodoAction = (title, content, date, image) => ({
  type: ADD_TODO,
  id: (todoId++).toString(),
  title,
  content,
  date,
  image
});

export const remove = id => ({
  type: REMOVE,
  id
});
