import styled from "styled-components";

export const Label = styled.label`
        display: block;
        font-size: ${p => p.theme.fontSizes.l}px;
        color: white;
        margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input.attrs({
    type: 'text',
})`
    width: 200px;
    padding: ${p => p.theme.space[3]}px;
    margin-left: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.s}px;
    background: ${p => p.theme.colors.primary};
    outline: none;
    border: 2px solid #14331B;
    border-radius: 5px;
`;