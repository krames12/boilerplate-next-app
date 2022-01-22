import { useState } from 'react';
import Head from 'next/head'
import GameBoard from '../../components/GameBoard/GameBoard';

import styles from './index.module.scss'

export default function TicTacToe() {
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

        <GameBoard />
      </main>
    </div>
  )
}
