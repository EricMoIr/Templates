type Cell = {
    hasMine: boolean;
    minesAround: number;
    isVisible: boolean;
    i: number;
    j: number;
};

type Board = Cell[][];

export enum GameState {
    WON,
    LOST,
    PLAYING,
    NOT_STARTED,
}

export type Game = {
    size: number;
    clicks: number;
    maxMines: number;
    board: Board;
    gameState: GameState;
};

const game: Game = {
    size: -1,
    clicks: 0,
    board: null,
    maxMines: 10, // 10, 40, 99
    gameState: GameState.NOT_STARTED,
};

export const actions = {
    initGame(size: number) {
        const board: Cell[][] = [];
        board.length = size;
        for (let x = 0; x < size; x++) {
            const row: Cell[] = [];
            for (let y = 0; y < size; y++) {
                const cell: Cell = {
                    hasMine: false,
                    isVisible: false,
                    minesAround: 0,
                    i: x,
                    j: y,
                };
                row.push(cell);
            }
            board[x] = row;
        }
        Object.assign(game, {
            size,
            board,
            maxMines: 10,
        });
    },
    addClick(i: number, j: number) {
        if (game.board[i][j].hasMine) {
            Object.assign(game, {
                clicks: game.clicks + 1,
                gameState: GameState.LOST,
            });
            return;
        }
        showMeAndNeighboursWithoutMines(i, j, game.board);
        Object.assign(game, {
            clicks: game.clicks + 1,
            board: game.board,
        });
    },
    initBoard(i: number, j: number) {
        const { size, board } = game;
        let { maxMines } = game;
        for (let x = 0; x < size && maxMines; x++) {
            for (let y = 0; y < size && maxMines; y++) {
                const cell: Cell = board[x][y];
                if (x !== i || y !== j) {
                    const hasMine = !!Math.round(Math.random());
                    if (hasMine) {
                        cell.hasMine = true;
                        maxMines--;
                    }
                }
            }
        }
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const cell = board[x][y];
                if (x !== 0) {
                    cell.minesAround += board[x - 1][y].hasMine ? 1 : 0;
                }
                if (y !== 0) {
                    cell.minesAround += board[x][y - 1].hasMine ? 1 : 0;
                }

                if (x !== size - 1) {
                    cell.minesAround += board[x + 1][y].hasMine ? 1 : 0;
                }
                if (y !== size - 1) {
                    cell.minesAround += board[x][y + 1].hasMine ? 1 : 0;
                }

                if (x !== size - 1 && y !== size - 1) {
                    cell.minesAround += board[x + 1][y + 1].hasMine ? 1 : 0;
                }
                if (x !== 0 && y !== 0) {
                    cell.minesAround += board[x - 1][y - 1].hasMine ? 1 : 0;
                }

                if (x !== size - 1 && y !== 0) {
                    cell.minesAround += board[x + 1][y - 1].hasMine ? 1 : 0;
                }
                if (x !== 0 && y !== size - 1) {
                    cell.minesAround += board[x - 1][y + 1].hasMine ? 1 : 0;
                }
            }
        }
        showMeAndNeighboursWithoutMines(i, j, board);
        Object.assign(game, {
            board,
            clicks: 1,
        });
    },
};

export const selectors = {
    getGameState() {
        return game.gameState;
    },
    getSize() {
        return game.size;
    },
    getClicks() {
        return game.clicks;
    },
    getCell: (i: number, j: number) => {
        return game.board[i][j];
    },
};

function showMeAndNeighboursWithoutMines(i: number, j: number, board: Board) {
    const neighbours = [board[i][j]];
    const visited = new Set<string>();
    visited.add(`${i}${j}`);
    while (neighbours.length) {
        const top = neighbours.pop();
        visited.add(`${top.i}${top.j}`);
        if (top.hasMine) {
            continue;
        }
        top.isVisible = true;
        if (top.minesAround > 0) {
            continue;
        }
        board[top.i][top.j].isVisible = true;
        const moreNeighbours = getNeighbours(top.i, top.j, board);
        neighbours.push(...moreNeighbours.filter((n) => !visited.has(`${n.i}${n.j}`)));
    }
}

function getNeighbours(i: number, j: number, board: Board): Cell[] {
    const neighbours = [];
    const size = board.length;
    if (i !== 0) {
        neighbours.push(board[i - 1][j]);
    }
    if (j !== 0) {
        neighbours.push(board[i][j - 1]);
    }

    if (i !== size - 1) {
        neighbours.push(board[i + 1][j]);
    }
    if (j !== size - 1) {
        neighbours.push(board[i][j + 1]);
    }

    if (i !== size - 1 && j !== size - 1) {
        neighbours.push(board[i + 1][j + 1]);
    }
    if (i !== 0 && j !== 0) {
        neighbours.push(board[i - 1][j - 1]);
    }

    if (i !== size - 1 && j !== 0) {
        neighbours.push(board[i + 1][j - 1]);
    }
    if (i !== 0 && j !== size - 1) {
        neighbours.push(board[i - 1][j + 1]);
    }
    return neighbours;
}

// export default function useGame() {
//     useEffect()
//     return {
//         actions,
//         selectors,
//     };
// }
