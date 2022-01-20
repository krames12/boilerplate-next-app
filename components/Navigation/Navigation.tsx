import { useState } from "react";
import { BiGhost, BiHomeAlt } from "react-icons/bi";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs"
import NavigationItem from "../NavigationItem/NavigationItem";

import styles from "./index.module.css";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandNavClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles["nav-heading"]} >
          <BiGhost className={styles.icon} /> {isExpanded ? "Ghostlify" : null}
        {isExpanded ?
          <BsArrowLeftSquare className={`${styles["nav-arrow"]} ${styles.icon}`} onClick={handleExpandNavClick} /> :
          <BsArrowRightSquare className={`${styles["nav-arrow"]} ${styles.icon}`} onClick={handleExpandNavClick} />
        }
      </div>
      <ul className={styles["nav-menu-listing"]}>
        <li className={styles["nav-menu-item"]}>
          <BiHomeAlt className={styles.icon} />
          { isExpanded ?
            <span>Home</span> :
            null
          }
        </li>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Dashboard"
            Icon={<BiHomeAlt className={styles.icon} />}
          />
          <BiHomeAlt className={styles.icon} />
          { isExpanded ?
            <span>Dashboard</span> :
            null
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
