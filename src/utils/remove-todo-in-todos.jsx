export const removeTodoInTodos = (todos, todoId) =>
  todos.filter(({ id }) => id !== todoId);
