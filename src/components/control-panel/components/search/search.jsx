import { useState } from "react";
import { Button } from "../../../button/button";

export const Search = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(value);
  };
  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        type="text"
        className="new-todo"
        value={searchPhrase}
        onChange={onSearchPhaseChange}
      />
      <Button type="submit">S</Button>
    </form>
  );
};
