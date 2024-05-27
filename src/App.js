import { useState, useEffect } from "react";
import { ControlPanel, Todo } from "./components";
import { readTodos, updateTodo, deleteTodo } from "./api";
import { findTodo, setTodoInTodos, removeTodoInTodos } from "./utils";
import styles from "./App.module.css";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const onTodoSave = (id) => {
    const { title } = findTodo(todos, id) || {};

    updateTodo({ id, title }).then(() => {
      setTodos(setTodoInTodos(todos, { id, title, isEditing: false }));
    });
  };

  const onTodoEdit = (id) => {
    setTodos(setTodoInTodos(todos, { id, isEditing: true }));
  };

  const onTodoTitleChange = (id, newTitle) => {
    setTodos(setTodoInTodos(todos, { id, title: newTitle }));
  };

  const onTodoRemove = (id) => {
    deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
  };

  useEffect(() => {
    readTodos().then((loadedTodos) => setTodos(loadedTodos));
  }, []);

  return (
    <div className="todoapp">
      <div className="main">
        <h1>Todo app</h1>
        <ControlPanel />
        <div>
          {todos.map(({ id, title, completed, isEditing = false }) => (
            <Todo
              key={id}
              id={id}
              title={title}
              completed={completed}
              isEditing={isEditing}
              onEdit={() => onTodoEdit(id)}
              onTitleChange={(newTitle) => onTodoTitleChange(id, newTitle)}
              onSave={() => onTodoSave(id)}
              onRemove={() => onTodoRemove(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
