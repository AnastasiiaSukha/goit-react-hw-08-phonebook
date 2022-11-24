import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('div')`
background-image: linear-gradient(to top, #23262a, #2e3335, #3a3f3f, #494c4a, #585957);
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.regular};
`;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;
  padding: ${({ theme }) => theme.space[3]}px ${({ theme }) => theme.space[4]}px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.tablet} {
    width: 768px;
  }
  @media ${({ theme }) => theme.media.desktop} {
    width: 1024px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #F7F8F8;
  margin-top:20px;
  margin-left: 4px;
`;

export const Title = styled('h2')`
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  @media ${({ theme }) => theme.media.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.l}px;
  }
`;
