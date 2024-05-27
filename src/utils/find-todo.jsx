export const findTodo = (todos, todoId) =>
  todos.find(({ id }) => id === todoId);
