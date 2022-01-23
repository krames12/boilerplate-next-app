import { checkColumnsForWinner, checkRowForWinner, checkWinner } from "../checkWinner";

describe("checkRowForWinner", () => {
  it("should return false if no winner", () => {
    const isThereAWinner = checkRowForWinner([null, null, null]);

    expect(isThereAWinner).toBeFalsy();
  });

  it("should return player number if array row is a winner", () => {
    const playerOneWinner = checkRowForWinner([1, 1, 1]);
    const playerTwoWinner = checkRowForWinner([2, 2, 2]);

    expect(playerOneWinner).toEqual(1);
    expect(playerTwoWinner).toEqual(2);
  });
});

describe("checkColumnsForWinner", () => {
  it("should return no winner with no match", () => {
    const gameBoardStatus = [
      [2, 1, null],
      [1, null, 1],
      [2, null, 1],
    ];

    const isThereAWinner = checkColumnsForWinner(gameBoardStatus);
    console.log(isThereAWinner);

    expect(isThereAWinner).toBeFalsy();
  });

  it("should return winner with if entire column matches", () => {
    const playerOneStatus = [
      [null, 1, 1],
      [2, null, 1],
      [2, 2, 1],
    ];

    const playerTwoStatus = [
      [2, 1, 1],
      [2, null, null],
      [2, null, 1],
    ];

    const playerOneWin = checkColumnsForWinner(playerOneStatus);
    const playerTwoWin = checkColumnsForWinner(playerTwoStatus);

    expect(playerOneWin).toEqual(1);
    expect(playerTwoWin).toEqual(2);
  });
});

describe("checkWinner", () => {
  it("should declare winner for a row match", () => {
    const gameBoardStatus = [
      [1, 1, 1],
      [null, null, null],
      [null, null, null],
    ];

    const gameWinner = checkWinner(gameBoardStatus);

    expect(gameWinner).toEqual(1);
  });

  it("should declare winner for a column match", () => {
    const gameBoardStatus = [
      [2, 1, null],
      [2, null, 1],
      [2, null, 1],
    ];

    const gameWinner = checkWinner(gameBoardStatus);

    expect(gameWinner).toEqual(2);
  });

  it("should declare winner for a diagonal match", () => {
    const backSlashBoard = [
      [1, 1, 2],
      [null, 2, 1],
      [2, 1, null],
    ];
  });
});