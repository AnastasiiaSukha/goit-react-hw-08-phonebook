import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  RegForm,
  RegInput,
  RegBtn,
  ErrorMsg,
  Text,
  FormContainer
} from './RegisterPage.styled';

let loginSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email(),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    console.log(value);
    dispatch(authOperations.register(value));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
    >
      <FormContainer>
      <RegForm>
        <div>
          <Text>SignUp</Text>
        </div>
        <RegInput
          type="text"
          name="name"
          placeholder="Enter your name"
        ></RegInput>
        <ErrorMessage name="name">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegInput
          type="email"
          name="email"
          placeholder="Enter your email"
        ></RegInput>
        <ErrorMessage name="email">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegInput
          type="password"
          name="password"
          placeholder="password"
        ></RegInput>
        <ErrorMessage name="password">
          {msg => <ErrorMsg>{msg}</ErrorMsg>}
        </ErrorMessage>
        <RegBtn>SignUp</RegBtn>
      </RegForm>
      </FormContainer>
    </Formik>
  );
}