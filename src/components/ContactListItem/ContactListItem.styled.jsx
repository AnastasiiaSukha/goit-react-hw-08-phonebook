import styled, { css } from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${p => p.theme.space[4]}px;
  font-weight: 500;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const Button = styled.button.attrs({ type: 'submit' })`
  align-items: center;
  margin-left: 5px;
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
  font-size: ${p => p.theme.fontSizes.xs}px;
  height: 25px;
  justify-content: center;
  line-height: 1;
  margin: 0;
  margin-top: 3px;
  margin-left: 10px;
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
@media ${({ theme }) => theme.media.tablet} {
  font-size: ${p => p.theme.fontSizes.l}px;
  height: 48px;
  margin-left:5px;
  };


  ${p =>
    p.disabled &&
    css`
      background: ${p => p.theme.colors.primary};
    `}
`;

