import { useState } from "react";
import { Button } from "../../../../components/button/button";
import styles from "./sorting.module.css";

export const Sorting = ({ onSorting }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const onChange = ({ target }) => {
    setIsEnabled(target.checked);
    onSorting(target.checkbox);
  };

  return (
    <Button className={styles.sortingButton}>
      <input
        className={styles.checkbox}
        id="sorting-button"
        type="checkbox"
        checked={isEnabled}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor="sorting-button">
        A&darr;
      </label>
    </Button>
  );
};
