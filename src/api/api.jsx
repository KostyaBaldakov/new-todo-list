const fetchServer = (method, { id, ...payload } = {}) => {
  let url = "http://localhost:3001/todos";
  let options = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (id !== undefined) {
    url += `/${id}`;
    options.body = JSON.stringify(payload);
  }

  return fetch(url, options).then((jsonData) => jsonData.json());
};

export const createTodo = (newTodo) => fetchServer("POST", newTodo);

export const readTodos = () => fetchServer("GET");

export const updateTodo = (todoData) => fetchServer("PATCH", todoData);

export const deleteTodo = (todoId) => fetchServer("DELETE", { id: todoId });
