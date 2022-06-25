import { Pressable, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from './Text'

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    color: 'white'
  }
})

const AppBarTab = ({ text, to }) => {
  return <Pressable>
    <Link to={to}>
      <Text fontSize='heading' fontWeight='bold' style={styles.text} >{text}</Text>
    </Link>
  </Pressable>
}

export default AppBarTab