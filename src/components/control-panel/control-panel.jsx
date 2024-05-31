import { Button } from "../button/button";
import { Search, Sorting } from "./components";
import styles from "./control-panel.module.css";

export const ControlPanel = ({ onTodoAdd, onSearch, onSorting }) => {
  const onSearchPhaseChange = ({ target }) => {
    SetSearchPhrase(target.value);
  };

  const onSortingChange = ({ target }) => {
    setIsSortingEnable(target.checked);
  };

  return (
    <div className={styles.controlPanel}>
      <Search onSearch={onSearch} />
      <Sorting onSorting={onSorting} />

      <input
        type="checkbox"
        checked={isSortingEnable}
        className={styles.sortingBtn}
        onChange={onSortingChange}
      />
      <Button onClick={onTodoAdd}>✚</Button>
    </div>
  );
};
