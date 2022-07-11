import { View, StyleSheet, Alert } from 'react-native'
import Button from './Button'
import ReviewItem from './ReviewItem'
import useDeleteReview from '../hooks/useDeleteReview'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: 170
  }
})

export default function MyReviewItem({ item }) {

  const deleteReview = useDeleteReview(item.id)
  const navigate = useNavigate()

  const deleteConfirmation = () => Alert.alert(
    "Delete review",
    "Are you sure you want to delete this review?",
    [
      { text: 'cancel', style: 'cancel' },
      { text: 'delete', onPress: deleteReview }
    ]
  )

  return (
    <ReviewItem key={item.id} review={item} title={item.repository.fullName} >
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button text='View repository' onPress={() => navigate(`/repository/${item.repository.id}`)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button text='Delete review' alert onPress={deleteConfirmation} />
        </View>
      </View>
    </ReviewItem>
  )
}