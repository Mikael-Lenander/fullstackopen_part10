import Card from "./Card"
import Text from './Text'
import { StyleSheet, View } from "react-native"
import theme from "../theme"
import { format } from "date-fns"

const ratingSize = 40

const styles = StyleSheet.create({
  ratingBorder: {
    borderWidth: 2,
    borderColor: theme.colors.primary,
    width: ratingSize,
    height: ratingSize,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: ratingSize / 2,
    margin: 5
  },
  rating: {
    color: theme.colors.primary
  },
  text: {
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})

export default function ReviewItem({ review, title, children }) {
  return (
    <Card>
      <View style={styles.textContainer}>
        <View style={styles.ratingBorder}>
          <Text fontSize='heading' color='primary' style={styles.rating}>{review.rating}</Text>
        </View>
        <View>
          <Text fontWeight='bold' fontSize='subheading'>{title}</Text>
          <Text>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        </View>
      </View>
      <View style={{ padding: 5 }}>
        <Text style={styles.text}>{review.text}</Text>
      </View>
      {children}
    </Card>
  )
}