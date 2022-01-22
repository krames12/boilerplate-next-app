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
      <GameBoardTile />
      <GameBoardTile status={2} />
      <GameBoardTile />
      <GameBoardTile />
      <GameBoardTile />
      <GameBoardTile status={2} />
      <GameBoardTile />
      <GameBoardTile status={1} />
      <GameBoardTile status={2} />
    </div>
  )
}

export default GameBoard;
