import { useState } from "react";
import styles from "./control-panel.module.css";

export const ControlPanel = ({ onTodoAdd }) => {
  const [searchPhrase, SetSearchPhrase] = useState("");
  const [isSortingEnable, setIsSortingEnable] = useState(false);

  const onSearchPhaseChange = ({ target }) => {
    SetSearchPhrase(target.value);
  };

  const onSortingChange = ({ target }) => {
    setIsSortingEnable(target.checked);
  };

  return (
    <div className={styles.controlPanel}>
      <input
        type="text"
        className="new-todo"
        value={searchPhrase}
        onChange={onSearchPhaseChange}
      />
      <input
        type="checkbox"
        checked={isSortingEnable}
        className={styles.sortingBtn}
        onChange={onSortingChange}
      />
      <button className="button" onClick={onTodoAdd}>
        ✚
      </button>
    </div>
  );
};
