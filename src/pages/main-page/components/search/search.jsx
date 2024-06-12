import { useRef, useState } from "react";
import { debounce } from "./utils";
import styles from "./search.module.css";

export const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current;

  const onChange = ({ target }) => {
    setValue(target.value);
    debouncedOnSearch(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
  };
  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        placeholder="Поиск..."
        onChange={onChange}
      />
    </form>
  );
};
