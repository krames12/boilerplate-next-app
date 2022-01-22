import { useState } from 'react';
import Head from 'next/head'
import GameBoard from '../../components/GameBoard/GameBoard';

import styles from './index.module.scss'

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState(2)

  const handlePlayerChange = () => {
    const nextPlayer = currentPlayer == 1 ? 2 : 1;

    setCurrentPlayer(nextPlayer);
  }

  const handleReset = () => {
    setCurrentPlayer(1)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe - Next Edition</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Tic Tac Toe
        </h1>

        <p className={styles["turn-indicator"]}>
          It&apos;s <span className={`${styles[`player${currentPlayer}`]}`}>Player {currentPlayer}&apos;s</span>
        </p>

        <GameBoard {...{currentPlayer, handlePlayerChange}} />

        <button onClick={handleReset}>Restart Game</button>
      </main>
    </div>
  )
}
