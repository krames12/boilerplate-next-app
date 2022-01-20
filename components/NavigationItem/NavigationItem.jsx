import React from "react";
import styles from "./index.module.css";

const NavigationItem = ({isExpanded, content, Icon}) => {

  return (
    <li className={styles["nav-menu-item"]}>
      <Icon className={styles.icon} />
      <span className={`${styles["nav-item-content"]} ${ !isExpanded ? `${styles.collapsed}` : ""}`}>{content}</span>
    </li>
  );
}

export default NavigationItem;
