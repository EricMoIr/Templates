import React from "react";

import { history } from "utils/history";
import { GameState, selectors as gameSelectors } from "model/game";

import Cell from "./components/Cell";

export default function GamePage() {
    if (gameSelectors.getSize() === -1) {
        history.push("/");
    }

    const board = [];

    for (let i = 0; i < gameSelectors.getSize(); i++) {
        const row = [];
        for (let j = 0; j < gameSelectors.getSize(); j++) {
            row.push(<Cell clicks={gameSelectors.getClicks()} key={`cell${i}${j}`} i={i} j={j} />);
        }
        board.push(row);
        board.push(<div key={`row${i}`} />);
    }
    return (
        <div>
            {board}
            {gameSelectors.getGameState() === GameState.LOST && "Perdiste"}
            {gameSelectors.getGameState() === GameState.WON && "Ganaste"}
        </div>
    );
}
