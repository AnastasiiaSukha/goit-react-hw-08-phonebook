import styled from 'styled-components';

export const Loader = styled('div')`
  position: relative;
  width: 120px;
  height: 120px;
  & span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));

    animation: animateBg 5s linear infinite;
  }

  & span::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: black;
    border-radius: 50%;
    box-shadow: 0 0 10px #ffff, 0 0 20px #ffff, 0 0 40px #ffff,
      0 0 60px #ffff, 0 0 80px #ffff, 0 0 100px #ffff;

    animation: animateSpan 2s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }

  @keyframes animateSpan {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes animateBg {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;
