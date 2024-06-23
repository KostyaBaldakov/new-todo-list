import { Button } from "../button/button";
import { Search, Sorting } from "./components";
import { useStateManager } from "../../state-manager";
import styles from "./control-panel.module.css";
import { NEW_TODO_ID } from "../../constants";

export const ControlPanel = ({ onTodoAdd, onSearch, onSorting }) => {
  const { updateState } = useStateManager();

  const onTodoAdd = () => {
    updateState({
      todos: [
        {
          id: NEW_TODO_ID,
          title: "",
          completed: false,
        },
      ],
      editingTodo: {
        id: NEW_TODO_ID,
        title: "",
      },
    });
  };

  return (
    <div className={styles.controlPanel}>
      <Search onSearch={onSearch} />
      <Sorting onSorting={onSorting} />
      <Button onClick={onTodoAdd}>✚</Button>
    </div>
  );
};
