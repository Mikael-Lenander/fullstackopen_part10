import RepositoryItem from './RepositoryItem'
import { useParams } from 'react-router-native'
import Text from './Text'
import Button from './Button'
import { openURL } from 'expo-linking'
import { FlatList } from 'react-native'
import useReviews from '../hooks/useReviews'
import { ItemSeparator } from './RepositoryList'
import { View, StyleSheet } from 'react-native'
import Card from './Card'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  info: {
    marginBottom: 10
  }
})

const RepositoryInfo = ({ repository }) => {

  function openLink() {
    openURL(repository.url)
  }

  return (
    <View style={styles.info}>
      <RepositoryItem item={repository}>
          <Button text='Open in GitHub' onPress={openLink} />
      </RepositoryItem>
    </View>
  )

}

const SingleRepository = () => {

  const { id } = useParams()
  const { reviews, repository, loading, fetchMore } = useReviews({
    first: 6,
    repositoryId: id
  })

  function onEndReached() {
    console.log('fetching more reviews')
    fetchMore()
  }

  return (
    <>
      {loading
        ? <Text>Loading...</Text>
        : <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem review={item} title={item.user.username} />}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
            ItemSeparatorComponent={ItemSeparator}
          />
      }
    </>

  );
};

export default SingleRepository