import styled, { css } from "styled-components";

type Props = {
    bold?: boolean;
    inline?: boolean;
};

const Text = styled.div<Props>`
    ${({ bold }) =>
        bold &&
        css`
            font-weight: bold;
        `};
    ${({ inline }) =>
        inline &&
        css`
            display: inline;
        `};
`;

export default Text;
