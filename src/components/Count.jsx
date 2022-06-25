import { View, StyleSheet } from 'react-native'
import Text from './Text'
import theme from '../theme'
import numeral from 'numeral'

const styles = StyleSheet.create({
  container: {
    ...theme.flexColumn,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const Count = ({ count, text, format=false }) => {
  return <View style={styles.container}>
    <Text fontSize='subheading' fontWeight='bold'>{numeral(count).format(format && '0.0a')}</Text>
    <Text color='textSecondary'>{text}</Text>
  </View>
}

export default Count