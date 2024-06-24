import { useEffect } from "react";
import { ControlPanel, Todo } from "../components";
import { readTodos } from "../api";
import { useStateManager } from "../state-manager";
import styles from "./App.module.css";

export const App = () => {
  const { state, setState } = useStateManager();
  const {
    todos,
    options: { searchPhrase, isAlphabetSorting },
  } = state;

  useEffect(() => {
    readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
      setState({ ...state, todos: loadedTodos })
    );
  }, [searchPhrase, isAlphabetSorting]);

  return (
    <div className="todoapp">
      <div className="main">
        <h1>Todo app</h1>
        <ControlPanel />
        <div>
          {todos.map(({ id, title, completed }) => (
            <Todo key={id} id={id} title={title} completed={completed} />
          ))}
        </div>
      </div>
    </div>
  );
};
