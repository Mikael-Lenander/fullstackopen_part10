import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View, StyleSheet, Pressable } from 'react-native'
import Button from './Button'
import useSignIn from '../hooks/useSignIn'
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
})

export const SignInContainer = ({ onSubmit }) => {
  return <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    onSubmit={onSubmit}
    validationSchema={
      yup.object().shape({
        username: yup.string()
          .required('Username is required'),
        password: yup.string()
          .required('Password is required')
      })
    }
  >
    {({ handleSubmit }) => (
      <View style={styles.container}>
        <FormikTextInput name='username' placeholder='username' />
        <FormikTextInput name='password' placeholder='password' secureTextEntry />
        <Button onPress={handleSubmit} text='Sign In' />
      </View>
    )}
  </Formik>
}

const SignIn = () => {
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn({ username, password })
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />
}

export default SignIn