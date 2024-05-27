import styles from "./todo.module.css";
import { Button } from "../button/button";

export const Todo = ({
  title,
  completed,
  isEditing,
  onEdit,
  onTitleChange,
  onSave,
  onRemove,
}) => {
  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        readOnly
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
