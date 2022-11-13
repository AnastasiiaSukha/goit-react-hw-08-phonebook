import { Form, Field } from 'formik';
import styled from 'styled-components';

export const LoginBtn = styled('button')`
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transperent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

:after,
:before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

:before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #28282d;
  border-radius: 10px;
}

:after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 50px;
}

&:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

&:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

&:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
`
export const FormContainer = styled.div`
margin-top:40px;
margin-bottom: 40px;
`
export const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 310px;
  padding: 20px;
  margin: 0 auto;
background-image: linear-gradient(to right top, #ffffff, #ececed, #d9d9db, #c7c7c9, #b4b5b8, #a3a4a7, #929396, #818285, #6d6e70, #5a5b5c, #484849, #363636);
  border-radius:8px;
box-shadow: 20px -22px 21px -18px rgba(255,255,255,0.75);
-webkit-box-shadow: 20px -22px 21px -18px rgba(255,255,255,0.75);
-moz-box-shadow: 20px -22px 21px -18px rgba(255,255,255,0.75);
`;

export const Input = styled(Field)`
  position: relative;
  width: 80%;
  height: 35px;
  font-size: 22px;
  padding: ${({ theme }) => theme.space[2]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
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
  }
  &:hover,
  &:focus {
    width: 90%;
  }
`;

export const ErrorMsg = styled('div')`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 12px;
  margin-top: -${({ theme }) => theme.space[4]}px;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const Text = styled('h3')`
  font-size: ${({ theme }) => theme.fontSizes.l}px;
  text-align: center;
`;
