import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 8,
    marginRight: 8
  }
})

const Card = ({style, children, ...props}) => {
  return <View style={[styles.card, style]} {...props}>
    {children}
  </View>
}

export default Card