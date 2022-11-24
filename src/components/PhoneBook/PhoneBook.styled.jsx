import styled from 'styled-components';

export const ContactsContainer = styled.div`
  background-image: linear-gradient(to right top, #212121, #4c4f51, #788284, #acbab3, #edf2e2);
  width: 90vw;
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[6]}px;
  margin-bottom: ${p => p.theme.space[6]}px;
  background: transperent;
  border-radius: ${p => p.theme.radii.medium};
  @media ${p => p.theme.media.tablet} {
    width: 80vw;
  }
  @media ${p => p.theme.media.desktop} {
    width: 768px;
  }
`;

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl}px;
  
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
color: black;
`;

export const Text = styled.h3`
font-size: ${p => p.theme.fontSizes.l}px;
 @media ${({ theme }) => theme.media.tablet} {
  font-size: ${p => p.theme.fontSizes.xl}px;
  }
color: black;

`