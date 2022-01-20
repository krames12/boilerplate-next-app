import { useState } from "react";
import { BiGhost, BiHomeAlt, BiGridAlt, BiEnvelopeOpen, BiCalendarCheck } from "react-icons/bi";
import { BsArrowLeftSquare, BsArrowRightSquare, BsPieChart } from "react-icons/bs"
import NavigationItem from "../NavigationItem/NavigationItem";

import styles from "./index.module.css";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandNavClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className={`${styles.navigation} ${!isExpanded ? `${styles.collapsed}` : ""}`}>
      <div className={styles["nav-heading"]} >
          <BiGhost className={styles.icon} />
          <span
            className={`${styles["logo-content"]} ${ !isExpanded ? `${styles["logo-content-collapsed"]}` : ""}`}
          >
            Ghostify
          </span>
        {isExpanded ?
          <BsArrowLeftSquare className={`${styles["nav-arrow"]} ${styles.icon}`} onClick={handleExpandNavClick} /> :
          <BsArrowRightSquare className={`${styles["nav-arrow"]} ${styles.icon}`} onClick={handleExpandNavClick} />
        }
      </div>
      <ul className={styles["nav-menu-listing"]}>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Dashboard"
            Icon={BiHomeAlt}
          />
        </li>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Dashboard"
            Icon={BiGridAlt}
          />
        </li>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Products"
            Icon={BsPieChart}
          />
        </li>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Messages"
            Icon={BiEnvelopeOpen}
          />
        </li>
        <li className={styles["nav-menu-item"]}>
          <NavigationItem
            isExpanded={isExpanded}
            content="Calendar"
            Icon={BiCalendarCheck}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
