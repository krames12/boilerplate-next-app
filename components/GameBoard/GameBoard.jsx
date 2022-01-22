import { useState } from "react";
import GameBoardTile from "../GameBoardTile/GameBoardTile";

import styles from './index.module.scss'

const GameBoard = ({currentPlayer, handlePlayerChange}) => {
  const [gameBoardStatus, setGameBoardStatus] = useState(
    [
      [null, 1, null],
      [null, 2, null],
      [null, null, null],
    ]
  );

  const handleTurnCompletion = (row, tile) => {
    handlePlayerChange();
  }

  return (
    <div className={styles["game-board"]}>
      <table>
        <tr>
          <td className={styles["game-tile"]}>
            <GameBoardTile />
          </td>
          <td className={styles["game-tile"]}>
            <GameBoardTile status={1} />
          </td>
          <td className={styles["game-tile"]}>
          <GameBoardTile status={2} />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default GameBoard;
