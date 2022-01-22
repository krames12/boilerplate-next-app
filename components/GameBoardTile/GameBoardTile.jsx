import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";

import styles from './index.module.scss';


const GameBoardTile = ({status = null}) => {
  const [tileStatus, setTileStatus] = useState(null);

  const getTileIcon = () => {
    switch (status) {
      default:
        return null;
      case 1:
        return (<BsPlusLg className={`${styles.cross} ${styles["tile-icon"]}`} />)
      case 2:
        return (<FaRegCircle className={`${styles.circle} ${styles["tile-icon"]}`} />)
    }
  }

  return (
    <div className={styles["game-tile"]}>
      {getTileIcon()}
    </div>
  )
}

export default GameBoardTile;