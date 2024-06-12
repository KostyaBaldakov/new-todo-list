import styles from "./control-panel.module.css";

export const ControlPanel = ({ children }) => {
  return <div className={styles.controlPanel}>{children}</div>;
};
