import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, ControlPanel } from "../../components";
import { createTodo, readTodo, updateTodo, deleteTodo } from "../../api";
import styles from "./todo-page.module.css";

export const TodoPage = () => {
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const onTitleChange = ({ target }) => setTitle(target.value);

  const onRemove = () => deleteTodo(id).then(() => navigate("/"));

  const onSave = () => {
    if (id === undefined) {
      createTodo({ title, complete: false }).then(() => navigate("/"));
    } else {
      updateTodo({ id, title }).then(() => navigate("/"));
    }
  };

  useEffect(() => {
    readTodo(id).then((loadedTodo) => {
      if (loadedTodo.title === undefined) {
        navigate("/404");
      }
      setTitle(loadedTodo.title);
    });
  }, [id, navigate]);

  return (
    <div className="todoapp">
      <div className="main">
        <h1>Todo app</h1>
        <ControlPanel>
          <Button>
            <Link to="/">
              <b>&larr;</b>
            </Link>
          </Button>
          <Button onClick={onRemove}>x</Button>
          <Button onClick={onSave}>0</Button>
        </ControlPanel>
        <div>
          <textarea
            className={styles.title}
            value={title}
            onChange={onTitleChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
