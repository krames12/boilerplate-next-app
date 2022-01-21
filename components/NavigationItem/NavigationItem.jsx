import React from "react";
import styles from "./index.module.css";

const NavigationItem = ({content, Icon, isCurrentPage, isExpanded}) => {

  return (
    <li className={`${styles["nav-menu-item"]} ${ isCurrentPage ? styles["current-page"] : ""}`}>
      <Icon className={styles.icon} />
      <span className={`${styles["nav-item-content"]} ${ !isExpanded ? `${styles.collapsed}` : ""}`}>{content}</span>
    </li>
  );
}

export default NavigationItem;
