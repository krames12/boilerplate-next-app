import { useState } from "react";
import { BiGhost, BiHomeAlt, BiGridAlt, BiEnvelopeOpen, BiCalendarCheck } from "react-icons/bi";
import { BsArrowLeftSquare, BsArrowRightSquare, BsPieChart } from "react-icons/bs"
import NavigationItem from "../NavigationItem/NavigationItem";

import styles from "./index.module.scss";

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
        <NavigationItem
          isExpanded={isExpanded}
          content="Home"
          Icon={BiHomeAlt}
        />
        <NavigationItem
          isExpanded={isExpanded}
          content="Dashboard"
          Icon={BiGridAlt}
          isCurrentPage={true}
        />
        <NavigationItem
          isExpanded={isExpanded}
          content="Products"
          Icon={BsPieChart}
        />
        <NavigationItem
          isExpanded={isExpanded}
          content="Messages"
          Icon={BiEnvelopeOpen}
        />
        <NavigationItem
          isExpanded={isExpanded}
          content="Calendar"
          Icon={BiCalendarCheck}
        />
      </ul>
    </nav>
  )
}

export default Navigation
