import Text from './Text'
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import { View, StyleSheet, Pressable } from 'react-native'
import theme from '../theme'
import * as yup from 'yup'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  button: {
    ...theme.flexRow,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 5,
    color: 'white',
    fontFamily: theme.fonts.main,
    textTransform: 'lowercase',
    backgroundColor: theme.colors.primary,
    height: 35
  },
  buttonText: {
    color: 'white'
  }
})

const SignIn = () => {

  return <Formik
    initialValues={{
      username: '',
      password: ''
    }}
    onSubmit={values => console.log(values)}
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
        <Pressable style={styles.button} onPress={handleSubmit} >
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
    </View>
    )}
  </Formik>
}

export default SignIn