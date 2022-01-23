export const checkRowForWinner = row => {
  const checkValue = row[0];
  let isWinner = row.every( value => value === checkValue );

  return isWinner && !!checkValue ? checkValue : false;
}

export const checkColumnsForWinner = gameBoardStatus => {
  let checkValue = null;
  let isWinner = false;

  for(let i = 0; i <= gameBoardStatus.length; i++) {
    if(!isWinner) {
      checkValue = gameBoardStatus[0][i];
      const currentColumn = [gameBoardStatus[0][i], gameBoardStatus[1][i], gameBoardStatus[2][i],];

      isWinner = currentColumn.every( value => value == checkValue );
    }
  }

  return isWinner && !!checkValue ? checkValue : false;
}

export const checkDiagonalsForWinner = gameBoardStatus => {
  const leftStartDiagonal = {
    boardStatus: [
      gameBoardStatus[0][0],
      gameBoardStatus[1][1],
      gameBoardStatus[2][2]
    ],
    checkValue: gameBoardStatus[0][0]
  };

  const rightStartDiagonal = {
    boardStatus: [
      gameBoardStatus[0][2],
      gameBoardStatus[1][1],
      gameBoardStatus[2][0]
    ],
    checkValue: gameBoardStatus[0][2]
  };

  const leftWinner = leftStartDiagonal.boardStatus.every( value => value == leftStartDiagonal.checkValue);
  const rightWinner = rightStartDiagonal.boardStatus.every( value => value == rightStartDiagonal.checkValue);

  if(leftWinner && !!leftStartDiagonal.checkValue) {
    return leftStartDiagonal.checkValue
  } else if(rightWinner && !!rightStartDiagonal.checkValue) {
    return rightStartDiagonal.checkValue
  } else {
    return false;
  }
}
