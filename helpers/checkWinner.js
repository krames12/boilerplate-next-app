export const checkWinner = gameBoardStatus => {


  return false;
};

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
