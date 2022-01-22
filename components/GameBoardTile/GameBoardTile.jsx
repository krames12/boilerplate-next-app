import { BsPlusLg } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";

import styles from './index.module.scss';


const GameBoardTile = ({status, actionHandler}) => {
  const {
    tileStatus,
    rowIndex,
    tileIndex
  } = status

  const getTileIcon = () => {
    switch (tileStatus) {
      default:
        return null;
      case 1:
        return (<FaRegCircle className={`${styles.circle} ${styles["tile-icon"]}`} />)
      case 2:
        return (<BsPlusLg className={`${styles.cross} ${styles["tile-icon"]}`} />)
    }
  }

  return (
    <div className={styles["game-tile"]} onClick={() => actionHandler(rowIndex, tileIndex)}>
      {getTileIcon()}
    </div>
  )
}

export default GameBoardTile;