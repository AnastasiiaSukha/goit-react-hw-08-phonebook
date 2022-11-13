import styled from 'styled-components';

export const Wrap = styled('div')`
  margin-right: 7px;
  display:flex;
`;


export const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;

  & span {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
    margin-right: 12px;
    margin-left:7px;
    margin-top: 6px;
    color: #F2F1F0;
    @media ${({ theme }) => theme.media.tablet} {
      font-size: ${({ theme }) => theme.fontSizes.m}px;
    }
  }
`;

export const Button = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;
