import { useState } from "react";
import { BiGhost, BiHomeAlt } from "react-icons/bi";
import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs"

import styles from "./index.module.css";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpandNavClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className={styles.navigation}>
      <div className={styles["nav-heading"]} >
          <BiGhost className={styles.logo} /> Ghostlify
        {isExpanded ?
          <BsArrowLeftSquare className={styles["nav-arrow"]} onClick={handleExpandNavClick} /> :
          <BsArrowRightSquare className={styles["nav-arrow"]} onClick={handleExpandNavClick} />
        }
      </div>
      <ul>
        <li>
          <BiHomeAlt />
          <span>Home</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
