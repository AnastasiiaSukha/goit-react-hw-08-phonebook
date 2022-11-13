import styled from 'styled-components';

export const ContactsContainer = styled.div`
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
  background: #F6F8F9;
background: radial-gradient(circle farthest-corner at center center, #F6F8F9 0%, #E5EBEE 30%, #D7DEE3 60%, #F5F7F9 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const Text = styled.h3`
font-size: ${p => p.theme.fontSizes.l}px;
color: white;

`