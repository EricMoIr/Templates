import React from "react";

import styled from "styled-components";
import { actions as gameActions, selectors as gameSelectors } from "model/game";

type Props = {
    i: number;
    j: number;
    clicks: number;
};

export default function({ i, j, clicks }: Props) {
    function handleClick() {
        if (!clicks) {
            gameActions.initBoard(i, j);
        } else {
            gameActions.addClick(i, j);
        }
    }

    if (gameSelectors.getCell(i, j).isVisible) {
        if (gameSelectors.getCell(i, j).hasMine) {
            return <Cell>-1</Cell>;
        }
        return <Cell>{gameSelectors.getCell(i, j).minesAround}</Cell>;
    }
    return <Cell onClick={handleClick}>C</Cell>;
}

const Cell = styled.span`
    display: inline-block;
    min-height: 40px;
    min-width: 40px;
`;
