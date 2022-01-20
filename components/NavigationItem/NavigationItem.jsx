import React from "react";
import styles from "./index.module.css";

const NavigationItem = ({isExpanded, content, Icon}) => {

  return (
    <li className={styles["nav-menu-item"]}>
      <Icon />
      { isExpanded ?
        <span>{content}</span> :
        null
      }
    </li>
  );
}

export default NavigationItem;
