import { FlatList, StyleSheet, View, Alert } from 'react-native'
import { ItemSeparator } from './RepositoryList'
import useUser from '../hooks/useUser'
import Text from './Text'
import MyReviewItem from './MyReviewItem'

export default function Reviews() {
 
  const { user, loading } = useUser(true)
  const reviewNodes = user ? user.reviews.edges.map(edge => edge.node) : []

  return (
    <>
    {loading
      ? <Text>Loading</Text>
      : <FlatList
          data={reviewNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => 
            <MyReviewItem item={item} />
          }
        />
    }
    </>
  )
}