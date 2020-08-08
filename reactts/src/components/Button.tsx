import React from "react";
import RButton, { ButtonProps } from "react-bootstrap/Button";
import { IconType } from "react-icons/lib/cjs";
import styled, { css } from "styled-components";

import { primaryColor } from "utils/styles";
import Text from "./Text";

type Props = {
    isLoading?: boolean;
    label?: string;
    icon?: IconType;
    wide?: boolean;
    type?: string;
    onClick?: (event) => void;
} & ButtonProps;

function Button({ isLoading = false, label, icon: Icon, ...props }: Props) {
    return (
        <StyledButton disabled={isLoading} {...props}>
            {isLoading ? (
                <img src="/images/spinner.gif" alt="Loading" height="20px" />
            ) : (
                <>
                    {Icon && <Icon style={{ paddingRight: "5px" }} size="2em" />}
                    <Text inline>{label}</Text>
                </>
            )}
        </StyledButton>
    );
}

const StyledButton = styled(RButton)`
    border-color: ${primaryColor} !important;
    ${({ disabled }) => {
        if (disabled) {
            return css`
                color: black !important;
                background-color: white !important;
            `;
        }
        return css`
            background-color: ${primaryColor} !important;
        `;
    }};
    ${({ wide }) =>
        wide &&
        css`
            width: 100%;
        `};
    border-radius: 20px;
`;

export default Button;
