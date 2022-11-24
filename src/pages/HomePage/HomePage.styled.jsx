import styled from 'styled-components';
import { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled('div')`
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.tablet} {
    width: 768px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 1024px;
  }
`;


export const HomeText = styled('p')`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  @media ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.xl}px;
  }
  text-align: center;
  color: ${({ theme }) => theme.colors.active};
`;

export const Link = styled(NavLink)`
margin-left:15px;
color: #747474;
&:hover,
&:focus{
    color: #D6DFE0;
    `

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
export const AnimatedGradientText = styled.h1`
margin-top:150px;
margin-bottom:70px;
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;