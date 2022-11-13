import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { authOperations, authSelectors } from 'redux/auth';
import {
  LoginBtn,
  LoginForm,
  Input,
  ErrorMsg,
  Text,
  FormContainer
} from './LoginPage.styled';
import Spiner from 'components/Spinner';
import { Container } from 'components/Container/Container';

let loginSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser
  );

  const handleSubmit = (value, { resetForm }) => {
    dispatch(authOperations.logIn(value));
    resetForm();
  };

  return (
    <>
      {isFetchingCurrentUser ? (
        <Container display="flex" justifyContent="center" mt="120px">
          {Spiner.customSpinner}
        </Container>
      ) : (
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
          >
            <FormContainer>
          <LoginForm>
            <div>
              <Text>LogIn</Text>
                </div>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
            ></Input>
            <ErrorMessage name="email">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <Input
              type="password"
              name="password"
              placeholder="password"
            ></Input>
            <ErrorMessage name="password">
              {msg => <ErrorMsg>{msg}</ErrorMsg>}
            </ErrorMessage>
            <LoginBtn type="submit">LOGIN</LoginBtn>
            </LoginForm>
            </FormContainer>
        </Formik>
      )}
    </>
  );
}
