import { useEffect, useState } from "react";
import {
  checkRowForWinner,
  checkColumnsForWinner,
  checkDiagonalsForWinner
} from "../../helpers/checkWinner";
import GameBoardTile from "../GameBoardTile/GameBoardTile";

import styles from './index.module.scss'

const GameBoard = () => {
  const initialGameBoardStatus = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]

  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [gameInProgress, setGameInProgress] = useState(true);
  const [gameBoardStatus, setGameBoardStatus] = useState(initialGameBoardStatus);

  const handlePlayerChange = () => {
    const nextPlayer = currentPlayer == 1 ? 2 : 1;

    setCurrentPlayer(nextPlayer);
  }

  const handleTurnCompletion = (row, tile) => {
    if(gameInProgress && gameBoardStatus[row][tile] == null) {
      updateSelectedTile(row, tile);
      handlePlayerChange();
    }
  }

  const updateSelectedTile = (row, tile) => {
    const updatedGameBoardStatus = gameBoardStatus.map(
      (_, rowIndex) => _.map( (currentTileValue, tileIndex ) => {
        return row == rowIndex && tile == tileIndex ? currentPlayer : currentTileValue;
      })
    );

    setGameBoardStatus(updatedGameBoardStatus);
  }

  const handleReset = () => {
    setCurrentPlayer(1)
    setGameBoardStatus(initialGameBoardStatus);
    setGameInProgress(true);
  }

  const checkGameBoardForWinner = () => {
    let isWinner = null;

    gameBoardStatus.forEach( row => {
      isWinner = isWinner == null ? checkRowForWinner(row) : isWinner;
    });

    isWinner = isWinner == null ? checkColumnsForWinner(gameBoardStatus) : isWinner;
    isWinner = isWinner == null ? checkDiagonalsForWinner(gameBoardStatus) : isWinner;

    return isWinner;
  }

  const gameStatusMessage = () => {
    return gameInProgress ?
      (
        <p className={styles["turn-indicator"]}>
          It&apos;s <span className={`${styles[`player${currentPlayer}`]}`}>Player {currentPlayer}&apos;s</span> turn
      </p>
      ) :
      (
        <p className={styles["turn-indicator"]}>
          🎉 <span className={`${styles[`player${currentPlayer}`]}`}>Player {currentPlayer}</span> has won! 🎉
        </p>
      )
  }

  useEffect(() => {
    const isThereAWinner = checkGameBoardForWinner(gameBoardStatus);

    if(isThereAWinner) {
      setGameInProgress(false);
      setCurrentPlayer(isThereAWinner);
    }
  }, [gameBoardStatus])

  return (
    <>
      {gameStatusMessage()}
      <div className={styles["game-board"]}>
        { gameBoardStatus.map( (row, rowIndex) => {
          return row.map( (tileStatus, tileIndex) =>
            <GameBoardTile
              key={`${rowIndex}${tileIndex}`}
              status={{ tileStatus, rowIndex, tileIndex }}
              actionHandler={handleTurnCompletion}
            />
          )
        }) }
      </div>
      <button onClick={handleReset}>Restart Game</button>
    </>
  )
}

export default GameBoard;
