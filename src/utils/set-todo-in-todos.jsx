export const setTodoInTodos = (todos, newTodoData) =>
  todos.map((todo) =>
    todo.id === newTodoData.id
      ? {
          ...todo,
          ...newTodoData,
        }
      : todo
  );
