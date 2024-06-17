import { useState, useEffect } from "react";
import { ControlPanel, Todo } from "../components";
import { createTodo, readTodos, updateTodo, deleteTodo } from "../api";
import {
  addTodoInTodos,
  findTodo,
  setTodoInTodos,
  removeTodoInTodos,
} from "../utils";
import { NEW_TODO_ID } from "../constants";
import { useStateManager } from "../state-manager";
import styles from "./App.module.css";

export const App = () => {
  const { state, setState } = useStateManager();
  const {
    todos,
    options: { searchPhrase, isAlphabetSorting },
  } = state;

  const onTodoAdd = () => {
    setTodos(addTodoInTodos(todos));
  };

  const onTodoSave = (todoId) => {
    const { title, completed } = findTodo(todos, todoId) || {};

    if (todoId === NEW_TODO_ID) {
      createTodo({ title, completed }).then((todo) => {
        let updateTodos = setTodoInTodos(todos, {
          id: NEW_TODO_ID,
          isEditing: false,
        });
        updateTodos = removeTodoInTodos(updateTodos, NEW_TODO_ID);
        updateTodos = addTodoInTodos(updateTodos, todo);
        setTodos(updateTodos);
      });
    } else {
      updateTodo({ id: todoId, title }).then(() => {
        setTodos(
          setTodoInTodos(todos, { id: todoId, title, isEditing: false })
        );
      });
    }
  };

  const onTodoEdit = (id) => {
    setTodos(setTodoInTodos(todos, { id, isEditing: true }));
  };

  const onTodoTitleChange = (id, newTitle) => {
    setTodos(setTodoInTodos(todos, { id, title: newTitle }));
  };

  const onTodoCompletedChange = (id, newCompleted) => {
    updateTodo({ id, completed: newCompleted }).then(() => {
      setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
    });
  };

  const onTodoRemove = (id) => {
    deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
  };

  useEffect(() => {
    readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
      setState({ ...state, todos: loadedTodos })
    );
  }, [searchPhrase, isAlphabetSorting]);

  return (
    <div className="todoapp">
      <div className="main">
        <h1>Todo app</h1>
        <ControlPanel
          onTodoAdd={onTodoAdd}
          onSearch={setSearchPhrase}
          onSorting={setIsAlphabetSorting}
        />
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
              onCompletedChange={(newCompleted) =>
                onTodoCompletedChange(id, newCompleted)
              }
              onSave={() => onTodoSave(id)}
              onRemove={() => onTodoRemove(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};