import styles from "./todo.module.css";
import { useStateManager } from "../../state-manager";
import { updateTodo, createTodo, deleteTodo } from "../../api";
import { Button } from "../button/button";
import { NEW_TODO_ID } from "../../constants";

export const Todo = ({ id, title, completed }) => {
  const {
    state: {
      editingTodo: { id: editingTodoId, title: editingTodoTitle },
    },
    updateState,
  } = useStateManager();

  const isEditing = id === editingTodoId;

  const onEdit = () => {
    updateState({ editingTodo: { id, title } });
  };

  const onTitleChange = ({ target }) => {
    updateState({ editingTodo: { title: target.value } });
  };

  const onCompletedChange = ({ target: { checked } }) => {
    updateTodo({ id, completed: checked }).then(() => {
      updateState({ todos: [{ id, completed: checked }] });
    });
  };

  const onNewTodoSave = () => {
    createTodo({ title, completed }).then((todo) => {
      updateState({ todos: [{ id: NEW_TODO_ID }, todo] });
    });
  };

  const onEditingTodoSave = () => {
    updateTodo({ id, title }).then(() => {
      updateState({
        todos: [{ id, title: editingTodoTitle }],
        editingTodo: { id: null },
      });
    });
  };

  const onSave = () => {
    if (id === NEW_TODO_ID) {
      onNewTodoSave();
    } else {
      onEditingTodoSave();
    }
  };

  const onRemove = () => {
    deleteTodo(id).then(() => updateState({ todos: [{ id }] }));
  };

  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={onCompletedChange}
      />

      <div className={styles.title}>
        {isEditing ? (
          <input
            className="new-todo"
            type="text"
            value={title}
            onChange={onTitleChange}
          />
        ) : (
          <div className="todo-list" onClick={onEdit}>
            {title}
          </div>
        )}
      </div>

      <div className={styles.groupBtn}>
        {isEditing ? (
          <Button onClick={onSave}>✎</Button>
        ) : (
          <Button onClick={onRemove}>✖</Button>
        )}
      </div>
    </div>
  );
};
