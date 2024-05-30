import styles from "./todo.module.css";
import { Button } from "../button/button";

export const Todo = ({
  title,
  completed,
  isEditing,
  onEdit,
  onTitleChange,
  onCompletedChange,
  onSave,
  onRemove,
}) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={({ target }) => onCompletedChange(target.checked)}
      />

      <div className={styles.title}>
        {isEditing ? (
          <input
            className="new-todo"
            type="text"
            value={title}
            onChange={({ target }) => onTitleChange(target.value)}
          />
        ) : (
          <div className="todo-list" onClick={onEdit}>
            {title}
          </div>
        )}
      </div>

      <div>
        {isEditing ? (
          <Button onClick={onSave}>✎</Button>
        ) : (
          <Button onClick={onRemove}>✖</Button>
        )}
      </div>
    </div>
  );
};
