import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
  width: 130px;
  height: 45px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  outline: none;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  position: relative;
  z-index: 0;
 color: white;
  position: relative;
  transition: all .3s cubic-bezier(.2, 0, 0, 1);
  z-index: 1;
  
  &:after {
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    bottom: 0;
    right: 1.25rem;
    left: 1.25rem;
    background-color: #ffffff;
    transition: all .3s cubic-bezier(.2, 0, 0, 1);
    transform-origin: bottom center;
    z-index: -1;
  }
  
  &:hover {
    color: #2D2D2D;
    
    &:after {
      right: 0;
      left: 0;
      height: 100%;
    }
  }
}`

export const LinkWraper = styled('div')`
  display: flex;
  margin-right: -${({ theme }) => theme.space[3]}px;
`;
