import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'

import styles from './index.module.scss'

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState("player1")

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
          It&apos;s <span className={`${styles[currentPlayer]}`}>Player 1&apos;s</span>
        </p>

        <div className={styles["game-board"]}>
        </div>
      </main>
    </div>
  )
}
