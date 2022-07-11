import { StyleSheet, Pressable } from "react-native"
import Text from './Text'
import theme from "../theme"

const styles = StyleSheet.create({
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
    height: 40
  },
  buttonText: {
    color: 'white'
  }
})

const Button = ({ text, style, textStyle, alert, ...props }) => {
  return (
    <Pressable style={[styles.button, style, alert && { backgroundColor: theme.colors.alert } ]} {...props} >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </Pressable>
  )
}

export default Button