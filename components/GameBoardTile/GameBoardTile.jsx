import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";

import styles from './index.module.scss';


const GameBoardTile = ({status = null}) => (
  <td className={styles["game-tile"]}>
    {status && status == 1 ?
      <ImCross className={`${styles.cross} ${styles["tile-icon"]}`} /> :
      <FaRegCircle className={`${styles.circle} ${styles["tile-icon"]}`} />
    }
  </td>
)

export default GameBoardTile;