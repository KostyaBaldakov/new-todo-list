import { Link } from "react-router-dom";
import { Button, ControlPanel } from "../../components";

import styles from "./not-found.module.css";

export const NotFound = () => (
  <div className="todoapp">
    <ControlPanel>
      <Button>
        <Link to="/">
          <b>&larr;</b>
        </Link>
      </Button>
    </ControlPanel>
    <div className={styles.wrapper}>Такая страница не найдена</div>
  </div>
);
