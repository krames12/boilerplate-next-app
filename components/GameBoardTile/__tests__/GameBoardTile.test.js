import { render, screen } from '@testing-library/react'
import GameBoardTile from "../GameBoardTile";

describe("GameBoardTile", () => {
  it("should render an icon when given a player", () => {
    render(
      <>
        <GameBoardTile status={{tileStatus: 1}} />
        <GameBoardTile status={{tileStatus: 2}} />
      </>
    );

    const [playerOneIcon] = screen.queryAllByTestId("playerOneIcon");
    const [playerTwoIcon] = screen.queryAllByTestId("playerTwoIcon");

    expect(playerOneIcon).toBeInTheDocument();
    expect(playerTwoIcon).toBeInTheDocument();
  });

  it("should not render an icon if no player is given", () => {
    render(
      <>
        <GameBoardTile status={{tileStatus: null}} />
        <GameBoardTile status={{tileStatus: undefined}} />
      </>
    );

    const [tileOne, tileTwo] = screen.queryAllByTestId("game-board-tile");

    expect(tileOne).toBeEmptyDOMElement();
    expect(tileTwo).toBeEmptyDOMElement();
  })
})
