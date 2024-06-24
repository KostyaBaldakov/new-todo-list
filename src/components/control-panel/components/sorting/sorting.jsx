import { Button } from "../../../button/button";
import { useStateManager } from "../../../../state-manager";
import styles from "./sorting.module.css";

export const Sorting = () => {
  const {
    state: {
      options: { isAlphabetSorting },
    },
    updateState,
  } = useStateManager();

  const onChange = ({ target }) => {
    updateState({
      options: {
        isAlphabetSorting: target.checked,
      },
    });
  };

  return (
    <Button className={styles.sortingButton}>
      <input
        className={styles.checkbox}
        id="sorting-button"
        type="checkbox"
        checked={isAlphabetSorting}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor="sorting-button">
        A&darr;
      </label>
    </Button>
  );
};
