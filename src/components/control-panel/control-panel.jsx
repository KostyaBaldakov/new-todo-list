import { Button } from "../button/button";
import { Search, Sorting } from "./components";
import { useStateManager } from "../../state-manager";
import { NEW_TODO_ID } from "../../constants";
import styles from "./control-panel.module.css";

export const ControlPanel = () => {
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
      <Search/>
      <Sorting/>
      <Button onClick={onTodoAdd}>✚</Button>
    </div>
  );
};
