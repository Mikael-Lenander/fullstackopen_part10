import { View } from 'react-native'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import Button from './Button'
import useSignUp from '../hooks/useSignUp'
import * as yup from 'yup'

export default function SignUp() {

  const [signUp] = useSignUp()

  // async function onSignUp({ username, password }) {
  //   await signUp({ username, password })
  // }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        passwordConfirmation: ''
      }}
      onSubmit={signUp}
      validationSchema={
        yup.object().shape({
          username: yup.string()
            .max(30, 'Username must be at most 30 characters long')
            .required('Username is required'),
          password: yup.string()
            .required('Password is required')
            .min(5, 'Password must be at least 5 characters long')
            .max(50, 'Password must be at most 50 characters long'),
          passwordConfirmation: yup.string()
            .required('Password confirmation is required')
            .oneOf([yup.ref('password')], "Passwords don't match")
        })
      }
    >
      {({ handleSubmit }) =>
        <View>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput name='password' placeholder='Password' secureTextEntry />
          <FormikTextInput name='passwordConfirmation' placeholder='Password confirmation' secureTextEntry />
          <Button text='Sign up' onPress={handleSubmit} />
        </View>
      }
    </Formik>
  )
}