import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  background-image: linear-gradient(to right top, #ffffff, #ececed, #d9d9db, #c7c7c9, #b4b5b8, #a3a4a7, #929396, #818285, #6d6e70, #5a5b5c, #484849, #363636);
  border-radius: ${p => p.theme.radii.medium};
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[3]}px;
   color:black; 
  font-size:18px;
  font-weight:normal;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type,
}))`
  width: 85%;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: 7px 5px;
  font-size: ${p => p.theme.fontSizes.m}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  background: transparent;
  border:none;
  border-bottom: 1px solid #757575;
  &:hover,
  &:focus {
    outline: none;
    width: 300px;
    border:none;
    border-bottom: 4px solid black;
}

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
    font-size: 18px;
  }
  &:hover,
  &:focus {
    width: 90%;
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(#464d55, #25292e);
  border-radius: 8px;
  border-width: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: expo-brand-demi,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 16px;
  height: 35px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 32px;
  text-align: center;
  text-decoration: none;
  transform: translate3d(0, 0, 0);
  transition: all 150ms;
  vertical-align: baseline;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:hover {
  box-shadow: rgba(0, 1, 0, .2) 0 2px 8px;
  opacity: .85;
}

&:active {
  outline: 0;
}

&:focus {
  box-shadow: rgba(0, 0, 0, .5) 0 0 0 3px;
}

@media (max-width: 420px) {
  .button-84 {
    height: 48px;
  }
}

  ${p =>
    p.disabled &&
    css`
      background: ${p => p.theme.colors.primary};
    `}
`;
