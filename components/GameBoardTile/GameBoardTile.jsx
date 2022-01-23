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
        return (<FaRegCircle data-testid="playerOneIcon" className={`${styles.circle} ${styles["tile-icon"]}`} />)
      case 2:
        return (<BsPlusLg data-testid="playerTwoIcon" className={`${styles.cross} ${styles["tile-icon"]}`} />)
    }
  }

  return (
    <div data-testid="game-board-tile" className={styles["game-tile"]} onClick={() => actionHandler(rowIndex, tileIndex)}>
      {getTileIcon()}
    </div>
  )
}

export default GameBoardTile;