import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import styles from '../pages/index.module.scss'

export default function Home() {
  const directionArray = ["north", "east", "south", "west"];
  const emojiArray = {
    "north": "👆",
    "east": "👉",
    "south": "👇",
    "west": "👈"
  };
  const gridConstructorArray = [null, null, null, null, null, null, null, null, null, null];

  const [roombaPosition, setRoombaPosition] = useState([0, 0])
  const [roombaDirection, setRoombaDirection] = useState(directionArray[0])

  const checkBounds = (position) => position >= 0 && position <= 9;

  const moveForward = () => {
    // bounds of the room (0-9 both colums and rows)

    let [currentColumn, currentRow] = roombaPosition;

    switch (roombaDirection) {
      case "north":
        currentColumn--;
        break;
      case "east":
        currentRow++;
        break;
      case "south":
        currentColumn++;
        break;
      case "west":
        currentRow--;
        break;
    }

    if(checkBounds(currentColumn) && checkBounds(currentRow)){
      console.log("column", checkBounds(currentColumn), "row", checkBounds(currentRow))
      setRoombaPosition([currentColumn, currentRow])
    } else {
      turnRight();
    }
    // north and south are going to update the columns
    // east and west update rows
  }

  const turnRight = () => {
    const nextDirectionIndex = directionArray.findIndex( direction => direction == roombaDirection);

    if( nextDirectionIndex + 1 >= directionArray.length ) {
      setRoombaDirection(directionArray[0]);
    } else {
      setRoombaDirection(directionArray[nextDirectionIndex + 1]);
    }

  }

  /**
   * State
   *
   * current positon of the roomba ✅
   * which way it's facing
   * what is forward based on the way it's facing
   */

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button className={styles.button} onClick={turnRight}>Turn right</button>
        <button className={styles.button} onClick={moveForward}>Move forward</button>
        <div className={styles.Grid}>
          { gridConstructorArray.map( (_, columnIndex) => (
            <div key={`column-${columnIndex}`} className={styles.Column}>
              { gridConstructorArray.map( (_, rowIndex) => (
                <div key={`row-${rowIndex}`} className={styles.Cell}>
                  { columnIndex == roombaPosition[1]
                    && rowIndex == roombaPosition[0]
                    && (
                      <>
                        {emojiArray[roombaDirection]}
                      </>
                    )
                  }
                </div>
              ))}
            </div>
          )) }
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
